import { OrderitemsData } from "../../data/orderitem.js";
import ApexCharts from 'ApexCharts';

let MounthlyAmountView = {
    render: async function () {
        let data = await OrderitemsData.mouthlyamount();
        console.log(data);
        var options = {
            series: [{
                name: 'Amount',
                data: data.map(item => item.total_amount).reverse(),

            }],
            chart: {
                height: 350,
                type: 'line',
            },
            forecastDataPoints: {
                count: 7
            },
            stroke: {
                width: 5,
                curve: 'smooth'
            },
            xaxis: {
                name: 'Mounth',
                categories: data.map(item => item.month).reverse(),
                labels: {
                    style: {
                        colors: new Array(data.length).fill('#18181b')// Met du blanc autant de fois qu'il y a des noms de produits
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#06b6d4', '#164e63'],
                },
            }
        };

        var chart = new ApexCharts(document.querySelector("#mounthlyamount"), options);
        chart.render();

    }
}


export { MounthlyAmountView };
