import React, { Component } from 'react'
// import store from '../store'
// import { connect } from 'react-redux'

// @connect(state => ({ num: state }))
export default class ReduxTest extends Component {
    /*     componentDidMount () {
            let self = this
            // store.subscribe
            store.subscribe(() => {
                console.log('subscribe')
                self.forceUpdate()
            })
        } */
    render () {
        console.log('render')
        return <div>
            {/* {store.getState()} */}
            {this.props.num}
            <div>
                <button onClick={() => {
                    // store.dispatch({ type: 'add' })
                    this.props.dispatch({ type: 'add' })
                }}>增加</button>
                <button onClick={() => {
                    // store.dispatch({ type: 'minus' })
                    this.props.dispatch({ type: 'minus' })
                }}>减少</button>
            </div>
        </div>
    }
}