function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelo_cargado);
    //La variable "posenet" es un arreglo que tiene predefinida la palabra "pose" para identificar la parte del cuerpo que debe de "filtrar".
    posenet.on("pose", gotPoses);
}

function modelo_cargado(){
    console.log("modelo cargado");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("Esta es la cordenada en X de la naríz" + noseX + " esta es la cordenada en Y de la naríz" + noseY);
    }
}

function draw(){
    image(video,0,0,300,300);
}