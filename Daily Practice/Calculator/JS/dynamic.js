/* using this method works but im just stuck at equal which the part
where i can tabulate the results */
function buttonValue(val){
        document.getElementById('screen').value += val;
    }
function operator(val){
        document.getElementById('screen').value += val;
}    
function clearValue(){
        document.getElementById('screen').value = '';
}
function backspaceValue(){
    let value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}
// i can't seems to get the equal button for most part
function buttonEqual(){
    let value = document.getElementById("screen").value;
    document.getElementById('screen').value = value.eval(0,value.length);
}

/* test the display with number button click using parse method
but i don't know how to continue from here
function buttonValue(val){
        document.getElementById('screen').value = parseInt(val);
    }
}

/* this is the initial coding
const buttons = document.querySelectorAll('.btn')
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const backspaceBtn = document.querySelector('.btn-backspace');

for(let i=0;i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        let number = buttons[i].getAttribute('value');
        screen.value += number;
    })
}

equalBtn.addEventListener('click', function(){
    let answer = eval(screen.answer);
    screen.answer = answer;
})

backspaceBtn.addEventListener('click', function(){
    screen.value -= number;
})
clearBtn.addEventListener('click', function()
{
    screen.value = '';
})
*/
