function preload(){

}

function setup(){
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video,100,80,300,250);

stroke(7,0,255);
fill(19, 223, 222);

circle(100,90,50);
circle(400,90,50);
circle(400,325,50);
circle(100,325,50);

stroke(145, 0, 255);
fill(97, 3, 255);

rect(87, 76, 325, 35, 20);
rect(87, 305, 325, 35, 20);

stroke(0, 0, 0);
fill(21, 253, 7);

rect(82, 70, 35, 275, 20);
rect(382, 70, 35, 275, 20);


}

function take_snapshot(){
    save("photo.png");
}