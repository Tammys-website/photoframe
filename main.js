function preload(){

}
function setup(){
    canvas =  createCanvas(640, 480);
     video = createCapture(VIDEO);
    video.hide();
   canvas.position(150, 150)
}
function draw(){
    image(video, 50, 60, 530, 360);
   fill ("red");
   circle (50, 50, 80);
   circle (50, 430, 80);
   circle (590, 50, 80);
   circle (590, 430, 80);
   fill ("green");
rect(90, 40, 460, 20);
rect (90, 420, 460, 20);
rect(40, 90, 20, 300);
rect (580, 90, 20, 300);
}
function take_Snapshot(){
    save("mypicture.png")
}
