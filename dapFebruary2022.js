let obj;
let StockList = [];
let count=0;

function buyStockFunction(){
    document.getElementById('myModal').style.display = 'block';
}

function modalCloseFunction(){
    document.getElementById('myModal').style.display = 'none';
}

function fileUploadFunction(){
    document.getElementById('myModal1').style.display = 'block';
}

function modalCloseFunction1(){
    document.getElementById('myModal1').style.display = 'none';
}


function file(event){
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
}

function onReaderLoad(event){
    console.log(event.target.result);
    obj = JSON.parse(event.target.result);
    console.log(obj);
    //alert_data(obj.name, obj.family);
}

let buyStock = [];
function stockBuySubmitFunction(){
    let stk = document.getElementById('stockList').value;
    let qty = parseInt(document.getElementById('stockQuantity').value);
    console.log(stk+':'+qty);
    let p;
    for(let i=0 ; i<StockList.length ; i++){
        if(StockList[i].StockName == stk){
            p=StockList[i].StockPrice;
            break;
        }
    }
    let IA = p*qty;
    let AP = IA/qty;
    
    if(buyStock.length == 0){
        buyStock.push({
            'Name':stk,
            'Quantity':qty,
            'InvestedAmount':IA,
            'AveragePrice':AP
        })
    }else{
        let j=0;
        for(let i=0 ; i<buyStock.length ; i++){
            if(buyStock[i].Name == stk){
                buyStock[i].Quantity = buyStock[i].Quantity + qty;
                buyStock[i].InvestedAmount = buyStock[i].InvestedAmount + IA;
                buyStock[i].AveragePrice = buyStock[i].AveragePrice + IA;
                j=1;
                break;
            }
        }
        if(j==0){
            buyStock.push({
                'Name':stk,
                'Quantity':qty,
                'InvestedAmount':IA,
                'AveragePrice':AP
            })
        }
    }
    tableRow();
    
    document.getElementById('myModal').style.display = 'none';
}

function tableRow(){
    console.log('buyStock:'+JSON.stringify(buyStock));
    document.getElementById('table').innerHTML = '';
    let totalAmount =0;
    let str = '';
    for(let i=0 ; i<buyStock.length ; i++){
        AP = buyStock[i].InvestedAmount / buyStock[i].Quantity;
        totalAmount = totalAmount + buyStock[i].InvestedAmount;
        str+=    `
            <tr>
                <td>${buyStock[i].Name}</td>
                <td>${buyStock[i].InvestedAmount}</td>
                <td>${buyStock[i].Quantity}</td>
                <td>${AP}</td>
            </tr>
        `;
    }
    document.getElementById('investedAmount').innerText = totalAmount;
    document.getElementById('table').innerHTML = str;
}

function uploadFileSubmitFunction(){
    if(count ==0){
        count=1;
        for(let i=0 ; i<obj.length ; i++){
            StockList.push({'StockName':obj[i].StockName,'StockPrice':obj[i].Price});
        }
        for(let i=0 ; i<StockList.length ; i++){
            document.getElementById('stockList').innerHTML +=`
                <option value="${StockList[i].StockName}" style="color: #000000;">${StockList[i].StockName}</option>
            `;
        }
    }else{

    }
    document.getElementById('myModal1').style.display = 'none';
}