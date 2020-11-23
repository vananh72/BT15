function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var gender=document.getElementById("gender_row"+no);
	
 var name_data=name.innerHTML;
 var gender_data=gender.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 gender.innerHTML="<input type='text' id='gender_text"+no+"' value='"+gender_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var gender_val=document.getElementById("gender_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("gender_row"+no).innerHTML=gender_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_id=document.getElementById("new_id").value;
 var new_name=document.getElementById("new_name").value;
 var new_gender=document.getElementById("new_gender").value;
 var new_Action=document.getElementById("new_Action").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id_row"+table_len+"'>"+new_id+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='gender_row"+table_len+"'>"+new_gender+"</td><td id='Actipn_row"+table_len+"'>"+new_Action+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_id").value="";
 document.getElementById("new_name").value="";
 document.getElementById("new_gender").value="";
 document.getElementById("new_Action").value="";
}