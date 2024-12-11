import { ItemData } from "../../data/item.js";
import ApexCharts from 'ApexCharts';

let ProductIdView = {
    render: async function (id) {
        let data = await ItemData.productById(id);
        console.log(data);
        // Extracting the months and quantities from the data
        let months = data.map(item => `${item.month}/${item.year}`);
        let quantities = data.map(item => parseInt(item.total_quantity));

        var options = {
            series: [{
                name: data[0].product_name,
                data: quantities
            }],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },

            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: months,
            }
        };

        var chart = new ApexCharts(document.querySelector("#productid"), options);
        chart.render();
    }
}

export { ProductIdView };
