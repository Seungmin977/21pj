document.addEventListener("DOMContentLoaded", function(){
    const addCheck = document.querySelector(".addcheck");
    const addcheckBtn = document.querySelector(".addcheck_cont");

    addCheck.addEventListener("click",function(e){
        addcheckBtn.classList.toggle("on");
    });
});