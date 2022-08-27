let detail_data=JSON.parse(localStorage.getItem('detail_data'));
console.log(detail_data);
const append=(d,container)=>{
    container.innerHTML=null;
      
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
        
        p1.innerText=d.dateTimeGMT;
        tn1.innerText=d.t1;
        tn2.innerText=d.t2;
        
        img1.src=d.t1img;
        img2.src=d.t2img;
        img1.setAttribute('id','img1');
        img2.setAttribute('id','img2');
        
        ps1.innerText=d.t1s;
        ps2.innerText=d.t2s;
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
        
        
        
        p2.innerText=d.status;
        p3.innerText=d.venue;
        div2.innerText='Series Home';
        div2.setAttribute('id','bottom');
        div.append(p1,f1,f2,p2,p3);
        container.append(div,div2);
    
         
        
      }
    
    let container=document.querySelector('#container_detail');
    
    append(detail_data,container);
    