package controller

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"log"
	"papershare_backend/logic"
	"papershare_backend/models"
	"strconv"
)

func UploadFileHandler(c *gin.Context) {
	// 单文件
	// 3.通过c.FormFile函数获取HTTP请求上传的文件对象。
	//   其中参数"file"是上传表单中文件类型的name属性值。
	file, _ := c.FormFile("file")
	// 使用log包打印上传的文件名。
	log.Println(file.Filename)
	// 4. 指定上传文件的目标完整路径
	dst := "./upload/" + file.Filename
	// 5. 使用c.SaveUploadedFile函数保存文件到指定路径下。
	c.SaveUploadedFile(file, dst)
	// 6. 使用c.String函数向客户端响应上传成功信息。
	ResponseSuccess(c, file.Filename)
}
func DownloadFileHandler(c *gin.Context) {
	// 单文件
	// 3.通过c.FormFile函数获取HTTP请求上传的文件对象。
	//   其中参数"file"是上传表单中文件类型的name属性值。
	filename := c.Param("filename")

	c.Header("Content-Type", "application/octet-stream")                      // 表示是文件流，唤起浏览器下载，一般设置了这个，就要设置文件名
	c.Header("Content-Disposition", "attachment; filename*=utf-8''"+filename) // 用来指定下载下来的文件名
	c.Header("fileName", filename)
	c.Header("Content-Transfer-Encoding", "binary") // 表示传输过程中的编码形式，乱码问题可能就是因为它
	c.File("./upload/" + filename)
}

// CreatePostHandler 创建帖子
func CreatePostHandler(c *gin.Context) {
	// 1、获取参数及校验参数
	var post models.Post
	if err := c.ShouldBindJSON(&post); err != nil { // validator --> binding tag
		zap.L().Debug("c.ShouldBindJSON(post) err", zap.Any("err", err))
		zap.L().Error("create post with invalid parm")
		ResponseErrorWithMsg(c, CodeInvalidParams, err.Error())
		return
	}

	// 获取作者ID，当前请求的UserID(从c取到当前发请求的用户ID)
	userID, err := getCurrentUserID(c)
	if err != nil {
		zap.L().Error("GetCurrentUserID() failed", zap.Error(err))
		ResponseError(c, CodeNotLogin)
		return
	}
	post.AuthorId = userID
	// 2、创建帖子
	err = logic.CreatePost(&post)
	if err != nil {
		zap.L().Error("logic.CreatePost failed", zap.Error(err))
		ResponseError(c, CodeServerBusy)
		return
	}
	// 3、返回响应
	ResponseSuccess(c, nil)
}

// PostListHandler 分页获取帖子列表
func PostListHandler(c *gin.Context) {
	// 获取分页参数
	page, size := getPageInfo(c)
	// 获取数据
	data, err := logic.GetPostList(page, size)
	if err != nil {
		ResponseError(c, CodeServerBusy)
		return
	}
	ResponseSuccess(c, data)
}

// PostList2Handler 升级版帖子列表接口：按 创建时间 或者 分数排序
func PostList2Handler(c *gin.Context) {
	// GET请求参数(query string)： /api/v1/posts2?page=1&size=10&order=time
	// 获取分页参数
	p := &models.ParamPostList{}
	//c.ShouldBind() 根据请求的数据类型选择相应的方法去获取数据
	//c.ShouldBindJSON() 如果请求中携带的是json格式的数据，才能用这个方法获取到数据
	if err := c.ShouldBindQuery(p); err != nil {
		zap.L().Error("PostList2Handler with invalid params", zap.Error(err))
		ResponseError(c, CodeInvalidParams)
		return
	}

	// 获取数据
	data, err := logic.GetPostListNew(p) // 更新：合二为一
	if err != nil {
		ResponseError(c, CodeServerBusy)
		return
	}
	ResponseSuccess(c, data)
}

// PostDetailHandler 根据Id查询帖子详情
func PostDetailHandler(c *gin.Context) {
	// 1、获取参数(从URL中获取帖子的id)
	postIdStr := c.Param("id")
	postId, err := strconv.ParseInt(postIdStr, 10, 64)
	if err != nil {
		zap.L().Error("get post detail with invalid param", zap.Error(err))
		ResponseError(c, CodeInvalidParams)
	}

	// 2、根据id取出id帖子数据(查数据库)
	post, err := logic.GetPostById(postId)
	if err != nil {
		zap.L().Error("logic.GetPost(postID) failed", zap.Error(err))
		ResponseError(c, CodeServerBusy)
	}

	// 3、返回响应
	ResponseSuccess(c, post)
}

// GetCommunityPostListHandler 根据社区去查询帖子列表
func GetCommunityPostListHandler(c *gin.Context) {
	// GET请求参数(query string)： /api/v1/posts2?page=1&size=10&order=time
	// 获取分页参数
	p := &models.ParamPostList{
		CommunityID: 0,
		Page:        1,
		Size:        10,
		Order:       models.OrderScore,
	}
	//c.ShouldBind() 根据请求的数据类型选择相应的方法去获取数据
	//c.ShouldBindJSON() 如果请求中携带的是json格式的数据，才能用这个方法获取到数据
	if err := c.ShouldBindQuery(p); err != nil {
		zap.L().Error("GetCommunityPostListHandler with invalid params", zap.Error(err))
		ResponseError(c, CodeInvalidParams)
		return
	}
	// 获取数据
	data, err := logic.GetCommunityPostList(p)
	if err != nil {
		ResponseError(c, CodeServerBusy)
		return
	}
	ResponseSuccess(c, data)
}

// PostSearchHandler 搜索业务-搜索帖子
func PostSearchHandler(c *gin.Context) {
	p := &models.ParamPostList{}
	if err := c.ShouldBindQuery(p); err != nil {
		zap.L().Error("PostSearchHandler with invalid params", zap.Error(err))
		ResponseError(c, CodeInvalidParams)
		return
	}
	fmt.Println("Search", p.Search)
	fmt.Println("Order", p.Order)
	// 获取数据
	data, err := logic.PostSearch(p)
	if err != nil {
		ResponseError(c, CodeServerBusy)
		return
	}
	ResponseSuccess(c, data)
}
