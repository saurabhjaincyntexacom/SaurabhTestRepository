let userDetail = [];

function submitFunction(){
    let nameField = document.getElementById('nameField').value;
    let emailField = document.getElementById('emailField').value;
    let productNameField = document.getElementById('productNameField').value;
    let descriptionField = document.getElementById('descriptionField').value;
    let totalCostField = document.getElementById('totalCostField').value;
    if(userDetail.length > 0){
        let count =0 ;
        for(let i=0 ; i<userDetail.length ; i++){
            if(userDetail[i].Name == nameField && userDetail[i].Email == emailField){
                userDetail[i].TotalSale.push({'ProductName':productNameField,'Cost':totalCostField,'Description':descriptionField});
                count = 1;
            }
            
        }
        if(count == 0){
            userDetail.push({'Name':nameField,'Email':emailField,'TotalSale':[{'ProductName':productNameField,'Cost':totalCostField,'Description':descriptionField}]});
        }
    }else{
        userDetail.push({'Name':nameField,'Email':emailField,'TotalSale':[{'ProductName':productNameField,'Cost':totalCostField,'Description':descriptionField}]});
    }
    console.log(userDetail);
    let str = '';
    for(let j=0 ; j<userDetail.length ; j++){
        let n = userDetail[j].Name;
        let e = userDetail[j].Email;
        let ts=0;
        let ti=0;
        let nos=0;
        for(let k=0 ; k<userDetail[j].TotalSale.length ; k++){
            ts += parseInt(userDetail[j].TotalSale[k].Cost);
            nos += 1;
            ti += parseInt(userDetail[j].TotalSale[k].Cost)*0.05;
        }
        str += `
            <tr>
                <td style="color: white;text-align:center">${n}</td>
                <td style="color: white;text-align:center">${e}</td>
                <td style="color: white;text-align:center">${ti}</td>
                <td style="color: white;text-align:center">${ts}</td>
                <td style="color: white;text-align:center">${nos}</td>
            </tr>
        `
    }
    document.getElementById('tbody').innerHTML = str;
    nameField = document.getElementById('nameField').value = '';
    emailField = document.getElementById('emailField').value = '';
    productNameField = document.getElementById('productNameField').value  = '';
    descriptionField = document.getElementById('descriptionField').value = '';
    totalCostField = document.getElementById('totalCostField').value = '';
}