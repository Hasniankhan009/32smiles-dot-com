// Gallery

var imgbox= document.getElementById("imgbox");
var fullimg= document.getElementById("fullimg");


function openimg(pic){
  imgbox.style.display= "flex"
  fullimg.src = pic

  
}

function closeimg(){
  imgbox.style.display= "none"
}