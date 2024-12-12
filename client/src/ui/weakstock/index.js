import { ItemData } from "../../data/item.js";
import ApexCharts from 'ApexCharts';

// OrderData.mounthlyAmountCat()

let WeakStockView = {
    render: async function () {
        let data = await ItemData.weakStock();
        var options = {
            series: [{
                name: 'Stock Quantity',
                data: data.map(item => item.stock)
            }],
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: data.map(item => item.product_name),
                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            title: {
                text: 'Weak stock',
                align: 'left',
            }
        };

        var chart = new ApexCharts(document.querySelector("#weakstock"), options);
        chart.render();
    }
}

export { WeakStockView };
