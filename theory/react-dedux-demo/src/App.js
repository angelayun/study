//App.js
import React from 'react'
import { connect } from './react-redux'

const addCountAction = {
    type: 'plus'
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCount: () => {
            dispatch(addCountAction)
        },
        addAsyncCount: () => {
            setTimeout(() => {
                dispatch({ type: 'plus' })
            }, 1000)
        }

    }
}

class App extends React.Component {
    dynamicLoad () {
        var getReadyForEditor = () => {
            // console.log(obj.foo)
        }

        var editorJs = document.createElement("script")
        editorJs.src = "./test1.js"
        editorJs.async = false
        document.body.appendChild(editorJs)

        var editorJs2 = document.createElement("script")
        editorJs2.src = "./test2.js"
        editorJs2.async = false
        editorJs2.onload = getReadyForEditor
        document.body.appendChild(editorJs2)
    }
    render () {
        return (
            <div className="App">
                {this.props.count}
                <button onClick={() => this.props.addAsyncCount()}>增加</button>
                <button onClick={() => this.dynamicLoad()}>动态加载脚本</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)