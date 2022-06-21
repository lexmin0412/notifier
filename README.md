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
