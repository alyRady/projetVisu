/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Dimensions de la zone de dessin (ici, définies en dur mais
//pourraient être calculée au chargement de la page, voire à chaque redimensionnement.
/*const svgDimensions = {
    width: 500,
    height: 300};
//Marge intérieur pour le graphique.
const margins = {
    top: 50,
    bottom: 50,
    right: 50,
    left: 50
};

const data = getData();

//Création de la case du tooltip
var tooltip = d3.select("#chart")
        .append("div")
        .attr("id", "tootlip")
        .style("opacity", 0);

//Mise au point des échelles.
//Echelle des X : permet de déterminer la longueur des barres.
var scaleX = d3.scaleLinear()
        .domain([0, 100])
        .range([margins.left, svgDimensions.width - margins.right]);
//Echelle des Y : détermine la position en y et la largeur des bandes.
var scaleY = d3.scaleLinear()
    .domain([0, 1]) // $0 to $80
    .range([svgDimensions.height, 0]) // seems backwards because SVG is y-down

var svg = d3.select("svg")
    .attr('width', svgDimensions.width + margins.left + margins.right)
    .attr('height', svgDimensions.height + margins.top + margins.bottom)
    
var chartGroup = svg.append("g")
    .attr('transform', "translate(" + margins.left + "," + margins.top + ")")

function getData(){
    var d = d3.json("data/artist.json").then(
            function(data){
                //console.log(data);                
                return data;
            });
    //console.log(d);
    return(d);
}

function filter(){
    const artist = data.then((dataArtist)=> {
        let gender = dataArtist.map(d => d.gender);
        console.log(gender);
        gender = gender.filter((d,i) => gender.indexOf(d) === i);
        console.log(gender);
        
        const genderValue = d3.scaleLinear()
                    .domain(gender)
                    .range([0, 3])
        
        console.log(genderValue);
    });
}*/

var zodiacData = [
    {x: "Aries",         value: 0},
    {x: "Taurus",        value: 0},
    {x: "Gemini",        value: 0},
    {x: "Cancer",        value: 0},
    {x: "Leo",           value: 0},
    {x: "Virgo",         value: 0},
    {x: "Libra",         value: 0},
    {x: "Scorpio",       value: 0}, 
    {x: "Sagittarius",   value: 0},
    {x: "Capricorn",     value: 0} ,
    {x: "Aquarius",     value: 0},
    {x: "Pisces",     value: 0}
];


//récupérer toutes les données de chaque artiste avec leur sign et le(s) genre(s). (avec des map)
//faire un forEach du map qui va associer à chaque sign les genres (structurer les données dans cette méthode)

//Il existe une méthode de d3 qui d'appelle nest qui 


//Méthode qui compte le nombre d'artiste par zodiac sign et met les bonnes valeurs dans zodiacData
/*function compteurSign(array){
    let sign;
    let cptAries;
    let cptTaurus;
    let cptGemini;
    let cptCancer;
    let cptLeo;
    let cptVirgo;
    let cptLibra;
    let cptScorpio;
    let cptSagittarius;
    let cpt
    array.forEach(function(s){
        sign = s.zodiac;
        switch(sign){
            case zodiacData[0].x:
                zodiacData[0].value++;
                break;
            case zodiacData[1].x:
                zodiacData[1].value++;
                break;
            case zodiacData[2].x:
                zodiacData[2].value++;
                break;
            case zodiacData[3].x:
                zodiacData[3].value++;
                break;
            case zodiacData[4].x:
                zodiacData[4].value++;
                break;
            case zodiacData[5].x:
                zodiacData[5].value++;
                break;
            case zodiacData[6].x:
                zodiacData[6].value++;
                break;
            case zodiacData[7].x:
                zodiacData[7].value++;
                break;
            case zodiacData[8].x:
                zodiacData[8].value++;
                break;
            case zodiacData[9].x:
                zodiacData[9].value++;
                break;
            case zodiacData[10].x:
                zodiacData[10].value++;
                break;
            case zodiacData[11].x:
                zodiacData[11].value++;
                break;
        }
    });
    
    
    for(var s in array){
        sign = s.zodiac;
        console.log(s);
        switch(sign){
            case zodiacData[0].name:
                zodiacData[0].value++;
                console.log("hello");
                break;
            case zodiacData[1].name:
                zodiacData[1].value++;
                break;
            case zodiacData[2].name:
                zodiacData[2].value++;
                break;
            case zodiacData[3].name:
                zodiacData[3].value++;
                break;
            case zodiacData[4].name:
                zodiacData[4].value++;
                break;
            case zodiacData[5].name:
                zodiacData[5].value++;
                break;
            case zodiacData[6].name:
                zodiacData[6].value++;
                break;
            case zodiacData[7].name:
                zodiacData[7].value++;
                break;
            case zodiacData[8].name:
                zodiacData[8].value++;
                break;
            case zodiacData[9].name:
                zodiacData[9].value++;
                break;
            case zodiacData[10].name:
                zodiacData[10].value++;
                break;
            case zodiacData[11].name:
                zodiacData[11].value++;
                break;
        }
    }
}*/


function zodiac_sign(day, month)
    {
        let astro_sign="";
           
        // checks month and date within the
        // valid range of a specified zodiac
        if (month === "12"){
               
            if (day < 22)
            astro_sign = "Sagittarius";
            else
            astro_sign ="Capricorn";
        }
               
        else if (month === "01"){
            if (day < 20)
            astro_sign = "Capricorn";
            else
            astro_sign = "Aquarius";
        }
               
        else if (month === "02"){
            if (day < 19)
            astro_sign = "Aquarius";
            else
            astro_sign = "Pisces";
        }
               
        else if(month === "03"){
            if (day < 21)
            astro_sign = "Pisces";
            else
            astro_sign = "Aries";
        }
        else if (month === "04"){
            if (day < 20)
            astro_sign = "Aries";
            else
            astro_sign = "Taurus";
        }
               
        else if (month === "05"){
            if (day < 21)
            astro_sign = "Taurus";
            else
            astro_sign = "Gemini";
        }
               
        else if( month === "06"){
            if (day < 21)
            astro_sign = "Gemini";
            else
            astro_sign = "Cancer";
        }
               
        else if (month === "07"){
            if (day < 23)
            astro_sign = "Cancer";
            else
            astro_sign = "Leo";
        }
               
        else if( month === "08"){
            if (day < 23)
            astro_sign = "Leo";
            else
            astro_sign = "Virgo";
        }
               
        else if (month === "09"){
            if (day < 23)
            astro_sign = "Virgo";
            else
            astro_sign = "Libra";
        }
               
        else if (month === "10"){
            if (day < 23)
            astro_sign = "Libra";
            else
            astro_sign = "Scorpio";
        }
               
        else if (month === "11"){
            if (day < 22)
            astro_sign = "Scorpio";
            else
            astro_sign = "Sagittarius";
        }
        return astro_sign;
    }

var da = [
  {name:   "European Union - Top 10 Most Populated Countries", children: [
    {name: "Belgium",        value: 11443830},
    {name: "France",         value: 64938716},
    {name: "Germany",        value: 80636124},
    {name: "Greece",         value: 10892931},
    {name: "Italy",          value: 59797978},
    {name: "Netherlands",    value: 17032845},
    {name: "Poland",         value: 38563573},
    {name: "Romania",        value: 19237513}, 
    {name: "Spain",          value: 46070146},
    {name: "United Kingdom", value: 65511098}  
  ]} 
];

var signs = [];
var zodiacJson = [];

d3.json("data/artist.json", function(error, data) {
    if(error) throw error;
    
    console.log(data);
    //Mapping des données
    let birth = data.map(d => d.lifeSpan.begin.split("-") !== "" && d.type === "Person" && d.genres !== '[]' ? [d.name, d.lifeSpan.begin.split("-"), d.genres.begin.split(",\\")] : [d.name, ""]);
    birth = birth.filter(d => d[1].length === 3);
    console.log(birth);
    birth = birth.map(d => [d, d.nom = d[0], d.born = d[1], d.zodiac = zodiac_sign(parseInt(d[1][2]),d[1][1]), d.genre = d[2]]);
    let cleanBirth = birth.map(d => d[0]);
    console.log(cleanBirth);
    
    //test méthode nest
    var nested_data = d3.nest()
            .key(function(d) { return d.zodiac; })
            .rollup(function(ids) {
                return ids.length; 
            })
            .entries(cleanBirth)
            .map(function(group) {
                return {
                    x: group.key,
                    value: group.value
                };
  });
    console.log(nested_data);
    
    //faire foreach de cleanBirth et à l'intérieur faire un case avec les nom des signs et incrémenter un cpt pour chaque sign ?????????
    //compteurSign(cleanBirth);
    //console.log(zodiacData);
    
    /*let zodiac = cleanBirth.map(d => d.zodiac !== "" ? d.zodiac : "");
    let aries = zodiac.map(d => d === "Aries" ? d : "");
    let taurus = zodiac.map(d => d === "Taurus" ? d : "");
    let gemini = zodiac.map(d => d === "Gemini" ? d : "");
    let cancer = zodiac.map(d => d === "Cancer" ? d : "");
    let leo = zodiac.map(d => d === "Leo" ? d : "");
    let virgo = zodiac.map(d => d === "Virgo" ? d : "");
    let libra = zodiac.map(d => d === "Libra" ? d : "");
    let scorpio = zodiac.map(d => d === "Scorpio" ? d : "");
    let sagittarius = zodiac.map(d => d === "Sagittarius" ? d : "");
    let capricorn = zodiac.map(d => d === "Capricorn" ? d : "");
    let aquarius = zodiac.map(d => d === "Aquarius" ? d : "");
    let pisces = zodiac.map(d => d === "Pisces" ? d : "");
    
    aries = aries.filter(d => d !== "");
    taurus = taurus.filter(d => d !== "");
    gemini = gemini.filter(d => d !== "");
    cancer = cancer.filter(d => d !== "");
    leo = leo.filter(d => d !== "");
    virgo = virgo.filter(d => d !== "");
    libra = libra.filter(d => d !== "");
    scorpio = scorpio.filter(d => d !== "");
    sagittarius = sagittarius.filter(d => d !== "");
    capricorn = capricorn.filter(d => d !== "");
    aquarius = aquarius.filter(d => d !== "");
    pisces = pisces.filter(d => d !== "");
    console.log(aquarius.length);*/
    
    
    
    /*
    // create a chart and set the data
    chart = anychart.treeMap(da, "as-tree");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();*/
    
    // create a chart
chart = anychart.radar();

// create the first series (line) and set the data
chart.line(nested_data);


// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
});