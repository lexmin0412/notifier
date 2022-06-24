# Notifier

a webhook notifier.

## Install

```bash
pnpm install @lexmin0412/notifier
```

## Usage

### sendQYWXRobotNotification

```ts
sendQYWXRobotNotification({
	key: 'xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxx',
	data: {
		msgtype: 'text',
		text: {
			content: 'sendQYWXRobotNotification success'
		}
	}
})
```

### sendNotificationByType

```ts
sendNotificationByType('QYWX_ROBOT', {
	key: 'xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxx',
	data: {
		msgtype: 'text',
		text: {
			content: 'sendNotificationByType success'
		}
	}
})
```

## Appreciation

- [企业微信-开发者中心-群机器人配置说明](https://developer.work.weixin.qq.com/document/path/91770)
