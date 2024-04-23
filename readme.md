# PaperShare
1. 完成时间 2024年1月 至 2024年3月
2. 待优化内容
- [ ] 对PaperShare前端代码 投票更新不及时问题
- [ ] 大内容存储
## 技能清单
1. 雪花算法
2. gin框架
2. zap日志库
3. Viper配置管理
4. swagger生成文档
5. JWT认证
6. 令牌桶限流
7. Go语言操作MySQL **(sqlx)**
8. Go语言操作Redis **(go-redis)**
10. 文件上传和下载
12. Docker部署
13. Vue框架
14. ElementUI
15. axios 
16. 畅言云评论系统

## 项目目录结构
### 后端结构树
```bash
│  .air.conf
│  .gitignore
│  config.yaml
│  docker-compose.yml
│  Dockerfile
│  go.mod
│  go.sum
│  init.sql
│  main.go
│  Makefile
│  readme.md
│  version.go
│  wait-for.sh
│  web_app.log
│  
├─.idea
│      .gitignore
│      modules.xml
│      PaperShare_backend.iml
│      vcs.xml
│      workspace.xml
│      
├─conf
│      config.yaml
│      
├─controller
│      code.go
│      comment.go
│      community.go
│      doc_response_models.go
│      gtihub.go
│      post.go
│      post_test.go
│      request.go
│      response.go
│      user.go
│      validator.go
│      vote.go
│      
├─dao
│  ├─api
│  │      github.go
│  │      
│  ├─mysql
│  │      comment.go
│  │      community.go
│  │      error_code.go
│  │      mysql.go
│  │      post.go
│  │      post_test.go
│  │      user.go
│  │      
│  └─redis
│          error.go
│          keys.go
│          post.go
│          redis.conf
│          redis.go
│          vote.go
│          
├─docs
│      docs.go
│      swagger.json
│      swagger.yaml
│      
├─logger
│      logger.go
│      
├─logic
│      community.go
│      github.go
│      post.go
│      truncate.go
│      user.go
│      vote.go
│      
├─middlewares
│      auth.go
│      ratelimit.go
│      
├─models
│      attachment.go
│      comment.go
│      community.go
│      create_tables.sql
│      github.go
│      params.go
│      post.go
│      user.go
│      
├─pkg
│  ├─jwt
│  │      jwt.go
│  │      
│  └─snowflake
│          gen_id.go
│          
├─routers
│      routers.go
│      
├─settings
│      settings.go
│      
├─static
│  │  favicon.ico
│  │  favicon.svg
│  │  
│  ├─css
│  │      app.093dcee1.css
│  │      app.83c70531.css
│  │      app.859c3034.css
│  │      chunk-vendors.5b539fe5.css
│  │      chunk-vendors.9715a49d.css
│  │      
│  ├─fonts
│  │      element-icons.535877f5.woff
│  │      element-icons.732389de.ttf
│  │      fontello.068ca2b3.ttf
│  │      fontello.8d4a4e6f.woff2
│  │      fontello.a782baa8.woff
│  │      fontello.e73a0647.eot
│  │      
│  ├─img
│  │      2.8237eaa2.jpg
│  │      4.0c280aef.png
│  │      avatar.7b0a9835.png
│  │      fontello.9354499c.svg
│  │      iconfont.cdbe38a0.svg
│  │      logo.938d1d61.png
│  │      shui.e76d15cf.svg
│  │      
│  └─js
│          app.049a7450.js
│          app.049a7450.js.map
│          app.09c03d82.js
│          app.09c03d82.js.map
│          app.bdc6061a.js
│          app.bdc6061a.js.map
│          app.fe9d4825.js
│          app.fe9d4825.js.map
│          chunk-vendors.4203fa67.js
│          chunk-vendors.4203fa67.js.map
│          chunk-vendors.8f4b54d2.js
│          chunk-vendors.8f4b54d2.js.map
│          
├─templates
│      index.html
│      
└─upload
        HFSLDL-main (1).zip
        HFSLE-main (1).zip

```


## 项目预览图

![image-20240422212929654](https://gitee.com/liushuishui/picgo/raw/master/20240422212939.png)

## 项目全套笔记

- **技术与知识的区别**：
- - 知识：记住地球是圆的
  - 技术：自己学会游泳，自己学会开车 
- **基于雪花算法生成用户ID**
- - https://www.yuque.com/docs/share/e50bbca1-e019-45e2-b77b-a9ba01fbede3?# 《基于雪花算法生成用户ID》
- [gin框架中使用validator若干实用技巧](https://www.liwenzhou.com/posts/Go/validator_usages/)
- [《限制账号同一时间只能登录一个设备》](https://www.yuque.com/docs/share/584ddd0f-5158-4cea-8918-a4b6e1d41a07?# )
- [《基于Cookie、Session和基于Token的认证模式介绍》](https://www.yuque.com/docs/share/06a89a55-3e3c-452b-aeb1-acf4d2bac8a5?#)
- [在gin框架中使用JWT认证](https://www.liwenzhou.com/posts/Go/jwt_in_gin/)
- [为Go项目编写Makefile](https://www.liwenzhou.com/posts/Go/makefile/)
- [使用Air实现Go程序实时热重载](https://www.liwenzhou.com/posts/Go/live_reload_with_air/)
- [分页](https://zhidao.baidu.com/question/1573826651037645420.html)
- [JSON实战拾遗之数字精度](https://www.ituring.com.cn/article/506822)
- [你需要知道的那些go语言json技巧](https://www.liwenzhou.com/posts/Go/json_tricks_in_go)
- [帖子投票（点赞）功能设计与实现](https://www.yuque.com/docs/share/d09afe84-90d1-4e04-a73e-95848f073558?#)
- [《基于用户投票的排名算法》](https://www.yuque.com/docs/share/f40f5c41-f327-47d4-88bb-02bcf62515a8?# )
- [使用swagger生成接口文档](https://www.liwenzhou.com/posts/Go/gin_swagger/)
- [HTTP Server常用压测工具介绍](https://www.liwenzhou.com/posts/Go/benchmark_tool/)
- [漏桶和令牌桶限流策略介绍及使用](https://www.liwenzhou.com/posts/Go/ratelimit/)
- [option选项模式](https://www.liwenzhou.com/posts/Go/functional_options_pattern/)
- [Go pprof性能调优](https://www.liwenzhou.com/posts/Go/performance_optimisation/)
- [如何使用docker部署Go Web程序](https://www.liwenzhou.com/posts/Go/how_to_deploy_go_app_using_docker/)
- [部署Go语言程序的N种方法](https://www.liwenzhou.com/posts/Go/deploy_go_app/)
- [《企业代码发布流程及CICD介绍》](https://www.yuque.com/docs/share/e837e5bf-f6a9-4dc8-98e4-4b8ce24808ab?)
