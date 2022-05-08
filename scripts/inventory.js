let localData=JSON.parse(localStorage.getItem("products"))
console.log("localData:",localData);

localData.map(function(ele,index){
  let box=document.createElement("div")
  let image=document.createElement("img");
  image.src=ele.image

  let name=document.createElement("p")
  name.innerText=ele.name

  let price=document.createElement("p")
  price.innerText=ele.price

  let brand=document.createElement("p")
  brand.innerText=ele.brand

  let type=document.createElement("p")
  type.innerText=ele.type

  let btn=document.createElement("button")
  btn.innerText='remove product';
  btn.addEventListener("click",function(){
    removeProduct(ele,index)
  })

  box.append(image,name,price,brand,type,btn)

  document.querySelector("#products_data").append(box)

})

function  removeProduct(ele,index){
  console.log(ele,index)
  localData.splice(index,1)
  console.log(localData);
  localStorage.setItem("products",JSON.stringify(localData));
  window.location.reload();
}