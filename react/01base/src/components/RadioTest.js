import React from "react";
function RadioGroup (props) {
    return <div>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, { name: props.name })
            })
        }
    </div>
}
function Radio ({ children, ...rest }) {
    return <label>
        <input type='radio' {...rest}></input>
        {children}
    </label>
}
export default function RadioTest () {
    return <RadioGroup name='mvvm'>
        <Radio>Vue</Radio>
        <Radio>React</Radio>
        <Radio>Angular</Radio>
    </RadioGroup>
}