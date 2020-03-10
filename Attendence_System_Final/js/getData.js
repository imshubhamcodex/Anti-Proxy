var Section;
var Branch;
var getdate;
function getSelectedValueData()
{
      Branch=document.getElementById('Branch').value;
      Section=document.getElementById('Section').value;
      getdate=document.getElementById('dateData').value;   
}
function retriveData()
{

  getSelectedValueData()

  $("#table_body").empty();

		//var today = new Date();
		// var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

		  var db =firebase.database();
		  var ref=db.ref(getdate+"/"+Branch+"/"+Section)
      ref.on('value',gotData,errData);
  
		}



function gotData(data)
{

  // $("#mytable > td").remove(); 
   try {
     // statements
  
    var data = data.val();
    var keys = Object.keys(data);
    
    if(keys==undefined)
      alert("No Data Found!");
  for(var i=0;i<keys.length;i++)
  {
    
    var k = keys[i];
    var reg = data[k].reg_num;
    // console.log(reg);
     $("#table_body").append("<tr><td>"+ (i+1) + "</td><td>"+ reg + "</td></tr>" )
  }
   $("#table_body").append("<tr><td>"+ "Total:  "+ "</td><td>"+ (keys.length)+"</td></tr>" )
  document.getElementById('mytable').style.display="block";

 } catch(e) {
     // statements
     console.log(e);
     alert("No Data Found!");
   }


}


function errData(err)
{
  alert("No Data Found!");
	console.log('Error!');
	console.log(err);
}