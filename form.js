class Form {
  constructor() {
    this.greeting=createElement("h2");
    this.input=createInput("Name");
    this.button=createButton("Play");

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    
  }

  display() {
    var title = createElement("h1");
    title.html("Car Racing Game");
    title.position(windowWidth/2 - 170, windowHeight/12);

   
    this.input.position(windowWidth/2 - 135, windowHeight/5);

    //var button = createButton("Play");
    this.button.position(windowWidth/2 - 80, windowHeight/4);
    this.button.mousePressed(()=> {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount++;
        player.updateCount(playerCount);
        player.updateName();
        
       // var greeting = createElement("h3");
       this. greeting.html("Hello! "+ player.name);
       this. greeting.position(windowWidth/2-120, windowHeight/5);

       player.index = playerCount;
    } );
    
  }

}