data= [
    {
      id: "b9c3da95-ac06-4b55-8fdc-4a87a75be560",
      dateTimeGMT: "2022-08-30T23:40:00",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      matchType: "odi",
      status: "Match not started",
      ms: "fixture",
      t1: "Australia [AUS]",
      t2: "Zimbabwe [ZIM]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/6-637877070670541994.webp",
      t2img: "https://g.cricapi.com/img/teams/575-637877079629985215.webp"
    },
    {
      id: "d749ed64-0ca9-4778-be08-972e70033dac",
      dateTimeGMT: "2022-08-30T17:30:00",
      matchType: "t20",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      status: "Match not started",
      ms: "fixture",
      t1: "Birmingham Phoenix [BRM]",
      t2: "London Spirit [LDN]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/126-637885741951450455.webp",
      t2img: "https://g.cricapi.com/img/teams/213-637885742154787685.webp"
    },
    {
      id: "b991527e-3d69-44fe-8857-3db79e856238",
      dateTimeGMT: "2022-08-30T14:00:00",
      name:"Bengaluru Blasters vs Gulbarga Mystics",
      venue:"M.Chinnaswamy Stadium, Bengaluru",
      matchType: "t20",
      status: "Match not started",
      ms: "fixture",
      t1: "Birmingham Phoenix Women [BPW]",
      t2: "London Spirit Women [LSW]",
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
      status: "Match not started",
      ms: "fixture",
      t1: "Afghanistan [AFG]",
      t2: "Bangladesh [BAN]",
      t1s: "",
      t2s: "",
      t1img: "https://g.cricapi.com/img/teams/1-637877075587179422.webp",
      t2img: "https://g.cricapi.com/img/teams/9-637877074109248302.webp"
    },]




const getData=async ()=>{
    try{
        let apikey='ff889e3d-85b0-413b-8991-b57154149614';
        let res=await fetch('https://api.cricapi.com/v1/currentMatches?apikey=ff889e3d-85b0-413b-8991-b57154149614&offset=0');
        let data= await res.json();
        let copy_data=data.data;
        console.log('data',data);
        if(copy_data!==null){
            // append(copy_data);
        }
        
    }catch(err){
console.log('error',err);
    }

}
// getData();


const structur=(data)=>{
let container=document.getElementById('container');
container.innerHTML=null;
data.forEach(({dateTimeGMT,name,status,venue})=>{
let div=document.createElement('div');
let p1=document.createElement('p');
let h5=document.createElement('p');
let p2=document.createElement('p');
let p3=document.createElement('p');
p1.innerText=dateTimeGMT;
h5.innerText=name;
p2.innerText=status;
p3.innerText=venue;
div.append(p1,h5,p2,p3);
container.append(div);
})
}

structur(data);