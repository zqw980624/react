const year = {}
year.header = async ctx =>{
  ctx.body = {
    header:["http://localhost:3001/year/header/1.jpg",
      "http://localhost:3001/year/header/2.jpg",
      "http://localhost:3001/year/header/3.jpg"],
    nav:["http://localhost:3001/year/nav/1.jpg",
      "http://localhost:3001/year/nav/2.jpg",
      "http://localhost:3001/year/nav/3.jpg",
      "http://localhost:3001/year/nav/4.jpg",
      "http://localhost:3001/year/nav/5.jpg"],
    shop:[
      [
      [
        {
          picurl:"http://localhost:3001/year/shopitem/1.jpg",
          title:"红米Note 7",
          des:"4800万拍照千元机，18个月超长质保",
          price:"999",
          shopid:100
        },[
        {
          picurl:"http://localhost:3001/year/shopitem/2.jpg",
          title:"小米8",
          des:"相机全新升级，骁龙845",
          price:"2299",
          shopid:101
        },
        {
          picurl:"http://localhost:3001/year/shopitem/3.jpg",
          title:"小米8 青春版",
          des:"潮流镜面渐变色，自拍旗舰",
          price:"1299",
          shopid:102
        },
        {
          picurl:"http://localhost:3001/year/shopitem/4.jpg",
          title:"红米6",
          des:"小屏高性能的双摄手机",
          price:"729",
          shopid:103
        },
        {
          picurl:"http://localhost:3001/year/shopitem/5.jpg",
          title:"红米6A",
          des:"好用好看不贵",
          price:"549",
          shopid:104
        },
        {
          picurl:"http://localhost:3001/year/shopitem/6.jpg",
          title:"红米6 Pro ",
          des:"高颜值大电量 红米旗舰",
          price:"1029",
          shopid:105
        },
        {
          picurl:"http://localhost:3001/year/shopitem/7.jpg",
          title:"红米Note 5",
          des:"红米国民品质，拍照专家",
          price:"839",
          shopid:106
        },
        {
          picurl:"http://localhost:3001/year/shopitem/8.jpg",
          title:"小米电视4A 55英寸",
          des:"4K HDR，人工智能语音系统",
          price:"2199",
          shopid:107
        },
        {
          picurl:"http://localhost:3001/year/shopitem/9.jpg",
          title:"小米电视4C 43英寸",
          des:"FHD全高清屏，钢琴烤漆",
          price:"1299",
          shopid:108
        },
        {
          picurl:"http://localhost:3001/year/shopitem/10.jpg",
          title:"小米电视4C 50英寸",
          des:"4K HDR，钢琴烤漆",
          price:"1899",
          shopid:109
        },
        {
          picurl:"http://localhost:3001/year/shopitem/11.jpg",
          title:"小米电视4A 32英寸",
          des:"人工智能系统，高清液晶屏",
          price:"799",
          shopid:110
        }
      ]
      ]
      ,
        [
          {
            picurl:"http://localhost:3001/year/shopitem/12.jpg",
            title:"小米电视4X 55英寸",
            des:"4K HDR，人工智能语音，超窄边钢琴烤漆",
            price:"2299",
            shopid:111
          },[
          {
            picurl:"http://localhost:3001/year/shopitem/13.jpg",
            title:"小米电视4C 32英寸",
            des:"高清液晶屏，人工智能系统",
            price:"799",
            shopid:112
          },
          {
            picurl:"http://localhost:3001/year/shopitem/14.jpg",
            title:"小米电视4C 40英寸",
            des:"FHD全高清屏，钢琴烤漆",
            price:"1199",
            shopid:113
          },
          {
            picurl:"http://localhost:3001/year/shopitem/15.jpg",
            title:"小米电视4A 65英寸",
            des:"4K HDR，人工智能语音系统",
            price:"3699",
            shopid:114
          },
          {
            picurl:"http://localhost:3001/year/shopitem/16.jpg",
            title:"小米电视4A 青春版",
            des:"人工智能语音，FHD全高清屏",
            price:"1399",
            shopid:116
          },
          {
            picurl:"http://localhost:3001/year/shopitem/17.jpg",
            title:"米家空调",
            des:"大1匹，静音，快速制冷热",
            price:"1599",
            shopid:117
          },
          {
            picurl:"http://localhost:3001/year/shopitem/18.jpg",
            title:"米家互联网空调",
            des:"1.5匹变频，高效制冷热",
            price:"2149",
            shopid:118
          }
        ]
        ]
      ]
    ]
  }
}
module.exports = year
