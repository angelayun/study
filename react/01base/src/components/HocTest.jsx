import React, { Component } from 'react'


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
@WithContent
@WithLog
class Lesson extends Component {
    render () {

        return (
            <div>
                {this.props.stage} - {this.props.title}
            </div>
        );
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