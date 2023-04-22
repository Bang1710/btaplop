let courses = [
	{
		name: "Nguyen Van Bang" ,
		age: 21,
		dtb: 8.9,
	},
	{
		name: "Nguyen Le Duy Dat" ,
		age: 20,
		dtb: 8.7,
	},
	{
		name: "Nguyen Thu Phuong" ,
		age: 19,
		dtb: 8,
	},
	{
		name: "Vo Bao Vi" ,
		age: 22,
		dtb: 7.5,
	},
	{
		name: "Phan Thanh Nhi" ,
		age: 17,
		dtb: 8.9,
	}
];

// let student = new Array(
//     new Array("Nguyễn Văn Bang", 21, 9.0),
//     new Array("Nguyễn Lê Duy Đạt", 21, 8.5),
//     new Array("Phan Thanh Nhi", 21, 9.5),
//     new Array("Nguyễn Thị Thu Phương", 21, 8.0),
//     new Array("Võ Bảo Vi", 21, 9.0)  
//   );
  
//   document.addEventListener("DOMContentLoaded", function(){
//   const datatable = document.getElementById("datatable");
//   for(let i=0; i<student.length; i++){
//       let row = datatable.insertRow(i+1);
//       let col = new Array(student[0].length+1);
//       for(let j=0; j<=student[i].length; j++)
//           col[j] = row.insertCell();
//       col [0].innerHTML=i;
//       for(let j=1; j<=student[i].length; j++){
//           col[j].innerHTML = student[i] [j-1];
//       }
//   }
//   });

// var hoten = document.getElementsByClassName("hoten");
// var age = document.getElementsByClassName("age");
// var dtb = document.getElementsByClassName("dtb");



let ListCourses = courses.filter(function (course, index) {
	return course.age >= 20;
});

ListCourses.forEach(function(course, index) {
   
    const para = document.createElement("tr");
    const nodepara = document.getElementById("node_para");
    nodepara.appendChild(para);


    const thchild = document.createElement("td");
    const nodeth = document.createTextNode(`${index + 1}`);
    thchild.appendChild(nodeth);

    const tdnamechild = document.createElement("td");
    const nodetdname = document.createTextNode(`${course.name}`);
    tdnamechild.appendChild(nodetdname);


    const tdagechild = document.createElement("td");
    const nodetdage = document.createTextNode(`${course.age}`);
    tdagechild.appendChild(nodetdage);

    const tddtbchild = document.createElement("td");
    const nodedtdtb = document.createTextNode(`${course.dtb}`);
    tddtbchild.appendChild(nodedtdtb);

    para.appendChild(thchild);
    para.appendChild(tdnamechild);
    para.appendChild(tdagechild);
    para.appendChild(tddtbchild);
    
    
})
