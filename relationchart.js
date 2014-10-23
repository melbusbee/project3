

//build charts
$(document).ready(function(){
    console.log("document ready");
    
    makeChart();
    
    makeChartTwo();

    
});


function makeChart(){
    Highcharts.getOptions().plotOptions.pie.colors = (function () {
        var colors = ['#369999', '#c8e6e6', '#c8e6e6', '#c8e6e6', '#c8e6e6', '#c8e6e6', '#c8e6e6', '#c8e6e6', '#c8e6e6', '#c8e6e6', '#c8e6e6'],
            base = Highcharts.getOptions().colors[0],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());
    $('#container').highcharts({
        chart: {
                plotBackgroundColor: '#FCFCFC',
                backgroundColor: '#fcfcfc',
                plotBorderWidth: null,
                plotShadow: false,
                
            },
            title: {
                text: 'Who are the most common abusers?',
                align: 'left',
                x: -10,
                style: {
                    fontSize: '17px',
                    fontWeight: 'bold',
                    fontFamily: 'Oswald',
                    color: '#444444'
                    }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{
                type: 'pie',
                name: 'What percentage?',
                data: [
                    ['Parent',   80.3],
                    {
                        name: 'Other relative',
                        y: 6.1,
                        sliced: false,
                        selected: true
                    },
                    ['Other',    4.6],
                    ['Unmarried partner of parent',    4.2],
                    ['Unknown',     3.1],
                    ['Friend and neighbor',   0.4],
                    ['Child care provider',   0.4],
                    ['Foster parent',   0.3],
                    ['Legal guardian',   0.2],
                    ['Other professional',   0.1],
                    ['Group home staff',   0.1]
                ]
            }]
        });
    };
    
function makeChartTwo(){
    $('#parentPerp').highcharts({
        chart: {
            plotBackgroundColor: '#FCFCFC',
            backgroundColor: '#fcfcfc',
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'What Percentage of Victims are Victimized by Parent Perpetrators?',
            align: 'left',
            x: -10,
            verticalAlign: 'top',
            y: 25,
            
                style: {
                    fontSize: '17px',
                    fontWeight: 'bold',
                    fontFamily: 'Oswald',
                    color: '#444444'
                    }
            },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -60,
                    style: {
                        fontWeight: 'bold',
                        color: 'black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '65%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Victim percent',
            innerSize: '50%',
            data: [
                ['Both parents',     24],
                ['Mother', 45],
                ['Father',   23],
                ['Mother and other',    7],
                ['Father and other',       1]
                
            ]
        }]
    });
}
