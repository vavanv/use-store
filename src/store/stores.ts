import { createStore } from "./create-store";

export const locationStore = createStore({
  name: "",
  number: 0,
  location: {
    name: "",
    count: 0,
  },
});

export const uiStore = createStore({
  isBusy: false,
});
