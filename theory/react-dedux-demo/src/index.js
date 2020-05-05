//index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from './react-redux'
import { createStore } from './store'
import { reducer } from './reducer'
// let store = createStore(reducer)
const logger = store => next => action => {
    console.log('log1')
    let result = next(action)
    return result
}

const thunk = store => next => action => {
    console.log('thunk')
    const { dispatch } = store
    return typeof action === 'function' ? action(dispatch) : next(action)
}

const logger2 = store => next => action => {
    console.log('log2')
    let result = next(action)
    return result
}
/* function logger (store) {
    let next = store.dispatch
    return (action) => {
        console.log('logger1')
        let result = next(action)
        return result
    }
}
function thunk (store) {
    let next = store.dispatch
    return (action) => {
        console.log('thunk')
        return typeof action === 'function' ? action(store.dispatch) : next(action)
    }
}
function logger2 (store) {
    let next = store.dispatch
    return (action) => {
        console.log('logger2')
        let result = next(action)
        return result
    }
} */
/* function applyMiddleware (store, middlewares) {
    middlewares = [...middlewares]
    middlewares.reverse()
    middlewares.forEach(middleware =>
        store.dispatch = middleware(store)
    )
} */
function compose (...fns) {
    if (fns.length === 0) return arg => arg
    if (fns.length === 1) return fns[0]
    return fns.reduce((res, cur) => (...args) => res(cur(...args)))
}
const applyMiddleware = (...middlewares) => createStore => reducer => {
    const store = createStore(reducer)
    let { getState, dispatch } = store
    const params = {
        getState,
        dispatch: (action) => dispatch(action)
        //解释一下这里为什么不直接 dispatch: dispatch      
        //因为直接使用dispatch会产生闭包,导致所有中间件都共享同一个dispatch,如果有中间件修改了dispatch或者进行异步dispatch就可能出错    
    }

    const middlewareArr = middlewares.map(middleware =>
        middleware(params)
    )

    dispatch = compose(...middlewareArr)(dispatch)
    return { ...store, dispatch }
}

ReactDOM.render(
    // <Provider store={createStore(reducer)}>
    // <Provider store={store}>
    <Provider store={createStore(reducer, applyMiddleware(logger, thunk, logger2))}>
        <App />
    </Provider>,
    document.getElementById('root')
);