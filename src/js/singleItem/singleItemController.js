import Model from "./singleItemModel.js";
import * as view from "./singleItemView";

export default async function (state) {
  state.singleItem = new Model(state.routeParams);
  await state.singleItem.getItem();
  await view.render(state.singleItem.result);

  view.displayFav(state.favs.favs, state.singleItem.id);

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

  document.querySelector(".button-favourite").addEventListener("click", () => {
    const id = state.singleItem.id;

    if (state.favs.favs.indexOf(id) != -1) {
      state.favs.removeFav(id);
    } else {
      state.favs.addFav(state.singleItem.id);
    }
    view.toggleFav();
    console.log(state.favs.favs);
  });
}
