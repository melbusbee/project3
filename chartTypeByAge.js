var data;
var age = [];
var medNeglect = [];
var neglect = [];
var abuse = [];
var psych = [];
var sexualAbuse = [];


$( document ).ready(function() {
    loadData();
    loadDataTwo();
});


function loadData(){
    
    $.ajax({
            type:"GET",
            url:"json/maltreatmentData.json",
            dataType:"text",
            success: parseData
});
    
   
}


function parseData(data){
    console.log(data);

    dataObj = $.parseJSON(data);
    
    for (var i=0; i < dataObj.length; i++){
        console.log(dataObj[i]["Age"]);
        age.push(dataObj[i].Age);
        console.log(dataObj[i]["Medical Neglect"]);
        medNeglect.push(dataObj[i]["Medical Neglect"]);
        neglect.push(dataObj[i]["Neglect"]);
        abuse.push(dataObj[i]["Physcial Abuse"]);
        psych.push(dataObj[i]["Psychological Maltreatment"]);
        sexualAbuse.push(dataObj[i]["Sexual Abuse"]);
        
    
    }
    console.log(age);
generateChart()
}


function generateChart(){
    $('#typeByAge').highcharts({
        chart: {
            type: 'column',
            plotBackgroundColor: '#FCFCFC',
            backgroundColor: '#fcfcfc'
        },
        title: {
            text: 'Maltreatment Types of Victims by Age, 2012',
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
            categories: age,
            title: {
                text: 'Victim Age'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of Victims'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:black;padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Medical Neglect',
            data: medNeglect,
            color: '#c8e6e6'

        }, {
            name: 'Neglect',
            data: neglect,
            color: '#369999'

        }, {
            name: 'Physical Abuse',
            data: abuse,
            color: '#c8e6e6'

        }, {
            name: 'Psych. Maltreatment',
            data: psych,
            color: '#c8e6e6'
            
        }, {
            name: 'Sexual Abuse',
            data: sexualAbuse,
            color: '#c8e6e6'
        }]
    });
}
