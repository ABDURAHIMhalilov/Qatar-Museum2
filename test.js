var title_text = document.querySelectorAll(".title");
var title_price = document.querySelectorAll(".money");
var product_image = document.querySelectorAll(".product_image");
var asdasd= []
for (let i = 0; i < title_text.length; i++) {
  for (let j = 0; j < title_price.length; j++) {
      var dataa = {
        type: "From Hakata (Fukuoka)",
        title: title_text[i].innerHTML,
        price: title_price[j].innerHTML,
        img: undefined
      };
      asdasd.push(dataa)
  }
}
console.log(asdasd);