// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let pos_ombro_r_x=0;
let pos_ombro_r_y=0;
let pos_ombro_l_x=0;
let pos_ombro_l_y=0;
let pos_ombro_r_x_cong=0;
let pos_ombro_r_y_cong=0;
let pos_ombro_l_x_cong=0;
let pos_ombro_l_y_cong=0;
let pos_cotovelo_r_x=0;
let pos_cotovelo_r_y=0;
let pos_cotovelo_l_x=0;
let pos_cotovelo_l_y=0;
let pos_pulso_r_x=0;
let pos_pulso_r_y=0;
let pos_pulso_l_x=0;
let pos_pulso_l_y=0;
let pos_pulso_r_x_cong=0;
let pos_pulso_r_y_cong=0;
let pos_pulso_l_x_cong=0;
let pos_pulso_l_y_cong=0;
let comp_braco_e=0;
let comp_braco_d=0;
let pontos_esquerda=0;
let pontos_direita=0;
let pontos_acumulado_esquerda=0;
let pontos_acumulado_direita=0;
let pontos_pico_esquerda=0;
let pontos_pico_direita=0;
let contador_movimento_esquerdo=0;
let contador_movimento_direito=0;
let exec_mov_esquerdo=0;
let exec_mov_direito=0;
let flag_mao_esquerda_ok=0
let flag_mao_direita_ok=0
let flag_desenha_seta=0
let flag_desenho_esqueleto=0
let flag_correcao_mov=0
let momento=0
let logo;
let angulo_esquerda_pico=0
let angulo_direita_pico=0
var som_um
var som_dois
var som_tres
var som_quatro
var som_cinco
var som_seis
var som_sete
var som_oito
var som_nove
var som_dez
var som_onze
var som_doze
var som_preparese
var som_vamosla
var som_voceconsegue
var som_quasela
var som_iniciacao
var som_abaixebracos
var som_abaixebracod
var som_abaixebracoe


function preload(){
  logo = loadImage('personalogo.png');
  //video = createVideo('AMANDA.mp4',vidLoad); //video pregravado
  
  som_um = loadSound('assets/Um.mp3');
  som_dois = loadSound('assets/Dois.mp3');
  som_tres = loadSound('assets/Três.mp3');
  som_quatro = loadSound('assets/Quatro.mp3');
  som_cinco = loadSound('assets/Cinco.mp3');
  som_seis = loadSound('assets/Seis.mp3');
  som_sete = loadSound('assets/Sete.mp3');
  som_oito = loadSound('assets/Oito.mp3');
  som_nove = loadSound('assets/Nove.mp3');
  som_dez = loadSound('assets/Dez.mp3');
  som_onze = loadSound('assets/Onze.mp3');
  som_doze = loadSound('assets/Doze.mp3');
  som_preparese = loadSound('assets/Prepare-se.mp3');
  som_vamosla = loadSound('assets/Vamos lá, continue.mp3');
  som_voceconsegue = loadSound('assets/Você consegue!.mp3');
  som_quasela = loadSound('assets/Você está quase lá.mp3');
  som_iniciacao = loadSound('assets/Iniciação.mp3');
  som_iniexercise =  loadSound('assets/ini_exercise.mp3');
  som_abaixemao =  loadSound('assets/Abaixe sua mão D.mp3');
  som_abaixebracos = loadSound('assets/Abaixe os braços um pouco.mp3');
  som_abaixebracod =  loadSound('assets/Abaixe seu braço direito.mp3');
  som_abaixebracoe =  loadSound('assets/Abaixe o braço esquerdo.mp3');
}

function setup() {
  createCanvas(640, 460);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  som_iniciacao.play();

//  som_iniciacao.play();
}



function modelReady() {
  select("#status").html("Model Loaded");
}

