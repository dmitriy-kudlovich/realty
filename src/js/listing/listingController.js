import * as View from "./listingView";

export default function (state) {
  View.listingRender(state);
  View.renderCards(state);

  state.emitter.subscribe("event:render-listing", () => {
    View.cleanListingRow();
    View.renderCards(state);
  });
}
