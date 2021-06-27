//let n = 2;
//let d = 5229;
let o;
let dSlider;
let nSlider;
let chk1;



function preload() {
    //font = loadFont('Parisienne-Regular.ttf')
      font = loadFont('Arial Bold.ttf')

}

function setup() {
  

  createCanvas(1200, 900, WEBGL);
  angleMode(DEGREES);
  dSlider = createSlider(100,38000,4);
  dSlider.position(419,90)
    nSlider = createSlider(1,250,1);
  nSlider.position(608,90)
    textFont(font);


  
  
//     let p = createP('Type your thought:');
// p.style('font-size', '22px');
// p.style('text-font', 'HammersmithOne-Regular');
// p.position(20, 74);
// p.style('black', 'white');
  
//   input = createInput();
//   input.position(80, 106);
//   input.style('font-size', '20px');
//   input.size(200,25)
  

  
 chk1 = createCheckbox(' S T O P', false);
  chk1.style('font-size', '16px');

 chk1.position(822, 90);
chk1.style('color', '#ffffff');
    chk1.changed(mycheck);


 
// let t = createP('L E M N I S C A T E');
// t.style('font-size', '24px');
// t.position(80, 62);
// t.style('color', '#ffffff');
  
  
   
// let m = createP('Evolve and mutate to create around 2 million variations');
// m.style('font-size', '16px');
// m.style('text-font', font);
// m.position(80, 782);
// m.style('color', '#ffffff');
  
  
let b = createP('E V O L V E');
b.style('font-size', '14px');
b.position(450, 58);
b.style('color', '#ffffff');
  
  
  let c = createP('M U T A T E');
c.style('font-size', '14px');
c.position(638, 58);
c.style('color', '#ffffff');
  

  
  
    button = createButton("S A V E");
  button.style('font-size', '12px', 'color', '0,255,255');
  button.position(968, 82);
  button.size(70,32)
button.mousePressed(savename);


}


//2/3* (cos(u)* cos(2*v) + sqrt(2)* sin(u)* cos(v))* cos(u) / (sqrt(2) - sin(2*u)* sin(3*v))
//sqrt(2)* cos(u)* cos(u) / (sqrt(2) - sin(2*u)* sin(3*v))
//2/3* (cos(u)* sin(2*v) - sqrt(2)* sin(u)* sin(v))* cos(u) / (sqrt(2) - sin(2*u)* sin(3*v))

//cos(v)**3*cos(u)**3
//sin(u)**3
//sin(v)**3*cos(u)**3



function draw() {
  
  background(0);
  //orbitControl(0.04,0.002,0.01);
  
      stroke(255);
  rect(-520,-310,960,620)

  d = dSlider.value();
  n = nSlider.value();
  o=map(d,1,38000,1,255)
  //let hul=d+n;
  
  
    textSize(30);
   fill(255);
    text('L E M N I S C A T E',-522,-344)
  
  textSize(16);
   fill(255);
    text('Create around 2 million variations using evolve and mutate sliders.',-522,362)
    text('Made using P5js.',-522,385)

  fill(n,255-n,55)
  text(' Variant : E'+ d+ 'M'+n+' ',260,-286)
       textSize(14);

  fill(255);
    text('© Indhu Kanth 2021',312,360)



  
  //rotateX((frameCount));
  rotateY((frameCount));
  //rotateZ((frameCount));

  // translate(width/2,height/2);
  
  //fill(30,20,100,200);

  noFill();
  beginShape();
  strokeWeight(1);
  stroke(255)
  for (let i = 0; i < 361; i++) {
    let k = i * d/200;
    let r = 10+200 * sin(n*k);
    // r = abs(r);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(y,x,r);

  }
  endShape();

  
//    fill(255)   
//   beginShape();
//   strokeWeight(1);
//   stroke(255)
//   for (let i = 0; i < 361; i++) {
//     let k = i * d/200;
//     let r = 10+200 * sin(n*k);
//     // r = abs(r);
//     let x = r * cos(k);
//     let y = r * sin(k);
//    stroke(255);
//     textSize(14);
// text('indhu',-(x*r)/n,(y*r)/n);

//   }
//   endShape();

  
  
  
 noFill();
  stroke(n,255-o,o+n, 255);
  strokeWeight(0.6);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i*d/40;
    let r = 20+200 * sin(n*k);
    // r = abs(r);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(y,x,r);    
  }
  endShape();
  
  
  
    //fill(255,0,0,15);
   noFill();

  stroke(n,220,o+n, 255);
  strokeWeight(0.6);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i*d/40;
    let r = 190 * sin(n*k);
    // r = abs(r);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(y,x,r);    

  }
  endShape();
  


//   n += 0.000000134;
//   d +=0.383;
  
  
}

// function freeze()
// {
//   let p;
//   let r= frameCount;
//   if (chk1.checked()) {
//    p=0;
//   } else {
//     p=1;
//   }
//   return p;
// }

function mycheck() {
  if(chk1.checked())
    {

 noLoop();  
    }
else
  {
    loop();
  }

}

function savename(){


  save( "Variant" + d+n+ ".jpg")  
  

}



