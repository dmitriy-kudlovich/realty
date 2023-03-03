export function render(data) {
  const markup = `<div class="container p-0 mb-5">
                    <div class="heading-1">Заявки</div>
                </div>

                <!-- panels-wrapper -->
                <div class="panels-wrapper">
                    <div class="container p-0">
                        ${getBids(data)}
                    </div>
                </div>
                <!-- // panels-wrapper -->
            </div>
            <!-- // content-wrapper -->`;

  document.getElementById("app").innerHTML = markup;
}

export function getBids(data) {
  let markup = "";

  data.forEach((bid) => {
    markup += `<!-- panel -->
                <div class="panel panel--no-hover">
                    <div class="panel__id">${bid.id}</div>
                    <div class="panel__bidname">${bid.name}</div>
                    <div class="panel__bidphone">
                    ${bid.phone}
                    </div>
                </div>
                <!-- // panel -->`;
  });

  return markup;
}
