import { OrderData } from "../../data/order.js";
import ApexCharts from 'ApexCharts';

// OrderData.mounthlyAmountCat()

let MounthlyAmountCatView = {
    render: async function () {
        let data = await OrderData.mounthlyAmountCat();
        // Extract categories and series data
        let categories = [...new Set(data.map(item => item.month))].reverse();
        let seriesData = {};

        data.forEach(item => {
            if (!seriesData[item.category]) {
                seriesData[item.category] = [];
            }
            seriesData[item.category].push(parseFloat(item.total_amount));
        });

        var options = {
            series: Object.keys(seriesData).map(category => ({
                name: category,
                data: seriesData[category].reverse()
            })),
            chart: {
                height: 400,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.5
                },
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#77B6EA', '#545454', '#FF4560', '#00E396', '#775DD0'],

            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Monthly Amount by Category',
                align: 'left'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: categories,
                title: {
                    text: 'Month'
                }
            },
            yaxis: {
                title: {
                    text: 'Total Amount'
                },
                min: 0
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        };

        var chart = new ApexCharts(document.querySelector("#mounthlyamountcat"), options);
        chart.render();
    }
}

export { MounthlyAmountCatView };
