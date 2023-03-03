export default class BidsModel {
  constructor() {
    this.bids = [];
  }

  async getBids() {
    try {
      const queryString = "https://jsproject.webcademy.ru/bids";
      const response = await fetch(queryString);
      const data = await response.json();
      this.bids = data;
    } catch (error) {
      alert(error);
    }
  }
}
