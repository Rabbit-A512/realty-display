# Realty display - 房产展示项目开发

## 前言

本文档列出房产展示项目开发过程中，与**前端**有关的问题和注意事项，并且记录相关工作。

## 需要修改的地方

- ~~项目和户型的管理使用Grid实现，要多展示信息，使用ignite-angular或ng-zorro~~
- ~~编辑项目（户型）信息的页面，最上方标题显示项目（户型）名称~~
- ~~手机端加入适量暖色调~~
- ~~上传图片的分辨率提示增加多种选项（1920x1080, 1600x900, 1280x720, 1024x576）~~
- ~~“轮播图片”改为“封面图片”~~
- ~~客户端展示页面去掉联系方式~~
- ~~客户端留言功能，留言接口预留openid字段~~
- ~~管理后台密码设置~~
- ~~客户端首页所有项目模块，减少左右留白~~
- ~~客户端项目缩略图中，在项目名称之外，加一行项目描述，字体适当调小~~
- ~~客户端展示项目页面中的户型缩略图，使用横向不包裹的布局，可以滑动~~
- 客户端的地图控件，加入用户当前位置
- ~~客户端留言的modal，修改顺序为：电话->称呼->内容~~
- ~~后台管理页面，调整留言管理的表格，使用modal展示留言内容~~
- 服务器获取openid，实现用户认证
- 服务器实现搜索功能（留言搜索、项目搜索）

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

### 获取首页轮播图

GET /api/carousels

返回:

```json
[
  {
    "url": "url1",
    "project_id": "uuid"
  },
  {
    "url": "url2",
    "project_id": "uuid"
  },
  {
    "url": "url3",
    "project_id": "uuid"
  }
]
```

### 获得所有project

GET /api/projects

返回:

```json
[
  {
    "project_id": "13kmmkmkankasd",
    "message_ids": [
      "uuid1",
      "uuid2",
      "uuid3"
    ],
    "carousels": [
      {
        "image_id": "uuid",
        "url": "url1"
      },
      {
        "image_id": "uuid",
        "url": "url1"
      },
      {
        "image_id": "uuid",
        "url": "url1"
      }
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
    "is_show": false
  },
  {
    "project_id": "13kmmkmkankasd",
    "message_ids": [
          "uuid1",
          "uuid2",
          "uuid3"
        ],
    "carousels": [
      {
        "image_id": "uuid",
        "url": "url1"
      },
      {
        "image_id": "uuid",
        "url": "url1"
      },
      {
        "image_id": "uuid",
        "url": "url1"
      }
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
  }
]
```

### 获得特定project

GET /api/projects/:id

返回:

```json
{
  "carousels": [
    {
      "image_id": "uuid",
      "url": "url1"
    },
    {
      "image_id": "uuid",
      "url": "url1"
    },
    {
      "image_id": "uuid",
      "url": "url1"
    }
  ],
  "message_ids": [
        "uuid1",
        "uuid2",
        "uuid3"
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

### 新增一个project

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
  "tags": ["a", "b", "c"],
  "deal_amount": 3333,
  "reason": "<p>This is a reason!</p>",
  "detail": "<p>Detail matters.</p>",
  "location": "113.223,123.9",
  "telephone": "15012312312"
}
```

### 更新一个project

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
  "tags": ["a", "b", "c"],
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

### 新增house_type

POST /api/house_types

发送：

```json
{
  "project_id": "13n413mmmpdp1m3",
  "name": "一个户型名称",
  "size": "两室两厅125平方米",
  "price": "59000",
  "tags": "a,b,c",
  "reason": "<p>This is a reason!</p>",
  "telephone": "15045645645",
  "discount": "打八折",
  "orientation": "南向",
  "decoration": "精装"
}
```

返回：

