document.getElementById('form-tip').addEventListener("submit",
    function(event) {
        event.preventDefault();
        const price = parseFloat(document.getElementById('bill-price').value);
        const rating = parseFloat(document.getElementById('bill-rating').value);
        const people = parseInt(document.getElementById('bill-people').value, 10);
    
        if(isNaN(price) || price <= 0) {
            alert("Wrong bill value");
            return;
        }else if(rating === "" || isNaN(rating)) {
            alert("Pick service rating!");
            return;
        }else if(isNaN(people) || !Number.isInteger(people) || people <= 0) {
            alert("Wrong people value");
            return;     
        }else {
            document.getElementById('answer-box__text').innerHTML = "Your tip is: ";
            let tip = price * rating / people;
            tip = Math.round(tip * 100) / 100;
            tip = tip.toFixed(2);
            document.getElementById('answer-box__tip').innerHTML = tip;
            document.getElementById('answer-box__text2').innerHTML = "$";
            
            people > 1 ? 
                document.getElementById('answer-box__text3').innerHTML = "Each" : document.getElementById('answer-box__text3').innerHTML = "";
        }       
})