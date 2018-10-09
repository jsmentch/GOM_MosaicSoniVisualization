var img, imgdigi, img2, imgdigi2, mapp, rov; //images
var button; //start button

var kp = 0; //chooses between mosaics
var selec; //subselection from mouse click

//vars for trig motion:
var angle1 = 0;
var scalar = 7;
var z1

var counturchin, countfish, countcrab,countlophelia_dead,countsponge,countlophelia_live,countanemone,countseastar,countcallogorgia,countmussel,countparamuricea,counttubeworms, countbrittlestar; //counted values of pixels ->now freq





var sRatio; //canvas height : image height, scaling ratio


//var oscR, oscG, oscB ; //3 oscillators

var mapon; // 1=start screen, 0=other

var windowwidth, windowheight; //var for sub window w,h

var urchin,fish,crab,lophelia_dead,sponge,lophelia_live,anemone,seastar,callogorgia,mussel,paramuricea,tubeworms,brittlestar

function preload() {
  img = loadImage("assets/mosaicH12010.png"); //load mosaic
  imgdigi = loadImage("assets/mosaicH12010d.png"); //load digitization
  img2 = loadImage("assets/mosaicH1geo2010.png"); //load mosaic2
  imgdigi2 = loadImage("assets/mosaicH1geo2010d.png"); //load digitization2ß
  mapp = loadImage("assets/map.png"); 
  rov = loadImage("assets/rov.png")

  crabSound = loadSound('assets/crab.wav')
  lophdSound = loadSound('assets/lophelia_dead.wav')
  lophlSound = loadSound('assets/lophelia_live.wav')
  paraSound = loadSound('assets/paramuricea.wav')
  spongeSound = loadSound('assets/sponge.wav')
  tubeSound = loadSound('assets/tubeworm.wav')
  urchinSound = loadSound('assets/urchin.wav')
  fishSound = loadSound('assets/fish.wav')
  anemoneSound = loadSound('assets/anemone.wav')
  seastarSound = loadSound('assets/seastar.wav')
  calloSound = loadSound('assets/callogorgia.wav')
  musselSound = loadSound('assets/mussels.wav')
  britSound = loadSound('assets/brittlestar.wav')
  
}

function setup() {
  mapon = 1
  createCanvas(750,550);
  frameRate(60);
  background(0);
  image(mapp, 0, 0, width, height)
  button = createButton('Mosaic H1');
  button.position(19, 19);
  button.mousePressed(bPress);
  


  crabSound.loop()
  crabSound.setVolume(0)
  lophdSound.loop()
  lophdSound.setVolume(0)
  lophlSound.loop()
  lophlSound.setVolume(0)
  paraSound.loop()
  paraSound.setVolume(0)
  spongeSound.loop()
  spongeSound.setVolume(0)
  tubeSound.loop()
  tubeSound.setVolume(0)
  urchinSound.loop()
  urchinSound.setVolume(0)

  fishSound.loop()
  fishSound.setVolume(0)
  anemoneSound.loop()
  anemoneSound.setVolume(0)
  seastarSound.loop()
  seastarSound.setVolume(0)
  calloSound.loop()
  calloSound.setVolume(0)
  musselSound.loop()
  musselSound.setVolume(0)
  britSound.loop()
  britSound.setVolume(0)
/*
  oscR = new p5.Oscillator();
  oscR.setType('sine');
  oscR.amp(0.01);

  oscG = new p5.Oscillator();
  oscG.setType('sine');
  oscG.amp(0.01);

  oscB = new p5.Oscillator();
  oscB.setType('sine');
  oscB.amp(0.01);

  */
}



function setup2() {
  mapon = 0
  background(0);
  imageMode(CORNER)
  sRatio = height/img.height;
  image(img,0,0,img.width,img.height,0,0,sRatio*img.width,height);
  //oscR.start();
  //oscG.start();
  //oscB.start();
  

}

