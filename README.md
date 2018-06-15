# Realty display - 房产展示项目开发

## 前言

本文档列出房产展示项目开发过程中，与**前端**有关的问题和注意事项，并且记录相关工作。

## 微信公众号配置

使用[开发者测试号](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421137522)可以测试所有接口，并且在配置服务器URL后，可以获取openid来区分不同用户。[具体步骤](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421135319)

生产环境下，需要企业注册**服务号**，通过微信认证，然后在微信公众平台页面设置对应服务器的URL。这里注意
服务号绑定的URL必须是域名而不能是IP地址，端口80或443。

配置服务器URL后，公众号内的每次动作（用户输入消息、点击菜单按钮等等）都会向该URL发送GET请求，在queryString中包含openid字段。解析该字段后就可以用于实现业务逻辑。

## 前端准备工作

### 目前考虑使用的UI库有：

- [Bootstrap 4.1](https://getbootstrap.com/)
- [Ng-zorro](http://ng.ant.design/docs/introduce/zh)
- [Angular-material](https://material.angular.io/)

计划先使用Bootstrap开始开发，剩下的两套方案作为备选。

### 关于Angular的注意事项

Angular版本选择6.0.x，根据更新日志介绍，目前的新版本性能比较强大，并且与之配套的Rxjs版本也趋于稳定。

关于Angular项目的部署，使用cli提供的命令`ng build`可以快速打包一个项目，放在服务器上使用Nginx代理就可以使用了（这种方式在本地已经成功）。

生产级别的部署需要使用`ng build --prod`，会有不小的性能提升。但是我在使用生产级别部署时会遇到某个ts类缺少参数的错误，这个问题还没解决。

## API设计

### 首页轮播图

GET /api/carousel

返回:

```json
[
  "url1",
  "url2",
  "url3"
]
```

### 获得所有project

GET /api/projects

返回:

```json
[
  {
    "project_id": "13kmmkmkankasd",
    "carousels": [
      "url1",
      "url2",
      "url3"
    ],
    "name": "万科麓山",
    "size": "125",
    "price": "59000",
    "address": "彩云南路",
    "tags": ["a", "b", "c"],
    "follow_amount": 7777,
    "deal_amount": 3333,
    "reason": "<p>This is a reason!</p>",
    "detail": "<p>Detail matters.</p>",
    "location": "113.223,123.9",
    "telephone": "15012312312",
  },
  {
    "project_id": "13kmmkmkankasd",
    "carousels": [
      "url1",
      "url2",
      "url3"
    ],
    "name": "万科麓山",
    "size": "125",
    "price": "59000",
    "address": "彩云南路",
    "tags": ["a", "b", "c"],
    "follow_amount": 7777,
    "deal_amount": 3333,
    "reason": "<p>This is a reason!</p>",
    "detail": "<p>Detail matters.</p>",
    "location": "113.223,123.9",
    "telephone": "15012312312"
  },
]
```

### 获得特定project

GET /api/projects/:id

返回:

```json
{
  "carousels": [
    "url1",
    "url2",
    "url3"
  ],
  "name": "万科麓山",
  "size": "125",
  "price": "59000",
  "address": "彩云南路",
  "tags": ["a", "b", "c"],
  "follow_amount": 7777,
  "deal_amount": 3333,
  "reason": "<p>This is a reason!</p>",
  "detail": "<p>Detail matters.</p>",
  "location": "113.223,123.9",
  "telephone": "15012312312",
  "house_type_ids": [
    "aasdasdef143413",
    "1343efasfadfa",
    "14mrln3r13knr"
  ]
}
```

### 获得特定house_type

GET /api/house_types/:id

```json
{
  "project_id": "13n413mmmpdp1m3",
  "carousels": [
    "url1",
    "url2",
    "url3"
  ],
  "name": "一个户型名称",
  "size": "两室两厅125平方米",
  "price": "59000",
  "tags": ["a", "b", "c"],
  "reason": "<p>This is a reason!</p>",
  "telephone": "15045645645",
  "discount": "打八折",
  "orientation": "南向",
  "decoration": "精装"
}
```

### 新增一个项目

POST /api/projects/

发送:

```json
{
  "name": "万科麓山",
  "size": "125",
  "price": "59000",
  "address": "彩云南路",
  "tags": "a,b,c",
  "deal_amount": 3333,
  "reason": "<p>This is a reason!</p>",
  "detail": "<p>Detail matters.</p>",
  "location": "113.223,123.9",
  "telephone": "15012312312"
}
```

返回:

```json
{
  "project_id": "n123m1l2m3ker",
  "name": "万科麓山",
  "size": "125",
  "price": "59000",
  "address": "彩云南路",
  "tags": "a,b,c",
  "deal_amount": 3333,
  "reason": "<p>This is a reason!</p>",
  "detail": "<p>Detail matters.</p>",
  "location": "113.223,123.9",
  "telephone": "15012312312"
}
```

### 更新一个项目

PUT /api/projects/:id

发送:

```json
{
  "name": "万科麓山",
  "size": "125",
  "price": "59000",
  "address": "彩云南路",
  "tags": "a,b,c",
  "deal_amount": 3333,
  "reason": "<p>This is a reason!</p>",
  "detail": "<p>Detail matters.</p>",
  "location": "113.223,123.9",
  "telephone": "15012312312"
}
```

返回:

```json
{
  "name": "万科麓山",
  "size": "125",
  "price": "59000",
  "address": "彩云南路",
  "tags": "a,b,c",
  "deal_amount": 3333,
  "reason": "<p>This is a reason!</p>",
  "detail": "<p>Detail matters.</p>",
  "location": "113.223,123.9",
  "telephone": "15012312312"
}
```

### 删除一个project

DELETE /api/projects/:id

返回:

```json
{
  "project_id": "n123m1l2m3ker",
  "name": "万科麓山",
  "size": "125",
  "price": "59000",
  "address": "彩云南路",
  "tags": "a,b,c",
  "deal_amount": 3333,
  "reason": "<p>This is a reason!</p>",
  "detail": "<p>Detail matters.</p>",
  "location": "113.223,123.9",
  "telephone": "15012312312"
}
```
