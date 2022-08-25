// matches array of object
let matches=[
    {
        cup:"Asian",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313158.logo.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Asian",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/343800/343852.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/343800/343854.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Maharaja",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/343800/343858.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313496.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Maharaja",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/325900/325974.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313485.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Maharaja",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317119.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317110.jpg",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Men",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313158.logo.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Men",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313136.logo.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/156800/156800.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Women",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317118.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Women",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317111.png",
        s_team_name:"Singapore",
        s_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317111.png",
        location:"Banglore",
        time:"Today,5:30pm"
    },
    {
        cup:"Asian",
        f_team_name:"kuwati",
        f_team_flag:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313140.logo.png",
        s_team_name:"Singapore",
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
