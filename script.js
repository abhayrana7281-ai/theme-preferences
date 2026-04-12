let count = 0;
let progress = document.querySelector(".progress");
let percent = document.querySelector("#percent");
setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width = count + "%";
        percent.textContent = count + "%";


    }
},30);