import FavsModel from "./favsModel";
import * as View from "./favsView";

export default async function () {
  const favsModel = new FavsModel();

  await favsModel.getfavCards();
  View.render();
  document.querySelector(".row").innerHTML = View.renderCards(
    favsModel.favsCards
  );

  const container = document.querySelector(".row");
  container.addEventListener("click", async (e) => {
    if (e.target.closest(".card__like")) {
      e.preventDefault();
      const urlArr = e.target.closest("a").href.split("/");
      favsModel.removeFav(urlArr[urlArr.length - 1]);
      await favsModel.getfavCards();
      document.querySelector(".row").innerHTML = View.renderCards(
        favsModel.favsCards
      );
    }
  });
}
