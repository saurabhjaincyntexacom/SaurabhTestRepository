function click(){
    let nameField = document.getElementById('nameField').value;
    let companyField = document.getElementById('companyField').value;

    let n = ""+nameField;
    let c = ""+companyField;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 00D2w00000GYTju!AQ8AQEVxT20B9xwSCmm6T0vyvwGYAQNupQiiak3pDbeBnRXLYmOdFWqvfcfQ0dBkarfNtOWf4MiBMsLGVKw0AZDAxuo4ZwJd");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "BrowserId=kpMzR3rQEe2TBj07q_nh1Q; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1");

    var raw = JSON.stringify({
        "Name": n,
        "Company": c
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://cyntexa-c-dev-ed.develop.my.salesforce.com/services/apexrest/CreateLeadRecord/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }