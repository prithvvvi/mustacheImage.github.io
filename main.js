nose_x=0;
nose_y=0;
function preload() {
    mustach=loadImage("https://i.postimg.cc/XYZxRJKM/mustache-removebg-preview.png");
}

function setup() {
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("the model has been loaded");
}
function draw(){
    image(video,0,0,300,300);
    image(mustach,nose_x-35,nose_y-5,70,50);

}
function take_snapshot(){
    save("mustachimage.png");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);

    }
}