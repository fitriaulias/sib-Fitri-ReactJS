import Redux from 'redux'; //mengimport redux

//store yang akan kita buat dan juga initial statenya
const { createStore } = Redux;
const initialState = {
    counter: 0
}

//task list di reducer untuk mengubah sttate
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1}
        case "DECREMENT":
            return { counter: state.counter - 1}
        default:
            return state
    }

}

let store = createStore(counter)

//subscribe yang berfungsi melacak perubahann
store.subscribe(() => console.log(store.getState()))

//dispatch melakukan pemanggilan di reducer
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })

