let products =  [
    {
      "proNumber":"p1",
      "name": "Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
      "Description": "Processor: MediaTek Helio G25 Octa-core Up to 2.0GHz clock speed; Camera: 13 MP Rear camera with AI portrait| 5 MP front camera; Display: 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio; Battery: 5000 mAH large battery with 10W wired charger in-box; Memory, Storage & SIM: 2GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      "price": "6999",
      "Average_Rating": 4,
      "Best_Rating": 3,
      "image": "https://i.ibb.co/J2RhfP1/image.png"
    },
    {
      "proNumber":"p2",
      "name": "Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate",
      "Description": "Camera: 48MP+5MP+2MP+2MP Quad camera setup- True 48MP (F 2.0) main camera + 5MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 8MP (F2.2) front came;  6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase;  Android 11, v11.0 operating system,One UI 3.1, with 8nm Power Efficient Exynos850 (Octa Core 2.0GH; 16.55 centimeters (6.5-inch) HD+ TFT LCD - infinity v-cut display,90Hz screen refresh rate, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color; Memory, Storage & SIM: 4GB RAM | 64GB internal memory expandable up to 1TB| Dual SIM (nano+nano) dual-standby (4G+4)",
      "price": "11499",
      "Average_Rating": 4,
      "Best_Rating": 4,
      "image": "https://i.ibb.co/0hV1sD2/image.png"
    },
    {
      "proNumber":"p3",
      "name": "Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear Earphones with mic (Reverb Red)",
      "Description": "The Bass Edition comes equipped with Bluetooth v5.0 and is fully compatible with all smartphones. IP55 Water & Sweat Resistance. Bluetooth range : Up to 33ft (10m)     Warp Charge: Charge for 10 minutes, enjoy 10 hours worth of music playback; Massive playtime of up to 17 hours after a full charge; Environmental noise-cancelling algorithm-enabled microphone for perfect calls; With convenient features like Quick Switch, Quick Pair and Magnetic Control, listening to your music on your Bullets Wireless Z Bass Edition is a whole new acoustic experience Low latency Mode",
      "price": "1999",
      "Average_Rating": 4,
      "Best_Rating": 4,
      "image": "https://i.ibb.co/mSmpk83/image.png"
    }
  ];
console.log(products.length);

for(let i=0 ;i<products.length ; i++){
    let str1 = '';
    for(let j=0 ; j<parseInt(products[i].Best_Rating) ; j++){
        console.log(j);
        str1 += '<span class="fa fa-star checked"></span>';
    }
    for(let j=0 ; j<(5-parseInt(products[i].Best_Rating)) ; j++){
        str1 += '<span class="fa fa-star"></span>';
    }
    let str2 = '';
    for(let j=0 ; j<parseInt(products[i].Average_Rating) ; j++){
        console.log(j);
        str2 += '<span class="fa fa-star checked"></span>';
    }
    for(let j=0 ; j<(5-parseInt(products[i].Average_Rating)) ; j++){
        str2 += '<span class="fa fa-star"></span>';
    }
    document.getElementById('productList').innerHTML +=`
    <div style="width: 500px;height:200px;border:1px solid black;margin-top:10px;">
        <img src=${products[i].image} alt="" height="100px">
        <p style="margin-left: 100px;margin-top:-100px;" title=${products[i].proNumber} onclick="descriptionFunction(event)">${products[i].name}</p>
        <p style="margin-left: 100px;margin-top:-10px;">Best Rating:`+str1+`</p>
        <p style="margin-left: 100px;margin-top:-10px;">Average Rating:`+str2+`</p>
        <p style="color: maroon;margin-left:100px;">${products[i].price}</p>
        <button style="background-color: green;border-color: green;margin-left:400px;" id=${products[i].proNumber} value=${products[i].proNumber} onclick="addToCartFunction(event)">Add to Cart</button>
    </div>
    `
}

let cartList = [];

