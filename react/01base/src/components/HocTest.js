import React, { Component } from 'react'
function Lesson (props) {
    // Lesson保证功能单一，它不关心数据来源，只负责显示 function Lesson(props) {
    return (
        <div>
            {props.stage} - {props.title}
        </div>
    );
}

const lessons = [
    { stage: "React", title: "核心API" },
    { stage: "React", title: "组件化1" },
    { stage: "React", title: "组件化2" }
];

const WithContent = Comp => props => {
    const content = lessons[props.idx];
    return <Comp {...content} />
}
const WithLog = Comp => {
    return class extends Component {
        render () {
            return <Comp {...this.props} />
        }
        componentDidMount () {
            console.log('日志记录', this.props)
        }
    }
}

export default function HocTest () {
    let Item = WithLog(WithContent(Lesson))
    return <React.Fragment>{
        [0, 0, 0].map((item, index) => {
            return <Item idx={index} key={index} />
        })
    }</React.Fragment>
}