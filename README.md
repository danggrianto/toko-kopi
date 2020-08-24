# Toko Kopi

React native app for toko kopi

## Install

```
yarn install
```

## Running

```
yarn start
```

## Deploying
```
expo publish
```
```
expo build
```

## Push Notifications

References:
- https://docs.expo.io/versions/latest/sdk/notifications/
- https://www.youtube.com/watch?v=jX5axGXJBa4

Flow:
- check permission of notification
- if not granted then ask for permission
- if granted get expo notification token
- if logged in then save it in users collection
- if not logged in save it as anonymous user token.
- test notification with this https://expo.io/notifications



