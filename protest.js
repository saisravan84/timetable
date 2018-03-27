function change(){
	if(document.getElementById('mycheckbox').checked==false)
	{
		document.getElementById('mycheckboxdiv').style.display="block";
	}
	else{
		document.getElementById('mycheckboxdiv').style.display="none";
		document.getElementById('facultyid').style.display="none";
		document.getElementById('date1').value="";
		document.getElementById('date2').value="";
	}
}
function chname(){
    
    if (document.forms["fe1"]["dd1"].value == "" | document.forms["fe1"]["dd2"].value == "") {
		document.getElementById('error').innerHTML="Select From Date and TO Date";
		
        return false;
    }
else{
document.getElementById('error').innerHTML=" ";
document.getElementById('facultyid').style.display="block";
document.getElementById('table_date1').textContent=document.getElementById('date1').value;
document.getElementById('table_date2').textContent=document.getElementById('date2').value;
if(document.getElementById('facu').value=="SRINIVAS ACHARI")
{
	document.getElementById('name').textContent="SRINIVAS ACHARI";
	document.getElementById('table_year').textContent="I";
	document.getElementById('table_course').textContent="PROBLEM SOLVING AND COMPUTER PROGRAMMING";
	document.getElementById('table_section').textContent="A";
	document.getElementById('table_program').textContent=document.getElementById('dept').value;
}
else if(document.getElementById('facu').value=="UMA MAHESH")
{
	document.getElementById('name').textContent="UMA MAHESH";
	document.getElementById('table_year').textContent="III";
	document.getElementById('table_course').textContent="WEB PROGRAMMING";
	document.getElementById('table_section').textContent="B";
	document.getElementById('table_program').textContent=document.getElementById('dept').value;
}
else if(document.getElementById('facu').value=="BASHEER")
{
	document.getElementById('name').textContent="BASHEER";
	document.getElementById('table_year').textContent="II";
	document.getElementById('table_course').textContent="OBJECT ORIENTED PROGRAMMING";
	document.getElementById('table_section').textContent="B";
	document.getElementById('table_program').textContent=document.getElementById('dept').value;
}
else if(document.getElementById('facu').value=="BASHA")
{
	document.getElementById('name').textContent="BASHA";
	document.getElementById('table_year').textContent="IV";
	document.getElementById('table_course').textContent="OBJECT ORIENTED ANALYSIS AND DESIGN";
	document.getElementById('table_section').textContent="A";
	document.getElementById('table_program').textContent=document.getElementById('dept').value;
}
else if(document.getElementById('facu').value=="TRILOK REDDY")
{
	document.getElementById('name').textContent="TRILOK REDDY";
	document.getElementById('table_year').textContent="II";
	document.getElementById('table_course').textContent="DATABASE MANAGEMENT SYSTEM";
	document.getElementById('table_section').textContent="B";
	document.getElementById('table_program').textContent=document.getElementById('dept').value;
}
else if(document.getElementById('facu').value=="CHANAKYA")
{
	document.getElementById('name').textContent="CHANAKYA";
	document.getElementById('table_year').textContent="III";
	document.getElementById('table_course').textContent="DESIGN ANALYSIS AND ALGORITMS";
	document.getElementById('table_section').textContent="B";
	document.getElementById('table_program').textContent=document.getElementById('dept').value;
}
}

}