function draw() {
  //background(0);
  //image(img,0,0,img.width,img.height,0,0,sRatio*img.width,height);




  if(mapon == 0) {


  windowwidth = width-(sRatio*img.width)
  windowheight = height/3

  var ang1 = radians(angle1);
  var z1 = (scalar * cos(ang1));
  imageMode(CORNER);
  if (kp == 0){
    
    image(img,mouseX/sRatio-(windowwidth/2),mouseY/sRatio-(windowheight/2),windowwidth+z1,windowheight+z1*(windowheight/windowwidth),img.width*sRatio,0,windowwidth,windowheight);
  } else if (kp == 1){
    image(img2,mouseX/sRatio-(windowwidth/2),mouseY/sRatio-(windowheight/2),windowwidth+z1,windowheight+z1*(windowheight/windowwidth),img.width*sRatio,0,windowwidth,windowheight);
  }
  //ROV image overlay
  image(rov,0,0,rov.width,rov.height,img.width*sRatio,0,windowwidth,windowheight);
  //fill(255,0,0)
  //ellipse(5,5,5,5)//recording circle
  //rotate(z1/10000);
  angle1 += 1; //speed of zoom in effect

  
  //oscR.freq(map(counturchin,0,2500,5000,15000),0.2);
  //oscG.freq(map(countfish,0,2500,500,5000),0.2);
  //oscB.freq(map(gotB,0,255,60,500));
}
}

function bPress() {
    setup2()
  

}


function updateArray() {

  if (kp == 0){
  selec = imgdigi.get(mouseX/sRatio-(windowwidth/2),mouseY/sRatio-(windowheight/2),windowwidth,windowheight);
  } else if (kp == 1){
  selec = imgdigi2.get(mouseX/sRatio-(windowwidth/2),mouseY/sRatio-(windowheight/2),windowwidth,windowheight);
  }
  selec.loadPixels();
  fill(0);
  imageMode(CORNER);
  image(selec,img.width*sRatio,windowheight);
  if (kp == 0){
  blend(img,mouseX/sRatio-(windowwidth/2),mouseY/sRatio-(windowheight/2),windowwidth,windowheight,img.width*sRatio,windowheight,windowwidth,windowheight,MULTIPLY);

  } else if (kp == 1){
  blend(img2,mouseX/sRatio-(windowwidth/2),mouseY/sRatio-(windowheight/2),windowwidth,windowheight,img.width*sRatio,windowheight,windowwidth,windowheight,MULTIPLY);
  }
  
}

