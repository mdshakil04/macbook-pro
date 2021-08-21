// memory js

function memoryCost(number){
    const memoryCost = document.getElementById('memory-extra-cost');
    memoryCost.innerText = number;
    const increase = parseInt(memoryCost.innerText);
    const bestPrice = document.getElementById('default-price');
    const bestPriceInput = bestPrice.innerText;
    bestPrice.innerText = parseInt(bestPriceInput);
    const totalPrice = document.getElementById('total-price');
    const totalInput = totalPrice.innerText;
    totalPrice.innerText = parseInt(bestPriceInput) + parseInt(increase);
    const lastTotal = document.getElementById('total-last');
    lastTotal.innerText = totalPrice.innerText;
}
document.getElementById('memory-sixteen').addEventListener('click',function(){
    memoryCost(180);
});
document.getElementById('memory-eight').addEventListener('click',function(){
      memoryCost(0); 
});

// storage js

function storageCost(gb){
    const storageCost = document.getElementById('storage-extra-cost');
    storageCost.innerText = gb;
    const storageIncrease = parseInt(storageCost.innerText);
    const bestPrice = document.getElementById('default-price');
    const bestPriceInput = bestPrice.innerText;
    bestPrice.innerText = parseInt(bestPriceInput);

    const totalPrice = document.getElementById('total-price');
    const totalInput = parseInt(totalPrice.innerText);

    totalPrice.innerText =parseInt(totalInput) + parseInt(storageIncrease);
    const lastTotal = document.getElementById('total-last');
    lastTotal.innerText = totalPrice.innerText;
}
document.getElementById('first-storage').addEventListener('click',function(){
    storageCost(0);
});
document.getElementById('second-storage').addEventListener('click',function(){
    storageCost(100);
});
document.getElementById('third-storage').addEventListener('click',function(){
    storageCost(180);
});

// delivery js
document.getElementById('free-delivery').addEventListener('click', function(){
    const memoryText = document.getElementById('memory-extra-cost');
    const memoryAmount = memoryText.innerText;
    const deliveryInput = document.getElementById('delivery-charge');
    deliveryInput.innerText =0;
    const bestPrice = document.getElementById('default-price');
    const bestPriceInput = bestPrice.innerText;
    bestPrice.innerText = parseInt(bestPriceInput);
    const storageTotal = document.getElementById('storage-extra-cost');
    const storagePriceTotal = storageTotal.innerText;
    const fixedTotal = document.getElementById('total-price');
    const fixedTotalInput = fixedTotal.innerText;
    fixedTotal.innerText = parseInt(memoryText.innerText) + parseInt(deliveryInput.innerText) + parseInt(bestPrice.innerText) + parseInt(storageTotal.innerText);
    const lastTotal = document.getElementById('total-last');
    lastTotal.innerText = fixedTotal.innerText;
});

document.getElementById('paid-delivery').addEventListener('click', function(){
    const memoryText = document.getElementById('memory-extra-cost');
    const memoryAmount = memoryText.innerText;
    const deliveryInput = document.getElementById('delivery-charge');
    deliveryInput.innerText = 20;
    const bestPrice = document.getElementById('default-price');
    const bestPriceInput = bestPrice.innerText;
    bestPrice.innerText = parseInt(bestPriceInput);
    const storageTotal = document.getElementById('storage-extra-cost');
    const storagePriceTotal = storageTotal.innerText;
    const fixedTotal = document.getElementById('total-price');
    const fixedTotalInput = fixedTotal.innerText;
    fixedTotal.innerText = parseInt(memoryText.innerText) + parseInt(deliveryInput.innerText) + parseInt(bestPrice.innerText) + parseInt(storageTotal.innerText);
    const lastTotal = document.getElementById('total-last');
    lastTotal.innerText = fixedTotal.innerText;
});
// promo code js
document.getElementById('submit-btn').addEventListener('click', function () {
    const inputText = document.getElementById('promo-input');
    const inputValue = inputText.value;
    if (inputValue == 'stevekaku') {
        const fixedTotal = document.getElementById('total-price');
        const fixedTotalInput = parseInt(fixedTotal.innerText);
        const lastTotal = document.getElementById('total-last');
        const lastInput = parseInt(lastTotal.innerText);
        lastTotal.innerText = parseFloat(fixedTotalInput - fixedTotalInput * (20 / 100));
    }
    inputText.value = '';
});

// Alhamdulillah //
