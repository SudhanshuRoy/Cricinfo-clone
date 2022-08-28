let newsData = [
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
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/222300/222305.11.jpg" ,
        title : "Taufel: 'Can't solve odd grey area by replacing with technology'"
    }
  ];
  
  
  const appendnews=(data)=>{
    let news=document.getElementById('news');
    news.innerHTML=null;
    data.forEach(function(e){
    let div=document.createElement('div');
    let i=document.createElement('img');
    let p=document.createElement('p');
    i.src=e.img;
    i.setAttribute('id','newsImg');
    p.innerText=e.title;
    div.append(i,p);
    news.append(div);
    });
    }
    appendnews(newsData);
    console.log(newsData);
  
    export {newsData,appendnews};