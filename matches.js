// write js code here corresponding to matches.html


var data = JSON.parse(localStorage.getItem("schedule"));

data.forEach(function(el){
    
    var tr = document.createElement("tr");

    var td1 = document.createElement("td") 
    td1.innerText = el.matchNum
    var td2 = document.createElement("td")
    td2.innerText = el.tA

    var td3 = document.createElement("td")
    td3.innerText = el.tB

    var td4 = document.createElement("td")
    td4.innerText = el.date

    var td5 = document.createElement("td")
    td5.innerText = el.venue

    var td6 = document.createElement("button")
    td6.innerText = "Add to Favourite"
    td6.style.color = "white"
    td6.style.backgroundColor = "green"
    td6.style.marginTop = "9px";
    td6.style.cursor = "pointer"
    td6.style.border = "0px"
   
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);

    document.querySelector("button").addEventListener("click",myFun)

    function myFun(){
        var fav = localStorage.setItem("favourite",JSON.stringify(tr))
        console.log(fav);
    }

})
