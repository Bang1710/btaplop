var data = new Array();
var count = 0;

let hoten=document.getElementsByName("hoten") [0];
let tuoi=document.getElementsByName("tuoi") [0];
let mau=document.getElementsByName("mau") [0];
let btadd=document.getElementById("add");
let btcancel=document.getElementById("cancel");
let result = document.getElementById("result");

btadd.addEventListener("click", function(){

let tobj = new Array (count, hoten.value, tuoi.value, mau.value);
data.push(tobj);

// let tnode = document.createElement("button");
// tnode.setAttribute("id", count);
// tnode.setAttribute("class", "btn m-3");
// tnode.setAttribute("style", "color: white");
if(hoten.value == "") {
    window.alert("Hãy nhập tên !");
    return;
} else if (tuoi.value == 0) {
    window.alert("Hãy nhập tuổi !");
    return;
} else {
    let value = `
    <button id="${count}" class="btn m-3" style="color: white; background-color: ${mau.value};">
    ${hoten.value} có tuổi là ${tuoi.value}
    </button>
    `;
    result.innerHTML += value;
    count++;
}

let tnode = document.querySelectorAll("button");
console.log(tnode);
var mylistnode = Array.from(tnode)
mylistnode.forEach(element => {
    element.addEventListener("click", function() {
        let id = this.id;
    let index = 0;
    for(let i=0; i<data.length; i++)
    if(data[i] [0] == id){
        index = i;
        break;
    }
    hoten.value = data[index] [1];
    tuoi.value = data[index] [2];
    mau.value = data[index] [3];
    })
});

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
//tuoi.addEventListener("")
// result.appendChild(tnode)

});
btcancel.addEventListener("click", function(){
    hoten.value = "";
    tuoi.value = 0;
    mau.value = "";
});