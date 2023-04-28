let CustomerA1=[];
let CustomerA2=[];
let CustomerA3=[];
let CustomerB1=[];
let CustomerB2=[];
let CustomerB3=[];
let CustomerC1=[];
let CustomerC2=[];
let CustomerC3=[];
let confirmBooking=[];
let greySeat;
let greenSeat;
let nameField;
let emailField;
let code =0;
function selectedSeat(event){
    let e = event.target.id;
    let color =document.getElementById(`${e}`).style.backgroundColor
    console.log(color);
    if(color == 'white'){
        document.getElementById('div1').style.display='block';
        // document.getElementById('div1').value =e;
        document.getElementById('seatName').value =e;
    }else if(color == 'grey'){
        document.getElementById('div1').style.display='block';
        greySeat = event.target.id;
        console.log(greySeat);
    }else if(color == 'green'){
        greenSeat = event.target.id;
        window.alert('Booking is confirmed');
    }
}

function save(){
    let seatName = document.getElementById('seatName').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    code = code + 1;
    let CustomerJSON ={};
    CustomerJSON['Seat Name'] = seatName;
    CustomerJSON['Name'] = name;
    CustomerJSON['Email'] = email;
    CustomerJSON['VarificationCode'] = code;
    if( seatName == 'A1'){
        CustomerA1.push(CustomerJSON);
        console.log(CustomerA1);
    }else if(seatName == 'A2'){
        CustomerA2.push(CustomerJSON);
        console.log(CustomerA2);
    }else if(seatName == 'A3'){
        CustomerA3.push(CustomerJSON);
        console.log(CustomerA3);
    }else if(seatName == 'B1'){
        CustomerB1.push(CustomerJSON);
        console.log(CustomerB1);
    }else if(seatName == 'B2'){
        CustomerB2.push(CustomerJSON);
        console.log(CustomerB2);
    }else if(seatName == 'B3'){
        CustomerB3.push(CustomerJSON);
        console.log(CustomerB3);
    }else if(seatName == 'C1'){
        CustomerC1.push(CustomerJSON);
        console.log(CustomerC1);
    }else if(seatName == 'C2'){
        CustomerC2.push(CustomerJSON);
        console.log(CustomerC2);
    }else if(seatName == 'C3'){
        CustomerC3.push(CustomerJSON);
        console.log(CustomerC3);
    }
    
    document.getElementById(`${seatName}`).style.backgroundColor = 'grey';
    document.getElementById('div1').style.display='none';
    window.alert(`Varification Code is '${code}'`);
}

function confirm(){
    document.getElementById('div2').style.display = 'block';
    
}

function finalBooking(){
    let confirmJSON = {};
    confirmJSON['SeatName'] = greySeat;
    confirmJSON['VarificationCode'] = document.getElementById('codeId').value;
    let co = document.getElementById('codeId').value;
    console.log(co);
    
    if(greySeat == 'A1'){
        for(let i=0;i<CustomerA1.length;i++){
        if(CustomerA1[i].VarificationCode  == co){
            confirmBooking.push(confirmJSON);
            document.getElementById('div2').style.display = 'none';
            document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
            console.log(confirmBooking);
        }
    }
    }else if(greySeat == 'A2'){
        for(let i=0;i<CustomerA2.length;i++){
            if(CustomerA2[i].VarificationCode  == co){
                confirmBooking.push(confirmJSON);
                document.getElementById('div2').style.display = 'none';
                document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
                console.log(confirmBooking);
            }
        }
    }else if(greySeat == 'A3'){
        for(let i=0;i<CustomerA3.length;i++){
            if(CustomerA3[i].VarificationCode  == co){
                confirmBooking.push(confirmJSON);
                document.getElementById('div2').style.display = 'none';
                document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
                console.log(confirmBooking);
            }
        }
    }else if(greySeat == 'B1'){
        for(let i=0;i<CustomerB1.length;i++){
            if(CustomerB1[i].VarificationCode  == co){
                confirmBooking.push(confirmJSON);
                document.getElementById('div2').style.display = 'none';
                document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
                console.log(confirmBooking);
            }
        }
    }else if(greySeat == 'B2'){
        for(let i=0;i<CustomerB2.length;i++){
            if(CustomerB2[i].VarificationCode  == co){
                confirmBooking.push(confirmJSON);
                document.getElementById('div2').style.display = 'none';
                document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
                console.log(confirmBooking);
            }
        }
    }else if(greySeat == 'B3'){
        for(let i=0;i<CustomerB3.length;i++){
            if(CustomerB3[i].VarificationCode  == co){
                confirmBooking.push(confirmJSON);
                document.getElementById('div2').style.display = 'none';
                document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
                console.log(confirmBooking);
            }
        }
    }else if(greySeat == 'C1'){
        for(let i=0;i<CustomerC1.length;i++){
            if(CustomerC1[i].VarificationCode  == co){
                confirmBooking.push(confirmJSON);
                document.getElementById('div2').style.display = 'none';
                document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
                console.log(confirmBooking);
            }
        }
    }else if(greySeat == 'C2'){
        for(let i=0;i<CustomerC2.length;i++){
            if(CustomerC2[i].VarificationCode  == co){
                confirmBooking.push(confirmJSON);
                document.getElementById('div2').style.display = 'none';
                document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
                console.log(confirmBooking);
            }
        }
    }else if(greySeat == 'C3'){
        for(let i=0;i<CustomerC3.length;i++){
            if(CustomerC3[i].VarificationCode  == co){
                confirmBooking.push(confirmJSON);
                document.getElementById('div2').style.display = 'none';
                document.getElementById(`${greySeat}`).style.backgroundColor = 'green';
                console.log(confirmBooking);
            }
        }
    }
    
}

