import * as View from "./filterView";
import FilterModel from "./filterModel";

export default async function (state) {
  if (!state.filterModel) {
    state.filterModel = new FilterModel();
  }
  await state.filterModel.getParams();
  state.results = await state.filterModel.getObjects();
  View.render(state);

  const form = document.getElementById("formFilter");

  form.addEventListener("change", async (e) => {
    e.preventDefault();

    state.filterModel.query = View.getInput();
    let objects = await state.filterModel.getObjects();
    View.showObjectsAmount(objects);
    state.results = objects;
  });

  form.addEventListener("reset", async () => {
    state.filterModel.query = "";
    let objects = await state.filterModel.getObjects();

    View.showObjectsAmount(objects);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    state.emitter.emit("event:render-listing", {});
    state.results = await state.filterModel.getObjects();
  });
}
