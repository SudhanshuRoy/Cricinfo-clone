data= [
    {
      id: "b9c3da95-ac06-4b55-8fdc-4a87a75be560",
      dateTimeGMT: "2022-09-30T23:40:00",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      matchType: "odi",
      status: "Match not yet started",
      ms: "fixture",
      t1: "Australia[AUS]",
      t2: "Zimbabwe[ZIM]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/6-637877070670541994.webp",
      t2img: "https://g.cricapi.com/img/teams/575-637877079629985215.webp"
    },
    {
      id: "d749ed64-0ca9-4778-be08-972e70033dac",
      dateTimeGMT: "2022-09-30T17:30:00",
      matchType: "t20",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      status: "Match not yet started",
      ms: "fixture",
      t1: "Birmingham[BRM]",
      t2: "London[LDN]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/126-637885741951450455.webp",
      t2img: "https://g.cricapi.com/img/teams/213-637885742154787685.webp"
    },
    {
      id: "b991527e-3d69-44fe-8857-3db79e856238",
      dateTimeGMT: "2022-09-22T14:00:00",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      matchType: "t20",
      status: "Match not yet started",
      ms: "fixture",
      t1: "Birmingham[BPW]",
      t2: "London[LSW]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/2032-637967614376906477.webp",
      t2img: "https://g.cricapi.com/img/teams/2012-637967615150875023.webp"
    },
    {
      id: "b767f4e4-e91d-42af-b241-d78b4487c20f",
      dateTimeGMT: "2022-08-30T14:00:00",
      matchType: "t20",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      status: "Match not yet started",
      ms: "fixture",
      t1: "Afghanistan[AFG]",
      t2: "Bangladesh[BAN]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/1-637877075587179422.webp",
      t2img: "https://g.cricapi.com/img/teams/9-637877074109248302.webp"
    },
    {
      id: "b9c3da95-ac06-4b55-8fdc-4a87a75be560",
      dateTimeGMT: "2022-10-03T23:40:00",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      matchType: "odi",
      status: "Match not yet started",
      ms: "fixture",
      t1: "Australia[AUS]",
      t2: "Zimbabwe[ZIM]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/6-637877070670541994.webp",
      t2img: "https://g.cricapi.com/img/teams/575-637877079629985215.webp"
    },
    {
      id: "d749ed64-0ca9-4778-be08-972e70033dac",
      dateTimeGMT: "2022-11-30T17:30:00",
      matchType: "t20",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      status: "Match not yet started",
      ms: "fixture",
      t1: "Birmingham[BRM]",
      t2: "London[LDN]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/126-637885741951450455.webp",
      t2img: "https://g.cricapi.com/img/teams/213-637885742154787685.webp"
    }
  ]


const append=(d,container,n)=>{
container.innerHTML=null;
  for(let i=0;i<n;i++){
    let div=document.createElement('div');
    let p1=document.createElement('p');
    let tn1=document.createElement('h4');
    let tn2=document.createElement('h4');
    let p2=document.createElement('p');
    let p3=document.createElement('p');
    let div2=document.createElement('div');
    let img1=document.createElement('img');
    let img2=document.createElement('img');
    let divt1=document.createElement('div');
    let divt2=document.createElement('div');
    let ps1=document.createElement('p');
    let ps2=document.createElement('p');
    let f1=document.createElement('div');
    let f2=document.createElement('div');
    
    p1.innerText=d[i].dateTimeGMT;
    tn1.innerText=d[i].t1;
    tn2.innerText=d[i].t2;
    
    img1.src=d[i].t1img;
    img2.src=d[i].t2img;
    img1.setAttribute('id','img1');
    img2.setAttribute('id','img2');
    
    ps1.innerText=d[i].t1s;
    ps2.innerText=d[i].t2s;
    ps1.setAttribute('id',"ps1");
    ps2.setAttribute('id',"ps2");
   
    
    divt1.append(img1,tn1);
    divt2.append(img2,tn2);
    
    f1.append(divt1,ps1);
    f2.append(divt2,ps2);
    
    
    divt1.setAttribute('class','imna');
    divt2.setAttribute('class','imna');
    
    f1.setAttribute('class','both');
    f2.setAttribute('class','both');
    
    
    
    p2.innerText=d[i].status;
    p3.innerText=d[i].venue;
    div2.innerText='Series Home';
    div2.setAttribute('id','bottom');
    div.append(p1,f1,f2,p2,p3);
    container.append(div,div2);

     div.addEventListener('click',()=>{
localStorage.setItem('detail_data',JSON.stringify(d[i]));
window.location.href='liveScoreSecond.html';
     });
    
  }
}
let container1=document.querySelector('.container1');
let container2=document.querySelector('.container2');

append(data,container1,2);
append(data,container2,2);

let see_all=document.getElementById('see_all');
see_all.addEventListener('click',()=>{
n=data.length;
append(data,container1,n);
append(data,container2,n);
});




