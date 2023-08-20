function addToCart(data){
   const Name = data.childNodes[7].childNodes[1].innerText;

   const addItems = document.getElementById('add-items');
   const p = document.createElement('p');
   const count = addItems.childElementCount;
   p.innerHTML = `${count+1}. ${Name}`;
   addItems.appendChild(p);

   const makePurchaseBtn = document.getElementById('make-purchase');
   makePurchaseBtn.removeAttribute('disabled');

    const price = data.childNodes[7].childNodes[3].innerText.split(' ')[0];
    totalPrice(price);
}

function totalPrice(price){
    const previousTotalPriceField = document.getElementById('total-price');
    const previousTotalPrice = previousTotalPriceField.innerText;
    const currentTotalPrice = parseFloat(previousTotalPrice) + parseFloat(price);
    previousTotalPriceField.innerText = currentTotalPrice.toFixed(2);
    if(currentTotalPrice >= 200){
        const applyButton = document.getElementById('apply-btn');
        applyButton.removeAttribute('disabled');
    }
}

document.getElementById('apply-btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    if(inputValue === 'SELL200'){
        const totalPriceInString = document.getElementById('total-price').innerText;
        const totalPrice = parseFloat(totalPriceInString);
        
        const discount = (totalPrice/100)*20;
        document.getElementById('discount-price').innerText = discount.toFixed(2);
        document.getElementById('total').innerText = (totalPrice - discount).toFixed(2) ;
    }
    else{
        alert('Wrong coupon!!!  please enter valid coupon code');
    }
})

function goToHome () { 
    window.location.href = "index.html";
};