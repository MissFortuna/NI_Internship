var wanna_buy = 0;
var like_in = 0;

function changeBadge() {
    document.getElementById("shopping-cart-badge").innerHTML = ++wanna_buy;
    if (wanna_buy > 0)document.getElementById("shopping-cart-badge").style.visibility = "visible";
    checkQuantity();
}

function checkQuantity() {
    var all_buttons = document.getElementsByClassName('buy');
    if (wanna_buy > 4) {
        for (var i1 = 0; i1 < all_buttons.length; i1++) {
            all_buttons[i1].disabled = true;
        }
        alert("Ви вичерпали ліміт кошика. Оформіть замовлення або зредагуйте обране.");
    }
    else {
        for (var i2 = 0; i2 < all_buttons.length; i2++) {
            //all_buttons[i2].className -= ' disabled';
            all_buttons[i2].disabled = false;
        }
    }
}

function totalLikes() {
    document.getElementById("like-cart-badge").innerHTML = ++like_in;
    if (like_in > 0)document.getElementById("like-cart-badge").style.visibility = "visible";
    checkLikes();
}

function checkLikes() {
    var all_likes = document.getElementsByClassName('like');
    if (like_in > 9) {
        for (var i1 = 0; i1 < all_likes.length; i1++) {
            all_likes[i1].disabled = true;
        }
        alert("Ви вичерпали ліміт уподобань.");
    }
    else {
        for (var i2 = 0; i2 < all_likes.length; i2++) {
            //all_likes[i2].className -= ' disabled';
            all_likes[i2].disabled = false;
        }
    }
}

function shippingFunction() {
    var filterShipping = document.getElementById("shopping").value;
    var typeOfShipping = document.getElementsByClassName("type-of-shipping");
    if (filterShipping == "Shipping") {
        for (var i = 0; i < typeOfShipping.length; i++) {
            if (i % 2 == 0) {
                typeOfShipping[i].innerHTML = "Shipping to Ukraine"
            }
        }
    }
}
function mouseLeftFunction(x) {
//    var filterShipping = document.getElementById("shopping").value;
    x.src = "http://i2.rozetka.ua/goods/11561/Wacom_Cintiq_22HD_Touch_images_11561250.jpg";
}
function mouseOverFunction(x) {
    x.src = "http://i2.rozetka.ua/goods/11561/Wacom_Cintiq_22HD_Touch_images_11561485.jpg";
}

function openM() {
    document.getElementById("myDialog").show();
}
function closeM() {
    document.getElementById("myDialog").close();
}
