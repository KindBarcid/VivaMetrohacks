var tabs = document.querySelectorAll(".lb_tabs u1 li");
var daily = document.querySelector(".daily");
var monthly = document.querySelector(".monthly");
var yearly = document.querySelector(".yearly");
var items = document.querySelectorAll(".lb_item");

//code below updates the display based on what item in the list the user clicks
tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        var currentDataLi = tab.getAttribute("data-li");

        tabs.forEach(function(tab){
            tab.classList.remove("active");
        })

        tab.classList.add("active"); 
        
        items.forEach(function(item){
            item.style.display = "none";
        })

        if(currentDataLi == "daily"){
            daily.style.display = "block";

        }
        else if(currentDataLi == "monthly"){
            monthly.style.display = "block";
        }
        else{
            yearly.style.display = "block";

        }

    })
    
})