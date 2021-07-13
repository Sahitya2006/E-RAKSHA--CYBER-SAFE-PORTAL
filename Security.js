class Security {

    constructor(){

        this.title1 = createElement('h2');

        this.input = createInput("TYPE YOUR NAME");
        this.input.position(590,1280);

        this.button1 = createButton('START');
        this.button1.position(650,1380);


    }

    display(){

        this.title1.html("CYBER SECURITY PORTAL");
        this.title1.position(50, 950);
        this.title1.style('font-size', '90px');
        this.title1.style('color', 'white');

        this.button1.style('width', '100px');
        this.button1.style('height', '30px');
        this.button1.style('background', 'white');

        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lightpink');

        this.button1.mousePressed(() => {
           this.button1.hide();
           this.title1.hide();
           this.input.hide();
           clear();
           background(Img);

           this.title5 = createElement('h2');
           this.title5.html("CLICK ON THE RE-LOAD ON THE TOP TO GO TO THE HOME PAGE");
           this.title5.position(450,1500);
           this.title5.style('font-size', '15px');
           this.title5.style('color',0);
           
          this.button2 = createButton('CAREER IN CYBER SECURITY WORLD');
          this.button2.position(220,1100);
          this.button2.style('width', '400px');
          this.button2.style('height', '55px');
          this.button2.style('background', 'yellow');

          this.button4 = createButton('PROBLEMS AND EFFECTS OF CYBER CRIME');
          this.button4.position(680,1100);
          this.button4.style('width', '400px');
          this.button4.style('height', '55px');
          this.button4.style('background', 'pink');
        
        this.title2 = createElement('h2');
        this.title2.html("HI  "+ this.input.value());
        this.title2.position(250,850);
        this.title2.style('font-size', '90px');
        this.title2.style('color', 'white');



        this.button2.mousePressed(() => {
          background(job);
          this.title2.hide();
          this.button2.hide();
          this.button4.hide();
          this.button5.hide();
          this.button6.hide();
          this.button7.hide();
          this.button8.hide();
          this.title3 = createElement('h2');
          this.title3.html("Cyber security specialists, Information security, cyber security or vulnerability analysts, Security or cyber security engineers ,Cyber security technical architects, Security or cyber security technicians, Security or cyber security principals, Security or cyber security administrators, Penetration testers");
           this.title3.position(50,950);
         this.title3.style('font-size', '50px');
         this.title3.style('colour',0);

            });
            this.button6 = createButton('COMMON TYPES OF CYBER CRIMES');
              this.button6.position(680,1250);
              this.button6.style('width', '400px');
              this.button6.style('height', '55px');
              this.button6.style('background',127); 

              this.button4.mousePressed(() => {
                background(effect);
                this.title4 = createElement('h2');
                this.title2.hide();
                this.button2.hide();
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button8.hide();
                
                this.title4.html("The effects of a single, successful cyber attack can have far reaching implications including financial losses, theft of intellectual property, and loss of consumer confidence and trust. The overall monetary impact of cyber crime on society and Government is estimated to be billions of rupees a year.")
                this.title4.position(200,1000);
                this.title4.style('font-size', '45px');
                this.title4.style('colour','white');
              
              });
                          

            this.button5 = createButton('LATEST CYBER CRIMES RATE CHART ');
            this.button5.position(220,1250);
            this.button5.style('width', '400px');
            this.button5.style('height', '55px');
            this.button5.style('background', 'lightgreen');

            this.button5.mousePressed(() => {
              background(chart);
              this.title2.hide();
              this.button2.hide();
              this.button4.hide();
              this.button5.hide();
              this.button6.hide();
              this.button7.hide();
              this.button8.hide();

            });   

            this.button6.mousePressed(() => {
              background(types);
              this.title2.hide();
              this.button2.hide();
              this.button4.hide();
              this.button5.hide();
              this.button6.hide();
              this.button7.hide();
              this.button8.hide();

            });  
            
            this.button7 = createButton('ABOUT')
         this.button7.position(1200,1400)
         this.button7.style('width', '120px');
     this.button7.style('height', '30px');
     this.button7.style('background', 'skin');

     this.button7.mousePressed(() => {
      background(about);
      this.title2.hide();
      this.button2.hide();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
      this.button7.hide();
      this.button8.hide();
    });   



   // QUIZ CODE -
   
   this.button8 = createButton('QUIZ')
   this.button8.position(600,1400)
   this.button8.style('width', '150px');
this.button8.style('height', '40px');
this.button8.style('background', 'lightblue');


this.button8.mousePressed(() => {
background(quiz);
this.title2.hide();
this.button2.hide();
this.button4.hide();
this.button5.hide();
this.button6.hide();
this.button7.hide();
this.button8.hide();

fill(255);
textSize(24);
text("NOTE: Type Answers in CAPITALS only",120,600);
text("SCORE: ",50,700);

 
this.access1 = createInput("ANSWER1");
        this.access1.position(800,1090);
        this.access1.style('background','yellow');

        this.button9 = createButton('Check');
        this.button9.position(800,1120);
        this.button9.style('background','pink');

        this.access2 = createInput("ANSWER3");
        this.access2.position(800,1300);
        this.access2.style('background','yellow');

        this.button10 = createButton('Check');
        this.button10.position(800,1350);
        this.button10.style('background','pink');

        this.access3 = createInput("ANSWER2");
        this.access3.position(800,1200);
        this.access3.style('background','yellow');

        this.button11 = createButton('Check');
        this.button11.position(800,1250);
        this.button11.style('background','pink');


        textSize(22)
        fill(255)
        text("1: A hacker locks out users and encrypts their personal computer files and data, holding it hostage until they agree to pay to the attacker. What is this practice called?", 31,70)
        text("2: Using of fake e-mail messages to get information from the internet users",30,170)
        text("3: Which is the Software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.", 30,270)
        stroke("cyan");
        text("If your answers are correct, after you press check, the boxes will vanish.", 30,420 );
        text("If they aren't correct, the boxes won't vanish",30,460);
   
        this.button9.mousePressed(() => {
          if(system.authenticate(accessCode1,this.access1.value())){
            score=score+10;
             this.button9.hide();
             this.access1.hide();
             
          }
          });
          this.button10.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
              score=score+10;
               this.button10.hide();
               this.access2.hide();
               
            }
            });
            this.button11.mousePressed(() => {
              if(system.authenticate(accessCode3,this.access3.value())){
                score=score+10;
                 this.button11.hide();
                 this.access3.hide();
                
                 
              }
              });     
});   
         });
         
         
         
        }
      }
