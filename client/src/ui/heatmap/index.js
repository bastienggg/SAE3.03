import { OrderData } from "../../data/order.js";
import ApexCharts from 'ApexCharts';

let HeatMapView = {
    render: async function () {
        let data = await OrderData.heatmap();
        console.log(data);

        // Transform the data
        let months = [...new Set(data.map(item => item.month))].reverse();
        let countries = [...new Set(data.map(item => item.country))].reverse();

        let series = countries.map(country => {
            return {
                name: country,
                data: months.map(month => {
                    let item = data.find(d => d.month === month && d.country === country);
                    return item ? parseFloat(item.total_orders) : 0;
                })
            };
        });

        var options = {
            series: series,
            chart: {
                height: 350,
                type: 'heatmap',
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: true,
                    colorScale: {
                        ranges: [{
                            from: 0,
                            to: 5,
                            name: 'low',
                            color: '#00A100'
                        },
                        {
                            from: 5,
                            to: 20,
                            name: 'medium',
                            color: '#128FD9'
                        },
                        {
                            from: 20,
                            to: 40,
                            name: 'high',
                            color: '#FFB200'
                        },
                        {
                            from: 40,
                            to: 70,
                            name: 'very high',
                            color: '#FF0000'
                        },
                        {
                            from: 70,
                            to: 100,
                            name: 'extreme',
                            color: '#800000'
                        }
                        ]
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1
            },
            title: {
                text: 'HeatMap Chart with Color Range'
            },
            xaxis: {
                categories: months
            }
        };

        var chart = new ApexCharts(document.querySelector("#heatmap"), options);
        chart.render();
    }
}

export { HeatMapView };
