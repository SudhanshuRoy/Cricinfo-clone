// matches array of object
let matches=[
    {
        cup:"Asian",
        f_team_name:"KUWATI",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313158.logo.png",
        s_team_name:"SINGAPORE",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Asian",
        f_team_name:"SA",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/343800/343852.png",
        s_team_name:"ENG",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/343800/343854.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Maharaja",
        f_team_name:"TR-M",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/343800/343858.png",
        s_team_name:"SB-M",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313496.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Maharaja",
        f_team_name:"TKR",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/325900/325974.png",
        s_team_name:"BR",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313485.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Maharaja",
        f_team_name:"TKR-W",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317119.png",
        s_team_name:"BR-W",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317110.jpg",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Men",
        f_team_name:"JT",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313158.logo.png",
        s_team_name:"STKMP",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Men",
        f_team_name:"MYSW",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313136.logo.png",
        s_team_name:"GM",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/156800/156800.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Women",
        f_team_name:"GAW",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317118.png",
        s_team_name:"SLK",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Women",
        f_team_name:"LAN",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317111.png",
        s_team_name:"NOT",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317111.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Asian",
        f_team_name:"KUWATI",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313140.logo.png",
        s_team_name:"SINGAPORE",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313147.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },

];

// showMatch()
let match=document.getElementById("match");
let showMatch=(cup)=>{
    // console.log(matches);
    let filterMatchs=matches.filter((ele)=>{
        // console.log(ele.cup==cup)
        return ele.cup==cup;
    })
    // console.log(filterMatchs)
    appendMatch(filterMatchs);
}

// appendMatch()
let appendMatch=(data)=>{
    match.innerHTML=null;
    data.forEach((ele)=>{
        let mainDiv=document.createElement("div");
        let div1=document.createElement("div");
        div1.innerText=`${ele.time} : ${ele.cup} : ${ele.location}`;
        let div2=document.createElement("div");
        let div2a=document.createElement("div");
        let img2a=document.createElement("img");
        img2a.src=ele.f_team_flag;
        let span2a=document.createElement("span");
        span2a.innerText=ele.f_team_name;
        div2a.append(img2a,span2a);
        let div2b=document.createElement("div");
        let img2b=document.createElement("img");
        img2b.src=ele.s_team_flag;
        let span2b=document.createElement("span");
        span2b.innerText=ele.s_team_name;
        div2b.append(img2b,span2b)
        div2.append(div2a,div2b);
        let div3=document.createElement("div");
        let span3a=document.createElement("span");
        span3a.innerText="Schedule";
        let span3b=document.createElement("span");
        span3b.innerText="Table";
        div3.append(span3a,span3b);
        mainDiv.append(div1,div2,div3);
        match.append(mainDiv);
    })
}
showMatch("Asian");

// middle section
let middleArray=[
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/315100/315101.6.jpg",
        title:"Posers for India: The same old top three? Pant or Karthik, or both?"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/344700/344708.6.jpg",
        title:"Wounded England unlikely to change aggressive approach"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/334200/334283.6.jpg",
        title:"Kuldeep, Prasidh part of India A squad to face NZ A"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/341900/341947.6.jpg",
        title:"Gill set for maiden county stint with Glamorgan"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/294100/294114.6.jpg",
        title:"The Pakistan women's team in 1997: the girls who believed they could"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/315100/315101.6.jpg",
        title:"Posers for India: The same old top three? Pant or Karthik, or both?"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/342800/342831.6.jpg",
        title:"Two factors that might have played a role in Kohli's slump"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/340200/340208.6.jpg",
        title:"Trent Boult hoping he's not done with Test cricket just yet"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/344700/344726.6.jpg",
        title:"Welsh find unwanted consistency amid relentless record blitz"
    },
    {
        url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/315100/315101.6.jpg",
        title:"Lynn signs 11-game Strikers deal to split time with ILT20"
    },
]

