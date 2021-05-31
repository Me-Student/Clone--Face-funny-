function preload()
{

}
function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);//remember// to access the camera
    video.size(300,300);
    video.hide();

    var poseNet= ml5.poseNet(video, modelLoaded);// used to initialize the poseNet
    poseNet.on("pose", gotPoses);//remember// on() is used to execute the poseNet
}

function modelLoaded()
{
    console.log("poseNet is intialized");
}

function gotPoses(results)
{
    if(results.length > 0)// main part in the code!!!
    {
        console.log(results);
        console.log("the nose x position is" + "" + results[0].pose.nose.x);// used to show the position of the facial part of the image!
        console.log("the nose y position is" + "" + results[0].pose.nose.y);
        console.log("the left eyes's x position is" + "" + results[0].pose.leftEye.x);
        console.log("the left eyes's y position is" + "" + results[0].pose.leftEye.y);
    }

}

function draw()// my fav one!
{
    image(video,0,0,300,300)// (var, x, y, width, height)
}
function take_snapshot()
{
    save("MyFilterImg.png");
}