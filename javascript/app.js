 // set colors by name
 let linkColors = document.querySelectorAll('.link')
 linkColors.forEach(function(item){
     item.style.color = item.textContent
 })

 // set link color to background
 const links = document.querySelectorAll('.link')
 links.forEach(function(item){
     item.addEventListener('click', function(){
         document.querySelector('body')
         .style.backgroundColor = item.textContent

         document.querySelector('.colors button')
         .style.color = item.textContent

         document.querySelector('.colors button')
         .textContent = item.textContent
     })
 })

 // set random color
 function randomColor(){
     let hex = ['1','2','3','4',
     '5','6','7','8','9','A','B',
     'C','D','E','F']

     let hash = '#'
     let color = ''

     for (let i = 0; i < 6; i++){
         let random = Math.floor(hex.length * Math.random())
         color = color + hex[random]
     }

     return hash + color
 }
 
 function make(){

     const setColor = randomColor()

     document.querySelector('.colors button')
     .textContent = setColor

     document.querySelector('.colors button')
     .style.color = setColor

     document.querySelector('body')
     .style.backgroundColor = setColor
 }

 
 function multiColor(){

     for (let i = 0; i < 1000; i++) {
         
        let setColor = randomColor()
        let div = document.createElement('div')
        div.setAttribute('class','btn')
        div.textContent = setColor
        div.style.backgroundColor = setColor

        document.querySelector('.multi-color')
        .appendChild(div)

    }

} 


multiColor()