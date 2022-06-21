import { QYWX_WEBHOOK_URL } from './constants/index'
import axios from 'axios'
import { NotificationTypeType } from './types/index'
import { NotificationTypes } from './constants'

/**
 * 根据类型发送不同的通知
 * @param type
 * @param options
 * @returns
 */
export function sendNotificationByType(type: NotificationTypeType, options: any) {
	 switch (type) {
		 case NotificationTypes.QYWX_ROBOT:
				return sendQYWXRobotNotification(options)
		 default:
			 	return sendQYWXRobotNotification(options)
	 }
}

/**
 * 企业微信机器人通知
 * @param options
 * @returns
 */
export function sendQYWXRobotNotification(options: {
	key: string,
	data: any
}) {
	const { key } = options
	let { data } = options
	if ( typeof data !== 'string' ) {
		data = JSON.stringify(data)
	}
	const url = `${QYWX_WEBHOOK_URL}?key=${key}`
	return axios.post(url, data, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
