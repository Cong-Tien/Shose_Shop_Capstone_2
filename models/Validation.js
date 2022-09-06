function checkEmpty(value,selector)
{
    if(value === '')
    {
        document.querySelector(selector).style.display = "block";
        return false;
    }
    document.querySelector(selector).innerHTML = '';
    return true;
}

function checkLetter(value,selector,name)
{
  debugger
    var regex = /^[A-Z a-z]+$/;
   if(regex.test(value))
   {
     document.querySelector(selector).innerHTML = '';
     return true;
   }
   document.querySelector(selector).style.display = "block";
   document.querySelector(selector).innerHTML = name + ' tất cả phải là ký tự';
   return false;
}

function checkNumber(value,selector,name)
{
    var regex = /^[0-9]+$/;
   if( regex.test(value) )
   {
     document.querySelector(selector).innerHTML = '';
     return true;
   }
   document.querySelector(selector).style.display = "block";
   document.querySelector(selector).innerHTML = name + ' tất cả phải là số';
   return false;
}

function checkConfirm(pass,passConfirm,selector,name)
{
   if(pass ===passConfirm )
   {
     document.querySelector(selector).innerHTML = '';
     return true;
   }
   document.querySelector(selector).style.display = "inline";
   document.querySelector(selector).innerHTML = name + ' và mật khẩu phải giống nhau';
   return false;
}

function checkDate(value,selector,name)
{
  var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
  if( regex.test(value) )
   {
     document.querySelector(selector).innerHTML = '';
     return true;
   }
   document.querySelector(selector).style.display = "block";
   document.querySelector(selector).innerHTML = name + ' phải đúng định dạng mm/dd/yyyy';
   return false;
}

function checkEmail(value,selector,name)
{
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if( regex.test(value))
   {
     document.querySelector(selector).innerHTML = '';
     return true;
   }
   document.querySelector(selector).innerHTML = name + ' phải đúng định dạng ! vd: loveyou@gmail.com';
   document.querySelector(selector).style.display = "inline";
   return false;
}

function checkLength(value,selector,name,min,max)
{
    if(value.length > max || value.length < min)
    {
        document.querySelector(selector).style.display = "block";
        document.querySelector(selector).innerHTML = name + ' từ ' + min + " đến " + max + " ký tự !";
        return false;
    }
    document.querySelector(selector).innerHTML = '';
    return true;
}

function checkPosition(value,selector)
{
   if( value !== "Chọn chức vụ")
   {
     document.querySelector(selector).innerHTML = '';
     return true;
   }
   document.querySelector(selector).style.display = "block";
   document.querySelector(selector).innerHTML =  "Mời chọn chức vụ";
   return false;
}

function checkPass(value,selector,name,max,min)
{
    var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    if( regex.test(value) )
    {
      document.querySelector(selector).innerHTML = '';
      return true;
    }
    document.querySelector(selector).innerHTML = name + ' phải bao gồm 1 chữ in hoa, 1 ký tự số và 1 ký tự đặc biệt';
    document.querySelector(selector).style.display = "inline";
    return false;
}

function checkValue(value,selector,name,minValue,maxValue)
{
    if(Number(value) > maxValue || Number(value) <minValue || value.trim() == "")
    {
        document.querySelector(selector).style.display = "block";
        document.querySelector(selector).innerHTML = name + ' từ ' + minValue + " đến " + maxValue;
        return false;
    } 
    document.querySelector(selector).innerHTML = '';
    return true;
}


