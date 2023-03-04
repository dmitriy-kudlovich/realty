export default class FavsModel {
  constructor() {
    this.favs = this.getFromLocalStorage();
  }

  addFav(id) {
    this.favs.push(id);
    this.setToLocalStorage();
  }

  removeFav(id) {
    const index = this.favs.indexOf(id);
    if (index != -1) {
      this.favs.splice(index, 1);
    }

    this.setToLocalStorage();
  }

  setToLocalStorage() {
    localStorage.setItem("favs", JSON.stringify(this.favs));
  }

  getFromLocalStorage() {
    if (localStorage.getItem("favs") != null) {
      return JSON.parse(localStorage.getItem("favs"));
    }

    return [];
  }

  async getfavCards() {
    try {
      const favIds = this.favs.join(",");

      if (favIds === "") {
        this.favsCards = [];
        return false;
      }

      const queryString = "https://jsproject.webcademy.ru/items?ids=" + favIds;
      const response = await fetch(queryString);
      const data = await response.json();
      this.favsCards = await data;
    } catch (error) {
      alert(error);
    }
  }
}
