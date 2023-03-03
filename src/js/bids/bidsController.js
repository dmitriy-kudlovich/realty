import BidsModel from "./bidsModel";
import * as View from "./bidsView";

const bidsModel = new BidsModel();

export default async function () {
  const bids = await bidsModel.getBids();
  console.log(bidsModel.bids);
  View.render(bidsModel.bids);
}
