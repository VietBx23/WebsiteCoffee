var path = "images";
var hinh = new Array( "header.png", "header1.png", "header2.png", "header3.png","header4.png","header5.png","header6.png");
var index = 0;
function next() {
    if (index < hinh.length - 1) {
        index++;
    } else {
        index = 0;
    }
 document.getElementById("dem").innerHTML =   "Ảnh"+" "+ (index+1 ) + "/" + hinh.length;
    showhinh("images/" + hinh[index]);
     
}
function pre() {
    if (index <= 0) {
        index = hinh.length - 1;
    } else {
        index--;
    }
    document.getElementById("dem") .innerHTML ="Ảnh"+" "+ (index+1 )+"/" + hinh.length;
    showhinh("images/" + hinh[index]);
    
   
}
function showhinh(duongdan) {
    document.getElementById("view").src = duongdan;
}