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
    render () {
        return (
            <div className="App">
                {this.props.count}
                <button onClick={() => this.props.addAsyncCount()}>增加</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)