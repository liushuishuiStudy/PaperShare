package models

import "time"

type Attachment struct {
	PostID     uint64    `db:"post_id" json:"post_id"`
	ParentID   uint64    `db:"parent_id" json:"parent_id"`
	FileID     uint64    `db:"file_id" json:"file_id"`
	FileName   string    `db:"file_name" json:"file_name"`
	CreateTime time.Time `db:"create_time" json:"create_time"`
}
