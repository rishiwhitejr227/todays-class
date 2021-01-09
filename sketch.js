var player1,virus,loot,loot1,loot2
var edges
function preload (){
    virusI=loadImage("virus.png") 
    mask=loadImage("mask.png")
    sanitizer=loadImage("sanitizer.png")
    gloves=loadImage("gloves.png")
    basket=loadImage("basket.png")

}
function setup(){
    createCanvas(600,600)
     player1=createSprite(250,540,100,10)
     player1.addImage(basket)
     player1.scale=0.25
    // virus1=createSprite(10,10,20,40)
    // virus2=createSprite(10,10,30,30)
    //log1=createSprite(250,560,50,10)
    virus=new Group()
    loot=new Group()
    loot1=new Group()
    loot2=new Group()

}
function draw(){
    background("black")
   edges=createEdgeSprites()
    if (frameCount%100===0){
    virus1=createSprite(random(20,580),40,20,40)
    virus.add(virus1)
    virus1.shapeColor="yellow" 
    virus1.addImage(virusI) 
    virus1.scale=0.2
    
    virus1.velocityY=random(10,15)
    }
    if(keyDown("left")){
        player1.velocityX=-10
    }
    if(keyDown("right")){
        player1.velocityX=10
    }
    if(virus.isTouching(player1)){
        virus1.remove()
        }

    player1.bounceOff(edges[0])
    player1.bounceOff(edges[1])

    if (frameCount%50===0){
        goodthings=createSprite(random(20,580),40,20,40)
        goodthings.addImage(gloves)
        goodthings.visible=false
        goodthings.debug=true
        goodthings1=createSprite(random(20,580),40,20,40)
        goodthings1.addImage(sanitizer)
        goodthings1.visible=false
        goodthings2=createSprite(random(20,580),40,20,40)
        goodthings2.addImage(mask)
        goodthings2.visible=false
        loot.add(goodthings)
        loot1.add(goodthings1)
        loot2.add(goodthings2)
        goodthings.velocityY=7
        goodthings1.velocityY=7
        goodthings2.velocityY=7

        var r = Math.round(random(1,3))
        switch(r){
            case 1:
            goodthings.scale=0.2 
            goodthings.visible=true 
                break
                case 2:
                goodthings1.scale=0.3
                goodthings1.visible=true
                break
                case 3:
                goodthings2.scale=0.3
                goodthings2.visible=true
                break
        }

        
    }
    if (loot.isTouching(player1)&&goodthings.visible===true){
        loot.destroyEach()
    }
    
   player1.debug=true
   
    drawSprites()
    text(mouseX + "   "+"  "+mouseY,mouseX+20,mouseY+10)
    

}