export default class FilterModel {
  constructor() {
    this.query = "";
  }

  async getParams() {
    try {
      const queryString = "https://jsproject.webcademy.ru/itemsinfo";
      const response = await fetch(queryString);
      const data = await response.json();
      this.params = await data;
    } catch (error) {
      alert(error);
    }
  }

  async getObjects() {
    try {
      const queryString = "https://jsproject.webcademy.ru/items" + this.query;
      const response = await fetch(queryString);
      const data = await response.json();
      this.objects = await data;
      return this.objects;
    } catch (error) {
      alert(error);
    }
  }
}
