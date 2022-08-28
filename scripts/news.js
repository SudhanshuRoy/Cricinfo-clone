console.log("hello world!");

let newsarr=[
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344000/344094.6.jpg",
        title:"Out-of-favour Agarwal is 'ticking all those boxes' to give white-ball future a thrust",
        summary:"I will be very happy with whatever comes my way, but the aspirations and dreams never die",
        author:"1 hr ago•Afzal Jiwani"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/344600/344699.10.jpg",
        title:"Pakistan Women head coach David Hemp won't extend his contract in October",
        summary:"Says he took the difficult decision to spend more time with his young family",
        author:"2 hrs ago•ESPNcricinfo staff"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/344300/344312.10.jpg",
        title:"Hayley Matthews hopes to bring 'flair' as she joins Melbourne Renegades",
        summary:"The West Indies captain will join Harmanpreet Kaur at the top of the order",
        author:"5 hrs ago . ESPNcricinfo staff"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/344600/344695.10.jpg",
        title:"Kane Richardson, Tom Helm drive Phoenix to key victory ",
        summary:"Roy fails again after Livingstone, Moeen lift Phoenix to sufficient 166",
        author:"11 hrs ago•ECB Reporters Network"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/288400/288445.10.jpg",
        title:"Sam Northeast and Billy Root personal bests fail to see Glamorgan through",
        summary:"Kent's victory at Canterbury means record Glamorgan stand means nothing",
        author:"12 hrs ago•ECB Reporters Network"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/340400/340441.6.jpg",
        title:"Root bats for Stokes on and off field after 'powerful' documentary revelations",
        summary:"Former captain says team-mates will rally around in support of current Test leader",
        author:"12 hrs ago•Vithushan Ehantharajah"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344693.jpg",
        title:"Darren Stevens' white-ball Canterbury swansong takes Kent into play-offs",
        summary:"George Balderson's hundred chased down but Lancashire also qualify",
        author:"13 hrs ago•ECB Reporters Network"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344691.6.jpg",
        title:"Luis Reece stars on another day of Royal London records",
        summary:"Every batting record up for grabs on a daily basis in absence of The Hundred elite",
        author:"13 hrs ago•ECB Reporters Network"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344686.6.jpg",
        title:"Stanley McAlindon makes Foxes sweat for play-off berth",
        summary:"McAlindon stars with bat and ball but nervy win brings home play-off tie",
        author:"14 hrs ago•ECB Reporters Network"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344689.jpg",
        title:"Hampshire's sixteenth win in seventeen brings home semifinal",
        summary:"Aneurin Donald and John Turner have too much firepower for Yorkshire",
        author:"14 hrs ago•ESPNcricinfo staff"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344200/344232.6.jpg",
        title:"Topley pulls out of the Hundred to ensure he is fit for T20 World Cup",
        summary:"Taking a short break feels like a sensible precaution to avoid injury and the risk of a longer lay-off.",
        author:"14 hrs ago•Matt Roller"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344673.6.jpg",
        title:"All-round Alice Capsey, bowlers hand Birmingham Phoenix their first defeat",
        summary:"Phoenix slipped from 64 for 2 to 71 for 5, before Lauren Winfield-Hill anchored Invincibles' chase",
        author:"14 hrs ago•Matt Roller"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344684.6.jpg",
        title:"Tom Alsop leads Sussex record rampage to home semi",
        summary:"Another hundred for Cheteshwar Pujara as Middlesex concede 240 in last 18 overs",
        author:"14 hrs ago•ECB Reporters Network"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344677.6.jpg",
        title:"Notts win sends them to Lancashire in playoffs",
        summary:"Toby Pettman makes his mark before Tom Lawes prevents Surrey capitulation on green pitch",
        author:"15 hrs ago•ECB Reporters Network"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344400/344483.6.jpg",
        title:"Marco Jansen: 'We don't take anything for granted because Mother Cricket will kick you in the backside'",
        summary:"South Africa's towering left-arm quick talks about his upbringing and the hard yards to get to the top",
        author:"16 hrs ago•Firdose Moonda"
    }
];

let newsappendfn = () => {
    let newsDiv1=document.getElementById("newsDiv1");
    newsarr.forEach( (el) => {
        let image=document.createElement("img");
        image.src=el.image;
        image.style.width="285px";
        image.style.height='160px';

        let subdiv=document.createElement("div");
        // subdiv.setAttribute('class',"subnewsbox1");   

        let title=document.createElement("h1");
        title.innerText=el.title;
        title.style.fontSize="16px";

        let summary=document.createElement("p");
        summary.innerText=el.summary;

        let author=document.createElement("p");
        author.innerText=el.author;

        let div=document.createElement("div");
        // div.setAttribute('class',"newsbox");

        subdiv.append(title,summary,author);
        div.append(image,subdiv);

        newsDiv1.append(div);
    });

    let newsDiv2=document.getElementById("newsDiv2");
    for(let i=newsarr.length-2;i>=0;i--){
        let el=newsarr[i];
        let image=document.createElement("img");
        image.src=el.image;
        image.style.width="63px";
        image.style.height='63px';

        let subdiv=document.createElement("div");
        subdiv.style.paddingLeft="15px";
        // subdiv.setAttribute('class',"subnewsbox2");

        let title=document.createElement("h1");
        title.innerText=el.title;
        title.style.fontSize="14px";
        title.style.color='#2b2c2d';

        let author=document.createElement("p");
        author.innerText=el.author;
        author.style.fontSize='10px';

        let div=document.createElement("div");
        // div.setAttribute('class',"newsbox2");
        div.style.width="268px";
        div.style.height='auto';
        div.style.padding="8px 16px";   

        subdiv.append(title,author);
        div.append(image,subdiv);

        newsDiv2.append(div);
    };

}

newsappendfn();

