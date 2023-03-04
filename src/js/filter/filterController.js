import * as View from "./filterView";
import FilterModel from "./filterModel";

export default async function (state) {
  if (!state.filterModel) {
    state.filterModel = new FilterModel();
  }
  await state.filterModel.getParams();
  await state.filterModel.getObjects();
  state.results = await state.filterModel.params;
  View.render(state);

  renderAfterChange(state);

  const form = document.getElementById("formFilter");

  form.addEventListener("change", async (e) => {
    e.preventDefault();

    renderAfterChange(state);
  });

  form.addEventListener("reset", async () => {
    state.filterModel.query = "";
    await state.filterModel.getObjects();
    View.showObjectsAmount(state.filterModel.objects);
    state.filterModel.saveFilterParams();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await state.emitter.emit("event:render-listing", {});
    state.results = await state.filterModel.getObjects();
  });

  async function renderAfterChange(state) {
    state.filterModel.query = View.getInput(state);
    await state.filterModel.getObjects();
    View.showObjectsAmount(state.filterModel.objects);
    state.results = state.filterModel.objects;
    state.filterModel.saveFilterParams();
  }
}
