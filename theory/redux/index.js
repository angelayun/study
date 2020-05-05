// redux
const createStore = (reducer) => {
    let currentState = {}       // 公共状态   
    let observers = []             //观察者队列 
    function getState () {
        return currentState
    }      // getter    
    function dispatch (action) {
        currentState = reducer(currentState, action)
        observers.forEach(fn => fn())
    }      // setter    
    function subscribe (fn) {
        observers.push(fn)
    }     // 发布订阅
    dispatch({ type: '@@REDUX_INIT' })  //初始化store数据  
    return { getState, dispatch, subscribe }
}


const initialState = {
    count: 0
}
// reducer
function reducer (state = initialState, action) {
    switch (action.type) {
        case 'plus':
            return {
                ...state,
                count: state.count + 1
            }
        case 'subtract':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return initialState
    }
}

// 测试
const store = createStore(reducer)  //创建store
store.subscribe(() => { console.log('组件1收到store的通知') })
store.subscribe(() => { console.log('组件2收到store的通知') })
store.dispatch({ type: 'plus' })    //执行加法操作,给count加1
console.log(store.getState())       //获取state