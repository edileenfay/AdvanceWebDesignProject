let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Remote Raid Pass',
        image: '1_1.jpg',
        price: 195
    },
    {
        id: 2,
        name: 'Premium Battle Pass',
        image: '2_2.jpg',
        price: 100
    },
    {
        id: 3,
        name: 'Egg Incubator',
        image: '3_3.jpg',
        price: 150 
    },
    {
        id: 4,
        name: 'Unlimited Egg Incubator',
        image: '4_4.jpg',
        price: 200
    },
    {
        id: 5,
        name: 'Poffin',
        image: '5_5.jpg',
        price: 100
    },
    {
        id: 6,
        name: '20 Poke Ball',
        image: '6_6.jpg',
        price: 100
    },
    {
        id: 7,
        name: 'Lure Module',
        image: '7.jpg',
        price: 200
    },
    {
        id: 8,
        name: 'Incense',
        image: '8.jpg',
        price: 150
    },
    {
        id: 9,
        name: 'Lucky Egg',
        image: '9.webp',
        price: 80
    },
    {
        id: 10,
        name: 'Bag Upgrade',
        image: '10.webp',
        price: 80
    },
    {
        id: 11,
        name: 'Razz Berry',
        image: '11.webp',
        price: 90   
    },
    {
        id: 12,
        name: 'Camera',
        image: 'Pokemon-Go-Snapshot.png.avif',
        price: 90   
    },
    {
        id: 13,
        name: '100 PokeCoins',
        image: '13.jpg',
        price: 150   
    },
    {
        id: 14,
        name: '500 PokeCoins',
        image: '14.jpg',
        price: 500   
    },
    {
        id: 15,
        name: 'Pokemon Storage Upgrade',
        image: '18.webp',
        price: 200   
    },
    {
        id: 16,
        name: 'Potion',
        image: '16.webp',
        price: 100  
    },
    {
        id: 17,
        name: 'Max Potion',
        image: '17.jpg',
        price: 300   
    },
    {
        id: 18,
        name: 'Super Potion',
        image: '19.jpg',
        price: 200   
    },
    {
        id: 19,
        name: 'Mystery Box',
        image: '20.webp',
        price: 250   
    },
    {
        id: 20,
        name: 'Star Piece',
        image: '22.png',
        price: 100   
    },
    {
        id: 21,
        name: 'Rare Candy',
        image: '23.webp',
        price: 60   
    },
    {
        id: 22,
        name: 'Daily Adventure Incense',
        image: '24.avif',
        price: 50   
    },
    {
        id: 23,
        name: 'Revive',
        image: '25.avif',
        price: 90   
    },
    {
        id: 24,
        name: 'Max Revive',
        image: '26.avif',
        price: 80
    },
    {
        id: 25,
        name: 'Sun Stone',
        image: '27.jpg',
        price: 50   
    },
    {
        id: 26,
        name: 'Great Ball',
        image: '28.jpg',
        price: 80   
    },
    {
        id: 27,
        name: 'Ultra Ball',
        image: '29.avif',
        price: 120   
    },
    {
        id: 28,
        name: 'Nanab Berry',
        image: '30.avif',
        price: 30   
    },
    {
        id: 29,
        name: 'Pinap Berry',
        image: '31.avif',
        price: 40   
    },
    {
        id: 30,
        name: 'Golden Berry',
        image: '32.avif',
        price: 60   
    },


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="./${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
      
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}






function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('input[type="submit"]');
    
    signUpButton.addEventListener('click', () => {
        showNotification('Sign-up successful!');
    });
});




$(document).ready(function() {
    $('div[align=left]').remove();
  });





  function checkout() {
    
    alert('Proceeding to checkout...');
    
    window.location.href = openmodal();
}



function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    const paymentOptions = document.getElementById('paymentOptions');
    paymentOptions.innerHTML = `
        <div class="payment-option" onclick="selectPayment('creditCard')">
            <i class="far fa-credit-card"></i> Credit Card
        </div>
        <div class="payment-option" onclick="selectPayment('paypal')">
            <i class="fab fa-paypal"></i> PayPal
        </div>
    `;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function selectPayment(paymentMethod) {
    alert(`Selected Payment Method: ${paymentMethod}`);
}
