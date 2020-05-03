import { createStore } from 'redux'
const counterReducer = function (state = 22, action) {
    switch (action.type) {
        case 'add':
            console.log('add')
            return state + 0
        case 'minus':
            return state - 0
        default:
            return state;
    }
}
const store = createStore(counterReducer);
export default store