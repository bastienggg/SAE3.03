import { HeaderView } from "./ui/header/index.js";
import { OrderStatusView } from "./ui/ordersStatus/index.js";
import { PopularView } from "./ui/PopularProduct/index.js";
import { MounthlyAmountView } from "./ui/mounthlyamount/index.js";
import { MounthlyAmountCatView } from "./ui/amountcat/index.js";
import { WeakStockView } from "./ui/weakstock/index.js";
import { ProductIdView } from "./ui/EvolutionProduct/index.js";

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
    V.renderMounthlyAmountCat();
    V.renderWeakStock();
    // V.renderProductId();
    C.setupEventListeners();

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

V.renderMounthlyAmountCat = function () {
    V.innerHTML = MounthlyAmountCatView.render();
}

V.renderWeakStock = function () {
    V.innerHTML = WeakStockView.render();
}

V.renderProductId = function (id) {
    document.querySelector("#productid").innerHTML = "";
    V.innerHTML = ProductIdView.render(id);
}


V.renderStatus = async function () {
    let data = await OrderData.status();
    console.log(data);
    V.status.innerHTML = OrderStatusView.render(data);
}
C.setupEventListeners = function () {
    document.querySelector("#searchProduct").addEventListener("input", function (event) {
        let searchValue = parseInt(event.target.value, 10);
        // Call the function to handle the search value change
        // V.handleSearchInputChange(searchValue);
        console.log(searchValue);
        V.renderProductId(searchValue);
    });
};


C.init();