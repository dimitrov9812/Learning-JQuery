$(document).ready(function(){
    $('#first-div').text('Webpage is ready we are in first div').css('border','1px solid black').css('background-color','green');
    $('#second-div').text('Webpage is ready we are in second div');
    $('#button').click(function(){
        $('#book-image').css('visibility','visible');
    })
    

    //Change the link with the specific instructions 
    $("a[target='_self']").css('color','red');
});