import React, { useState, useEffect, useReducer, useContext } from 'react'

function fruitReducer (state, action) {
    switch (action.type) {
        case 'init':
            return action.payload;
        case 'add':
            return [...state, action.payload]
        default:
            return state;
    }
}
function FruitList ({ fruits, onSetFruit }) {
    return <ul>
        {fruits.map((item, i) => {
            return <li onClick={() => onSetFruit(item)} key={i}>{item}</li>
        })}
    </ul>
}
function FruitAdd (props) {
    const [pname, setPName] = useState("")
    const onAddFruit = e => {
        if (e.key === 'Enter') {
            props.onSetFruits(pname)
            setPName("")
        }
    }
    return <div>
        <input type='text' value={pname} onChange={(e) => {
            setPName(e.target.value)
        }} onKeyDown={onAddFruit}></input>
    </div>
}
export default function HooksTest () {
    // const [fruit, setFruit] = useState("")
    const [fruit, dispacth] = useReducer(fruitReducer, [])
    const [fruits, setFruits] = useState(['西瓜', '香蕉'])
    useEffect(() => {
        setTimeout(() => {
            dispacth({
                type: 'init',
                payload: ['xiangjiao', 'xigua']
            })
        }, 200);
    }, [])
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('msg')
        }, 300);
        return () => {
            clearInterval(timer)
        }
    }, [])
    return <div>
        {/* <FruitAdd onSetFruits={(pname) => { setFruits([...fruits, pname]) }} /> */}
        <FruitAdd onSetFruits={(pname) => { dispacth({ type: 'add', payload: pname }) }} />
        {fruit === '' ? '请选择您喜欢的水果' : `您选择的是${fruit}`}
        {/* <FruitList fruits={fruits} onSetFruit={setFruit}></FruitList> */}
        {/* <FruitList fruits={fruits} onSetFruit={setFruit}></FruitList> */}
    </div>
}

