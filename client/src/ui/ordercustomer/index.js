import { OrderData } from "../../data/order.js";
import ApexCharts from 'ApexCharts';

let OrderByCustomerView = {
    render: async function (id) {
        let data = await OrderData.OrderByCustomer(id);
        // Group data by category
        let groupedData = data.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push({
                x: item.product_name,
                y: parseInt(item.total_quantity)
            });
            return acc;
        }, {});

        // Create series for the chart
        let series = Object.keys(groupedData).map(category => {
            return {
                name: category,
                data: groupedData[category]
            };
        });

        var options = {
            series: series,
            legend: {
                show: true
            },
            chart: {
                height: 350,
                type: 'treemap'
            },
            title: {
                text: 'Multi-dimensional Treemap',
                align: 'center'
            }
        };


        var chart = new ApexCharts(document.querySelector("#customerid"), options);
        chart.render();
    }
}

export { OrderByCustomerView };
