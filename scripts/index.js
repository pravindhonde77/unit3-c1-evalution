//store the products array in localstorage as "products"
let arr=JSON.parse(localStorage.getItem("products"))|| []


function Product(n,p,b,t,i){
  this.name=n;
  this.price=p;
  this.brand=b;
  this.type=t;
  this.image=i;
}

  function addProduct(e){
    e.preventDefault()

    let form=document.getElementById("product_form")
    let name=form.name.value;
    // console.log("name:",name);
    let price=form.price.value;
    let brand=form.brand.value
    let type=form.type.value;
    let image=form.image.value;

    let p1=new Product(name,price,brand,type,image)

    arr.push(p1)
    console.log(arr);

    localStorage.setItem("products",JSON.stringify(arr))


  }