function cancel(){
    document.getElementById('div3').style.display = 'block';
}

function finalCancel(){
    let co2 = document.getElementById('codeId2').value;
    for(let k=0 ; k <confirmBooking.length ; k++){
        if(confirmBooking[k].SeatName == greenSeat && confirmBooking[k].VarificationCode == co2){
            confirmBooking.splice(k,1);
            if(greenSeat == 'A1'){
                for(let g=0;g<CustomerA1.length;g++){
                    if(CustomerA1[g].VarificationCode == co2){
                        CustomerA1.splice(g,1);
                    }
                }
                console.log(CustomerA1.length);
                if(CustomerA1.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }else if(greenSeat == 'A2'){
                for(let g=0;g<CustomerA2.length;g++){
                    if(CustomerA2[g].VarificationCode == co2){
                        CustomerA2.splice(g,1);
                    }
                }
                console.log(CustomerA2.length);
                if(CustomerA2.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }
            else if(greenSeat == 'A3'){
                for(let g=0;g<CustomerA3.length;g++){
                    if(CustomerA3[g].VarificationCode == co2){
                        CustomerA3.splice(g,1);
                    }
                }
                console.log(CustomerA3.length);
                if(CustomerA3.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }
            else if(greenSeat == 'B1'){
                for(let g=0;g<CustomerB1.length;g++){
                    if(CustomerB1[g].VarificationCode == co2){
                        CustomerB1.splice(g,1);
                    }
                }
                console.log(CustomerB1.length);
                if(CustomerB1.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }
            else if(greenSeat == 'B2'){
                for(let g=0;g<CustomerB2.length;g++){
                    if(CustomerB2[g].VarificationCode == co2){
                        CustomerB2.splice(g,1);
                    }
                }
                console.log(CustomerB2.length);
                if(CustomerB2.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }
            else if(greenSeat == 'B3'){
                for(let g=0;g<CustomerB3.length;g++){
                    if(CustomerB3[g].VarificationCode == co2){
                        CustomerB3.splice(g,1);
                    }
                }
                console.log(CustomerB3.length);
                if(CustomerB3.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }
            else if(greenSeat == 'C1'){
                for(let g=0;g<CustomerC1.length;g++){
                    if(CustomerC1[g].VarificationCode == co2){
                        CustomerC1.splice(g,1);
                    }
                }
                console.log(CustomerC1.length);
                if(CustomerC1.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }
            else if(greenSeat == 'C2'){
                for(let g=0;g<CustomerC2.length;g++){
                    if(CustomerC2[g].VarificationCode == co2){
                        CustomerC2.splice(g,1);
                    }
                }
                console.log(CustomerC2.length);
                if(CustomerC2.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }
            else if(greenSeat == 'C3'){
                for(let g=0;g<CustomerC3.length;g++){
                    if(CustomerC3[g].VarificationCode == co2){
                        CustomerC3.splice(g,1);
                    }
                }
                console.log(CustomerC3.length);
                if(CustomerC3.length == 0){
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'white';
                    document.getElementById('div3').style.display = 'none';
                }else{
                    document.getElementById(`${greenSeat}`).style.backgroundColor = 'grey';
                    document.getElementById('div3').style.display = 'none';
                }
            }

            
            console.log(confirmBooking);
        }
    }
    
    

}

function remove(){
    document.getElementById('div1').style.display='none';
}