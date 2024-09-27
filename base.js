function ImgExp(Image){
    Image.style.height = "18vh";
    Image.style.width = "20vw";

}

function ImgCon(Image){
    Image.style.height = "6vh";
    Image.style.width = "10vw";
}

function FontToYellow(element){
    element.style.color = "yellowgreen"
}

function FontToBlack(element){
    element.style.color = "black"
}

function ChangePage(element){
    window.location.href=element.value;
}

function ChangeImg(element){
    for(i=0; i<5; i++){
        document.getElementById(i+1).style.height="12vh";
    }
    if(element.value>0){
        document.getElementById(element.value).style.height="60vh";
    }
}

function Calculate(){
    let a = prompt("Введіть перше число");
    let b = prompt("Введіть друге число");
    alert(a + "*" + b +"=" + (a*b));
    alert(a + "/" + b +"=" + (a/b));
    document.write("<p>" + a + "-" + b + "=" + (a-b) + "</p>");
    document.write("<p>" + a + "+" + b + "=" + (a+b) + "</p>");
}

function ChangeLang(PageName){
    if(document.documentElement.getAttribute('lang')=='ua'){
        window.location.href=(PageName + "_en.html");
    }else{
        window.location.href=(PageName + "_ua.html");
    }
}