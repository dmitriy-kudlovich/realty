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
}
