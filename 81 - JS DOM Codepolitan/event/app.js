const button = document.querySelector('#clickme');
// mengambil isi query 1 aja


button.onclick = function () {  //.onclick adalah salah satu event dom
	console.log('You clicked me');
};

const scream = () => {
	console.log('Dont touch me');
};

button.onmouseover = scream;  // event ketika mengarahkan kursor ke atas objek ini akan menamppilkan output sesuai dengan fungsi

const eventbtn = document.querySelector('#eventbtn');
eventbtn.addEventListener('click', stepSatu);
eventbtn.addEventListener('click', stepDua);
// addListener digunakan untuk pemanggilan 2 atau lebih fungsi sekaligus

// .onclick hanya dapat memiliki 1 fungsi saja


function stepSatu() {
	console.log('step satu');
}

function stepDua() {
	console.log('step dua');
}

// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;
