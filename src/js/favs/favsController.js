import FavsModel from "./favsModel";
import * as View from "./favsView";
const favsModel = new FavsModel();

export default async function () {
  await favsModel.getfavCards();
  View.render();
  document.querySelector(".row").innerHTML = View.renderCards(
    favsModel.favsCards
  );
}
