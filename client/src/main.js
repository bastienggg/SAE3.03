import { HeaderView } from "./ui/header/index.js";

import './index.css';


let C = {};

C.init = async function(){
    V.init();
}

let V = {
    header: document.querySelector("#header")
};

V.init = function(){
    V.renderHeader();
}

V.renderHeader= function(){
    V.header.innerHTML = HeaderView.render();
}


C.init();