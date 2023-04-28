let count = 0;
let customerDetails = [];

function voucherSaveFunction(){
    let nameField = document.getElementById('nameField').value;
    let emailField = document.getElementById('emailField').value;
    let checkInTimeField = document.getElementById('checkInTimeField').value;
    let voucherValidityTimeField = document.getElementById('voucherValidityTimeField').value;
    let extraHourChargeField = document.getElementById('extraHourChargeField').value;
    count = count+1;

    customerDetails.push({
        'VoucherNo':count,
        'Name':nameField,
        'Email':emailField,
        'CheckInTime':checkInTimeField,
        'VoucherValidityTime':voucherValidityTimeField,
        'ExtraHourCharge':extraHourChargeField
    });

    document.getElementById('list').innerHTML += `
        <div style="border: 1px solid rgb(226, 247, 247);width:500px; height: 100px;background-color: rgb(226, 247, 247);margin-top: 20px;box-shadow: 10px 10px 5px black;" class="${count}" onclick="customerDetailFunction(event)" data-toggle="modal" data-target="#myModal">
            <p style="margin-left: 20px;margin-top: 6px;"><b>Voucher Number :</b> ${count}</p>
            <p style="font-size: 20px;margin-left: 50px;"><b>Name :</b> ${nameField}</p>
            <p style="margin-left: 50px;"><b>Validiity Hour :</b> ${voucherValidityTimeField} hour</p>
        </div>
        `
    document.getElementById('nameField').value = '';
    document.getElementById('emailField').value = '';
    document.getElementById('checkInTimeField').value = '';
    document.getElementById('voucherValidityTimeField').value = '';
    document.getElementById('extraHourChargeField').value = '';
}

function voucherCancelFunction(){
    document.getElementById('nameField').value = '';
    document.getElementById('emailField').value = '';
    document.getElementById('checkInTimeField').value = '';
    document.getElementById('voucherValidityTimeField').value = '';
    document.getElementById('extraHourChargeField').value = '';
}

let c = 0 ;
var x='';

function customerDetailFunction(event){
    let vNumber = event.currentTarget.className;
    console.log(vNumber);
    for(let i=0 ; i<customerDetails.length ; i++){
        if(customerDetails[i].VoucherNo == vNumber){
            console.log(customerDetails[i].CheckInTime);
            document.getElementById('checkin').innerText ='Check-in-Time : '+ customerDetails[i].CheckInTime;
            let today = new Date();
            let timeHour = today.getHours();
            let timeMinute = today.getMinutes();
            let checkInTimeArray = customerDetails[i].CheckInTime.split(':');
            let checkInTimeHour = parseInt(checkInTimeArray[0]) + parseInt(customerDetails[i].VoucherValidityTime);
            let finalCheckInTime = checkInTimeHour+':'+checkInTimeArray[1];
            console.log('finalCheckInTime'+finalCheckInTime);
            let currentTime = timeHour+':'+timeMinute;
            console.log('currentTime'+currentTime);
            if(parseInt(timeHour) <= parseInt(checkInTimeHour) &&(parseInt(timeMinute) < parseInt(checkInTimeArray[1]))){
                document.getElementsByClassName('modal-content')[0].style.backgroundColor = 'green';
                let seconds = (((parseInt(checkInTimeHour) * 60 * 60)+ parseInt(checkInTimeArray[1]) * 60)-((parseInt(timeHour) * 60 * 60) + parseInt(timeMinute) * 60));
                console.log(seconds);
                
                if(c==1){
                    clearInterval(x);
                    c=0;
                }
                if(x!='')
                clearInterval(x);
                x = setInterval(function(){
                    c=1;
                    console.log('app');
                    var hours = Math.floor(seconds/3600);
                    var rem = seconds%3600;
                    var minutes = Math.floor(rem / 60);
                    var rem1 = rem % 60 ;
                    var sec = rem1; 
                    console.log(hours+':'+minutes+':'+sec);
                    if(hours == 0 && minutes == 0 && sec == 0){
                        clearInterval(x);


                        document.getElementsByClassName('modal-content')[0].style.backgroundColor = 'red';
                        // let seconds = ((parseInt(timeHour) * 60 * 60) + parseInt(timeMinute) * 60)-((parseInt(checkInTimeHour) * 60 * 60)+ (parseInt(checkInTimeArray[1]) * 60));
                        // console.log(seconds);
                        seconds = 1 ;

                        if(c==1){
                            clearInterval(x);
                            c=0;
                        }
                     
                        x = setInterval(function(){
                        c=1;
                        console.log('app');
                        let hours = Math.floor(seconds/3600);
                        let rem = seconds%3600;
                        let minutes = Math.floor(rem / 60);
                        let rem1 = rem % 60 ;
                        let sec = rem1; 
                        console.log(hours+':'+minutes+':'+sec);
                        document.getElementById('remaining').innerText ='Remaining Time : '+ 0 +':'+0+':'+0;
                        document.getElementById('extra').innerText ='Extra Time : '+ hours +':'+minutes+':'+sec;
                        seconds = seconds +1;
                        },1000);




                    }
                    document.getElementById('remaining').innerText ='Remaining Time : '+ hours +':'+minutes+':'+sec;
                    seconds = seconds -1;
                },1000);
            }else if(parseInt(timeHour) >= parseInt(checkInTimeHour) &&(parseInt(timeMinute) > parseInt(checkInTimeArray[1]))){
                document.getElementsByClassName('modal-content')[0].style.backgroundColor = 'red';
                let seconds = ((parseInt(timeHour) * 60 * 60) + parseInt(timeMinute) * 60)-((parseInt(checkInTimeHour) * 60 * 60)+ (parseInt(checkInTimeArray[1]) * 60));
                console.log(seconds);

                if(c==1){
                    clearInterval(x);
                    c=0;
                }
                x = setInterval(function(){
                    c=1;
                    console.log('app');
                    let hours = Math.floor(seconds/3600);
                    let rem = seconds%3600;
                    let minutes = Math.floor(rem / 60);
                    let rem1 = rem % 60 ;
                    let sec = rem1; 
                    console.log(hours+':'+minutes+':'+sec);
                    document.getElementById('remaining').innerText ='Remaining Time : '+ 0 +':'+0+':'+0;
                    document.getElementById('extra').innerText ='Extra Time : '+ hours +':'+minutes+':'+sec;
                    seconds = seconds +1;
                },1000);
            }
        }
    }
}
