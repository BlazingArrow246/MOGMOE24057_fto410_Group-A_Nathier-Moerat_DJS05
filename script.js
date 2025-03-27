function createStore(reducer, initialState) {
    let state = initialState;
    let listeners = [];
  
    return {
      getState: () => state,
      subscribe: (listener) => {
        listeners.push(listener);
        return () => {
          listeners = listeners.filter(l => l !== listener);
        };
      },
      dispatch: (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
      }
    };
  }