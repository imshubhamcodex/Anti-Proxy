var branch;
var section;	
var branchAndSection;
var timerVal;
var setTime=30000;
var myVar;
var stop=0;
var timelaps=0;
var dba = firebase.database();
  function getTimerValue(){
     timerVal=document.getElementById('timeval').value;
     if(timerVal=="30")
     	setTime=30000;

    setInterval(function(){
       if(parseInt($('#Pbar').css('width'), 10) >= 40 && parseInt($('#Pbar').css('width'), 10) <= 50 )
        {
            firebase.database().ref('Acess').remove();
            firebase.auth().signOut().then(signingout => {});
            console.log('out')
            clearInterval(myVar)
        
        }
    }, 1000)


	if(seeData==0)
    myVar=setInterval(incProgress,1000);
  }

  function incProgress()
  {
  	 
  	 if(invalid==0 && seeData==0)
  			{
  	
		  		var width = 160*1000/(setTime) ;
		  		var num = parseInt($('#Pbar').css('width'), 10)
		  	  console.log("Happy Coding greetings from Shubham")
		  	 document.getElementById('Pbar').style.width = (num + width).toString()+"px" ;
		  
  			

	  			var ref = dba.ref("Acess/");
				  var data = {
				        	time:(num + width).toString()+"px"
				          }
				  ref.push(data);

			 }


   }




 	function getSelectedValue()
 	{
 		branch=document.getElementById('branch-list').value;
 		section=document.getElementById('section-list').value;
 	}


      document.getElementById('submit'). addEventListener('click', ()=>{
    if(document.getElementById('reg').value==null || document.getElementById('reg').value.toString().localeCompare("")==0 || document.getElementById('reg').value.toString()==undefined || branch.localeCompare("Branch")==0||section.localeCompare("Section")==0)
      {
    
      }
      else{
          firebase.database().ref('Acess').remove();
         
          clearInterval(myVar)
        document.getElementById('loadimg').style.zIndex = '999';
        document.getElementById('container').style.display = 'none';
        sendingData()
      } 
    })

	function sendingData(){
			var today = new Date();

			var today = new Date();

			 if(today.getMonth()+1<10)
      				var mm="0"+(today.getMonth()+1);
          		else
           			 var mm = today.getMonth()+1
      		
      			if(today.getDate()<10)
    				var dd="0"+(today.getDate());
    			else
    				var dd=today.getDate();

			var date = today.getFullYear()+'-'+mm+'-'+dd;
			var db = firebase.database();
		 	var ref = db.ref(date+"/"+branch+"/"+section);
			 var data = {
			 	reg_num: document.getElementById('reg').value.toString()
			 }

			ref.push(data); 
			setTimeout(function(){ 
			document.getElementById('image').src = 'img/tick.gif';
			document.getElementById("processdata").innerHTML = "Done.";
			
			 // document.getElementById('signIn').click();
			 }, 2000);

      

	}
