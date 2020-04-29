import React, { Component } from "react";
import JsxTest from "./components/JsxTest";
// import StateMgt from "./components/StateMgt";
// import EventHandle from "./components/EventHandle";

// import ContextTest from './components/ContextTest'
// import ContextTest from './components/ContextTest2'
// import HocTest from './components/HocTest';
// import HocTest from './components/HocTest.jsx';
// import HooksTest from './components/HooksTest'
import HooksContext from './components/HooksContext'

// import Composition from './components/Composition';
// import RadioTest from './components/RadioTest';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someThings: props.someThings
        };
    }
    componentWillReceiveProps (nextProps) { // 父组件重传props时就会调用这个方法
        this.setState({ someThings: nextProps.someThings });
    }
    render () {
        console.log('render--')
        return <div>{this.state.someThings}</div>
    }
}

// 函数式组件
class App extends Component {
    state = {
        msg: 'this is just test'
    }
    test = () => {
        this.setState({
            msg: 'this is just test'
            // msg:Math.random()+'---this is just'
        })

    }
    render () {
        return <HooksContext />
        // return <HooksTest />
        // return <RadioTest />
        // return <Composition />
        // return <HocTest />
        // return <ContextTest />;
    }
    render1 () {
        return (
            <div>
                <h1 onClick={this.test}>{this.props.title}</h1>
                <Child someThings={this.state.msg} />
                <JsxTest />
            </div>
        );
    }
}

// function App(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <JsxTest />
//       {/* 状态管理 */}
//       {/* <StateMgt /> */}
//       {/* 事件处理 */}
//       <EventHandle />
//     </div>
//   );
// }

export default App;
