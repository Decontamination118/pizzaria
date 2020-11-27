menuList_array = [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veg Pizza",
    "Veg Extravaganza Pizza"

]
function getmenu() {
    var htmldata;
    htmldata="<ol class='menuList'>"
    menuList_array.sort();
    for(var i=0;i<menuList_array.length;i++){
        htmldata=htmldata+'<li>' + menuList_array[i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menuList_array.push(item);
    menuList_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menuList_array.length;i++){
        htmldata=htmldata+'div class="card">' + '<img src="images/pizzaImg.png"/>' + menuList_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}
