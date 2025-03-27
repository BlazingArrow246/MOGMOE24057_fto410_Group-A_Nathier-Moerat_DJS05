//___________________Local instance of a state management store________________

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

  //_________________Reducer function to handle state updates________________

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'SUBTRACT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}
