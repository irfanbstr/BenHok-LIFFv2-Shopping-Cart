var n_food = document.querySelector('#foodquantity');
var n_drink = document.querySelector('#drinkquantity'); 
var message_text = '';
var price = 0;
const foodprice = 30000;
const drinkprice = 10000;

const minusbtn1 = document.querySelector('#minus-btn1');
minusbtn1.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('Clicking minus 1!!')
    var num = parseInt(n_food.value)
    if (num > 0)
    {
        num = num-1
        n_food.value = `${num}`;
    }
    else
    {
        n_food.value = 0;
    }
});

const minusbtn2 = document.querySelector('#minus-btn2');
minusbtn2.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('Clicking minus 2!!')
    var num = parseInt(n_drink.value)
    if (num > 0)
    {
        num = num-1
        n_drink.value = `${num}`;
    }
    else
    {
        n_drink.value = 0;
    }
});

const plusbtn1 = document.querySelector('#plus-btn1');
plusbtn1.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('Clicking plus 1!!')
    var num = parseInt(n_food.value)
    num = num+1
    n_food.value = `${num}`;
});

const plusbtn2 = document.querySelector('#plus-btn2');
plusbtn2.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('Clicking plus 2!!')
    var num = parseInt(n_drink.value)
    num = num+1
    n_drink.value = `${num}`;
});

// const orderbtn = document.querySelector('#order-btn1');
// orderbtn.addEventListener('click', (e) => {
//     e.preventDefault;
//     console.log('Clicking order!!')
//     price = parseInt(n_food.value)*foodprice + parseInt(n_drink.value)*drinkprice;
//     message_text = `Kamu memesan Makanan berjumlah ${parseInt(n_food.value)} dan Minuman berjumlah ${parseInt(n_drink.value)}, dengan total harga Rp${price}.`;
//     console.log(message_text);
// });