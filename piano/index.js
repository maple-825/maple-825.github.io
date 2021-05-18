function typewrite()
{
    let str="<我愿意为一个人，写满整个世界的情诗<因为我喜欢她，因为......我也想给她哪怕一点点的浪漫<因为当代码不止是代码的时候，它就有了新的意义<";//利用<作为换行符 -作为空格
    let strp="";
    let i=0;
    function print1()
    {
        if(str[i]=='<')
        {
            document.getElementById("box1").innerHTML=strp+"<br><br>"+'|';
            strp+="<br><br>";
        }
        else if(str[i]=='-')
        {
            document.getElementById("box1").innerHTML=strp+'&nbsp&nbsp&nbsp';
            strp+="&nbsp&nbsp&nbsp";
        }
        else
        {
            strp+=str[i];
            document.getElementById("box1").innerHTML=strp+'|';
        }
        i++;
    }
    function print2()
    {
        setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'&nbsp';},100);
        setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'|';},630);
    }
    let printid=setInterval(() => 
    {
        print1();
        if(i==str.length)
        clearInterval(printid);
    },90);  
    setTimeout(() => 
    {
        id=setInterval(print2,1060);//setInterval内部直接写函数的时候是直接写函数名不加括号。
    },(str.length-1)*90);
    //0.53秒闪一次
}

let clickb=false;//判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件

function funclick()
{
    let x = document.createElement("audio");
    x.setAttribute("src", "./audio/55.mp3");
    x.setAttribute("autoplay","autoplay");
    let yinyan=document.getElementById("yinyan");
    yinyan.setAttribute("style","opacity:0");
    setTimeout(function(){
        document.getElementById("fronclick").style.zIndex=-300;
        document.getElementById("box").style.opacity=1;
    },1500);//让播放按钮消失了
    //yinyan.style.opacity=0;
    clickb=true;
}




let k={
    a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25,
    A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25
} 
let a=[
    {name:"A",yin:3, str:"<br><br><br>"},
    {name:"B" ,yin:2, str:"<br><br><br>"},
    {name:"C" ,yin:3, str:"<br><br><br>"},
    {name:"D" ,yin:5, str:"<br><br><br>"},
    {name:"E" ,yin:8, str:"<br><br><br>"},
    {name:"F" ,yin:3, str:"<br><br><br>"},
    {name:"G" ,yin:7, str:"<br><br>"},
    {name:"H" ,yin:8, str:"<br><br>"},
    {name:"I" ,yin:9, str:"<br><br"},
    {name:"J" ,yin:10, str:"<br><br>"},
    {name:"K" ,yin:11, str:"<br><br>"},
    {name:"L" ,yin:12, str:"<br><br>"},
    {name:"M" ,yin:13, str:"<br>"},
    {name:"N" ,yin:14, str:"<br><br>"},
    {name:"O" ,yin:15, str:"<br><br>"},
    {name:"P" ,yin:16, str:"<br><br>"},
    {name:"Q" ,yin:2, str:"<br><br>"},
    {name:"R" ,yin:7, str:"<br><br>"},
    {name:"S" ,yin:2, str:"<br><br>"},
    {name:"T" ,yin:8, str:"<br><br>"},
    {name:"U" ,yin:21, str:"<br><br>"},
    {name:"V" ,yin:22, str:"<br>"},
    {name:"W" ,yin:3, str:"<br><br>"},
    {name:"X" ,yin:24, str:"<br><br>"},
    {name:"Y" ,yin:5, str:"<br><br>"},
    {name:"Z" ,yin:26, str:"<br><br>"}
];
let b=[
    "linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
    "linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
    "linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
    "linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
    "linear-gradient(25deg, #04245a, #652959, #a62557, #e60b55)",
    "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
    "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
    "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
    "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
    "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
    "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
    "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
    "linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
    "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
    "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
    "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
    "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
    "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
    "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
    "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
    "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
    "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
    "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
    "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
    "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
    "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"
];
let s='a';
let records=0;//记录我已经输入过了，防止出现多个打字function byaei


/*键盘事件*/
function fl(e)
{
    if(clickb==true)
    {
    let key =e.key;
    if((key<='z'&&key>='a')||(key<='Z'&&key>='A'))//避免大小写的错误
    {
        let p=a[k[key]];
        s=s+p.name;
        let x = document.createElement("audio");
        x.setAttribute("src", `./audio/${p.yin}.mp3`);
        x.setAttribute("autoplay","autoplay");
        let box=document.getElementById("box");
        let boxl=document.getElementById("boxl");
        let boxr=document.getElementById("boxr");
        let boxup=document.getElementById("boxup");
        let bac=document.getElementById("bac");
        bac.style.opacity=0;
        box.style.transition="0.5s";
        box.style.opacity=0;
        boxup.style.opacity=0;
        setTimeout(function()
        {
        boxl.innerHTML=`${p.name}`;
        boxr.innerHTML=`${p.str}`;
        console.log(b[k[key]]);
        bac.style.background=`${b[k[key]]}`;
        box.style.opacity=1;
        boxup.style.opacity=1;  
        bac.style.opacity=1;
        },500);
        // if(s.indexOf("QW")!=-1&&records==0)
        if(s.indexOf("QWERTYQWERTYASDF")!=-1&&records==0)
        {
            setTimeout(function()
            {
                records=1;
                bac.style.opacity=0;
                box.style.opacity=0;
                boxup.style.opacity=0;  
                bac.style.opacity=0;
                let box1=document.getElementById("box1");
                box1.style.zIndex=7;
                box1.style.opacity=1;
                let music=document.createElement("audio");
                x.setAttribute("src", `./audio/snjxh.mp3`);
                x.setAttribute("autoplay","autoplay");
                x.setAttribute("loop","loop");
            },1300);
            setTimeout(typewrite,3000);
        }
    }
    }  
}


window.onkeyup=fl;