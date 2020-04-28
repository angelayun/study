import './index.less'

import counter from "./_counter";
import number from "./_number";


counter()
number()

if (module.hot) {
    module.hot.accept("./_number", function () {
        document.body.removeChild(document.getElementById("number"));
        number();
    });
}

var btn = document.createElement("button");
btn.innerHTML = "新增";
document.body.appendChild(btn);


btn.onclick = function () {
    var div = document.createElement("div");
    div.innerHTML = "item";
    document.body.appendChild(div);
};




