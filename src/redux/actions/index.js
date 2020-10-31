import store from "../store";

export const checkCurrentWallet = (tronWeb) => {
  // let check=await tronWeb;
  if (tronWeb && tronWeb.ready) {
    store.dispatch({
      type: "AUTHENTICATED",
    });
  } else {
    store.dispatch({
      type: "FAILED",
    });
  }
};
