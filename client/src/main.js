import { HeaderView } from "./ui/header/index.js";
import { ChartView } from "./ui/chartTest/index.js";
import { StatusPendingView } from "./ui/ordersStatusPending/index.js";

import { OrderData } from "./data/order.js";

import './index.css';



let C = {};

C.init = async function () {
    V.init();
}

let V = {
    header: document.querySelector("#header"),
    statuspending: document.querySelector("#status-pending"),

};

V.init = function () {
    V.renderHeader();
    V.renderChart();
    V.renderStatusPending();
}

V.renderHeader = function () {
    V.header.innerHTML = HeaderView.render();
}
V.renderChart = function () {
    V.innerHTML = ChartView.render();
}

V.renderStatusPending = async function () {
    let data = await OrderData.fetch("Pending");
    console.log(data);
    V.statuspending.innerHTML = StatusPendingView.render(data);
}


C.init();