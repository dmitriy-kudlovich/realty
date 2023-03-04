export default class FilterModel {
  constructor() {
    this.query = "";
    this.filterParams = this.getFilterParams();
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
    } catch (error) {
      alert(error);
    }
  }

  saveFilterParams() {
    localStorage.setItem("filter", JSON.stringify(this.filterParams));
  }

  getFilterParams() {
    if (localStorage.getItem("filter") != null) {
      return JSON.parse(localStorage.getItem("filter"));
    } else {
      return {
        complex: "",
        roomsChecked: [],
        sqmin: "",
        sqmax: "",
        pricemin: "",
        pricemax: "",
      };
    }
  }
}
