import React from 'react';
export default function Registration()
 {
    function validate()
{
    var fname=document.reg_form.fname;
    var lname=document.reg_form.lname;
    var address=document.reg_form.address;
    var gender=document.reg_form.gender;
    var email=document.reg_form.email;
    var mobile=document.reg_form.mobile;
    var course=document.reg_form.course;
   if(fname.value.length<=0)
     {
        alert("first name is required");
        fname.focus();
        return false;
     }
     if(lname.value.length<=0)
     {
        alert("last name is required");
        lname.focus();
        return false;
     }
       if(address.value.length<=0)
     {
        alert("address is required");
        address.focus();
        return false;
     }
        if(gender.value.length<=0)
     {
        alert("gender must be selected");
        gender.focus();
        return false;
     }
     if(email.value.length<=0)
     {
        alert("email must be entered");
        email.focus();
        return false;
     }
     if(mobile.value.length<10)
     {
        alert("mobile number must be entered correctly");
        mobile.focus();
        return false;
     }
      if(course.value==="select course")
     {
        alert("course must be selected");
        course.focus();
        return false;
     }
   
}
    return(
        <div>
            <center>
                <h1 style={{color:"red"}}>Registration Form</h1>
                <form method="" name="reg_form" onsubmit="return validate()">
<table align="center" border="0">
<tr>
<td><b>enter first name :</b></td>
<td>  <input type="text" name="fname" placeholder="last name"/></td>
</tr>
<tr>
<td><b>enter last name :</b></td>
<td>  <input type="text" name="lname" placeholder="first name"/></td>
</tr>
<tr>
<td><b>address :</b></td>
<td>  <input type="textarea" name="address" /></td>
</tr>
<tr>
<td><b>gender :</b></td>
<td>  <input type="radio" name="gender"  value="male" />male
      <input type="radio" name="gender"  value="male" />female
</td>
</tr>
<tr>
<td><b>email:</b></td>
<td>  <input type="email" name="email" placeholder="example@gmail.com"/></td>
</tr>
<tr>
<td><b>mobile:</b></td>
<td>  <input type="text" name="mobile" /></td>
</tr>
<tr>
<td><b>course:</b></td>
<td>  <select name="couse">
     <option value="select course" >select course </option>
      <option value="html" >html </option>
      <option value="css" >css </option>
    <option value="java script" >java script </option>
     <option value="java" >java </option>
     </select>
</td>
</tr>
<tr>
<td><input style={{width:"100px"}} type="submit" name="submit" value="submit" /></td>
<td><input style={{width:"100px"}} type="reset" name="reset" value="reset" /></td>
</tr>
</table>
</form>

            </center>
        </div>
    )
 }
 