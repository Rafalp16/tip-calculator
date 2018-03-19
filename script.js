function calculateTip() {
    let price = document.getElementById('bill-price').value;
    let rating = document.getElementById('bill-rating').value;
    let people = document.getElementById('bill-people').value;
    
    if(price === "" || price === "0") {
        alert("Wrong bill value");
        return;
    }else if(rating === "") {
        alert("Pick service rating!");
        return;
    }else {
        document.getElementById('answer-box__text').innerHTML = "Your tip is: ";
        if(people === "" || people === "1" || people === "0") {
            people = "1";
        }
        let tip = price * rating / people;
        tip = Math.round(tip * 100) / 100;
        tip = tip.toFixed(2);
        document.getElementById('answer-box__tip').innerHTML = tip;
        document.getElementById('answer-box__text2').innerHTML = "$";
        if(people !== "1") {
            document.getElementById('answer-box__text3').innerHTML = "Each";   
        }
    }
}
