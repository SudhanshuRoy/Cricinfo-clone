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