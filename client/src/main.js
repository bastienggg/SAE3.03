import { HeaderView } from "./ui/header/index.js";
import { OrderStatusView } from "./ui/ordersStatus/index.js";
import { PopularView } from "./ui/PopularProduct/index.js";
import { MounthlyAmountView } from "./ui/mounthlyamount/index.js";
import { MounthlyAmountCatView } from "./ui/amountcat/index.js";
import { WeakStockView } from "./ui/weakstock/index.js";
import { ProductIdView } from "./ui/EvolutionProduct/index.js";
import { OrderByCustomerView } from "./ui/ordercustomer/index.js";
import { CustomerView } from "./ui/selectClient/index.js";
import { ProductsView } from "./ui/selectProduct/index.js";
import { MounthsView } from "./ui/selectMounth/index.js";
import { MounthIdView } from "./ui/radialmap/index.js";
import { HeatMapView } from "./ui/heatmap/index.js";

import { OrderData } from "./data/order.js";
import { ItemData } from "./data/item.js";


// import './index.css';

// Import du pour le graphique de test
// import { ChartView } from "./ui/chartTest/index.js";


let C = {};

C.init = async function () {
    V.init();
}

let V = {
    header: document.querySelector("#header"),
    status: document.querySelector("#status"),
    customer: document.querySelector("#selectcustomers"),
    product: document.querySelector("#selectproduct"),
    mounth: document.querySelector("#selectmounth"),

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
    V.renderCustomer();
    V.renderProduct();
    V.renderMounths();
    V.renderHeatMap();
    // V.renderRadial();
    // V.renderProductId();
    // V.renderOrderByCustomer();
    C.setupEventListenersProduct();
    C.setupEventListenersCustomer();
    C.setupEventListenersMounths()

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

V.renderHeatMap = function () {
    V.innerHTML = HeatMapView.render();
}

V.renderProductId = function (id) {
    document.querySelector("#productid").innerHTML = "";
    V.innerHTML = ProductIdView.render(id);
}

V.renderOrderByCustomer = function (id) {
    document.querySelector("#customerid").innerHTML = "";
    V.innerHTML = OrderByCustomerView.render(id);
}

V.renderRadial = function (id) {
    document.querySelector("#country").innerHTML = "";
    V.innerHTML = MounthIdView.render(id);
}

V.renderStatus = async function () {
    let data = await OrderData.status();
    console.log(data);
    V.status.innerHTML = OrderStatusView.render(data);
}

V.renderCustomer = async function () {
    let data = await OrderData.Allclient();
    console.log(data);
    V.customer.innerHTML = CustomerView.render(data);
}

V.renderProduct = async function () {
    let data = await ItemData.findAll();
    console.log(data);
    V.product.innerHTML = ProductsView.render(data);
}

V.renderMounths = async function () {
    let data = await OrderData.AllMounth();
    console.log(data);
    V.mounth.innerHTML = MounthsView.render(data);
}


C.setupEventListenersProduct = function () {
    document.querySelector("#selectproduct").addEventListener("input", function (event) {
        let searchValue = parseInt(event.target.value, 10);
        console.log(searchValue);
        V.renderProductId(searchValue);
    });
};

C.setupEventListenersCustomer = function () {
    document.querySelector("#selectcustomers").addEventListener("input", function (event) {
        let searchValue = parseInt(event.target.value, 10);
        console.log(searchValue);
        V.renderOrderByCustomer(searchValue);
    });
}

C.setupEventListenersMounths = function () {
    document.querySelector("#selectmounth").addEventListener("input", function (event) {
        let searchValue = event.target.value;
        console.log(searchValue);
        V.renderRadial(searchValue);
    });
}

C.init();