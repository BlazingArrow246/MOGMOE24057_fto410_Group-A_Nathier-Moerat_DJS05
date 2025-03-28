//___________________Local instance of a state management store________________

function createStore(reducer, initialState) {
    let state = initialState;
    let listeners = new Set();
  
    return {
      getState: () => state,
      subscribe: (listener) => {
        listeners.add(listener);
        return () => {
          listeners.delete(listener);
        };
      },
      dispatch: (action) => {
        try {
          state = reducer(state, action);
        } catch (error) {
          console.error('Error in reducer:', error);
        }
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

//___________________Create store with initial state__________________________

const store = createStore(counterReducer, { count: 0 });

//___________________Subscribe to log state changes___________________________

store.subscribe(() => {
  console.log('Current State:', store.getState());
});

//___________________Scenarios to test the store_______________________________
console.log('Initial State:', store.getState()); // Expected output: { count: 0 } (Initial state)

// Scenario 1: Initial State Verification
console.log('Scenario 1:');
console.log('Initial State:', store.getState()); // Should log { count: 0 }

// Scenario 2: Incrementing the Counter
console.log('Scenario 2:');
store.dispatch({ type: 'ADD' }); // Dispatching 'ADD' action increments the count by 1, resulting in count: 1
store.dispatch({ type: 'ADD' }); // Dispatching 'ADD' action increments the count by 1 again, resulting in count: 2

// Scenario 3: Decrementing the Counter
console.log('Scenario 3:');
store.dispatch({ type: 'SUBTRACT' }); // Dispatching 'SUBTRACT' action decrements the count by 1, resulting in count: 1

// Scenario 4: Resetting the Counter
console.log('Scenario 4:');
store.dispatch({ type: 'RESET' }); // count: 0 (RESET action sets count back to initial value)
