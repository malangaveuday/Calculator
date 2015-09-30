//main function//
function mycalculator()
       
       {
        createtextbox ();
         create1to9buttons ();
         Creatingoperator ();
       }
          


//creating text box//
function createtextbox ()  
             {
               var txt = document.createElement("input");
               txt.className = "txt";
               txt.id = ('demo') ;    
               document.getElementById("xyz").appendChild(txt); 
               nextLine ();
             }


//creating first nine buttons//
function create1to9buttons() 
         { 
          
             var i,j=1,k=1,num=1;//i use for making three buttons in row and j use for repeat same process no of time and num is int text on button            
                 for(i=1;i<=9;i++)             
                     {  
                       createButton(i,i);
                          if(j>2)
                            {
                               nextLine();
                                 j=0;
                             }
                          j++;
                     }
         }       


//creat functioning buttons//                                                    
function Creatingoperator()
                {
                  createButtonDel ("del","btniddel");
                  createButton ("0","btnid0");
                  createButton (".","btniddot");
                  nextLine ();
                  createButton ("+","btnid+");
                  createButton ("-","btnid-");
                  equal_sign ();
                  nextLine ();
                  createButton ("/","btnid/");
                  createButton ("*","btnid*");
                  clearSign ();
                }


//creating button function//
function createButton(name,identity)
              {
               //creating '0' button
               var btn = document.createElement("BUTTON");
               btn.className = "btnclr";
               btn.id = (identity) ; 
               var t = document.createTextNode(name);
               btn.onclick = function() {clicked(this.id);}
               btn.appendChild(t);          
               document.getElementById("xyz").appendChild(btn);
              }

//delete button for its unique operation//
function createButtonDel(name,identity)
               {  
               var btn = document.createElement("BUTTON");
               btn.className = "btnclr";
               var t = document.createTextNode(name);
               btn.id = (identity) ;
               btn.onclick = function() {deleteonechar(this.id);}                                    
               btn.appendChild(t);     
               document.getElementById("xyz").appendChild(btn); 
              }

//Equal button for its uniqe operation//
function equal_sign()
              {
               //creating '=' button
               var btn = document.createElement("BUTTON");
               btn.className = "btnclr";
               var t = document.createTextNode("=");
               btn.id = ('btnid=') ; 
               btn.appendChild(t);     
               btn.onclick = function() {equal(this.id);}                                        
               document.getElementById("xyz").appendChild(btn);
               } 

//Clear button for its uniqe operation//
function clearSign()
              {
               //creating 'C' button
               var btn = document.createElement("BUTTON");
               btn.className = "btnclr";
               var t = document.createTextNode("C");
               btn.id = ('btnidc') ; 
               btn.appendChild(t);     
               btn.onclick = function() {clearall(this.id);}
               document.getElementById("xyz").appendChild(btn);  
              }

//Print function for clicked button//         
function clicked(identity)
       
              {
               var y =document.getElementById("demo").value;
               var x = document.getElementById(identity).innerHTML ;
               var z = y + x;          
               document.getElementById("demo").value = z ;
              }

//Work as output method//
function equal()
             {
               var y =document.getElementById("demo").value;
               var z = eval(y);          
               document.getElementById("demo").value = z ;
             }

//Button fed to next line//
function nextLine()
              {
               //for shifting buttons at next line
               var next= document.createElement("BR");
               document.getElementById("xyz").appendChild(next);
              }


//Delete one character in string//
function deleteonechar (identity)
            {
             var y =document.getElementById("demo").value;
             var x = document.getElementById(identity).innerHTML ;
             var z = y.slice(0,-1);          
             document.getElementById("demo").value = z ;
            }   


//clear text box//
function clearall (identity)
           {
             var x = document.getElementById(identity).innerHTML ;
             var z = " ";          
             document.getElementById("demo").value = z ;
           }    
