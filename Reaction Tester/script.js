function getRandomColor(){
            var letters='0123456789ABCDEF'.split("");
            colour="#";
            for(i=0;i<6;i++)
                colour+=letters[Math.floor(Math.random()*16)];
            return colour;
        }
       
        function getRandomRadius(){
            x=Math.floor(Math.random()*2);
            if(x==0)
                return 0;
            else return "100px";
        }

        function getRandomLeft(){
            return Math.floor(Math.random()*1000);
        }

        function getRandomTop(){
            return Math.floor(Math.random()*300);
        }

        var creationTime=Date.now(); var clickedTime;
        document.getElementById("ans").onclick=function(){
            //document.getElementById("redbox").innerHTML="Changed Code";
            clickedTime=Date.now();
            responseTime=(clickedTime-creationTime)/1000;
            document.getElementById("para").innerHTML="Reaction Time is  :  "+responseTime+"s";
            this.style.display="none";
            x=Math.random()*4000;
            x=Math.floor(x);
            setTimeout(function(){
                document.getElementById("ans").style.backgroundColor=getRandomColor();
                document.getElementById("ans").style.borderRadius=getRandomRadius();
                document.getElementById("ans").style.position="relative";
                document.getElementById("ans").style.left=getRandomLeft();
                document.getElementById("ans").style.top=getRandomTop();
                document.getElementById("ans").style.display="block";
                creationTime=Date.now();
                //alert("hi");
            },x );
        }