// $.getJSON("storage.JSON", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// fetch("storage.JSON") // Call the fetch function passing the url of the API as a parameter
// .then(function(data) {
//  console.log(data.response.blob);

//     // Your code for handling the data you get from the API
// })
// .catch(function() {
//     // This is where you run code if the server returns any errors
// });
// function to handle success
var data;
var x = 0;
function success() {

    data = JSON.parse(this.responseText); //parse the string to JSON
    var temp =1;
  var div1 = document.createElement('div');
         div1.classList.add("item","active");
         var div2 = document.createElement('div');
         var na  = "khaja"
        div2.classList.add("row",na);
  for(var i=0;i<data.Product.length;i++)
  {
   $("."+na).append(`
            <div class="col-sm-3">
                            <div class="col-item">
                                <div class="info">
                                    <div class="row row-md-sm row-md-6 row-xs-6 row-sm-6" >
                                        <div class="price col-md-sm col-md-6 col-xs-6 col-sm-6">
                                            <h5>ID: ${data.Product[i].id}</h5>
                                            <h5>${data.Product[i].name}</h5>
                                            <h5 class="price-text-color">${data.Product[i].price}</h5>
                                        </div>
                                        <div class="rating hidden-sm col-md-sm col-md-6 col-xs-6 col-sm-6">
                                            <i class="price-text-color fa fa-star"></i>
                                            <i class="price-text-color fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="photo">
                                    <img src="${data.Product[i].photo}" class="img-responsive col-md-sm col-md-6 col-xs-6 col-sm-6" alt="a" />
                                </div>
                                <div class="info">
                                    <div class="separator clear-left">
                                        <p class="btn-add">
                                            <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a>
                                        </p>
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a>
                                        </p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>

                          `);
    div1.appendChild(div2);
         document.getElementsByClassName("carousel-inner")[0].appendChild(div1);
  if(temp % 4 == 0)
    {
        div1 = document.createElement('div');
         div1.classList.add("item");
         div2 = document.createElement('div');
         na  = "titti"+i
         div2.classList.add("row",na);

    }    
    temp++; 
  }

}

// function to handle error
function error(err) {
}

var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error;  // call error function if request failed
xhr.open('GET', 'storage.JSON'); // open a GET request
xhr.send(); // send the request to the server.

// document.addEventListener("DOMContentLoaded", getdata());
// document.addEventListener("DOMContentLoaded", populatedata());

// var xhttp = new XMLHttpRequest();
// var txt = "";
// var price = []; 

// function getdata(){

// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var dataobj = JSON.parse(xhttp.response); 
//       localStorage.setItem('dataobj', JSON.stringify(dataobj));
//       document.getElementById("product-list").innerHTML = dataobj.photo+ " " +dataobj.name+ " " + dataobj.category+ " " + dataobj.price;
      
//     } 
//   };
//   xhttp.open("GET", "storage.json", true);
//   xhttp.send();
// }

// function populatedata(){
// var dataobj = JSON.parse(localStorage.getItem('dataobj')); 

// Object.keys(dataobj).forEach((key) => {
//     for (let i = 0; i < dataobj[key].length; i++){
//       txt += dataobj.Product[i].photo;
//       txt += dataobj.Product[i].category + dataobj.Product[i].name;
//       txt += dataobj.Product[i].price;
//  console.log(dataobj[key][i].id);
//  document.getElementById('product-col').innerText = dataobj[key][i].id;
// }   
// });
// }

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



 //  $.each(gbooks, function(i, book) {
 //    appendToBooksTable(book);
 //  });
 // function appendToBooksTable(book) 
 //  {
 //  }
  


