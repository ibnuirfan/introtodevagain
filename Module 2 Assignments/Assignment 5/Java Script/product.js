
document.addEventListener("DOMContentLoaded", getdata());
document.addEventListener("DOMContentLoaded", populatedata());

var xhttp = new XMLHttpRequest();
var txt = "";
var price = []; 

function getdata(){

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataobj = JSON.parse(xhttp.response); 
      localStorage.setItem('dataobj', JSON.stringify(dataobj));
      /*document.getElementById("product-list").innerHTML = dataobj.photo+ " " +dataobj.name+ " " + dataobj.category+ " " + dataobj.price;
      */
    } 
  };
  xhttp.open("GET", "storage.json", true);
  xhttp.send();
}

function populatedata(){
var dataobj = JSON.parse(localStorage.getItem('dataobj')); 

Object.keys(dataobj).forEach((key) => {
    for (let i = 0; i < dataobj[key].length; i++){
      txt += dataobj.Product[i].photo;
      txt += dataobj.Product[i].category + dataobj.Product[i].name;
      txt += dataobj.Product[i].price;
 console.log(dataobj[key][i].id);
 document.getElementById('product-col').innerText = dataobj[key][i].id;
}   
});
}

//document.getElementById('productid').value = products[key][i].productID; 
  

/*function productTemplate(product){
    return `
 <div class="listing">
 <img class="product-photo" src="${Product.photo}">
 <h2>${Product.name}<span class="category">(${Product.category})</span></h2>
 </div>
 `
}

document.getElementById("product-list").innerHTML= `
<h1 class="product-title">Collections()</h>
${Product.map(function() {}).join('')}`
*/