var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    //craete a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store in the variable
    request.onereadystatechange = function() 
    {
        if(request.readystate === XMLHttpRequest.DONE)
        {
        //take some action
        if(Request.status === 200)
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