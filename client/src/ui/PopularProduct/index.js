import { OrderitemsData } from "../../data/orderitem.js";
import ApexCharts from 'ApexCharts';

let PopularView = {
    render: async function () {
        let data = await OrderitemsData.fetch();
        console.log(data);
        var options = {
            chart: {
                type: 'bar',
                height: 300
            },
            series: [{
                data: data.map(item => item.total_quantity),

            }],

            xaxis: {
                categories: data.map(item => item.product_name),
                labels: {
                    style: {
                        colors: new Array(data.length).fill('#ffffff')// Met du blanc autant de fois qu'il y a des noms de produits
                    }
                }
            },
            colors: ['#fef08a'], // Couleur des barres
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 5,
                    colors: {
                        hover: '#ffdd57' // Couleur de survol personnalisée
                    }

                }
            },
            dataLabels: {
                enabled: true // désactive les étiquettes de données
            }

        };


        var chart = new ApexCharts(document.querySelector("#popular"), options);
        chart.render();
    }

}


export { PopularView };
