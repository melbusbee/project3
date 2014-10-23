var data;
var state = [];
var population = [];
var poverty = [];
var victims = [];
var fatalities = [];


$( document ).ready(function() {
    console.log("doc ready")
    
    $('#table').dataTable( {
        "ajax": "json/dataTable.json",
         "columnDefs": [
                { "type": "numeric-comma", targets: 2 }
            ],
         "columnDefs": [
                { "type": "numeric-comma", targets: 3 }
            ]
    } );

});




