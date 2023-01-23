import { useSyncExternalStore } from "react";

export interface Store<T> {
  getState: () => T;
  setState: (state: T) => void;
  subscribe: (listener: (state: T) => void) => () => void;
  useStore: <S>(selector: (state: T) => S) => S;
}

export function createStore<T>(initialState: T): Store<T> {
  let currentState: T = initialState;
  let subscribe = (listener: (state: T) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const listeners = new Set<(state: T) => void>();

  return {
    getState: () => currentState,
    setState: (newState: T) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe,
    useStore: <S>(selector: (state: T) => S): S =>
      useSyncExternalStore(subscribe, () => selector(currentState)),
  };
}

export default createStore;
