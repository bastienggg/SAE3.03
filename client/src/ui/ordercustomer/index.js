import { OrderData } from "../../data/order.js";
import ApexCharts from 'ApexCharts';

let OrderByCustomerView = {
    render: async function (id) {
        let data = await OrderData.OrderByCustomer(id);
        console.log(data);

        var options = {
            series: data.map(item => parseInt(item.total_quantity)),
            chart: {
                type: 'donut',
            },
            labels: data.map(item => item.category),
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };


        var chart = new ApexCharts(document.querySelector("#customerid"), options);
        chart.render();
    }
}

export { OrderByCustomerView };
