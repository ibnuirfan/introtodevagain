
function sumofarray(array_1,array_2){
    var sum = [];
    for ( var i = 0; i < Math.max(array_1.length, array_2.length); i++){
        sum.push((array_1[i] || 0) + (array_2[i] || 0));
    }
    return document.getElementById('result').innerText= 'The result will be:'+ ' ' + sum;
}



