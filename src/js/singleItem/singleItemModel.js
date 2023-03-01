export default class SingleItemModel {
  constructor(id) {
    this.id = id;
  }

  async getItem() {
    try {
      const queryString = `https://jsproject.webcademy.ru/items/${this.id}`;
      const response = await fetch(queryString);
      const data = await response.json();
      this.result = await data;
    } catch (error) {
      alert(error);
    }
  }

  async submitInput(formData) {
    try {
      const queryString = "https://jsproject.webcademy.ru/bidnew";
      const request = await fetch(queryString, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      const response = await request.json();
      this.response = await response;
      console.log(this.response);
    } catch (error) {
      alert(error);
    }
  }
}
