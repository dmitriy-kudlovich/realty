import * as View from "./listingView";

export default async function (state) {
  View.listingRender();
  View.renderCards(state.filterModel.objects);
  View.displayFavItems(state.favs.favs);

  const cardLikeIcons = document.getElementsByClassName("card__like");
  const arr = Array.from(cardLikeIcons);

  arr.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      let id = elem.closest(".card").getAttribute("href").split("/")[2];

      if (state.favs.favs.indexOf(id) == -1) {
        state.favs.addFav(id);
      } else {
        state.favs.removeFav(id);
      }

      View.displayFavItems(state.favs.favs);
    });
  });

  state.emitter.subscribe("event:render-listing", () => {
    View.cleanListingRow();
    View.renderCards(state.filterModel.objects);
    View.displayFavItems(state.favs.favs);
  });
}
