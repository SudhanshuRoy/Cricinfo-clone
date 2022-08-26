

// let international_tours = 
// [
//     "England v South Africa" ,
//     "Zimbabwe v India" ,
//     "West Indies v New Zealand" ,
//     "Netherlands v Pakistan" ,
//     "Australia v Zimbabwe" ,
//     "BAN-A in West Indies" ,
//     "SL U-19s in ENG" ,
//     "IRE-W in NL"
// ]

// let international_tournaments =
// [
//     "Asia Cup Qualifier" ,
//     "Asia Cup 2022" ,
//     "CWC Challenge Group A" ,
//     "CWC Challenge Group B"
// ]

// let icc_tournaments = 
// [
//     "ICC Women's Championship" ,
//     "Men's Cricket World Cup League 2" ,
//     "CWC Challenge League Group A" ,
//     "CWC Challenge League Group B" ,
//     "ICC CWC Super League" ,
//     "ICC World Test Championship" 
// ]

// let t20_tournaments =
// [
//     "Asia Cup 2022" ,
//     "SLC T20" ,
//     "Maharaja T20" ,
//     "6IXTY (W)" , 
//     "6IXTY (M)" ,
//     "T20 QUAD (in UAE)" ,
//     "Namibia T20" 
// ]

// let associate_cricket =
// [
//     "Kenya v Nepal" ,
//     "Bahrain v Kuwait" ,
//     "ITA-W in Austria" ,
//     "Continental Cup"
// ]

// let australia_domestic = 
// [
//     "Sheffield Shield" ,
//     "The Marsh Cup" ,
//     "BBL 2022" ,
//     "WBBL 2022" ,
//     "WNC League" 
// ]

// let england_domestic =
// [
//     "County Div1" ,
//     "County Div2" ,
//     "100 (Men's)" ,
//     "100 (Women's)" ,
//     "RL Cup" ,
//     "Vitality Blast" ,
//     "RHF Cup" 
// ]

// let newzealand_domestic = 
// [
//     "Plunket Shield" ,
//     "Ford Trophy" ,
//     "Women's 1-Day"
// ]

// let westindies_domestic = 
// [
//     "6IXTY (W)" ,
//     "6IXTY (M)" ,
//     "CPL 2022" ,
//     "WCPL 2022"
// ]

let future_int_tours = 
[
    "NZ-A in India, Sep 2022" ,
    "India Women tour of England, Sep 2022" ,
    "New Zealand tour of Australia, Sep 2022" ,
    "England tour of Pakistan, Sep 2022" ,
    "Australia tour of India, Sep 2022" ,
    "South Africa tour of India, Sep 2022" ,
    "New Zealand T20I Tri-Series, Oct 2022" ,
    "West Indies tour of Australia, Oct 2022" ,
    "England tour of Australia, Oct 2022" ,
    "India tour of New Zealand, Nov 2022" ,
    "South Africa tour of Australia, Dec 2022" ,
    "Bangladesh Women tour of New Zealand, Dec 2022" ,
    "England tour of New Zealand, Feb 2023" ,
    "Sri Lanka tour of New Zealand, Mar 2023" 
]

let recent_int_tours =
[
    "Zimbabwe v Bangladesh" ,
    "Ireland v Afghanistan" ,
    "West Indies v India" ,
    "Sri Lanka v Pakistan" ,
    "Netherlands v New Zealand" ,
    "SA-W in England" ,
    "Scotland v New Zealand" ,
    "IRE Tri-Series (Women)" ,
    "Ireland v New Zealand" ,
    "England v India" ,
    "West Indies v Bangladesh" ,
    "Sri Lanka v Australia" ,
    "IND-W in Sri Lanka" ,
    "Ireland v India" ,
    "England v India (5th Test)" ,
    "Netherlands v England" ,
    "England v New Zealand" ,
    "AUS-A in Sri Lanka" ,
    "India v South Africa"
]

let recent_associate_cricket = 
[
    "Canada v Nepal" ,
    "Austria v Hungary" ,
    "Sofia T20" ,
    "Finland v Estonia" ,
    "Bulgaria v Serbia" ,
    "Namibia Tri-Series" ,
]

function current(){
    window.location.href = "series.html"
}

function future(){

    let change = document.querySelector("#names")
    change.innerHTML = null;
    change.style.display = "block";

    let title = document.createElement("h2");
    title.innerText = "INTERNATIONAL TOURS"
    change.append(title);

    let div = document.createElement("div");

    future_int_tours.forEach(function(elem){

        let x = document.createElement("h4");
        x.innerText = elem;

        div.append(x);
    })

    change.append(div)
}



function recent(){
    let change = document.querySelector("#names")
    change.innerHTML = null;
    change.style.display = "block";

    let title = document.createElement("h2");
    title.innerText = "INTERNATIONAL TOURS"
    change.append(title);

    let div = document.createElement("div");
    div.style.marginBottom = "50px";

    recent_int_tours.forEach(function(elem){

        let x = document.createElement("h4");
        x.innerText = elem;

        div.append(x);
    })

    change.append(div)



    let title2 = document.createElement("h2");
    title2.innerText = "ASSOCIATE CRICKET"
    change.append(title2);
    title2.style.marginTop = "30px"

    let div2 = document.createElement("div");

    recent_associate_cricket.forEach(function(elem){

        let x = document.createElement("h4");
        x.innerText = elem;

        div2.append(x);
    })

    change.append(div2)
}