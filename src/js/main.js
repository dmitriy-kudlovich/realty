import homePage from "./pages/homePage";
import bidsPage from "./pages/bidsPage";
import favouritesPage from "./pages/favouritesPage";
import singleItemPage from "./pages/singleItemPage";
import errorPage from "./pages/errorPage";
import EventEmitter from "./utils/eventEmitter";

const state = {
  results: [],
  emitter: new EventEmitter(),
};

window.state = state;

const routerPages = [
  { path: "/", component: homePage },
  { path: "singleItem", component: singleItemPage },
  { path: "bids", component: bidsPage },
  { path: "favourites", component: favouritesPage },
  { path: "error", component: errorPage },
];

function getCurrentPage(path) {
  return routerPages.find((elem) => {
    return elem.path === path;
  });
}

function router() {
  let arrPath = location.hash.split("/");
  let currentPath = arrPath[0] === "" ? "/" : arrPath[1];
  currentPath = currentPath === "" ? "/" : currentPath;

  let { path, component } = getCurrentPage(currentPath) || {
    path: "error",
    component: errorPage,
  };

  component(state);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
