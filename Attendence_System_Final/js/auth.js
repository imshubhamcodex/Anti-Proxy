var updateTime=0;
var x=2;
var once=1;
var invalid=0;
setInterval(function(){ 
if(parseInt($('#Pbar').css('width'), 10) <= 40 )
    {
      firebase.auth().onAuthStateChanged(user =>{

   

         if(user)
        {
            
              if(seeData==1)
              {
                 firebase.database().ref('Acess').remove();
              }
           	// console.log("Logged in");
		        document.getElementById('signUp').click();
            if( parseInt($('#Pbar').css('width'), 10) == 0)
            {
              getTimerValue();
            }
			      
         
        }                                                                           

        else
        {
         

             

            if(seeData==0 && invalid==0)
              getval();
            else{
              firebase.database().ref('Acess').remove();
            }


            
           
         
           

        }

       



});

    }



 }, 1000); 



function getval()
{
          var db =firebase.database();
            var ref=db.ref("Acess")
            ref.on('value',acessData);
            
}
          

function acessData(data)
{

  
   try {

     
      var dataget = data.val();
      var keys = Object.keys(dataget);
      // console.log(dataget[keys[2]].time);
    if(dataget[keys[x]].time!=0 && x!=0)
    {
      document.getElementById('signUp').click();
       if(once==1){
               var deadline = new Date(Date.parse(new Date()) + 1 * 59 * 1000);
              initializeClock('clockdiv', deadline);
              once=0;
              }
              console.log('timer started')
      x=0;
    }
    

    document.getElementById('Pbar').style.width = dataget[keys[updateTime]].time ;
    
    updateTime++;


  if(parseInt($('#Pbar').css('width'), 10) >= 160)
    {
      
          var reg=document.getElementById('reg').value;
          var br=document.getElementById('branch-list').value.toString();
        var sec=document.getElementById('section-list').value.toString()

      if(reg==null || reg.toString().localeCompare("")==0 || reg==undefined || br.localeCompare("Branch")==0||sec.localeCompare("Section")==0)
        {
          
            
        }  
        else
         {  
          if(stop==0)
          {
            
            document.getElementById('loadimg').style.zIndex = '999';
            document.getElementById('container').style.display = 'none';
            sendingData();
            stop=1;
          }
        
      }

       setTimeout(function(){
        document.getElementById('signIn').click();
          
          document.getElementById('loadimg').style.zIndex = '-1';
          document.getElementById('container').style.display = 'block';
          location.reload();
           },10000)

    }



 } catch(e) {
     // console.log("Happy Coding by Shubham");
     
   }


}









	const signupForm=document.getElementById('sign')
      signupForm.addEventListener('click',(e) =>{

            e.preventDefault();
            getTimerValue();
            const email=document.getElementById('signup-email').value.toString();
            const password=document.getElementById('signup-password').value.toString();
             // console.log(email,password); 
     		firebase.auth().signInWithEmailAndPassword(email,password).then(cred =>{
            
            if(once!=1){
              var deadline = new Date(Date.parse(new Date()) + 1 * 59 * 1000);
              initializeClock('clockdiv', deadline);
              console.log('timer started')
              once=0;
            }
              
      }).catch(function(error) {
        invalid=1;
         firebase.database().ref('Acess').remove();
         alert("Invalid Credentials");
          firebase.database().ref('Acess').remove();
          }); 



});







    