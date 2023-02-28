import Model from "./singleItemModel.js";
import * as view from "./singleItemView";

export default async function (state) {
  state.singleItem = new Model(state.routeParams);
  await state.singleItem.getItem();
  console.log(state.singleItem.result);
  view.render(state.singleItem.result);
}