//video pregravado
function mousePressed(){
  vidLoad();
}
function vidLoad() {
  video.stop();
  video.loop();
  videoIsPlaying = true;
}
function keyPressed(){
  if (videoIsPlaying) {
    video.pause();
    videoIsPlaying = false;
  } else {
    video.loop();
    videoIsPlaying = true;
  }
}
//video pregravado
function draw() {
    if (momento==0&&som_iniciacao.isPlaying())
    {
    image(logo,150,0);
 
    }
  
    else
      {

    if(momento==0)
      {
        som_iniexercise.play();
        momento++;
      }
    else if (momento==1&&!som_iniexercise.isPlaying())
      {
      
        momento++
      }
      else if(momento==2&&!som_preparese.isPlaying())
      {
        som_abaixebracos.play();
        momento++
//        vidLoad();
      }
if (momento==3&&!som_abaixebracos.isPlaying())
  {
    momento++;
    momento++;
  }
if (momento>4)
  {    
  

  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
  if(flag_desenho_esqueleto==1){
  drawMovimento();
/* 
desenha_seta(pos_pulso_r_x_cong,pos_pulso_r_y_cong,pos_ombro_r_x_cong-(pos_pulso_r_y_cong-pos_ombro_r_y_cong),pos_ombro_r_y_cong);
  desenha_seta(pos_pulso_l_x_cong,pos_pulso_l_y_cong,pos_ombro_l_x_cong+(pos_pulso_l_y_cong-pos_ombro_l_y_cong),pos_ombro_l_y_cong);
*/
  push();
  stroke('yellow');
  strokeWeight(3);
  noFill();
  arc(pos_ombro_r_x_cong,pos_ombro_r_y_cong,(pos_ombro_r_y_cong-pos_pulso_r_y_cong)*2,(pos_ombro_r_y_cong-pos_pulso_r_y_cong)*2,90, 180);
 arc(pos_ombro_l_x_cong,pos_ombro_l_y_cong,(pos_ombro_l_y_cong-pos_pulso_l_y_cong)*2,(pos_ombro_l_y_cong-pos_pulso_l_y_cong)*2,0, 90);
  pop()
/*    desenha_arco(pos_ombro_r_x_cong,pos_ombro_r_y_cong,400,400,HALF_PI, PI);
    
  desenha_arco(pos_ombro_l_x_cong,pos_ombro_l_y_cong,400,400,0, HALF_PI);
*/
  }
if(momento==13&!som_oito.isPlaying())
        {
          som_quasela.play();
          momento++
        }


  stroke('black');
  strokeWeight(3);
  fill('with');
  rect(500, 20, 60, 60);
  stroke('black');
  strokeWeight(3);
  if (momento==6)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("1", 530, 50);      
    }
  else if (momento==7)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("2", 530, 50);      
    }
  else if (momento==8)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("3", 530, 50);      
    }
  else if (momento==9)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("4", 530, 50);      
    }
  else if (momento==10)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("5", 530, 50);      
    }
  else if (momento==11)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("6", 530, 50);      
    }
  else if (momento==12)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("7", 530, 50);      
    }
  else if (momento==13)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("8", 530, 50);      
    }
  else if (momento==15)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("9", 530, 50);      
    }
  else if (momento==16)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("10", 530, 50);      
    }
  else if (momento==17)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("11", 530, 50);      
    }
  else if (momento==18)
    {
    fill('black');
    textSize(50)
    textAlign(CENTER, CENTER);
    text("12", 530, 50);      
    }

  strokeWeight(1);
      }

}
}
// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
//  translate(base.x, base.y);
  line(base.x, base.y, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
//  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}


function desenha_seta(ini_x, ini_y, fim_x, fim_y) {
  let v0 = createVector(ini_x, ini_y);
  let v1 = createVector(fim_x, fim_y);
  drawArrow(v0, v1, 'yellow');
  noStroke();
}

function desenha_arco(ini_x, ini_y, fim_x, fim_y,z1,z2) {
  push();
  stroke('yellow');
  strokeWeight(3);
  noFill();
  arc(ini_x, ini_y, fim_x, fim_y, z1, z2);
  console.log(ini_x, ini_y, fim_x, fim_y, z1, z2);
  pop()
}






function drawMovimento() {
          if (exec_mov_direito==1&&pontos_direita<=30)
            {
              exec_mov_direito=0;
              pontos_acumulado_direita=pontos_acumulado_direita+pontos_pico_direita
              pontos_pico_direita=0
              angulo_direita_pico=0
              
            }
          if (exec_mov_esquerdo==1&&pontos_esquerda<=30)
            {
              exec_mov_esquerdo=0;
              pontos_acumulado_esquerda=pontos_acumulado_esquerda+pontos_pico_esquerda
              pontos_pico_esquerda=0
              angulo_esquerda_pico=0
              flag_desenha_seta=0;
            }

          if (pos_cotovelo_r_x>pos_ombro_r_x+25 || pos_cotovelo_r_x<pos_ombro_r_x-25||pos_pulso_r_x>pos_ombro_r_x+25 ||pos_pulso_r_x<pos_ombro_r_x-25 ){
//            textSize(12);
//            stroke('red');
//            textAlign(LEFT, CENTER);
//            text("Abaixe a mão direita", 30, 20);
          flag_mao_direita_ok=0
          }
          else{
//            textSize(12);
//            fill('green');
//            textAlign(LEFT, CENTER);
//            noStroke();
//          text("Mão direita OK!", 30, 20);
          flag_mao_direita_ok=1
          pontos_direita=0
//          exec_mov_direito = 0
          }

         if (pos_cotovelo_l_x>pos_ombro_l_x+25 || pos_cotovelo_l_x<pos_ombro_l_x-25||pos_pulso_l_x>pos_ombro_l_x+25 ||pos_pulso_l_x<pos_ombro_l_x-25 ){
//            textSize(12);
 //           stroke('red');
//            textAlign(LEFT, CENTER);
//          text("Abaixe a mão esquerda", 300, 20);
          flag_mao_esquerda_ok=0
         }
          else{
//            textSize(12);
//            fill('green');
//            textAlign(LEFT, CENTER);
//            noStroke();
//          text("Mão esquerda OK!", 300, 20);           
          flag_mao_esquerda_ok=1
          pontos_esquerda=0
//          exec_mov_esquerdo = 0
          }
          if (flag_mao_esquerda_ok==1&&flag_mao_direita_ok==1&&flag_desenha_seta==0&&momento>4)
            {
            pos_pulso_r_x_cong =pos_pulso_r_x 
            pos_pulso_r_y_cong =pos_pulso_r_y 
            pos_ombro_r_x_cong =pos_ombro_r_x 
            pos_ombro_r_y_cong =pos_ombro_r_y 
            pos_pulso_l_x_cong =pos_pulso_l_x 
            pos_pulso_l_y_cong =pos_pulso_l_y 
            pos_ombro_l_x_cong =pos_ombro_l_x 
            pos_ombro_l_y_cong =pos_ombro_l_y 
          flag_desenha_seta=1;
          flag_correcao_mov=0;
          console.log ("Desenha Seta")
            if(momento==5&!som_abaixemao.isPlaying())
            {
              som_um.play();
              momento++
            }
              else if(momento==6&!som_um.isPlaying())
            {
              som_dois.play();
              momento++
            }
if(momento==7&!som_dois.isPlaying())
            {
              som_tres.play();
              momento++
            }
if(momento==8&!som_tres.isPlaying())
            {
              som_quatro.play();
              momento++
            }
if(momento==9&!som_quatro.isPlaying())
            {
              som_cinco.play();
              momento++
            }
if(momento==10&!som_cinco.isPlaying())
            {
              som_seis.play();
              momento++
            }
if(momento==11&!som_seis.isPlaying())
            {
              som_sete.play();
              momento++
            }
if(momento==12&!som_sete.isPlaying())
            {
              som_oito.play();
              momento++
            }
if(momento==14&!som_quasela.isPlaying())
            {
              som_nove.play();
              momento++
            }
if(momento==15&!som_nove.isPlaying())
            {
              som_dez.play();
              momento++
            }
if(momento==16&!som_dez.isPlaying())
            {
              som_onze.play();
              momento++
            }
if(momento==17&!som_onze.isPlaying())
            {
              som_doze.play();
              momento++
            }

            }

          let angulo_direita_temp = mov_points (pos_ombro_r_x,pos_ombro_r_y,pos_pulso_r_x,pos_pulso_r_y,90);
           let pontos_direita_temp = int(angulo_direita_temp/90*100)
            if (angulo_direita_temp>angulo_direita_pico){
              angulo_direita_pico=angulo_direita_temp
                console.log(angulo_direita_pico)
            if (angulo_direita_pico>100)
              {
                pontos_pico_direita = int((180-angulo_direita_pico)/90*100)
              }
              else{
                pontos_pico_direita = int((angulo_direita_pico)/90*100)
              }
            }
            if (pontos_pico_direita>85){
              pontos_pico_direita=100
            }
          if (pontos_direita_temp>pontos_direita){
            pontos_direita=pontos_direita_temp
            }

  /*
           if(pontos_direita_temp>=85)
            {
              pontos_direita_temp=100
            }
          if (pontos_direita_temp>pontos_direita){
            pontos_direita=pontos_direita_temp
            if (pontos_direita>pontos_pico_direita){
            pontos_pico_direita = pontos_direita
            }
          }
          */
          if (pos_pulso_r_y-pos_ombro_r_y>20)
            {
              
            }
          if (pontos_direita>=60 &&pontos_direita_temp<=30&&exec_mov_direito==0)
            {
              exec_mov_direito=1;
              contador_movimento_direito+=1;
            }
            textSize(20);
            fill('yellow');
            textAlign(CENTER, CENTER);
            noStroke();
   text("POINTS\n"+pontos_pico_direita+"\n"+pontos_acumulado_direita,200,250)

//          text("Pontos mão direita: "+pontos_pico_direita+"\nContador movimento= "+contador_movimento_direito+"\nPontos acumulado= "+pontos_acumulado_direita, 30, 200);
          

          let angulo_esquerda_temp = mov_points (pos_ombro_l_x,pos_ombro_l_y,pos_pulso_l_x,pos_pulso_l_y,90)
          let pontos_esquerda_temp = int(angulo_esquerda_temp/90*100)

            if (angulo_esquerda_temp>angulo_esquerda_pico){
              angulo_esquerda_pico=angulo_esquerda_temp
                console.log(angulo_esquerda_pico)
            if (angulo_esquerda_pico>100)
              {
                pontos_pico_esquerda = int((180-angulo_esquerda_pico)/90*100)
              }
              else{
                pontos_pico_esquerda = int((angulo_esquerda_pico)/90*100)
              }
            }
            if (pontos_pico_esquerda>85){
              pontos_pico_esquerda=100
            }
          if (pontos_esquerda_temp>pontos_esquerda){
            pontos_esquerda=pontos_esquerda_temp
            }
          
/*          
          
          if(pontos_esquerda_temp>=85)
            {
              pontos_esquerda_temp=100
            }
          if (pontos_esquerda_temp>pontos_esquerda){
            pontos_esquerda=pontos_esquerda_temp
            if(pontos_esquerda>pontos_pico_esquerda){
            pontos_pico_esquerda = pontos_esquerda}
          }
          */
          if (pontos_esquerda>=60 &&pontos_esquerda_temp<=30&&exec_mov_esquerdo==0)
            {
              exec_mov_esquerdo=1;
              contador_movimento_esquerdo+=1
            }
          
            textSize(20);
            fill('yellow');
            textAlign(CENTER, CENTER);
            noStroke();
            text("POINTS\n"+pontos_pico_esquerda+"\n"+pontos_acumulado_esquerda,450,250)

  if(angulo_direita_temp>80&&angulo_direita_temp<100)
    {
    stroke(0,255,0);
    strokeWeight(3);
    fill(0,255,0,150);      
    }
  else if(angulo_direita_temp>60&&angulo_direita_temp<130)
    {
    stroke(255,255,0);
    strokeWeight(3);
    fill(255,255,0,150);      
    }
  else
    {
    stroke(255,0,0);
    strokeWeight(3);
    fill(255,0,0,150);      
    }

 arc(pos_ombro_r_x_cong,pos_ombro_r_y_cong,(pos_ombro_r_y_cong-pos_pulso_r_y_cong)*2,(pos_ombro_r_y_cong-pos_pulso_r_y_cong)*2,90, 90+angulo_direita_temp);

    if(angulo_esquerda_temp>80&&angulo_esquerda_temp<100)
    {
    stroke(0,255,0);
    strokeWeight(3);
    fill(0,255,0,150);      
    }
  else if(angulo_esquerda_temp>60&&angulo_esquerda_temp<130)
    {
    stroke(255,255,0);
    strokeWeight(3);
    fill(255,255,0,150);      
    }
  else
    {
    stroke(255,0,0);
    strokeWeight(3);
    fill(255,0,0,150);      
    }

 arc(pos_ombro_l_x_cong,pos_ombro_l_y_cong,(pos_ombro_l_y_cong-pos_pulso_l_y_cong)*2,(pos_ombro_l_y_cong-pos_pulso_l_y_cong)*2,90-angulo_esquerda_temp,90);
  
if (flag_correcao_mov==0){   
  if (angulo_direita_temp>100&&angulo_direita_temp>100){
  som_abaixebracos.play();
  flag_correcao_mov=1

  }else if (angulo_direita_temp>100){
    som_abaixebracod.play();
    flag_correcao_mov=1
    
  }else if (angulo_esquerda_temp>100){
    som_abaixebracoe.play();
    flag_correcao_mov=1
  }
}
  
//          text("Pontos mão esquerda: "+pontos_pico_esquerda+"\nContador movimento= "+contador_movimento_esquerdo+"\nPontos acumulado= "+pontos_acumulado_esquerda, 300, 200);

}  
// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i += 1) {
    const skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j += 1) {
      const partA = skeleton[j][0];
      const partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
      if (j==3&&flag_desenho_esqueleto==0){
          console.log("esqueleto")
          flag_desenho_esqueleto=1}
    }
  }
}
// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i += 1) {
    // For each pose detected, loop through all the keypoints
    const pose = poses[i].pose;
    for (let j = 5; j < pose.keypoints.length; j += 1) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      const keypoint = pose.keypoints[j];
      //console.log (keypoint);
      
      // Only draw an ellipse is the pose probability is bigger than 0.2

      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        /*
        if (keypoint.part == "nose") {
          text("NARIZ", keypoint.position.x, keypoint.position.y);}
        */
      if (keypoint.part == "leftShoulder") {
//        text("OMBRO ESQUERDO", keypoint.position.x, keypoint.position.y);
        pos_ombro_l_x = int(keypoint.position.x)
        pos_ombro_l_y = int(keypoint.position.y)
      }
      if (keypoint.part == "rightShoulder") {
//        text("OMBRO DIREITO", keypoint.position.x, keypoint.position.y);
        pos_ombro_r_x = int(keypoint.position.x)
        pos_ombro_r_y = int(keypoint.position.y)

      }
      if (keypoint.part == "leftElbow") {
//        text("COTOVELO ESQUERDO", keypoint.position.x, keypoint.position.y);
        pos_cotovelo_l_x = int(keypoint.position.x)
        pos_cotovelo_l_y = int(keypoint.position.y)

      }
      if (keypoint.part == "rightElbow") {
//        text("COTOVELO DIREITO", keypoint.position.x, keypoint.position.y);
        pos_cotovelo_r_x = int(keypoint.position.x)
        pos_cotovelo_r_y = int(keypoint.position.y)        
      }
      if (keypoint.part == "leftWrist") {
//        text("PULSO ESQUERDO", keypoint.position.x, keypoint.position.y);
        pos_pulso_l_x = int(keypoint.position.x)
        pos_pulso_l_y = int(keypoint.position.y)        
      }
      if (keypoint.part == "rightWrist") {
//        text("PULSO DIRE.ITO", keypoint.position.x, keypoint.position.y);
        pos_pulso_r_x = int(keypoint.position.x);
        pos_pulso_r_y = int(keypoint.position.y);       
      }
