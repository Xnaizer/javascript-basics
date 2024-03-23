// .checked = property yang mengambil suatu input dari radio dan checkedbox di hmtl

const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");

mysubmit.onclick = function(){
    if(visabtn.checked){
        result.textContent = "pembayaran menggunakan visa";
    }
    else if(masterbtn.checked){
        result.textContent = "pembayaran menggunakan master card";
    }
    else if(paypalbtn.checked){
        result.textContent = "pembayaran menggunakan paypal";
    }
    else {
        result.textContent = " Please select a option";
    }
}