

let buy = document.querySelectorAll('.multi-color .btn')
let database = []
buy.forEach(function(item){
    database.push(item.textContent)
})

let cart = ['yellow','brown','grey']
function updateCart(){
    document.querySelector('.cart-amout').textContent = cart.length
}

function show(){

    for (let i = 0; i < cart.length; i++){
        

        let div = document.createElement('div')
        div.setAttribute('class','row')
        let prod = `
            <div class="id">${i}</div>
            <div class="prod-name">${cart[i]}</div>
            <div class="prod-price">R40</div>
        `
        div.innerHTML = prod

        document.querySelector('.cart-show').appendChild(div)

    }

}

buy.forEach(function(item, index){
    item.addEventListener('click',function(){

        cart.push(database[index])
        alert('item added')
        updateCart()
    })
})



show()
updateCart()