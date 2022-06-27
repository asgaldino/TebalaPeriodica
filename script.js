
function troca(){
    var lista = document.querySelectorAll('table');
    lista.forEach(function(item){
        item.style.display = "none";
    })
}
troca();
function informar(id){
    
    troca();
    if (id === "hidrogenio") {
        var el = document.getElementById("infoH");        
        el.style.display = "block";
    }
    else if (id === "litio") {
        var el = document.getElementById("infoLi");        
        el.style.display = "block";
    } else {
        
    }

}




