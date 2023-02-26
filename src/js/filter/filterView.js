import "url-search-params-polyfill";

export function render(state) {
  const params = state.filterModel.params;
  const objects = state.filterModel.objects;
  let markup = "";
  let projectOptions = "";
  params.complexNames.forEach((elem) => {
    projectOptions += `<option value="${elem}"
    >ЖК ${elem}</option
  >`;
  });

  let rooms = "";
  params.roomValues.forEach((elem) => {
    rooms += `<input
                name="rooms"
                type="checkbox"
                id="rooms_${elem}"
                class="rooms__checkbox"
                value="${elem}"
            /><label for="rooms_${elem}" class="rooms__btn">${elem}</label>`;
  });

  markup = `<form method="GET" class="container p-0" id="formFilter">
  <div class="heading-1">Выбор квартир:</div>
  <div class="filter">
      <div class="filter__col">
          <div class="filter__label">Выбор проекта:</div>
          <select name="complex" class="filter__dropdown" id="selectComplex">
              <option value="all">Все проекты</option>
              ${projectOptions}
          </select>
      </div>
      <div class="filter__col rooms">
          <div class="filter__label">Комнат:</div>
          <div class="rooms__wrapper">
              ${rooms}
          </div>
      </div>
      <div class="filter__col">
          <div class="filter__label">Площадь:</div>
          <div class="range__wrapper">
              <label class="range">
                  <div class="range__label">от</div>
                  <input
                      name="sqmin"
                      min=${params.squareMin}
                      value=${params.squareMin}
                      type="number"
                      class="range__input"
                      placeholder=${params.squareMin}
                  />
                  <div class="range__value">м2</div>
              </label>
              <label class="range">
                  <div class="range__label">до</div>
                  <input
                      name="sqmax"
                      max=${params.squareMax}
                      value=${params.squareMax}
                      type="number"
                      class="range__input"
                      placeholder=${params.squareMax}
                  />
                  <div class="range__value">м2</div>
              </label>
          </div>
      </div>
      <div class="filter__col">
          <div class="filter__label">Стоимость:</div>
          <div class="range__wrapper">
              <div class="range">
                  <label class="range">
                  <div class="range__label">от</div>
                  <input
                      type="number"
                      name="pricemin"
                      min=${params.priceMin}
                      value=${params.priceMin}
                      class="range__input range__input--price"
                      placeholder=${params.priceMin}
                  />
                  <div class="range__value">₽</div>
                  </label>
              </div>
              <div class="range">
                  <label class="range">
                  <div class="range__label">до</div>
                  <input
                      type="number"
                      name="pricemax"
                      max=${params.priceMax}
                      value=${params.priceMax}
                      class="range__input range__input--price"
                      placeholder=${params.priceMax}
                  />
                  <div class="range__value">₽</div>
                  </label>
              </div>
          </div>
      </div>
  </div>
  <div class="filter__buttons">
      <button class="filter__show" id="btnFilterSubmit">Показать ${objects.length} объектов</button>
      <button type="reset" class="filter__reset">Сбросить фильтр</button>
  </div>
</form>`;

  document.querySelector("#app").insertAdjacentHTML("afterbegin", markup);
}

export function getInput() {
  const elements = {
    formFilter: document.getElementById("formFilter"),
    selectComplex: document.getElementById("selectComplex"),
    roomsCheckbox: document.getElementsByClassName("rooms__checkbox"),
    rangeInputs: document.getElementsByClassName("range__input"),
    btnFilterSubmit: document.getElementById("btnFilterSubmit"),
  };

  const query = new URLSearchParams();
  let roomsChecked = [];
  const rangeInputsValues = Array.from(elements.rangeInputs);

  if (elements.selectComplex.value != "all") {
    query.append("complex", elements.selectComplex.value);
  }

  Array.from(elements.roomsCheckbox).forEach((elem) => {
    if (elem.checked) {
      roomsChecked.push(elem.value);
    }
  });

  if (roomsChecked != "") {
    query.append("rooms", roomsChecked.join(","));
  }

  query.append("sqmin", rangeInputsValues[0].value);
  query.append("sqmax", rangeInputsValues[1].value);
  query.append("pricemin", rangeInputsValues[2].value);
  query.append("pricemax", rangeInputsValues[3].value);

  if (query.toString()) {
    return `?${query}`;
  } else {
    return "";
  }
}

export function showObjectsAmount(objects) {
  document.getElementById("btnFilterSubmit").innerHTML =
    objects.length === 0
      ? `Объекты не найдены, измените условия поиска`
      : `Показать ${objects.length} объектов`;

  document.getElementById("btnFilterSubmit").disabled =
    objects.length === 0 ? true : false;
}
