const fileUrl = './history.txt' // provide file location
let arr;
fetch(fileUrl)
   .then( r => r.text() )
   .then( t =>{ console.log(t)
   console.log(t.split('\n').length) 
   arr = t.split('\n');})


let finalArray = []; 
function searchFunction(){
    let temp = [];
    let val = document.getElementById('textField').value;
    console.log(val);
    console.log(arr);
    console.log(arr.length);
    for(let i=0 ; i<arr.length ; i++){
        console.log(arr[i]);
        let arr1 = arr[i].split(' ');
        let count =0;
        for(let j=0 ; j<arr1.length ; j++){
            if(arr1[j] == val){
                count = count+1;
            }
        }
        temp.push({'LineNumber':i+1,'Occurence':count});
    }
    finalArray = temp;
    console.log('finalArray:'+JSON.stringify(finalArray));


    var xValues = [1,2,3,4,5,6,7,8];
    var yValues = [];

    for(let i=0 ; i<temp.length ; i++){
        yValues.push(temp[i].Occurence);
    }

    let k=0;
    for(let i=0 ; i<yValues.length ; i++){
        if(yValues[i] > 0){
            k=1;
        }
    }
    if(k == 0){

    //     var fs = require('fs');

    //     fs.writeFile('history.txt', val, function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

//     var http = require('http');
//     var fs = require('fs');
//     http.createServer(function (req, res) {
//         // fs.readFile('demofile1.html', function(err, data) {
//         // res.writeHead(200, {'Content-Type': 'text/html'});
//         // res.write(data);
//         // return res.end();

//         fs.writeFile('history.txt', val, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//   });
// }).listen(8080);


    }
    console.log(yValues);
    new Chart("myChart", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
        }]
    },
    options: {
    legend: {display: false},
    scales: {
        yAxes: [{ticks: {min: 0, max:10}}],
    }
  }
});
    document.getElementById('textField').value = '';
}