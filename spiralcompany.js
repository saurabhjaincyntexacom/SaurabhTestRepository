let taskArray = [];
let alertArray = [];

function addTaskFunction(){
    document.getElementById("myModal").style.display = "block";
}

function modalCloseFunction(){
    document.getElementById("myModal").style.display = "none";
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    console.log('in time interval');
    console.log(alertArray.length);
    if(alertArray.length > 0){
        for(let i=0 ; i<alertArray.length ; i++){
            console.log('in for loop');
            let t1 = (alertArray[i].Time.split(':')[0]*3600 + alertArray[i].Time.split(':')[1]*60) - 300;
            let t2 = h*3600 + m*60;
            console.log(t1);
            console.log(t2);
            if(t1 == t2){
                document.getElementById("myModal1").style.display = "block";
            }
        }
    }
    
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();



function addFunction(){
    let timeField = document.getElementById('timeField').value;
    let priorityField = document.getElementById('priorityField').value;
    let titleField = document.getElementById('titleField').value;
    let descriptionField = document.getElementById('descriptionField').value;
    console.log(timeField+':'+priorityField+':'+titleField+':'+descriptionField);
    taskArray.push({
        'Status':'Pending',
        'Time':timeField,
        'Priority':priorityField,
        'Title':titleField,
        'Description':descriptionField
    });
    document.getElementById("myModal").style.display = "none";
    callFromAddFunction();
}

function callFromAddFunction(){
    let arr = [];
    for(let i=0 ; i<taskArray.length ; i++){
        let tArray = taskArray[i].Time.split(':');
        let Seconds  = tArray[0]*3600 + tArray[1]*60;
        console.log(Seconds);
        let color = '';
        if(taskArray[i].Priority == 'High'){
            color = 'red';
        }else if(taskArray[i].Priority == 'Medium'){
            color = 'orange';
        }else if(taskArray[i].Priority == 'Low'){
            color = 'yellow';
        }
        arr.push({
            'Colour':color,
            'Status':taskArray[i].Status,
            'Time':taskArray[i].Time,
            'Priority':taskArray[i].Priority,
            'Title':taskArray[i].Title,
            'Description':taskArray[i].Description,
            'Second': Seconds
        });
    }

    sortedFunction(arr);
    console.log(arr);
}

function sortedFunction(arr1){
    let sortedArray = [];
    let secList = [];
    for(let i=0 ; i<arr1.length ; i++){
        if(!(secList.includes(arr1[i].Second))){
            secList.push(arr1[i].Second);
        }
    }

    secList.sort(function(a, b){return a - b});

    for(let i=0 ; i<secList.length ; i++){
        for(let j=0 ; j<arr1.length ; j++){
            if(secList[i] == arr1[j].Second){
                sortedArray.push(arr1[j]);
            }
        }
    }
    
     
    alertArray = JSON.parse(JSON.stringify(sortedArray));
    let str = '';
    for(let i=0 ; i<sortedArray.length ; i++){
        if(sortedArray[i].Status == 'Completed'){
            str += `
            <div style="height: 80px;width: 515px;border: 1px solid black;background-color: green;margin-top:5px;" class="${sortedArray[i].Title}">
                <input type="checkbox" name="${sortedArray[i].Title}" id="${sortedArray[i].Title}" style="margin-left: 250px;visibility:hidden;" onclick="checkBoxFunction(event)">
                <div style="line-height:0%;margin-top: -22px;">
                <p style="margin-left: 10px;">${sortedArray[i].Status}</p>
                <p style="color: white;margin-left: 10px;">${sortedArray[i].Time}</p>
                <p style="color: white;margin-left: 10px;">${sortedArray[i].Title}</p>
                <p style="color: white;margin-left: 10px;">${sortedArray[i].Description}</p>
                </div>
             </div>
        `
        }else{
            str += `
            <div style="height: 80px;width: 515px;border: 1px solid black;background-color:${sortedArray[i].Colour};margin-top:5px;" class="${sortedArray[i].Title}">
                <input type="checkbox" name="${sortedArray[i].Title}" id="${sortedArray[i].Title}" style="margin-left: 250px;" onclick="checkBoxFunction(event)">
                <div style="line-height:0%;margin-top: -22px;">
                <p style="margin-left: 10px;">${sortedArray[i].Status}</p>
                <p style="color: white;margin-left: 10px;">${sortedArray[i].Time}</p>
                <p style="color: white;margin-left: 10px;">${sortedArray[i].Title}</p>
                <p style="color: white;margin-left: 10px;">${sortedArray[i].Description}</p>
                </div>
             </div>
        `
        } 
        
    }
    document.getElementById('list').innerHTML = str;
}

let checkedArrayId = [];
function checkBoxFunction(event){
    console.log(event.target.name);
    let val = event.target.name;
    checkedArrayId.push(val);
    for(let i=0 ; i<taskArray.length ; i++){
        if(val == taskArray[i].Title){
            taskArray[i]['Status'] = 'Completed';
        }
    }

    
    callFromAddFunction();
    for(let i=0 ; i<checkedArrayId.length ; i++){
        document.getElementById(`${checkedArrayId[i]}`).checked = true;
        document.getElementById(`${checkedArrayId[i]}`).style.visibility = 'hidden';
        document.getElementsByClassName(`${checkedArrayId[i]}`)[0].style.backgroundColor = 'green';
    }
    
}