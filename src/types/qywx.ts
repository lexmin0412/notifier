/**
 * 此文件中的类型定义来自于企业微信官方文档： https://developer.work.weixin.qq.com/document/path/91770#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B%E5%8F%8A%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F
 */

/**
 * 消息类型
 * text 文本
 * markdown markdown
 * image 图片
 * news 图文
 * template_card 模版卡片
 */
export type MsgType = 'text' | 'markdown' | 'image' | 'news' | 'template_card'

/**
 * 模版卡片消息类型
 * text_notice 文本通知
 * news_notice 图文展示
 */
export type MsgTemplateCardType = 'text_notice' | 'news_notice'

/**
 * 消息来源文字颜色
 * 0(默认) 灰色，1 黑色，2 红色，3 绿色
 */
export type MsgSourceDescColor = 0 | 1 | 2 | 3

/**
 * 消息来源配置项
 */
export interface MsgSourceOption {
	icon_url: string
	desc: string
	desc_color: MsgSourceDescColor
}

/**
 * 模版卡片的主要内容，包括一级标题和标题辅助信息
 *
 * `title` 一级标题，建议不超过26个字。模版卡片主要内容的一级标题main_title.title和二级普通文本sub_title_text必须有一项填写
 *
 * `desc` 标题辅助信息，建议不超过30个字
 */
export interface MsgMainTitleOption {
	title: string
	desc: string
}

/**
 * 图片样式
 * `url` 图片 url
 * `aspect_ratio` 图片宽高比，需要小于2.25，大于1.3，不填该参数默认1.3
 */
export interface MsgCardImageOption {
	url: string
	aspect_ratio: number
}

/**
 * 左图右文样式区域点击事件，0或不填代表没有点击事件，1 代表跳转url，2 代表跳转小程序
 */
export type MsgImageTextAreaType = 0 | 1 | 2

/**
 * 左图右文样式
 * `type` 左图右文样式区域点击事件，0或不填代表没有点击事件，1 代表跳转url，2 代表跳转小程序
 * `url` image_text_area.type是1时必填
 * `title` 左图右文样式的标题
 * `desc` 左图右文样式的描述
 * `image_url` 左图右文样式的图片url
 */
export interface MsgImageTextAreaOption {
	type?: MsgImageTextAreaType
	url?: string
	title: string
	desc: string
	image_url: string
}

/**
 * 引用文献样式区域点击事件，0或不填代表没有点击事件，1 代表跳转url，2 代表跳转小程序
 */
export type MsgQuoteType = 0 | 1 | 2

/**
 * 引用文献样式，建议不与关键数据共用
 * type 引用文献样式区域点击事件，0或不填代表没有点击事件，1 代表跳转url，2 代表跳转小程序
 * url 点击跳转的url，quote_area.type是1时必填
 * appid 点击跳转的小程序的appid，quote_area.type是2时必填
 * pagepath 点击跳转的小程序的pagepath，quote_area.type是2时选填
 * title 引用文献样式的标题
 * quote_text 引用文献样式的引用文案
 */
export interface MsgQuoteAreaOption {
	type: MsgQuoteType
	url: string
	appid: string
	pagepath: string
	title: string
	quote_text: string
}

/**
 * 卡片二级垂直内容，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过4
 * `title` 卡片二级标题，建议不超过26个字
 * `desc` 二级普通文本，建议不超过112个字
 */
export interface VerticalContentOption {
	title: string
	desc: string
}

/**
 * type 链接类型，0或不填代表是普通文本，1 代表跳转url，2 代表下载附件，3 代表@员工
 * keyname 二级标题，建议不超过5个字
 */
export type HorizontalContentType = 1 | 2

/**
 * 二级标题+文本内容
 * type 链接类型，0或不填代表是普通文本，1 代表跳转url，2 代表下载附件，3 代表@员工
 * keyname 二级标题，建议不超过5个字
 * value 	二级文本，如果horizontal_content_list.type是2，该字段代表文件名称（要包含文件类型），建议不超过26个字
 * url 链接跳转的url，horizontal_content_list.type是1时必填
 * media_id	附件的media_id，horizontal_content_list.type是2时必填
 */
