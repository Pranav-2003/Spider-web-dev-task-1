var s11=0;
var s12=0;
var s21=0;
var s22=0;
var s31=0;
var s32=0;
var s41=0;
var s42=0;
var s51=0;
var s52=0;
var v=0;
var i = ["1","2","3","4","5"];
var j = ["1","2","3","4","5"];
var l={"1":s11,"2":s21,"3":s31,"4":s41,"5":s51};
var k={"1":s12,"2":s22,"3":s32,"4":s42,"5":s52};
window.addEventListener("load",function(){
    test = document.getElementById("b12");
    if(test!=null){
        v=Math.floor((Math.random() * 2) + 1);
        if(v==1){
            document.getElementById("b2").style.display = "none";
        }
        else{
            document.getElementById("b1").style.display = "none";
        }
        alert("Player "+v+" has won the toss and will begin!");}
},false)
function p1(){
    t = Math.floor((Math.random() * i.length));
    document.getElementById("no").innerHTML = i[t];
    row = i[t];
    s = "i"+row+"2";
    if(l[row]==0){
        l[row]+=1;
        document.getElementById(s).style.display = "initial";
        document.getElementById(s).src = "part1.PNG";        
        document.getElementById("b1").style.display = "none";
        setTimeout(function(){document.getElementById("b2").style.display = "initial";},1000);
    }
    else if(l[row]==1){
        l[row]+=1;
        document.getElementById(s).style.display = "initial";
        document.getElementById(s).src = "part2.PNG";        
        document.getElementById("b1").style.display = "none";
        setTimeout(function(){document.getElementById("b2").style.display = "initial";},1000);
    }
    else if(l[row]==2){
        l[row]+=1;
        document.getElementById(s).style.display = "initial";
        document.getElementById(s).src = "part3.PNG";        
        document.getElementById("b1").style.display = "none";
        setTimeout(function(){document.getElementById("b2").style.display = "initial";},1000);
    }
    else if(l[row]==3){
        l[row]+=1;
        i = i.filter(function(m){
                return m!=row;
        });
        document.getElementById(s).style.display = "initial";
        document.getElementById(s).src = "part4.PNG";        
        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").style.display = "initial";
        
    }
    if(!i[0]){
        document.getElementById("b2").style.display = "none";
        setTimeout(function(){document.getElementById("win").style.display="initial";document.getElementById("wtext").innerHTML="Player 1 has won the game!!!";},1500);
    }
}

function p2(){
    t = Math.floor((Math.random() * j.length));
    document.getElementById("no").innerHTML = j[t];
    row = j[t];
    s = "i"+row+"3";
    if(k[row]==0){
        k[row]+=1;
        document.getElementById(s).style.display = "initial";
        document.getElementById(s).src = "part1.PNG";        
        document.getElementById("b2").style.display = "none";
        setTimeout(function(){document.getElementById("b1").style.display = "initial";},1000);
    }
    else if(k[row]==1){
        k[row]+=1;
        document.getElementById(s).style.display = "initial";
        document.getElementById(s).src = "part2.PNG";        
        document.getElementById("b2").style.display = "none";
        setTimeout(function(){document.getElementById("b1").style.display = "initial";},1000);
    }
    else if(k[row]==2){
        k[row]+=1;
        document.getElementById(s).style.display = "initial";
        document.getElementById(s).src = "part3.PNG";        
        document.getElementById("b2").style.display = "none";
        setTimeout(function(){document.getElementById("b1").style.display = "initial";},1000);
    }
    else if(k[row]==3){
        k[row]+=1;
        j = j.filter(function(n){
                return n!=row;
        });
        document.getElementById(s).style.display = "initial";
        document.getElementById(s).src = "part4.PNG";        
        document.getElementById("b2").style.display = "none";
        document.getElementById("b1").style.display = "initial";    
    }
    if(!j[0]){
        document.getElementById("b1").style.display = "none";
        setTimeout(function(){document.getElementById("win").style.display="initial";document.getElementById("wtext").innerHTML="Player 2 has won the game!!!";},1500);
    }
}
