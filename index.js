var elemm = document.querySelectorAll('.product_image img')
var elemm2 = document.querySelectorAll('.info .title')
var data = []
for (let i = 0; i < elemm.length; i++) {
    elemm[i].style = 'width: 50px !important;'
    data.push([elemm[i].src,elemm2[i].innerHTML])
}

console.log(data)