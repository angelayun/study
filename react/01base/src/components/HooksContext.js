import React, { useState, useEffect, useReducer, useContext } from 'react'
const Context = React.createContext()

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

function FruitAdd (props) {
    const { dispacth } = useContext(Context);

    const [pname, setPName] = useState("")
    const onAddFruit = e => {
        if (e.key === 'Enter') {
            dispacth({ type: 'add', payload: pname });
            setPName("")
        }
    }
    return <div>
        <input type='text' value={pname} onChange={(e) => {
            setPName(e.target.value)
        }} onKeyDown={onAddFruit}></input>
    </div>
}
function FruitList ({ fruits, onSetFruit }) {
    return <ul>
        {fruits.map((item, i) => {
            return <li onClick={() => onSetFruit(item)} key={i}>{item}</li>
        })}
    </ul>
}
export default function HooksTest () {
    const [fruit, setFruit] = useState("")
    const [fruits, dispacth] = useReducer(fruitReducer, [])
    // const [fruits, setFruits] = useState(['西瓜', '香蕉'])
    useEffect(() => {
        setTimeout(() => {
            dispacth({
                type: 'init',
                payload: ['xiangjiao', 'xigua']
            })
        }, 200);
    }, [])

    return <Context.Provider value={{ fruit, dispacth }}>
        <FruitAdd />
        {fruit === '' ? '请选择您喜欢的水果' : `您选择的是${fruit}`}
        <FruitList fruits={fruits} onSetFruit={setFruit} />
    </Context.Provider>
}

