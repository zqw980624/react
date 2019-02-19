const home = {}
home.banner = async ctx => {
    ctx.body = {
        status: 200,
        data: [{
                picurl: "http://localhost:3001/home/banner/1.jpg",
                shopid: 1,
            },
            {
                picurl: "http://localhost:3001/home/banner/2.jpg",
                shopid: 2,
            },
            {
                picurl: "http://localhost:3001/home/banner/3.jpg",
                shopid: 3,
            }
        ]
    }
}
home.category = async ctx => {
    ctx.body = {
        status: 200,
        data: [{
                picurl: "http://localhost:3001/home/category/1.jpg",
                shopid: 4,
            },
            {
                picurl: "http://localhost:3001/home/category/2.jpg",
                shopid: 5,
            },
            {
                picurl: "http://localhost:3001/home/category/3.jpg",
                shopid: 6,
            },
            {
                picurl: "http://localhost:3001/home/category/4.jpg",
                shopid: 7,
            },
            {
                picurl: "http://localhost:3001/home/category/5.jpg",
                shopid: 8,
            },
            {
                picurl: "http://localhost:3001/home/category/6.jpg",
                shopid: 9,
            },
            {
                picurl: "http://localhost:3001/home/category/7.jpg",
                shopid: 10,
            },
            {
                picurl: "http://localhost:3001/home/category/8.jpg",
                shopid: 11,
            },
            {
                picurl: "http://localhost:3001/home/category/9.jpg",
                shopid: 12,
            },
            {
                picurl: "http://localhost:3001/home/category/10.jpg",
                shopid: 13,
            }
        ]
    }
}
home.recommod = async ctx => {
    ctx.body = {
        state: 200,
        data: [
            [{
                    shopid: 100,
                    picurl: "http://localhost:3001/home/recommod/1.jpg"
                }

            ],
            [{
                    shopid: 15,
                    picurl: "http://localhost:3001/home/recommod/2.jpg"
                },
                {
                    shopid: 16,
                    picurl: "http://localhost:3001/home/recommod/3.jpg"
                }
            ]

        ]
    }
}
home.m8 = async ctx => {
    ctx.body = {
        status: 200,
        data: [{
                shopid: 17,
                picurl: "http://localhost:3001/home/m8/1.jpg"
            }

        ]
    }
}
home.shop = async ctx => {
    ctx.body = {
        data: [
            [
              [
                [{
                    shopid: 18,
                    picurl: "http://localhost:3001/home/shop/1.jpg"
                }],
                [{
                        shopid: 1,
                        picurl: "http://localhost:3001/home/shop/2.jpg",
                        title: "小米8 青春版",
                        des: "潮流镜面渐变色，自拍旗舰",
                        price: 1399
                    },
                    {
                        shopid: 2,
                        picurl: "http://localhost:3001/home/shop/3.jpg",
                        title: "小米8 屏幕指纹版",
                        des: "压感屏幕指纹，潮流外观",
                        price: 2999
                    },
                    {
                        shopid: 3,
                        picurl: "http://localhost:3001/home/shop/4.jpg",
                        title: "黑鲨游戏手机 Helo",
                        des: "双液冷，更能打",
                        price: 2999
                    },
                    {
                        shopid: 4,
                        picurl: "http://localhost:3001/home/shop/5.jpg",
                        title: "红米6",
                        des: "小屏高性能的双摄手机",
                        price: 729
                    },
                    {
                        shopid: 5,
                        picurl: "http://localhost:3001/home/shop/6.jpg",
                        title: "红米6A",
                        des: "好用好看不贵",
                        price: 569
                    },
                    {
                        shopid: 6,
                        picurl: "http://localhost:3001/home/shop/7.jpg",
                        title: "小米6X",
                        des: "轻薄美观的拍照手机",
                        price: 1199
                    },
                    {
                        shopid: 7,
                        picurl: "http://localhost:3001/home/shop/8.jpg",
                        title: "小米8 SE",
                        des: "三星 AMOLED 全面屏",
                        price: 1699
                    },
                    {
                        shopid: 8,
                        picurl: "http://localhost:3001/home/shop/9.jpg",
                        title: "小米平板4",
                        des: "追剧神器 / 支持AI人脸识别",
                        price: 1099
                    }

                ]
                ],
                [
                [{
                    shopid: 27,
                    picurl: "http://localhost:3001/home/shop/10.jpg"
                }],
                [{
                        shopid: 9,
                        picurl: "http://localhost:3001/home/shop/11.jpg",
                        title: "小米电视4C 43英寸",
                        des: "FHD全高清屏，钢琴烤漆",
                        price: 1299
                    },
                    {
                        shopid: 10,
                        picurl: "http://localhost:3001/home/shop/12.jpg",
                        title: "小米电视4A 32英寸",
                        des: "人工智能系统，高清液晶屏",
                        price: 799
                    },
                    {
                        shopid: 11,
                        picurl: "http://localhost:3001/home/shop/13.jpg",
                        title: "小米电视4A 58英寸",
                        des: "4K HDR，人工智能语音系统",
                        price: 1899
                    },
                    {
                        shopid: 12,
                        picurl: "http://localhost:3001/home/shop/14.jpg",
                        title: "小米电视4A 58英寸",
                        des: "4K HDR，人工智能语音系统",
                        price: 1899
                    },
                    {
                        shopid: 13,
                        picurl: "http://localhost:3001/home/shop/15.jpg",
                        title: "小米电视4A 50英寸",
                        des: "4K HDR，人工智能语音系统",
                        price: 1899
                    },
                    {
                        shopid: 14,
                        picurl: "http://localhost:3001/home/shop/16.jpg",
                        title: "小米电视4A 55英寸",
                        des: "4K HDR，人工智能语音系统",
                        price: 2199
                    }
                ]
            ]
            ]
        ]
    }

}
module.exports = home;
