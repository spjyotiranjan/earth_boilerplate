
//body
var bodyvar = document.body


//four buttons
var consumption = document.getElementById("consumption")
console.log("consumption",consumption)
var climate = document.getElementById("climate")
console.log("climate",climate)
var resources = document.getElementById("resources")
console.log("resources",resources)
var people = document.getElementById("people")
console.log("people",people)


//savetext
var savetext = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

//variable Declaration Done

consumption.onclick=()=>{

    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"

    bodyvar.style.backgroundSize= "100%"

    //frame

    frame.src= "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text

    savetext.innerHTML= "Do your bit! Shop only what you need,eat only what you need and always save the leftovers"

    //button
    consumption.style.background= "#27AE60"
    climate.style.background= "transparent"
    resources.style.background= "transparent"
    people.style.background= "transparent"
}

climate.onclick=()=>{

    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"

    bodyvar.style.backgroundSize= "100%"

    //frame

    frame.src= "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text

    savetext.innerHTML= "Do your bit! Save trees, use renewable energy sources and prefer to travel green"

    //button
    
    climate.style.background= "#377FDD"
    resources.style.background= "transparent"
    people.style.background= "transparent"
    consumption.style.background= "transparent"

}

resources.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"

    //frame
    frame.src= "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text

    savetext.innerHTML= "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

    //button
    resources.style.background= "#DF973B"
    people.style.background= "transparent"
    consumption.style.background= "transparent"
    climate.style.background= "transparent"

}

people.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"


    //frame
    frame.src= "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"


    //text
    savetext.innerHTML= "Do your bit! Never waste  food.Rather offer it to people or animals who are in need."


    //button
    people.style.background= "#D84855"
    consumption.style.background= "transparent"
    climate.style.background= "transparent"
    resources.style.background= "transparent"
}

