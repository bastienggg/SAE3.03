import { HeaderView } from "./ui/header/index.js";
import { OrderStatusView } from "./ui/ordersStatus/index.js";
import { PopularView } from "./ui/PopularProduct/index.js";
import { MounthlyAmountView } from "./ui/mounthlyamount/index.js";

import { OrderData } from "./data/order.js";


import './index.css';

// Import du pour le graphique de test
// import { ChartView } from "./ui/chartTest/index.js";


let C = {};

C.init = async function () {
    V.init();
}

let V = {
    header: document.querySelector("#header"),
    status: document.querySelector("#status")

};
// fonction pour le graphique de test
// V.renderChart = function () {
//     V.innerHTML = ChartView.render();
// }

V.init = function () {
    // Fonction pour le grphique de teste
    // V.renderChart();

    V.renderHeader();
    V.renderStatus();
    V.renderPopular();
    V.renderMounthlyAmount();

}

V.renderHeader = function () {
    V.header.innerHTML = HeaderView.render();
}


V.renderPopular = function () {
    V.innerHTML = PopularView.render();
}

V.renderMounthlyAmount = function () {
    V.innerHTML = MounthlyAmountView.render();
}


V.renderStatus = async function () {
    let data = await OrderData.status();
    console.log(data);
    V.status.innerHTML = OrderStatusView.render(data);
}


C.init();