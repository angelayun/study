import React from "react";
// Dialog定义组件外观和行为 
function Dialog (props) {
    // 备选消息
    const messages = {
        "foo": { title: 'foo', content: 'foo~' },
        "bar": { title: 'bar', content: 'bar~' },
    }
    // 执行函数获得要显示的内容
    const { body, footer } = props.children(messages[props.msg]);

    return <div style={{ border: "1px solid blue" }}>
        {
            // props.children
        }
        {/* {
            props.children.default
        }
        <div>
            {
                props.children.footer
            }
        </div> */}
        {body}
        {footer}
    </div>;
}
export default function Composition () {
    return (<div>
        {/* <Dialog>
            {{
                default: <React.Fragment>
                    <h1>标题</h1>
                    <p>内容</p>
                </React.Fragment>,
                footer: <button onClick={() => { console.log('haha') }}>按钮</button>
            }}
        </Dialog> */}
        <Dialog msg='bar'>
            {(title, content) => ({
                body: (<React.Fragment>
                    <h1>标题</h1>
                    <p>内容</p>
                </React.Fragment>),
                footer: <button onClick={() => { console.log('haha111') }}>按钮</button>
            })}
        </Dialog>
    </div>)
}