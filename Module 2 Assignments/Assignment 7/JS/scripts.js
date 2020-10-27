$('textarea').keypress(function(e) {
    var tval = $('textarea').val(),
        tlength = tval.length,
        set = 250,
        remain = parseInt(set - tlength);
        show = 'Remaining Character:' + ' '+ remain;
$('.remaining').text(show);
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('textarea').val((tval).substring(0, tlength - 1))
    }
})

function postthis() {
    let username = document.getElementById('name').value;
    let text = document.getElementById('text').value;
    let show = username + ':' + ' ' + text;
    $('.posting').text(show);
    /*document.getElementById('posting').innerHTML = username + ':' + ' ' + text; alternative method */
    if (username === '' || text === '') {
        alert('Please fill up the form before submitting');
        return true;
    }
        else {
            return false;
        }
}

/* i tried using jquery method */
/*
$('textarea').keypress(function(e){
    let text = $('textarea').val(),
    textChar = text.value,
    username = $('#name').val(),
    user = username.value,
    show = user + ':' + ' ' + textChar;
    $('#postit').text(show); 
     
    
})

/* i tried using event listener method */
/*
/* let name = document.getElementById('name').value; */
/* let text = document.getElementById('text').value; */
/* let btn = document.getElementById('btn'); */


/*btn.addEventListener('click', function(name, text){ */
/*    alert( name + text);
})
*/


