import { ItemData } from "../../data/item.js";
import ApexCharts from 'ApexCharts';

// OrderData.mounthlyAmountCat()

let WeakStockView = {
    render: async function () {
        let data = await ItemData.weakStock();
        let seriesData = data.map(item => parseInt(item.total_quantity));
        let labelsData = data.map(item => item.product_name);

        var options = {
            series: seriesData,
            chart: {
                type: 'polarArea',
            },
            labels: labelsData,
            stroke: {
                colors: ['#fff']
            },
            title: {
                text: 'Weak Stock',
                align: 'left'
            },
            fill: {
                opacity: 0.8
            },
            legend: {
                position: 'bottom'
            },

        };

        var chart = new ApexCharts(document.querySelector("#weakstock"), options);
        chart.render();
    }
}

export { WeakStockView };
