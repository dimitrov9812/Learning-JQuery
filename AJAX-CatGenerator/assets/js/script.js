$('button').click(function(){
    
    $.ajax({
        url:'https://api.jsonbin.io/b/5e457df49c65d21641ab230e',
        type: 'GET',
        dataType: 'json',
        timeout: 2500,
        success: function(result){
            console.log('Complete with success'); 
            console.log(result.name);
            console.log(result.age);
            console.log(result.city);
            console.log(result.country);
            console.log(result.studying);
        },
        error: function(result){
            console.log('Complete with error');
        },
        complete: function(result){
            console.log('Complete');
        }
    })

    $(".container").load('test.html');
})

$('#button-cats').click(function(){

    $('#catImage').fadeOut(2000).fadeIn(1000);
    $.ajax({
        url:'https://api.thecatapi.com/v1/images/search',
        type: 'GET',
        dataType: 'json',
        timeout: 2500,
        success: function(result){
            var image = result[0];
            var url = image.url;
            console.log(url);
            $('#catImage').attr("src", url);
        },
        error: function(result){
            console.log('Complete with error');
        },
        complete: function(result){
            console.log('Complete');
        }
    })

    $(".container").load('test.html');
})
