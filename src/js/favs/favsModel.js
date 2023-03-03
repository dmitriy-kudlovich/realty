export default class FavsModel {
  constructor() {
    this.favs = this.getFromLocalStorage();
    this.favsCards = [];
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
      const favIds = await this.getFromLocalStorage().join(",");
      const queryString = "https://jsproject.webcademy.ru/items?ids=" + favIds;
      console.log(queryString);
      const response = await fetch(queryString);
      const data = await response.json();
      this.favsCards = await data;
    } catch (error) {
      alert(error);
    }
  }
}