```json
{
  "project_id": "13n413mmmpdp1m3",
  "house_type_id": "uuid",
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

### 获得特定house_type

GET /api/house_types/:id

返回：

```json
{
  "project_id": "13n413mmmpdp1m3",
  "house_type_id": "uuid",
  "carousels": [
    {
      "image_id": "uuid",
      "url": "url1"
    },
    {
      "image_id": "uuid",
      "url": "url1"
    },
    {
      "image_id": "uuid",
      "url": "url1"
    }
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

### 更新特定house_type

PUT /api/house_types/:id

发送：

```json
{
  "name": "一个户型名称",
  "size": "两室两厅125平方米",
  "price": "59000",
  "tags": "a,b,c",
  "reason": "<p>This is a reason!</p>",
  "telephone": "15045645645",
  "discount": "打八折",
  "orientation": "南向",
  "decoration": "精装"
}
```

返回：

```json
{
  "project_id": "13n413mmmpdp1m3",
  "house_type_id": "uuid",
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

### 删除一个house_type

DELETE /api/house_types/:id

返回：

```json
{
  "project_id": "13n413mmmpdp1m3",
  "house_type_id": "uuid",
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

### 新增图片

POST /api/project_images/:project_id

返回：

```json
{
  "image_id": "uuid",
  "url": "url1"
}
```

POST /api/house_type_images/:house_type_id

返回：

```json
{
  "image_id": "uuid",
  "url": "url1"
}
```

DELETE /api/project_images/:image_id

```json
{
  "image_id": "uuid",
  "url": "url1"
}
```

DELETE /api/house_type_images/:image_id

```json
{
  "image_id": "uuid",
  "url": "url1"
}
```

###　更改轮播图状态

POST /api/carousels/:project_id

返回：

```json
{
  "success": true
}
```

DELETE /api/carousels/:project_id

返回：

```json
{
  "success": true
}
```

### 登录

x-auth-token: "jwt"

POST /api/login

req:

```json
{
  "password": "secret"
}
```

res:

```json
{
  "token": "jwt"
}
```

### 修改密码

PUT /api/password

req:

```json
{
  "old_password": "password1",
  "new_password": "password2"
}
```

res:

```json
{
  "success": true
}
```

### Message

POST /api/messages

req:

```json
{
  "project_id": "uuid",
  "content": "asd",
  "phone": "15087186168",
  "call": "Mr. Wang"
}
```

res:

```json
{
  "message_id": "uuid",
  "project_id": "uuid",
  "content": "asd",
  "phone": "15087186168",
  "call": "Mr. Wang",
  "time": "timestamp",
  "is_read": false
}
```

DELETE /api/messages/:message_id

res:

```json
{
  "message_id": "uuid",
  "project_id": "uuid",
  "content": "asd",
  "phone": "15087186168",
  "call": "Mr. Wang",
  "time": "timestamp",
  "is_read": false
}
```

GET /api/messages

res:

```json
[
  {
    "message_id": "uuid",
    "project_id": "uuid",
    "content": "asd",
    "phone": "15087186168",
    "call": "Mr. Wang",
    "time": "timestamp",
    "is_read": false
  },
  {
    "message_id": "uuid",
    "project_id": "uuid",
    "content": "asd",
    "phone": "15087186168",
    "call": "Mr. Wang",
    "time": "timestamp",
    "is_read": false
  },
  {
    "message_id": "uuid",
    "project_id": "uuid",
    "content": "asd",
    "phone": "15087186168",
    "call": "Mr. Wang",
    "time": "timestamp",
    "is_read": false
  }
]
```

GET /api/messages/:message_id

res:

```json
{
  "message_id": "uuid",
  "project_id": "uuid",
  "content": "asd",
  "phone": "15087186168",
  "call": "Mr. Wang",
  "time": "timestamp",
  "is_read": false
}
```

PUT /api/messages/:id

req:

```json
{
  "is_read": true // or false
}
```

res:

```json
{
  "message_id": "uuid",
  "project_id": "uuid",
  "content": "asd",
  "phone": "15087186168",
  "call": "Mr. Wang",
  "time": "timestamp",
  "is_read": false
}
```
