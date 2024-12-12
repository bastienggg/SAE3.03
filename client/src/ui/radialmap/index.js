import { OrderData } from "../../data/order.js";
import ApexCharts from 'ApexCharts';

let MounthIdView = {
    render: async function (id) {
        let data = await OrderData.Radial(id);
        console.log(data);

        // Extracting the total_orders and country names
        let seriesData = data.map(item => item.total_orders);
        let categories = data.map(item => item.country);

        var options = {
            series: [{
                name: 'Total Orders',
                data: seriesData,
            }],
            chart: {
                height: 350,
                type: 'radar',
            },
            title: {
                text: 'Orders by Country'
            },
            yaxis: {
                stepSize: 20
            },
            xaxis: {
                categories: categories
            }
        };

        var chart = new ApexCharts(document.querySelector("#country"), options);
        chart.render();
    }
}

export { MounthIdView };
