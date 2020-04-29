import React from 'react';
const Context = React.createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;


function WithConsumer (Consumer) {
    // 
    return function (Comp) {
        // 这个Comp 只会输出一次
        console.log(Comp)
        return function (props) {
            // 这里面是调用了多次就输出多次
            console.log(props);
            return <Consumer >
                {
                    value => <Comp {...value} {...props}></Comp>
                }
            </Consumer>
        }
    }
    // 这是简写的方式
    /* return Comp => props => {
        return <Consumer >
            {
                value => <Comp {...value} {...props}></Comp>
            }
        </Consumer>
    } */
}

// function Child (props) {
//     return <div onClick={() => {
//         props.add()
//     }}>{props.counter}</div>
// }
const Child = WithConsumer(Consumer)(function (props) {
    return <div onClick={props.add} title={props.name}>{props.counter}</div>
})
export default class ContextTest extends React.Component {
    state = {
        counter: 0
    }
    add = () => {
        /* this.setState({
            counter: this.state.counter + 1
        }) */
        this.setState(nextState => ({
            counter: this.state.counter + 1
        }))
    }
    render () {
        return <Provider value={{ counter: this.state.counter, add: this.add }}>
            <Child name='test1' />
            <Child name='test2' />
        </Provider>
    }
}