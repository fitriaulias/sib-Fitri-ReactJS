//nilai awal
const initialState = {
    counter: 0
}

//membuat task list di reducer yang nanti akan mengubah store
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

//pemanggilan function createStore
let store = Redux.createStore(counter)

let el = document.getElementById('counter')
//render disini untuk menulis tag html
const render = () => {
    el.innerHTML = store.getState().counter.toString()
}

render () //call angka
store.subscribe(render)

let incEl = document.getElementById('increment')
let decEl = document.getElementById('decrement')

//melakukan dispatch di tag html
incEl.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
})

decEl.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' })
})