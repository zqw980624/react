const Router = require('koa-router');
const router = new Router()
const home = require('./home')
const shopdetails = require('./shopdetails')
const year = require('./year')

router.get('/home/banner',home.banner)
router.get('/home/category',home.category)
router.get('/home/recommod',home.recommod)
router.get('/home/m8',home.m8)
router.get('/home/shop',home.shop)
router.get('/shopcart',async ctx => {
  ctx.body = {
    title:"购物车"
  }
})
router.get('/category',async ctx => {
  ctx.body = {
    title:"分类"
  }
})
router.get('/shopdetails1', shopdetails.shop1)
router.get('/shopdetails2', shopdetails.shop2)
router.get('/shopdetails3', shopdetails.shop3)
router.get('/shopdetails4', shopdetails.shop4)
router.get('/shopdetails5', shopdetails.shop5)
router.get('/shopdetails6', shopdetails.shop6)
router.get('/shopdetails7', shopdetails.shop7)
router.get('/shopdetails8', shopdetails.shop8)
router.get('/shopdetails9', shopdetails.shop9)
router.get('/shopdetails10', shopdetails.shop10)
router.get('/shopdetails11', shopdetails.shop11)
router.get('/shopdetails12', shopdetails.shop12)
router.get('/shopdetails13', shopdetails.shop13)
router.get('/shopdetails14', shopdetails.shop14)

router.get('/shopdetails100', shopdetails.shop100)
router.get('/shopdetails101', shopdetails.shop101)
router.get('/shopdetails102', shopdetails.shop102)
router.get('/shopdetails103', shopdetails.shop103)
router.get('/shopdetails104', shopdetails.shop104)
router.get('/shopdetails105', shopdetails.shop105)
router.get('/shopdetails106', shopdetails.shop106)
router.get('/shopdetails107', shopdetails.shop107)
router.get('/shopdetails108', shopdetails.shop108)
router.get('/shopdetails109', shopdetails.shop109)
router.get('/shopdetails110', shopdetails.shop110)
router.get('/shopdetails111', shopdetails.shop111)
router.get('/shopdetails112', shopdetails.shop112)
router.get('/shopdetails113', shopdetails.shop113)
router.get('/shopdetails114', shopdetails.shop114)
router.get('/shopdetails115', shopdetails.shop115)
router.get('/shopdetails116', shopdetails.shop116)
router.get('/shopdetails117', shopdetails.shop117)
router.get('/shopdetails118', shopdetails.shop118)


router.get("/year/header",year.header)



module.exports = router;
