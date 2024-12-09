import ApexCharts from 'ApexCharts';

let ChartView = {

    render: function () {
        var options = {
            chart: {
                type: 'bar'
            },
            series: [{
                name: 'sales',
                data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
            }],
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                labels: {
                    style: {
                        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'] // changer les couleurs ici
                    }
                }
            },
            colors: ['#fef08a'], // Couleur des barres
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 5,
                    dataLabels: {
                        position: 'top' // Position des étiquettes de données au-dessus des barres
                    }
                }
            },
            dataLabels: {
                enabled: true // Activer les étiquettes de données
            }



        }
        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

    }




}

export { ChartView };
