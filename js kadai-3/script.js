document.write("問１");
document.write("<br>");

function menseki(hankei){
    return (hankei*hankei*3.14)+"㎠";
}
document.write(menseki(50)+"<br>");
document.write(menseki(7)+"<br>");
document.write(menseki(10)+"<br>");

document.write("<br>");
document.write("問2");
document.write("<br>");

function ryoukin(otona,kodomo){
    return (otona*500)+(kodomo*200)+"円です。";
}
document. write(ryoukin(2,4)+"<br>") ;
document. write(ryoukin(1,5)+"<br>") ;
document. write(ryoukin(3,7)+"<br>") ;

