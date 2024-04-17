var view = document.getElementById('display');
var signview = document.getElementById('signdisplay');
var subview = document.getElementById('subdisplay');

var num = document.getElementsByClassName('number-btn');
var sign = document.getElementsByClassName('sign-btn');
var result=document.getElementById('result');

result.addEventListener('click', function(){
    view.innerHTML = eval(subview.innerHTML + signview.innerHTML + view.innerHTML);
    signview.innerHTML = "";
    subview.innerHTML = "";
})

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function(){
        view.append(this.value);
    })
}

for (let i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', function(){
        signview.innerHTML = this.value;
        subview.innerHTML = view.innerHTML;
        view.innerHTML = "";
    });
}

clearBtn.addEventListener('click', function(){
    signview.innerHTML = "";
    subview.innerHTML = "";
    view.innerHTML = "";
});