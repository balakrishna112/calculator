function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x)
             if(y === undefined){
                 alert("please enter values");
             } else{
                document.getElementById("result").value = y 
             
             }
             
         } 
           
          
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 
