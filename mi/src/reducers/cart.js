import shopTools from '../util/carttools'
export default function (state = {},action) {
  const goods = action.data;
  switch (action.type) {
    case "CART_ADD":
      shopTools.addUpdata(goods)
      return shopTools.getShop()
    case "CART_DEL":
      shopTools.delete(goods)
      return shopTools.getShop()
    case "CART_GOODS_NUM":
      let newState = Object.assign({},state,goods)
      // console.log(goods)
      return newState
    default:
      return shopTools.getShop()
  }
}
