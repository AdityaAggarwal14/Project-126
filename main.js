noseX=0;
noseY=0;
rightWristx=0;
leftWristx=0;
difference=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
         noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nosex="+noseX+"nosey="+noseY );
        leftWristx= results[0].pose.leftWrist.x;
        rightWristx= results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
        console.log("leftwristx="+leftWristx+"rightwristx="+rightWristx+"difference="+difference);
    }
}

function draw() {
    background('#87CEEB');
    document.getElementById("square_side").innerHTML="font size of the text will be="+difference+"px";
    textSize(difference);
    fill('#FF0000');
    text('Aditya Aggarwal',50,400);
}