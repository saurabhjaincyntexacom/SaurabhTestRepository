let taskArray = [];

function submitFunction(){
    document.getElementById('tbody').innerHTML = '';
    let startingDayField = parseInt(document.getElementById('DaysOfWeek').value);
    let numberOfDaysField = parseInt(document.getElementById('numberOfDaysField').value);
    if(numberOfDaysField < 28 || numberOfDaysField > 31){
        alert('please select correct number of days')
    }else{
        console.log(startingDayField);
        console.log(numberOfDaysField);
        let count = 1;
        
        let row;
        if(startingDayField == 1){
            let r = numberOfDaysField/7;
            row = Math.trunc(r);
            if(numberOfDaysField%7 > 0){
                row = row+1;
            }
        }else if(startingDayField == 2){
            let r = numberOfDaysField/7;
            row = Math.trunc(r)+1;
        }else if(startingDayField == 3){
            let r = numberOfDaysField/7;
            row = Math.trunc(r)+1;
        }else if(startingDayField == 4){
            let r = numberOfDaysField/7;
            row = Math.trunc(r)+1;
        }else if(startingDayField == 5){
            let r = numberOfDaysField/7;
            row = Math.trunc(r)+1;
        }else if(startingDayField == 6){
            let r = numberOfDaysField/7;
            row = Math.trunc(r)+1;
            if(numberOfDaysField%7 > 2){
                row = row+1;
            }
        }else if(startingDayField == 7){
            let r = numberOfDaysField/7;
            row = Math.trunc(r)+1;
            if(numberOfDaysField%7 > 1){
                row = row+1;
            }
        }
        console.log(row);
        
        let str = '';
        for(let i=0 ; i<row ; i++){
            str += `<tr>`;
            for(let j=0 ; j<7 ; j++){
                if(i==0 && (j+1)< startingDayField){
                    str += `<td></td>`;
                }else{
                    if(count <= numberOfDaysField){
                        if(j==0 || j==6){
                            str += `<td title="${count}" id="val${count}"  onmouseover="handleHover(event)" onmouseout="handleMouse()" onclick="handleClick(event)" style="color: red;">${count}</td>`;
                            count =count+1;
                        }else{
                            str += `<td title="${count}" id="val${count}"  onmouseover="handleHover(event)" onmouseout="handleMouse()" onclick="handleClick(event)">${count}</td>`;
                            count =count+1;
                        }
                    
                    }
                }
            }
            str += `</tr>`;
        }
        document.getElementById('tbody').innerHTML += str;




    }
}

let titleField;
let idField

function handleClick(event){
    console.log(event.target.title);
    console.log(event.target.id);
    titleField = event.target.title;
    idField = event.target.id;
    document.getElementById("myModal").style.display = "block";
}

function submitFromModal(){
    document.getElementById("myModal").style.display = "none";
    
    let taskNameField = document.getElementById('taskNameField').value;
    let taskDescriptionField = document.getElementById('taskDescriptionField').value;
    let taskSelectField = document.getElementById('taskSelectField').value;
    
    taskArray.push({
        'Date':titleField,
        'Id':idField,
        'TaskName':taskNameField,
        'TaskDescripton':taskDescriptionField,
        'TaskPriority':taskSelectField
    });
    
    if(taskSelectField == 'High'){
        document.getElementById(`${idField}`).style.color = 'red';
    }else if(taskSelectField == 'Medium'){
        document.getElementById(`${idField}`).style.color = 'blue';
    }else if(taskSelectField == 'Low'){
        document.getElementById(`${idField}`).style.color = 'green';
    }
    console.log(taskArray);
    
}

function closeModalFunction(){
    document.getElementById("myModal").style.display = "none";
}

function handleHover(event){
    let idValue = event.target.id;
    console.log(idValue);
    
    let str = '';
    for(let i=0 ; i<taskArray.length ; i++){
        console.log(taskArray[i].Id);
        console.log(idValue);
        if(taskArray[i].Id == idValue){
            str += taskArray[i].TaskName+'<br>'
        }
    }
    document.getElementById('hoverContent').innerHTML= str;
    document.getElementById("myModal1").style.display = "block";
}


function handleMouse(){
    document.getElementById("myModal1").style.display = "none";
}