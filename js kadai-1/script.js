document.write( "問1 " );
document.write( "<br>" );
for(var star = 1; star < 6; star++){
    document.write( "☆" );
}

document.write( "<br>" );
document.write( "問2 " );
document.write( "<br>" );
for(var star1 =1; star1 <3; star1++){
    for(var star2 =1; star2 <4; star2++){
        document.write("★");
    }   
    document.write( "<br>" );
}

document.write( "問3 " );
document.write( "<br>" );
for(var star1 =1; star1 < 3; star1++){
    for(var star2 =1; star2 < 6; star2++){
        document.write("☆");
    }
    document.write( "<br>" );
}

document.write( "問4 " );
document.write( "<br>" );
for(var star1 =1; star1 < 5; star1++){
    for(var star2 =1; star2 < 6; star2++){
        document.write("★");
    }
    document.write( "<br>" );
}

document.write( "問5 " );
document.write( "<br>" );
for(var star1 =1; star1 < 5; star1++){
    for(var star2 =1; star2 < 4; star2++){
        document.write("★");
    }
    document.write( "<br>" );
}

document.write( "問6 " );
document.write( "<br>" );
for(var star1 =1; star1< 4; star1++){
    for(var star2 =1; star2< 4; star2++){
        if(star2 % 2 ==0){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>");
}

document.write( "問7 " );
document.write( "<br>" );
for(var star1 =1; star1 <= 4; star1++){
    for(var star2 =1; star2<6; star2++){
        if(star2 % 2 ==1){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>");
}

document.write( "問8" );
document.write( "<br>" );
for(var star1 =1; star1 < 6; star1++){
  //document.write(star1);
  //document.write(",");
    for(var star2 =0; star2 < star1; star2++){
  //document.write(star2);
        document.write("★");
    }
    document.write( "<br>" );
}

document.write( "問8-2" );
document.write( "<br>" );
for(var line = 0; line < 5; line++){
    for(var star2 = 0; star2 <= line; star2++){
        document.write("★");
    }
    document.write( "<br>" );
}
