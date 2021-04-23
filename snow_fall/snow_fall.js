const N_FLAKES =100
let fallTimer=setInterval(fall,10)
let snow_play=true

let flakes_x =[
    // parseInt(Math.random()*500),
    // parseInt(Math.random()*500),
]

let flakes_y =[
    // -parseInt(Math.random()*300),
    // -parseInt(Math.random()*300),
]

function generateCoords(){
    for (let i=0; i<=N_FLAKES;i++){
        flakes_x[i]=parseInt(Math.random()*1790)
        flakes_y[i]=-parseInt(Math.random()*1000)
    }
}

function drawFlake(i) {

    snowContainer.innerHTML+= 
    `
    <div class="flake" 
    style="
        left: ${flakes_x[i]}px;
        top: ${flakes_y[i]}px
        "
    ></div>
    `
}
function fall(){
    for(i=0;i<N_FLAKES;i++){
        flakes_y[i]+=5
        if (flakes_y[i]>800){
            flakes_y[i]=-parseInt(Math.random()*500)
        }
    }
    drawAllFlakes()

}

function drawAllFlakes(){
    snowContainer.innerHTML=``
    for(i=0;i<N_FLAKES;i++){
        drawFlake(i)
    }
}




function stop(){
 
    if(snow_play==true){
        clearInterval(fallTimer)
        snow_play=false
        console.log("1."+snow_play)
    }else if(snow_play==false){
        fallTimer=setInterval(fall,10)
        snow_play=true
        console.log("2."+snow_play)
    }
  
}

// drawAllFlakes()
generateCoords()
