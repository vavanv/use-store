import { createStore } from "./create-store";

export const userStore = createStore({
  firstName: "",
  lastName: "",
});

export const uiStore = createStore({
  isBusy: false,
});
