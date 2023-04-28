let employeesData = [];
let val;

function starClickedFunction(event){
    console.log(event.target.title);
    val = event.target.title;
    for(let i=0 ; i<5 ; i++){
        if(i<val)
            document.getElementById(`star${i+1}`).className = 'fa fa-star checked';
        else
        document.getElementById(`star${i+1}`).className = 'fa fa-star';
    }
}

function saveFunction(){
    let nameField = document.getElementById('nameField').value;
    let salaryField = document.getElementById('salaryField').value;
    let addressField = document.getElementById('addressField').value;
    let hobbiesField = document.getElementById('hobbiesField').value;
    employeesData.push({
        'Name':nameField,
        'Salary':salaryField,
        'Ratings':val,
        'Address':addressField,
        'Hobbies':hobbiesField,
        'val':val
    });
    let str = '';
    if(val == 5){
        for(let i=0 ; i<5 ; i++){
            str+= '<span class="fa fa-star checked" style="color: yellow"></span>';
        }

    }else if(val < 3){
        for(let i=0 ; i<5 ; i++){
            if(i<val)
            str+= '<span class="fa fa-star checked" style="color: red"></span>';
            else
            str+= '<span class="fa fa-star"></span>';
        }

    }else if(val < 5 && val >=3){
        for(let i=0 ; i<5 ; i++){
            if(i<val)
            str+= '<span class="fa fa-star checked" style="color: green"></span>';
            else
            str+= '<span class="fa fa-star"></span>';
        }
    }
    document.getElementById('table').innerHTML +=`
    <tr>
        <th style="border: 1px solid black;"><input type="checkbox" name="${nameField}" class="${nameField}" onclick="clickCheckboxFunction(event)"></th>
        <th style="border: 1px solid black;">${nameField}</th>
        <th id="${nameField}" style="border: 1px solid black;"></th>
        <th style="border: 1px solid black;">`+ str +`</th>
    </tr>
    `;


    document.getElementById('nameField').value = '';
    document.getElementById('salaryField').value = '';
    document.getElementById('addressField').value = '';
    document.getElementById('hobbiesField').value = '';
    for(let i=0 ; i<5 ; i++){
        document.getElementById(`star${i+1}`).className = 'fa fa-star';
    }
}

function cancelFunction(){
    document.getElementById('nameField').value = '';
    document.getElementById('salaryField').value = '';
    document.getElementById('addressField').value = '';
    document.getElementById('hobbiesField').value = '';
    for(let i=0 ; i<5 ; i++){
        document.getElementById(`star${i+1}`).className = 'fa fa-star';
    }
}

function clickCheckboxFunction(event){
    console.log(event.target.name);
    let val1 = event.target.name;
    let checkbox = document.getElementsByClassName(val1)[0];
    if(checkbox.checked == true){
        for(let i=0 ; i<employeesData.length ; i++){
            if(employeesData[i].Name == val1){
                document.getElementById(val1).innerText = employeesData[i].Salary ; 
            }
        }
    }else{
        document.getElementById(val1).innerText = '' ;
    }
}

function serachFunction(){
    let temp = [];
    console.log(document.getElementById('search').value);
    let val1 = document.getElementById('search').value;
    
        for(let i=0 ; i<employeesData.length ; i++){
            if(employeesData[i].Name.search(val1) != -1 || employeesData[i].Salary.search(val1) != -1 || employeesData[i].Address.search(val1) != -1 || employeesData[i].Hobbies.search(val1) != -1 ){
                temp.push(employeesData[i]);
            }
        }
    
    console.log(temp);
    if(temp.length != 0){
        document.getElementById('table').innerHTML = '';
        for(let i=0 ; i<temp.length ; i++){
            let str = '';
            if(temp[i].val == 5){
                for(let j=0 ; j<5 ; j++){
                    str+= '<span class="fa fa-star checked" style="color: yellow"></span>';
                }

            }else if(temp[i].val < 3){
                for(let j=0 ; j<5 ; j++){
                    if(j<temp[i].val)
                        str+= '<span class="fa fa-star checked" style="color: red"></span>';
                    else
                        str+= '<span class="fa fa-star"></span>';
                }

            }else if(temp[i].val < 5 && temp[i].val >=3){
                for(let j=0 ; j<5 ; j++){
                    if(j < temp[i].val)
                        str+= '<span class="fa fa-star checked" style="color: green"></span>';
                    else
                        str+= '<span class="fa fa-star"></span>';
                }
            }
            document.getElementById('table').innerHTML +=`
            <tr>
                <th style="border: 1px solid black;"><input type="checkbox" name="${temp[i].Name}" class="${temp[i].Name}" onclick="clickCheckboxFunction(event)"></th>
                <th style="border: 1px solid black;">${temp[i].Name}</th>
                <th id="${temp[i].Name}" style="border: 1px solid black;"></th>
                <th style="border: 1px solid black;">`+ str +`</th>
            </tr>
        `;
        }
    }else{
        document.getElementById('table').innerHTML = '';
    }
}