/*
        text("Ombro D X="+pos_ombro_r_x+"Y= "+pos_ombro_r_y+
             "\nCotovelo D X= "+pos_cotovelo_r_x+" Y= "+pos_cotovelo_r_y+
             "\nPulso D X= "+pos_pulso_r_x+" Y= "+pos_pulso_r_y+
             "\nOmbro E X= "+pos_ombro_l_x+" Y= "+pos_ombro_l_y+
             "\nCotovelo E X= "+pos_cotovelo_l_x+" Y= "+pos_cotovelo_l_y+
             "\nPulso E X= "+pos_pulso_l_x+" Y= "+pos_pulso_l_y
             , 50, 200); //texto com coordenadas na tela
*/             
      }
    }
  }
}


//função pontuação
function mov_points (x_ini,y_ini,x_fim,y_fim,pmax){
  angleMode(DEGREES); // Change the mode to DEGREES
  let CA = y_fim-y_ini;
  let CO = x_fim-x_ini;
  let angulo = abs(int(atan(CO/CA)))
  let angulo2 = angulo
  if (y_ini-y_fim>10)
    {
      angulo2 = 90+90-angulo
    }
//  console.log(angulo2)
  let pontos = int(angulo/pmax*100)
  if (pontos>85){
    pontos=100;
  }
  return angulo2
}