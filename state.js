var data;
var state = [];
var ageYear = [];
var average = [];
var arizona = [];
var louisiana =[];
var tennessee = [];
var hampshire =[];
var oklahoma=[];

function loadDataTwo(){
    
    $.ajax({
            type:"GET",
            url:"json/threeStates1.json",
            dataType:"text",
            success: parseDataTwo
});
    
   
}


function parseDataTwo(data){
    console.log(data);

    dataObj = $.parseJSON(data);
    
    for (var i=0; i < dataObj.length; i++){
        ageYear.push(dataObj[i]["Age"]);
        arizona.push(dataObj[i]["Arizona"]);
        tennessee.push(dataObj[i]["Tennessee"]);
        louisiana.push(dataObj[i]["Louisiana"]);
        average.push(dataObj[i]["Average"]);
        hampshire.push(dataObj[i]["New Hampshire"]);
        oklahoma.push(dataObj[i]["Oklahoma"]);
        
        
        /*
        console.log(dataObj[i]["<1"]);
        lessThanOne.push(dataObj[i]["<1"]);
        one.push(dataObj[i]["1"]);
        two.push(dataObj[i]["2"]);
        three.push(dataObj[i]["3"]);
        four.push(dataObj[i]["4"]);
        five.push(dataObj[i]["5"]);
        six.push(dataObj[i]["6"]);
        seven.push(dataObj[i]["7"]);
        eight.push(dataObj[i]["8"]);
        nine.push(dataObj[i]["9"]);
        ten.push(dataObj[i]["10"]);
        eleven.push(dataObj[i]["11"]);
        twelve.push(dataObj[i]["12"]);
        thirteen.push(dataObj[i]["13"]);
        fourteen.push(dataObj[i]["14"]);
        fifteen.push(dataObj[i]["15"]);
        sixteen.push(dataObj[i]["16"]);
        seventeen.push(dataObj[i]["17"]);
        other.push(dataObj[i]["Unborn, Unknown, and 18 to 21"]);
        */
    }
    console.log(age);
    
buildChart();
buildChartTenn();
buildChartLouis();
buildChartAverage();
buildChartOk();
}

function buildChart(){
    $('#states').highcharts({
        chart: {
            type: 'area',
            plotBackgroundColor: '#FCFCFC',
            backgroundColor: '#fcfcfc'
        },
        title: {
            text: 'Arizona vs. the average state: Abuse Trends by Victim Age',
            align: 'left',
            x: -10,
            style: {
                    fontSize: '17px',
                    fontWeight: 'bold',
                    fontFamily: 'Oswald',
                    color: '#444444'
                    }
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ageYear,
            tickmarkPlacement: 'on',
            title: {
                text: 'Victim Age',
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            title: {
                text: 'No. of Victims',
                style: {
                    fontWeight: 'bold'
            }
            }
        },
        tooltip: {
            style: {
                padding: 20,
                fontSize: '14px'
                },
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Arizona',
            data: arizona,
            color: '#2c7c7c'
        },
        {
            name: 'Average',
            data: average,
            color: '#F2CE6D'
        }]
    });
}

function buildChartTenn(){
    $('#tenn').highcharts({
        chart: {
            type: 'area',
            plotBackgroundColor: '#FCFCFC',
            backgroundColor: '#fcfcfc'
        },
        title: {
            text: 'Tennessee vs. the average state: Abuse Trends by Victim Age',
            align: 'left',
            x: -10,
            style: {
                    fontSize: '17px',
                    fontWeight: 'bold',
                    fontFamily: 'Oswald',
                    color: '#444444'
                    }
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ageYear,
            tickmarkPlacement: 'on',
            title: {
                text: 'Victim Age',
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            title: {
                text: 'No. of Victims',
                style: {
                    fontWeight: 'bold'
            }
            }
        },
        tooltip: {
            style: {
                padding: 20,
                fontSize: '14px'
                },
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [ {
            name: 'Tennessee',
            data: tennessee,
            color: '#86c1c1'
        },
        {
            name: 'Average',
            data: average,
            color: '#F2CE6D'
        }]
    });
}

function buildChartLouis(){
    $('#louis').highcharts({
        chart: {
            type: 'area',
            plotBackgroundColor: '#FCFCFC',
            backgroundColor: '#fcfcfc'
        },
        title: {
            text: 'Louisiana vs. the average state: Abuse Trends by Victim Age',
            align: 'left',
            x: -10,
            style: {
                    fontSize: '17px',
                    fontWeight: 'bold',
                    fontFamily: 'Oswald',
                    color: '#444444'
                    }
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ageYear,
            tickmarkPlacement: 'on',
            title: {
                text: 'Victim Age',
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            title: {
                text: 'No. of Victims',
                style: {
                    fontWeight: 'bold'
            }
            }
        },
        tooltip: {
            style: {
                padding: 20,
                fontSize: '14px'
                },
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Louisiana',
            data: louisiana,
            color: '#add5d5'
        },
        {
            name: 'Average',
            data: average,
            color: '#F2CE6D'
        }]
    });
}

function buildChartAverage(){
    $('#average').highcharts({
        chart: {
            type: 'area',
            plotBackgroundColor: '#FCFCFC',
            backgroundColor: '#fcfcfc'
        },
        title: {
            text: 'Average Across All 50 States: Abuse Trends by Victim Age',
            align: 'left',
            x: -10,
            style: {
                    fontSize: '17px',
                    fontWeight: 'bold',
                    fontFamily: 'Oswald',
                    color: '#444444'
                    }
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ageYear,
            tickmarkPlacement: 'on',
            title: {
                text: 'Victim Age',
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            title: {
                text: 'No. of Victims',
                style: {
                    fontWeight: 'bold'
            }
            }
        },
        tooltip: {
            style: {
                padding: 20,
                fontSize: '14px'
                },
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Average',
            data: average,
            color: '#F2CE6D'
        }]
    });
}




function buildChartOk(){
    $('#oklahoma').highcharts({
        chart: {
            type: 'area',
            plotBackgroundColor: '#FCFCFC',
            backgroundColor: '#fcfcfc'
        },
        title: {
            text: 'Snapshot of average state: Oklahoma',
            align: 'left',
            x: -10,
            style: {
                    fontSize: '17px',
                    fontWeight: 'bold',
                    fontFamily: 'Oswald',
                    color: '#444444'
                    }
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ageYear,
            tickmarkPlacement: 'on',
            title: {
                text: 'Victim Age',
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            endOnTick: true,
            maxPadding: 1.5,
            title: {
                text: 'No. of Victims',
                style: {
                    fontWeight: 'bold'
            }
            }
        },
        tooltip: {
            style: {
                padding: 20,
                fontSize: '14px'
                },
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [
        {
            name: 'Oklahoma',
            data: oklahoma,
            color: '#faecc7'
        }]
    });
}

