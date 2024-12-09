import { HeaderView } from "./ui/header/index.js";
import { ChartView } from "./ui/chartTest/index.js";
// import ApexCharts from 'ApexCharts';

import './index.css';



let C = {};

C.init = async function () {
    V.init();
}

let V = {
    header: document.querySelector("#header")
};

V.init = function () {
    V.renderHeader();
    V.renderChart();
}

V.renderHeader = function () {
    V.header.innerHTML = HeaderView.render();
}
V.renderChart = function () {
    V.innerHTML = ChartView.render();
}


C.init();
