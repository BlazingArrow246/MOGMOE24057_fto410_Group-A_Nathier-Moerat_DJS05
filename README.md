Tally Counter Redux-Inspired Store
______________________________________________________________________________________________________
Overview
This project simulates a simple Redux-inspired store for managing a tally counter. The store supports actions like incrementing, decrementing, and resetting the counter. It uses state management functions (getState, dispatch, subscribe) to update and log the state, all visible through the console. The approach follows functional programming principles (e.g., immutability and pure functions).
_______________________________________________________________________________________________________
How to Run the Code:

Running in the Browser
    Create index.html and store.js.
    In index.html, link to store.js:
Link <script src="store.js"></script>
Open index.html in a browser and check the console for state changes.
________________________________________________________________________________________________________
Running in Node.js
Save the code in store.js.

Run with:

bash
Copy
node store.js
Check the terminal for the logs.
_______________________________________________________________________________________________________
Approach:

1.Global Store: Manages state ({ count: 0 }) and exposes getState, dispatch, and subscribe methods.

2.Actions: Handle ADD, SUBTRACT, and RESET actions to update the count.

3.State Subscription: Logs state changes to the console after each action dispatch.

4.Functional Programming: Uses pure functions and immutability.

_______________________________________________________________________________________________________
Scenarios:

1.Initial State: Verifies the counter starts at 0.

2.Incrementing: Dispatches ADD to increment the counter.

3.Decrementing: Dispatches SUBTRACT to decrement the counter.

4.Resetting: Dispatches RESET to reset the counter to 0.

