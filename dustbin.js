

   class bin extends BaseClass {

    constructor(){
     super() 
      var options={
        isStatic:true,
        'restitution':0,
            'friction':0,
            'density':0

      }
    this.image=loadImage("sprites/dustbingreen.png")
   }
  display(){
    super.display();
  }
  
  
  }

  