export interface HorizontalContentOption {
	keyname: string
	value: string
	type?: HorizontalContentType
	url?: string
	media_id?: string
}

/**
 * 跳转链接类型，0或不填代表不是链接，1 代表跳转url，2 代表跳转小程序
 */
export type MsgJumpType = 0 | 1 | 2

/**
 * 跳转项配置
 * type 跳转链接类型，0或不填代表不是链接，1 代表跳转url，2 代表跳转小程序
 * title 跳转链接样式的文案内容，建议不超过13个字
 * url 跳转链接的url，jump_list.type是1时必填
 * appid 跳转链接的小程序的appid，jump_list.type是2时必填
 * pagepath 跳转链接的小程序的pagepath，jump_list.type是2时选填
 */
export interface MsgJumpOption {
	type: MsgJumpType
	title: string
	url?: string
	appid?: string
	pagepath?: string
}

/**
 * 整体卡片的点击跳转事件，news_notice模版卡片中该字段为必填项
 * type 卡片跳转类型，1 代表跳转url，2 代表打开小程序。news_notice模版卡片中该字段取值范围为[1,2]
 * url 跳转事件的url，card_action.type是1时必填
 * appid 跳转事件的小程序的appid，card_action.type是2时必填
 * pagepath 跳转事件的小程序的pagepath，card_action.type是2时选填
 */
export interface MsgCardActionOption {
	type: 1 | 2
	url: string
	appid?: string
	pagepath?: string
}

/**
 * 模版卡片配置项
 */
export interface TemplateCardOption {
	card_type: MsgTemplateCardType
	source?: MsgSourceOption
	main_title: MsgMainTitleOption
	card_image: MsgCardImageOption
	image_text_area?: MsgImageTextAreaOption
	quote_area?: MsgQuoteAreaOption
	/**
	 * 卡片二级垂直内容，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过4
	 */
	vertical_content_list?: VerticalContentOption[]
	/**
	 * 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过6
	 */
	horizontal_content_list?: HorizontalContentOption[]
	/**
	 * 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过3
	 */
	jump_list?: MsgJumpOption[]
	/**
	 * 整体卡片的点击跳转事件，text_notice模版卡片中该字段为必填项
	 */
	card_action: MsgCardActionOption
}

/**
 * 文本消息配置项
 */
export interface TextMsgOption {
	/**
	 * 文本内容，最长不超过2048个字节，必须是utf8编码
	 */
	content: string
	/**
	 * userid的列表，提醒群中的指定成员(@某个成员)，@all表示提醒所有人，如果开发者获取不到userid，可以使用mentioned_mobile_list
	 */
	mentioned_list?: string[]
	/**
	 * 手机号列表，提醒手机号对应的群成员(@某个成员)，@all表示提醒所有人
	 */
	mentioned_mobile_list?: string[]
}

/**
 * markdown 消息配置项
 * content markdown内容，最长不超过4096个字节，必须是utf8编码
 */
export interface MarkdownMsgOption {
	content: string
}

/**
 * 图片消息配置项
 * base64 图片内容的base64编码
 * md5 图片内容（base64编码前）的md5值
 */
export interface ImageMsgOption {
	base64: string
	md5: string
}

/**
 * 图文消息 item 配置项
 */
export interface MsgArticleOption {
	title: string
	description: string
	url: string
	picurl: string
}

/**
 * 图文消息配置项
 */
export interface NewsMsgOption {
	articles: MsgArticleOption[]
}

/**
 * 文件消息配置项
 * media_id	文件id，通过下文的文件上传接口获取
 */
export interface FileMsgOption {
	media_id: string
}

/**
 * 消息通知配置项
 */
export interface NoticeOption {
	msgtype: MsgType
	text?: TextMsgOption
	template_card?: TemplateCardOption
	markdown?: MarkdownMsgOption
	image?: ImageMsgOption
	news?: NewsMsgOption
	file?: FileMsgOption
}