let container=document.getElementById("container");
let showContain=(data)=>{
    for(let i=0; i<3; i++){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=data[i].url;
        let h1=document.createElement("h1");
        h1.innerText=data[i].title;
        div.append(img,h1);
        container.append(div);
    }

    let contain=document.createElement("div");
    contain.setAttribute("class","contain")
    for(let i=3; i<6; i++)
    {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=data[i].url;
        let p=document.createElement("p");
        p.innerText=data[i].title;
        div.append(img,p);
        contain.append(div);
    }
    container.append(contain);

    for(let i=6; i<9; i++){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=data[i].url;
        let h1=document.createElement("h1");
        h1.innerText=data[i].title;
        div.append(img,h1);
        container.append(div);
    }

    contain=document.createElement("div");
    contain.setAttribute("class","contain")
    for(let i=9; i<10; i++)
    {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=data[i].url;
        let p=document.createElement("p");
        p.innerText=data[i].title;
        div.append(img,p);
        contain.append(div);
    }
    container.append(contain);

}
showContain(middleArray)

// sidebar section
let series=document.getElementById("series");
let showSeries=(data)=>{
    // console.log(data)
    data.forEach((ele)=>{
        let a=document.createElement("a");
        let span=document.createElement("span");
        span.innerText="> ";
        a.append(span,ele.f_team_name," vs ",ele.s_team_name);
        a.onclick=function(){
            showPopup(ele);
        };
        series.append(a);
    })
}
showSeries(matches);

// news section
let newsData= [
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/294000/294030.jpg" ,
        title : "On This Day: Stokes' Headingley epic"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344603.png" ,
        title : "Quote Unquote: who's saying what?"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342200/342284.6.jpg" ,
        title : "Photo feature: helmets"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344500/344554.6.jpg" ,
        title : "The latest cricket photos"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/151100/151163.3.jpg" ,
        title : "The 'real value' of wickets: can anyone match McGrath?"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/336000/336034.6.jpg" ,
        title : "Who does it best in women's cricket?"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/340500/340544.6.jpg" ,
        title : "Photo feature: Stairs in cricket"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/318700/318789.jpg" ,
        title : "Records index: most runs, most wickets, and a lot more"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/340200/340228.6.jpg" ,
        title : "Temba Bavuma: 'I understand I have the influence to make things better around me'"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/339900/339937.6.jpg" ,
        title : "Rankings: Who's leading in every format"
    } 
]
let news=document.getElementById("news");
let showNews=(data)=>{
    // console.log(data);
    data.forEach((ele)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.img;
        let p=document.createElement("p");
        p.innerText=ele.title;
        div.append(img,p);
        news.append(div)
    })
}
showNews(newsData)

// popup section
let popup=document.getElementById("popup"); 
function showPopup(data){
    // console.log(data)
    popup.innerHTML=null;
    let module=document.createElement("div");
    module.setAttribute("id","module")

    // close
    let c=document.createElement("span");
    c.innerText="❌";
    c.setAttribute("class","close");
    
    // div1
    let div1=document.createElement("div");
    div1.innerText=data.time+" : "+data.cup+" : "+data.location;

    // div2
    let div2=document.createElement("div");
    // span1
    let span1=document.createElement("span");
    let img1=document.createElement("img");
    img1.src=data.f_team_flag;
    let p1=document.createElement("p");
    p1.innerText=data.f_team_name;
    span1.append(img1,p1);
    // h1
    let h1=document.createElement("h1");
    h1.innerText="Vs";
    // span2
    let span2=document.createElement("span");
    let img2=document.createElement("img");
    img2.src=data.s_team_flag;
    let p2=document.createElement("p");
    p2.innerText=data.s_team_name;
    span2.append(img2,p2);
    div2.append(span1,h1,span2);

    // div3
    let div3=document.createElement("div");
    let span3a=document.createElement("span");
    span3a.innerText="Schedule"
    let span3b=document.createElement("span");
    span3b.innerText="Table";
    div3.append(span3a,span3b);

    module.append(c,div1,div2,div3)
    popup.append(module)

    // close
    let close = document.querySelector(".close");
    popup.style.display = "block";
    close.onclick = function() {
        popup.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == popup) {
        popup.style.display = "none";
        }
    }
}
