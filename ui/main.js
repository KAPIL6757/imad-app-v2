var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    //craete a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store in the variable
    request.onreadystatechange = function() 
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
        //take some action
        if(request.status === 200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
         span.innerHTML = counter.toString();
        }    
        }
    };
    //make the request
    request.open('GET','http://kapil6757.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

 var submit = document.getElementById('submit_btn');
 submit.onclick = function () {
     
     
     //craete a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store in the variable
    request.onreadystatechange = function() 
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
        //take some action
        if(request.status === 200)
        {
                var names = request.responseText;
     name = JSON.parse(names);
     var list = '';
     for(var i=0; i<names.length; i++)
     {
         list += '<li>' + names[i] + '</li>';
         
     }
 var ul = document.getElementById('namelist');
ul.innerHTML = list;
}
 }
           
    };
    var nameInput = document.getElementById('name');
 var name = nameInput.value;
    //make the request
    request.open('GET','http://kapil6757.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    };
     
     
     
