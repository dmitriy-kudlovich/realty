export function listingRender(state) {
  const markup = `<div class="cards-wrapper">
                    <div class="container p-0">
                        <!-- row -->
                        <div class="row pt-5" id="cardsRow">
                        </div>
                        <!-- // row -->
                    </div>
                </div>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
}

export function renderCards(state) {
  let cardMarkup = "";

  state.results.forEach((card) => {
    cardMarkup += `<article class="col-md-4">
                        <!-- card -->
                        <a href="#/singleItem/${card.id}" class="card">
                            <div class="card__header">
                                <div class="card__title">
                                    ${card.complex_name}
                                </div>
                                <div class="card__like">
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                            <div class="card__img">
                                <img src="${card.image}" alt="План квартиры" />
                            </div>
                            <div class="card__desc">
                                <div class="card__price">
                                    <div class="card__price-total">
                                        ${new Intl.NumberFormat("ru-RU").format(
                                          card.price_total
                                        )} ₽
                                    </div>
                                    <div class="card__price-per-meter">
                                        ${new Intl.NumberFormat("ru-RU").format(
                                          card.price_sq_m
                                        )} ₽/м2
                                    </div>
                                </div>

                                <!-- card__params params -->
                                <div class="card__params params">
                                    <div class="params__item">
                                        <div class="params__definition">
                                            Комнат
                                        </div>
                                        <div class="params__value">${
                                          card.rooms
                                        }</div>
                                    </div>
                                    <div class="params__item">
                                        <div class="params__definition">
                                            Площадь
                                        </div>
                                        <div class="params__value">${
                                          card.square
                                        }</div>
                                    </div>
                                </div>
                                <!-- //card__params params -->
                            </div>
                            <div class="card__footer">
                                <div class="card__art">${card.scu}</div>
                                <div class="card__floor">Этаж ${
                                  card.floor
                                } из ${card.floors_total}</div>
                            </div>
                        </a>
                        <!-- // card -->
                    </article>`;
  });

  document.getElementById("cardsRow").innerHTML = cardMarkup;
}

export function cleanListingRow() {
  document.getElementById("cardsRow").innerHTML = "";
}

export function displayFavItems(array) {
  let cards = document.querySelectorAll(".cards");
  document.querySelectorAll(".card__like").forEach((card) => {
    card.classList.remove("card__like--active");
  });

  cards.forEach((card) => {
    for (let i = 0; i < array.length; i++) {
      if (card.a.indexOf(array[i])) {
        card.querySelector(".card__like").classList.add("card__like--active");
        break;
      }
    }
  });
}
