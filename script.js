  
        var Ball = function(){
            this.x = 100;
            this.y = 100;
            
            this.xSpeed = (Math.random() * 10) - 5;
            this.ySpeed = (Math.random() * 10) - 5;

            var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'DeepPink'];
            this.color = pickRandomWord(colors)
        }
        
        var pickRandomWord = function(words){
            return words[Math.floor(Math.random() * words.length)]
        }
        
       
        var cercle = function(x, y, radius, fillCercle){
            ctx.beginPath()
            ctx.arc(x, y, radius, Math.PI * 2, false);
            if(fillCercle){
                ctx.fill()
            } else{
                ctx.stroke()
            }
        };
        Ball.prototype.draw = function(){
            ctx.fillStyle = this.color;
            
            //ctx.fillStyle = this.colors[Math.floor(Math.random() * this.colors.length)]
            cercle(this.x, this.y, 6, true)


        };
        Ball.prototype.move = function(){
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }

        Ball.prototype.checkCollision = function(){
            if(this.x < 0 || this.x > width){
                this.xSpeed = -this.xSpeed
            };
            if((this.y < 0 || this.y > height)){
                this.ySpeed = -this.ySpeed
            };
        };

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        var width = canvas.width;
        var height  = canvas.height
        

       
       // var ball = new Ball();
       
       var balls = []
        for(var i = 0; i < 10; i++){
            balls[i] = new Ball;
        }

        setInterval(function(){
            ctx.clearRect(0, 0, width, height)
            for(var i = 0; i < balls.length; i++){
            balls[i].draw();
            balls[i].move();
            balls[i].checkCollision();
            }
            ctx.strokeRect(0, 0, width, height)
            
                            
        }, 20)