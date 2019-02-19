let shopTools = {}
let shop =JSON.parse(window.localStorage.getItem("shopInfo") || "{}")
shopTools.addUpdata = function (goods) {
  if(shop[goods.id]){
    shop[goods.id] += goods.num
  }else {
    shop[goods.id] = goods.num
  }
  this.saveShops()
}
shopTools.delete = function (id) {
  delete shop[id]
  this.saveShops()
}
shopTools.saveShops = function () {
  window.localStorage.setItem("shopInfo",JSON.stringify(shop))
}

shopTools.getShop = function () {
  return JSON.parse(window.localStorage.getItem("shopInfo") || "{}")
}
export default shopTools
