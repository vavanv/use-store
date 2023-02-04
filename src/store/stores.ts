import { createStore } from "./create-store";

export const userStore = createStore({
  firstName: "",
  lastName: "",
  fullName: "initial full name",
});

export const uiStore = createStore({
  isBusy: false,
});
