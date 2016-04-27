# hangout [![Build Status](https://travis-ci.org/liweinan0423/hangout.svg?branch=master)](https://travis-ci.org/liweinan0423/hangout)

## API

### 创建一个Hangout请求

````
POST /hangouts
{
  "date": "<yyyy-MM-dd>",
  "type": "EAT/DRINK/PLAY",
  "location": "<any string>",
  "scope": "<any string>"
}
````

创建一个hangout后，系统会从所有Hangout请求中随机选取一个并标记为匹配成功

### List All Hangouts

    GET /hangouts

### Show hangout details

    GET /hangouts/{id}