function addToCartFunction(event){
    console.log(event.target.value);
    let val = event.target.value;
    document.getElementById(val).style.visibility = 'hidden';
    for(let i=0 ;i<products.length ; i++){
        if(products[i].proNumber == val){
            cartList.push(products[i]);
        }
    }
    str = '';
    for(let i=0 ; i<cartList.length ; i++){
        let str1 = '';
    for(let j=0 ; j<parseInt(products[i].Best_Rating) ; j++){
        console.log(j);
        str1 += '<span class="fa fa-star checked"></span>';
    }
    for(let j=0 ; j<(5-parseInt(products[i].Best_Rating)) ; j++){
        str1 += '<span class="fa fa-star"></span>';
    }
    let str2 = '';
    for(let j=0 ; j<parseInt(products[i].Average_Rating) ; j++){
        console.log(j);
        str2 += '<span class="fa fa-star checked"></span>';
    }
    for(let j=0 ; j<(5-parseInt(products[i].Average_Rating)) ; j++){
        str2 += '<span class="fa fa-star"></span>';
    }
        str += `
        <div style="width: 500px;height:200px;border:1px solid black;margin-top:10px;">
            <img src=${cartList[i].image} alt="" height="100px">
            <p style="margin-left: 100px;margin-top:-100px;">${cartList[i].name}</p>
            <p style="margin-left: 100px;margin-top:-10px;">Best Rating:`+str1+`</p>
            <p style="margin-left: 100px;margin-top:-10px;">Average Rating:`+str2+`</p>
            <p style="color: maroon;margin-left:100px;">${cartList[i].price}</p>
            <button style="background-color: green;border-color: green;margin-left:400px;" value=${cartList[i].proNumber} onclick="removeToCartFunction(event)">Remove</button>
        </div>
        `
    }
    console.log(cartList);
    document.getElementById('cartList').innerHTML = str;
}

function cartViewFuncton(){
    document.getElementById("myModal").style.display = "block";
}

function removeToCartFunction(event){
    console.log(event.target.value);
    let val = event.target.value;
    document.getElementById(val).style.visibility = 'visible';
    for(let i=0 ; i<cartList.length ; i++){
        if(cartList[i].proNumber == val){
            cartList.splice(i,1);
        }
    }

    str = '';
    for(let i=0 ; i<cartList.length ; i++){
        let str1 = '';
    for(let j=0 ; j<parseInt(products[i].Best_Rating) ; j++){
        console.log(j);
        str1 += '<span class="fa fa-star checked"></span>';
    }
    for(let j=0 ; j<(5-parseInt(products[i].Best_Rating)) ; j++){
        str1 += '<span class="fa fa-star"></span>';
    }
    let str2 = '';
    for(let j=0 ; j<parseInt(products[i].Average_Rating) ; j++){
        console.log(j);
        str2 += '<span class="fa fa-star checked"></span>';
    }
    for(let j=0 ; j<(5-parseInt(products[i].Average_Rating)) ; j++){
        str2 += '<span class="fa fa-star"></span>';
    }
        str += `
        <div style="width: 500px;height:200px;border:1px solid black;margin-top:10px;">
            <img src=${cartList[i].image} alt="" height="100px">
            <p style="margin-left: 100px;margin-top:-100px;">${cartList[i].name}</p>
            <p style="margin-left: 100px;margin-top:-10px;">Best Rating:`+str1+`</p>
            <p style="margin-left: 100px;margin-top:-10px;">Average Rating:`+str2+`</p>
            <p style="color: maroon;margin-left:100px;">${cartList[i].price}</p>
            <button style="background-color: green;border-color: green;margin-left:400px;" value=${cartList[i].proNumber} onclick="removeToCartFunction(event)">Remove</button>
        </div>
        `;}
        document.getElementById('cartList').innerHTML = str;

}

function okFunction(){
    document.getElementById("myModal").style.display = "none";
}

function descriptionFunction(event){
    console.log(event.target.title);
    let val = event.target.title;
    console.log(document.getElementById("myModal1"));
    document.getElementById("myModal1").style.display = "block";
    for(let i=0 ;i<products.length ; i++){
        if(products[i].proNumber == val){
        
        let str1 = '';
        for(let j=0 ; j<parseInt(products[i].Average_Rating) ; j++){
            console.log(j);
            str1 += '<span class="fa fa-star checked"></span>';
        }
        for(let j=0 ; j<(5-parseInt(products[i].Average_Rating)) ; j++){
            str1 += '<span class="fa fa-star"></span>';
        }
        document.getElementById('description').innerHTML =`
        <div>
        <img src=${products[i].image} alt="" height="350px">
        <p style="font-size:18px; margin-left: 360px;margin-top: -333px;">${products[i].name}</p>
        <p style="margin-left: 360px;">Average Rating: `+str1+`</p>
        <p style="margin-left: 360px;">MRP: ${products[i].price}</p>
        <p style="margin-left: 360px;">Description</p>
        <p style="margin-left: 360px;">${products[i].Description}</p>
        </div>
        `
    }
}
}

function descriptionModalCloseFunction(){
    document.getElementById("myModal1").style.display = "none";
}

