export function render() {
  const markup = `<div class="container p-0">
                    <div class="heading-1">Избранное</div>
                </div>

                <div class="view-options-wrapper">
                    <div class="container p-0">
                        <!-- view-options -->
                        <div class="view-options">
                            <div class="view-options__sort">
                                <label
                                    for="sort-cards-by"
                                    class="view-options__label"
                                    >Сортировать</label
                                >
                                <select
                                    id="sort-cards-by"
                                    name=""
                                    id=""
                                    class="view-options__select"
                                >
                                    <option value="">по цене ↑</option>
                                    <option value="">по цене ↓</option>
                                    <option value="">по площади ↑</option>
                                    <option value="">по площади ↓</option>
                                </select>
                            </div>
                        </div>
                        <!-- // view-options -->
                    </div>
                </div>

                <div class="cards-wrapper">
                    <div class="container p-0">
                        <div class="row">
                        </div>
                    </div>
                </div>
    `;

  document.querySelector("#app").innerHTML = markup;
}

export function renderCards(data) {
  let cardMarkup = "";
  console.log(data);
  data.forEach((card) => {
    cardMarkup += `<article class="col-md-4">
                        <!-- card -->
                        <a href="#/singleItem/${card.id}" class="card">
                            <div class="card__header">
                                <div class="card__title">
                                    ${card.complex_name}
                                </div>
                                <div class="card__like p-1">
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

  return cardMarkup;
}
