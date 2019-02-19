export default function (state = {},action) {
  const goods = action.user;
  switch (action.type) {
    case "GET_NUM":
      return goods
    default:
      return state
  }
}
