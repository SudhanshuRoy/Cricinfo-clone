let int_teams = [
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png" ,
        name : "Afghanistan"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png" ,
        name : "Australia"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png" ,
        name : "Bangladesh"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png" ,
        name : "England"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png" ,
        name : "India"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png" ,
        name : "Ireland"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png" ,
        name : "New Zealand"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png" ,
        name : "Pakistan"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313150.logo.png" ,
        name : "Scotland"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png" ,
        name : "South Africa"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png" ,
        name : "Sri Lanka"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313147.logo.png" ,
        name : "United Arab Emirates"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png" ,
        name : "West Indies"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340503.png" ,
        name : "Zimbabwe"
    } 
]

let team1 = document.querySelector('#teams1')
int_teams.forEach(function(elem){
    

    let div = document.createElement('div');
    div.setAttribute("class" , "boxes")
    let img = document.createElement('img');
    img.src = elem['img']
    let name = document.createElement('h4');
    name.innerText = elem['name']
    div.append(img , name)

    team1.append(div);

})

let womens_team = [
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313200/313225.logo.png" ,
        name : "Australia Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313401.logo.png" ,
        name : "Bangladesh Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313200/313261.logo.png" ,
        name : "England Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313309.logo.png" ,
        name : "India Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313335.logo.png" ,
        name : "New Zealand Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313341.logo.png" ,
        name : "Pakistan Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313348.logo.png" ,
        name : "South Africa Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png" ,
        name : "Sri Lanka Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313402.logo.png" ,
        name : "Thailand Women"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png" ,
        name : "West Indies Women"
    } ,
]

let team2 = document.querySelector('#teams2')
womens_team.forEach(function(elem){
    

    let div = document.createElement('div');
    div.setAttribute("class" , "boxes")
    let img = document.createElement('img');
    img.src = elem['img']
    let name = document.createElement('h4');
    name.innerText = elem['name']
    div.append(img , name)

    team2.append(div);

})

let ipl = 
[
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313421.logo.png" ,
        name : "Chennai Super Kings"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313422.logo.png" ,
        name : "Delhi Capitals"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/334700/334707.png" ,
        name : "Gujarat Titans"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313419.logo.png" ,
        name : "Kolkata Knight Riders"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/333800/333885.png" ,
        name : "Lucknow Super Giants"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/344000/344062.png" ,
        name : "Mumbai Indians"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317000/317003.png" ,
        name : "Punjab Kings"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313423.logo.png" ,
        name : "Rajasthan Royals"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png" ,
        name : "Royal Challengers Bangalore"
    } ,
    {
        img : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313480.logo.png" ,
        name : "Sunrisers Hyderabad"
    } ,
]

let team3 = document.querySelector('#teams3')
ipl.forEach(function(elem){
    

    let div = document.createElement('div');
    div.setAttribute("class" , "boxes")
    let img = document.createElement('img');
    img.src = elem['img']
    let name = document.createElement('h4');
    name.innerText = elem['name']
    div.append(img , name)

    team3.append(div);

})


