var btadd = document.getElementById("add");
var btcancel = document.getElementById("cancel");

var hoten = document.getElementsByName("hoten")[0];
var tuoi = document.getElementsByName("tuoi")[0];
var mau = document.getElementsByName("mau")[0];
let result = document.getElementById("result");

var data = new Array();
var count = 0;

btadd.addEventListener("click", function() {
    let obj = new Array (count, hoten.value, tuoi.value, mau.value);
    data.push(obj);
    let tnode = document.createElement("button");
    tnode.setAttribute("id", count);
    tnode.setAttribute("class", "btn");
    tnode.textContent = hoten.value;
    tnode.style.backgroundColor = mau.value;
    result.appendChild(tnode);
    count++;
});

btcancel.addEventListener("click", reset);


function reset() {
    hoten.value = "";
    tuoi.value = 0;
    mau.value = "";
}

// var data = new Array();
// var count = 0;

// let hoten=document.getElementsByName("hoten") [0];
// let tuoi=document.getElementsByName("tuoi") [0];
// let mau=document.getElementsByName("mau") [0];
// let btadd=document.getElementById("add");
// let btcancel=document.getElementById("cancel");
// let result = document.getElementById("result");

// btadd.addEventListener("click", function(){

// let tobj = new Array (count, hoten.value, tuoi.value, mau.value);
// data.push(tobj);
// let tnode = document.createElement("button");
// tnode.setAttribute("id", count);
// tnode.setAttribute("class", "btn m-3");
// tnode.textContent = hoten.value;
// tnode.style.backgroundColor = mau.value;
// tnode.addEventListener("click", function(){
//     let id = this.id;
//     let index = 0;
//     for(let i=0; i<data.length; i++)
//     if(data[i] [0] == id){
//         index = i;
//         break;
//     }
//     hoten.value = data[index] [1];
//     tuoi.value = data[index] [2];
//     mau.value = data[index] [3];
// });
// //tuoi.addEventListener("")
// result.appendChild(tnode)
// count++;
// });
// btcancel.addEventListener("click", function(){
//     hoten.value = "";
//     tuoi.value = 0;
//     mau.value = "";
// });