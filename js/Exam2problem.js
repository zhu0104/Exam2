function GetList()
{
    var objRequest = new XMLHttpRequest(); //Creat AJAX request object
    
    //URL and Query string
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
    };
    
    //initiate the server request
    objRequest.open("GET",url,true);
    objRequest.send();
}


function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "<table><td><th> Category ID, </th><th> Category Name, </th><th> Description </th></tr>";
    
    for(count = 0; count < result.GetAllCategoriesResult.length; count ++)
    {
        displaytext += "<tr><td> "+"<br>"+ result.GetAllCategoriesResult[count].CID + "</td><td>"+ "<tr><td> "+ result.GetAllCategoriesResult[count].CName +"</td><td>" +"<tr><td> "+ result.GetAllCategoriesResult[count].CDescription+"</td><td>";
        
    }
    
    
    document.getElementById("display1").innerHTML = displaytext;
}






// SECTION 2--------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function CreateCategory()
{
    {
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCategory";
    
    //Collect Customer data from web page
    
    var catname = document.getElementById("catname").value;
    var catdescription = document.getElementById("cdescription").value;
    
    //Create the parameter string
    
    var newcustomer = '{"CName":"' + catname + '","CDescription":"' + catdescription +'"}';
    
    //Checking for Ajax operation return
    
    objRequest.onreadystatechange = function()
    {if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var result = JSON.parse(objRequest.responseText);
        
        OperationResult(result);
    }
}
    //Start AJAX request
    
    objRequest.open("POST", url, true);
    
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    objRequest.send(newcustomer);
    
    }
    function OperationResult(output)
    {
        if (output.WasSuccessful == 1)
        {
            document.getElementById("result").innerHTML = "The operation was successful!"
        }
        else
        {
            document.getElementById("result").innerHTML = "The operation was not successful! Please the informatin like this example: Mushrooms, Button" + "<br>" + output.Exception;
        }
    }
    }
    

    
    
    
    
    

// Section 3 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    
    function Updatecat()
    {
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    
    //Update customer address
    
    var orderid = document.getElementById("catid").value;
    var shippingaddress = document.getElementById("catdescript").value;
    
    
    var updateorder = '{"CID":"'+orderid+'","CDescription":"'+shippingaddress+'"}';
    
    
        //Checking for Ajax operation return
    
    objRequest.onreadystatechange = function()
    {if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var result = JSON.parse(objRequest.responseText);
        
        OperationResult(result);
    }
    }
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    objRequest.send(updateorder);
    }
    
    function OperationResult(output)
    {
        if (output.WasSuccessful == 1)
        {
            document.getElementById("result2").innerHTML = "The operation was successful!"
        }
        else if (output.WasSuccessful == 0)
        {
            document.getElementById("result2").innerHTML = "The operation was unsuccessful!"
        }
        else if (output.WasSuccessful == -2)
        {
            document.getElementById("result2").innerHTML = "The operation failed because the data string supplied could not be deserialized into the service object"
        }
        else if (output.WasSuccessful == -3)
        {
           document.getElementById("result2").innerHTML = "The operation failed because a record with the supplied Order ID could not be found"
        }
    }
    
    }
    
    
    
    
    
    
    
    
    
    //section 4------------------------------------------------------------------------------------------------------------------------------------------------------
    
    
    function DeleteCatID()
    {
        {
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCategory/";
    url += document.getElementById("deleteid").value;
    //Get data from webpage
      
    
    objRequest.onreadystatechange = function()
    {if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var result = JSON.parse(objRequest.responseText);
        
        DeleteCustomerResult(result);
    }
    }

    objRequest.open("GET",url,true);
        var good = confirm("Are you sure?")
        if (good==true) 
    objRequest.send();
    
    }
    
    function DeleteCustomerResult(output)
    {
        if (output.DeleteCategoryResult.WasSuccessful == 1)
        {
            document.getElementById("result3").innerHTML= "The operation was successful";
        }
        else
        {
            document.getElementById("result3").innerHTML= "The operation was not successful";
        }
    }
    }
    
    
    
    function Dmenu()
    {
        if (document.getElementById("dmenu").value =="Categories")
        {
            document.getElementById("section1").style.visibility = "visible";
             document.getElementById("section2").style.visibility = "hidden";
              document.getElementById("section3").style.visibility = "hidden";
               document.getElementById("section4").style.visibility = "hidden";
                document.getElementById("section5").style.visibility = "hidden";
        }
        
        else if (document.getElementById("dmenu").value =="Add Product Category")
        {
            document.getElementById("section1").style.visibility = "hidden";
             document.getElementById("section2").style.visibility = "visible";
              document.getElementById("section3").style.visibility = "hidden";
               document.getElementById("section4").style.visibility = "hidden";
                document.getElementById("section5").style.visibility = "hidden";
        }
        else if (document.getElementById("dmenu").value =="Update Product")
        {
            document.getElementById("section1").style.visibility = "hidden";
             document.getElementById("section2").style.visibility = "hidden";
              document.getElementById("section3").style.visibility = "visible";
               document.getElementById("section4").style.visibility = "hidden";
                document.getElementById("section5").style.visibility = "hidden";
        }
        else if (document.getElementById("dmenu").value =="Delete Category")
        {

            document.getElementById("section1").style.visibility = "hidden";
             document.getElementById("section2").style.visibility = "hidden";
              document.getElementById("section3").style.visibility = "hidden";
               document.getElementById("section4").style.visibility = "visible";
                document.getElementById("section5").style.visibility = "hidden";
        }
        else if (document.getElementById("dmenu").value =="About Me")
        {
            document.getElementById("section1").style.visibility = "hidden";
             document.getElementById("section2").style.visibility = "hidden";
              document.getElementById("section3").style.visibility = "hidden";
               document.getElementById("section4").style.visibility = "hidden";
                document.getElementById("section5").style.visibility = "visible";
        }
        else
        {
            document.getElementById("section1").style.visibility = "hidden";
             document.getElementById("section2").style.visibility = "hidden";
              document.getElementById("section3").style.visibility = "hidden";
               document.getElementById("section4").style.visibility = "hidden";
                document.getElementById("section5").style.visibility = "hidden";
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    