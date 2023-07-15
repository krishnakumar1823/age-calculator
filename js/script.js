var gettingOriginalDate=new Date()
var date=gettingOriginalDate.getDate()
var month=gettingOriginalDate.getMonth()
var year=gettingOriginalDate.getFullYear()
console.log(month)
var form=document.getElementById("ageCalculator")
form.innerHTML=`<h6>AGE calculator</h6>
				<form class="d-flex row justify-content-center py-4 btn">
					<div class="col-12 col-lg-12 py-4">
						<input type="text" id="show" disabled style="width:100%;font-size:12px">
					</div>
					<div class="col-4 col-lg-4 py-4">
						<input type="text" id="birthDate" style="width:100%">
						<p>Date</p>
					</div>
					<div class="col-4 col-lg-4 py-4">
						<input type="text" id="birthMonth" style="width:100%">
						<p>Month</p>
					</div>
					<div class="col-4 col-lg-4 py-4">
						<input type="text" id="birthYear" style="width:100%">
						<p>Year</p>
					</div
					<div class="col-5 col-lg-5 py-4">
						<input type="button" value="proceed" onclick="proceed()">
					</div>
				</from>`

function proceed(){
	var birthDate=document.getElementById("birthDate").value
	var birthMonth=document.getElementById("birthMonth").value
	var birthYear=document.getElementById("birthYear").value

	var len_1=birthYear.toString().length
	var len_2=birthMonth.toString().length
	var len_3=birthDate.toString().length
	if(len_1 == 4 && (len_2==1 || len_2==2) && (len_3==1 || len_3==2)){
		if(birthYear<year && month<=12 && date<=31){
			var res=year-birthYear
			if(month>0 && month<11){
				var res1=((month)-birthMonth)+1
			}
			 
			var res2=date-birthDate
			var dis=document.getElementById("show").value =innerHTML=`${res}(year) :: ${res1}(Month) :: ${res2}(Date)`
		}
		else{
			alert("Invalid birth year or date or month")
		}
	}
	else{
		alert("Invalid birth year or date or month")
	}
}