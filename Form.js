class Form {
    constructor(){
        this.title=createElement("h1");
        this.name=createInput().attribute("placeholder","Name");
        this.button1=createButton("Play");
        this.button2=createButton("Understood");
        this.instructions=createDiv();
    }
    display(){
        this.title.html("Highway Runner");
        this.title.position(580,50);
    
        this.name.position(620,150);
        this.button1.position(680,200);
        this.button1.mousePressed(()=>{
            this.name.hide();
            this.button1.hide();
            this.instructions.position(620,150);
            this.instructions.html("Welcome to Highway Runner.The motive of this game is to surpass all the obstacles put forth before youy by you opponent. The game provides you three lives and these lives reduce if you collide into an obstacle. Your opponent has the freedom to bring forth obstacles to stop your progress. To save yourself from the obstacles hit the arrow keys. Happy playing!!! ");

            this.button2.position()
        })
            
         
    }

}