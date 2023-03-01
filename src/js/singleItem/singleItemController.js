import Model from "./singleItemModel.js";
import * as view from "./singleItemView";

export default async function (state) {
  state.singleItem = new Model(state.routeParams);
  await state.singleItem.getItem();
  view.render(state.singleItem.result);

  document
    .querySelector(".button-order")
    .addEventListener("click", view.showModal);

  document.querySelector(".modal-wrapper").addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal-wrapper") ||
      e.target.classList.contains("modal__close")
    ) {
      view.hideModal();
    }
  });

  document.querySelector(".modal__form").addEventListener("submit", (e) => {
    e.preventDefault;
    const data = view.getInput();
    if (data) {
      alert("Ваша заявка успешно получена!");
      state.singleItem.submitInput(data);
      view.hideModal();
      view.clearInput();
    }
  });
}
