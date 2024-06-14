
const product = {
    plainBurger: {
       name: 'GAMBURGER',
       price: 10000,
       amount: 0,
       kcall: 400,
       get calcSum() {
        return this.price * this.amount
       },
       get calcKcall() {
        return this.kcall * this.amount
       }
       
   },
   freshBurger: {
    name: 'GAMBURGER FRESH',
    price: 20500,
    amount: 0,
    kcall: 600,
    get calcSum() {
        return this.price * this.amount
       },
       get calcKcall() {
        return this.kcall * this.amount
       }
   },
   freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    amount: 0,
    kcall: 800,
    get calcSum() {
        return this.price * this.amount
       },
    get calcKcall() {
        return this.kcall * this.amount
    }
   }
}

const btn = document.querySelectorAll('.main__product-btn');

// console.log(btn.length)

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
      
        prepere(this)
    })
}

function prepere(el) {

    let parent = el.closest('.main__product');
    let parentID = parent.getAttribute('id');
    let sym = el.getAttribute('data-symbol')
    let num = parent.querySelector('.main__product-num')
    let amount = product[parentID].amount
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')


    if(sym == '+' && amount < 10) {
        amount++
    //    num.innerHTML++
    } else if(sym == '-' && amount > 0){
        amount--
        // num.innerHTML--
    }

    num.innerHTML = amount
    product[parentID].amount = amount

    price.innerHTML = product[parentID].calcSum
    kcall.innerHTML = product[parentID].calcKcall
}


let addCart = document.querySelector('.addCart');
let receipt = document.querySelector('.receipt')
let receiptWindow = receipt.querySelector('.receipt__window')
let receiptWindowOut = receipt.querySelector('.receipt__window-out')
let receiptWindowBbtn = receipt.querySelector('.receipt__window-btn')

addCart.addEventListener('click', function() {
    receipt.style.display = 'flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '10%'
    }, 300);

    let menu = `Your cart:\n `
    let totalPrice = 0;
    let totalKcall = 0;

    for (const key in product) {
       if(product[key].amount) {
        menu = menu + `${product[key].name} ${product[key].amount} dona \n`
        totalPrice = totalPrice + product[key].calcSum
        totalKcall = totalKcall + product[key].calcKcall

       } 
    }

    receiptWindowOut.innerHTML = `${menu}\n Total price: ${totalPrice}\n Colories: ${totalKcall}`
})

    receiptWindowBbtn.addEventListener('click' , function () {
        location.reload()
    })

