export function render(data) {
  const markup = `<div class="container p-0">
                    <div class="heading-1">
                        ${data.title}, ${
    data.square
  } м2 за  ${new Intl.NumberFormat("ru-RU").format(data.price_total)} ₽
                    </div>

                    <!-- object -->
                    <div class="object">
                        <!-- object__photo -->
                        <div class="object__photo">
                            <div class="object__photo-wrapper">
                                <img src="${data.image}" alt="flat" />
                            </div>
                        </div>
                        <!-- // object__photo -->

                        <!-- object__desc -->
                        <div class="object__desc">
                            <div class="object__desc-sector">
                                ЖК ${data.complex_name}
                            </div>

                            <div class="object__desc-name">
                                <div class="object__desc-title">
                                ${data.title}, ${data.square} м2
                                </div>
                                <div class="object__desc-art">${data.scu}</div>

                                <!-- Добавить в избранное -->
                                <button class="button-favourite">
                                    <i class="fas fa-heart"></i> <span>В избранное</span>
                                </button>

                                <!-- В Избранном -->
                                <button class="button-favourite button-favourite--active">
                                    <i class="fas fa-heart"></i> <span>В избранном</span>
                                </button>

                            </div>

                            <div class="object__desc-details">
                                <!-- params -->
                                <div class="params">
                                    <div class="params__item">
                                        <div class="params__definition">Корпус</div>
                                        <div class="params__value">${
                                          data.building
                                        }</div>
                                    </div>
                                    <div class="params__item">
                                        <div class="params__definition">Этаж</div>
                                        <div class="params__value">${
                                          data.floor
                                        }</div>
                                    </div>
                                    <div class="params__item">
                                        <div class="params__definition">Номер</div>
                                        <div class="params__value">${
                                          data.flat_number
                                        }</div>
                                    </div>
                                    <div class="params__item">
                                        <div class="params__definition">Комнат</div>
                                        <div class="params__value">${
                                          data.rooms
                                        }</div>
                                    </div>
                                </div>
                                <!-- // params -->
                            </div>

                            <div class="details">
                                <div class="details__row">
                                    <div class="details__name">Стоимость</div>
                                    <div
                                        class="details__value details__value--price"
                                    >
                                    ${new Intl.NumberFormat("ru-RU").format(
                                      data.price_total
                                    )} ₽
                                    </div>
                                </div>
                                <div class="details__row">
                                    <div class="details__name">Цена за м2</div>
                                    <div class="details__value">${new Intl.NumberFormat(
                                      "ru-RU"
                                    ).format(data.price_sq_m)} ₽/м2</div>
                                </div>
                                <div class="details__row">
                                    <div class="details__name">Площадь</div>
                                    <div class="details__value">${
                                      data.square
                                    } м2</div>
                                </div>
                            </div>

                            <button class="button-order">Забронировать</button>
                        </div>
                        <!-- // object__desc -->
                    </div>
                    <!-- // object -->
                </div>

                <div class="container">
                    <a href="/" class="back-to-results"
                        >← Вернуться к результатам поиска</a
                    >
                </div>
                
                <div class="modal-wrapper none">
                    <div class="modal">
                        <div class="modal__header">
                            <div class="modal__title">
                                Заявка на бронирование
                            </div>
                            <div class="modal__details">
                                Квартира <span>96</span> в Первом квартале Дом 5
                                <div class="modal__details-art">ГЕН-112-42</div>
                            </div>
                        </div>

                        <form class="modal__form">
                            <div class="modal__form-content">
                                <!-- formgroup -->
                                <div class="formgroup">
                                    <label
                                        class="modal__form-input-label"
                                        for="form-phone"
                                    >
                                        Имя
                                    </label>
                                    <input
                                        type="text"
                                        id="formName"
                                        class="modal__form-input"
                                        placeholder="Введите имя"
                                    />
                                </div>
                                <!-- // formgroup -->
                                <!-- formgroup -->
                                <div class="formgroup">
                                    <label
                                        class="modal__form-input-label"
                                        for="form-phone"
                                    >
                                        Телефон
                                    </label>
                                    <input
                                        type="text"
                                        id="formPhone"
                                        class="modal__form-input"
                                        placeholder="+7 (XXX) XXX-XX-XX"
                                    />
                                </div>
                                <!-- // formgroup -->

                                <div class="formgroup formgroup--checkbox">
                                    <input type="checkbox" id="policy" checked />
                                    <label class="policy-text" for="policy"
                                        >Я согласен на обработку моих персональных
                                        данных. С Политикой в отношении обработки
                                        персональных данных ознакомлен и
                                        согласен.</label
                                    >
                                </div>
                            </div>
                            <input
                                class="modal__submit"
                                type="submit"
                                value="Отправить заявку"
                            />
                        </form>
                        <button class="modal__close">
                            Закрыть
                        </button>
                    </div>
                </div>`;

  document.getElementById("app").innerHTML = markup;
}

export function showModal() {
  document.querySelector(".modal-wrapper").classList.remove("none");
}

export function hideModal() {
  document.querySelector(".modal-wrapper").classList.add("none");
}

export function getInput() {
  const data = {};

  if (!formValidate()) {
    return false;
  }

  data.name = document.getElementById("formName").value;
  data.phone = document.getElementById("formPhone").value;

  return data;
}

function phoneValidate(phone) {
  let arr = phone.split("");

  if (arr[0] == "+" || Number(arr[0])) {
    for (let i = 1; i < arr.length; i++) {
      if (!Number(arr[i])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

function formValidate() {
  if (
    document.getElementById("formName").value == "" ||
    document.getElementById("formPhone").value == ""
  ) {
    alert("Заполните все поля формы");
    return false;
  }

  if (!document.getElementById("policy").checked) {
    alert("Дайте согласие на обработку персональных данных");
    return false;
  }

  if (!phoneValidate(document.getElementById("formPhone").value)) {
    alert("Введите корректный номер телефона");
    return false;
  }

  return true;
}

export function clearInput() {
  document.getElementById("formName").value = "";
  document.getElementById("formPhone").value = "";
}