function countRed1() {

  var urchc = color(1,92,230);
  var fishc = color(2,0,0);
  var crabc = color(56,168,0);
  var lophdc = color(114,178,115);
  var spongec = color(115,76,0);
  var lophlc = color(151,219,242);
  var anemc = color(169,0,230);
  var seastarc = color(209,255,115);
  var calloc = color(232,190,255);
  var musselc = color(251,211,127);
  var parac = color(252,170,0);
  var tubec = color(253,255,115);
  var britc = color(254,0,197);

  var counturchin = 0;
  var countfish = 0;
  var countcrab = 0;
  var countlophelia_dead = 0;
  var countsponge = 0;
  var countlophelia_live = 0;
  var countanemone = 0;
  var countseastar = 0;
  var countcallogorgia = 0;
  var countmussel = 0;
  var countparamuricea = 0;
  var counttubeworms = 0;
  var countbrittlestar = 0;




  for (var xR = 0; xR < selec.pixels.length; xR = xR + 4) {
    if(selec.pixels [xR] == red(urchc)) {
      counturchin++;
    } else if(selec.pixels [xR] == red(fishc)) {
      countfish++;
    } else if(selec.pixels [xR] == red(crabc)) {
      countcrab++;
    } else if(selec.pixels [xR] == red(lophdc)) {
      countlophelia_dead++;
    } else if(selec.pixels [xR] == red(spongec)) {
      countsponge++;
    } else if(selec.pixels [xR] == red(lophlc)) {
      countlophelia_live++;
    } else if(selec.pixels [xR] == red(anemc)) {
      countanemone++;
    } else if(selec.pixels [xR] == red(seastarc)) {
      countseastar++;
    } else if(selec.pixels [xR] == red(calloc)) {
      countcallogorgia++;
    } else if(selec.pixels [xR] == red(musselc)) {
      countmussel++;
    } else if(selec.pixels [xR] == red(parac)) {
      countparamuricea++;
    } else if(selec.pixels [xR] == red(tubec)) {
      counttubeworms++;
    } else if(selec.pixels [xR] == red(britc)) {
      countbrittlestar++;
    }
  }
  urchin = new Graph(0,counturchin);
  fish = new Graph(1,countfish);
  crab = new Graph(2,countcrab);
  lophelia_dead = new Graph(3,countlophelia_dead);
  sponge = new Graph(4,countsponge);
  lophelia_live = new Graph(5,countlophelia_live);
  anemone = new Graph(6,countanemone);
  seastar = new Graph(7,countseastar);
  callogorgia = new Graph(8,countcallogorgia);
  mussel = new Graph(9,countmussel);
  paramuricea = new Graph(10,countparamuricea);
  tubeworms = new Graph(11,counttubeworms);
  brittlestar = new Graph(12,countbrittlestar);

  fill(0)
  rect(img.width*sRatio, windowheight*2,windowwidth,windowheight)//cover rects w/ black
  //fill(255)
  //rect(img.width*sRatio, windowheight*2,map(counturchin, 0, windowheight*windowwidth, 0, windowwidth),windowheight/13)
  //rect(img.width*sRatio, windowheight*2+windowheight/13,map(countfish, 0, windowheight*windowwidth, 0, windowwidth),windowheight/13)
  fill(urchc);
  urchin.display();

  fill(fishc);
  fish.display();

  fill(crabc);
  crab.display();

  fill(lophdc);
  lophelia_dead.display();

  fill(spongec);
  sponge.display();

  fill(lophlc);
  lophelia_live.display();

  fill(anemc);
  anemone.display();

  fill(seastarc);
  seastar.display();

  fill(calloc);
  callogorgia.display();

  fill(musselc);
  mussel.display();

  fill(parac);
  paramuricea.display();

  fill(tubec);
  tubeworms.display();

  fill(britc);
  brittlestar.display();

  crabSound.setVolume(map(countcrab,0,2500,0,1),1);
  lophdSound.setVolume(map(countlophelia_dead,0,2500,0,0.15),1);
  lophlSound.setVolume(map(countlophelia_live,0,2500,0,0.25),1);
  paraSound.setVolume(map(countparamuricea,0,2500,0,0.5),1);
  spongeSound.setVolume(map(countsponge,0,2500,0,0.5),1);
  tubeSound.setVolume(map(counttubeworms,0,2500,0,0.3),1);
  urchinSound.setVolume(map(counturchin,0,2500,0,0.7),1);
  fishSound.setVolume(map(countfish,0,2500,0,0.7),1);
  anemoneSound.setVolume(map(countanemone,0,2500,0,2),1);
  seastarSound.setVolume(map(countseastar,0,2500,0,0.7),1);
  calloSound.setVolume(map(countcallogorgia,0,2500,0,0.4),1);
  musselSound.setVolume(map(countmussel,0,2500,0,0.7),1);
  britSound.setVolume(map(countbrittlestar,0,2500,0,0.8),1);

}

function Graph(number, count) {
  this.number = number;
  this.count = count;

  print(count); //see actual pixel counts of each organism in console

  this.display = function(){
    this.count = count;
    rect(img.width*sRatio, windowheight*2+this.number*windowheight/13,map(count, 0, windowheight*windowwidth, 0, windowwidth),windowheight/13)
  }

}

function keyPressed() {
  if (kp == 0){
    kp = 1;
  } else {
    kp = 0;
  }
  switchMosaic();
  updateArray();
  countRed1();

}

function switchMosaic() {

  imageMode(CORNER);

  if (kp == 0){
    image(img,0,0,img.width,img.height,0,0,sRatio*img.width,height);
  } else if (kp == 1){
    image(img2,0,0,img.width,img.height,0,0,sRatio*img.width,height);
  }
}

function mousePressed(){
  updateArray();
  countRed1();


};

