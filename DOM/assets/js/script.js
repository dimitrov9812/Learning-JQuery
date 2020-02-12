//Manipulating List Elements with JQuery
$('button').click(function(){
    //Using the find command
    $('#first-ol').find('a').css('color','red');
    $('#first-ol').css('color','green');

    //Using the children command
    $('#first-item').children('a').css('color','green');
    $('#first-item').not('a').css('color','yellow');
} 
)
//Testing the hover function
$('document').ready(function(){
    $('#test').hover(function(){
       $(this).css('color','red');
    })
})


//Dom Manipulation -create -read -update -delete 'CRUD'
//=====================================================
//Create content
$('#submit-button').click(function(){
    var answer = $('#answer-box').val();
    if(answer == "Sofia"){
        $('#result').text('Your answer is correct!').css('color','green');
        $('#answer').text('');
    }
    else{
        $('#result').text('Your answer is incorrect!').css('color','red');
        $('#answer').text('The Correct Answer is - Sofia!');
    }
})


//Adding and Removing Dom Elements

$(".after").click(function(){
    $('.after').append('<div class="color-box attached"> Attached </div>')
})
$(".before").click(function(){
    $('.before').before('<div class="color-box attached"> Attached </div>')
})
$(".append").click(function(){
    $('.append').append('<div class="color-box attached"> Attached </div>')
})
$(".prepend").click(function(){
    $('.prepend').prepend('<div class="color-box attached"> Attached </div>')
})

//Modifying attributes
//we can create update remove or delete attributes
$("#linkFix").click(function(){
    $("a").attr("target", "_blank");
    //Remove class and set a newOne
    $("#linkFix").removeClass("toRemove").addClass("newClass");
  });

$( "p" ).click(function() {
    $( this ).toggleClass( "highlight" );
  });

//cloneelements
$("#clone-button").click(function() {
    //the true clones them with all the attributes and their current state
    //if we dont use true it will just make a simple clone
    $("#clone-target").clone(true).insertAfter('#clone-target');
  });

//moving elements is done with append

//iterating with each()

var numList = [1,2,3,4,5,6];

$.each(numList,function(index,value){
    console.log(index,value);
}
)

$('li').each(function(index,element){
    console.log($(this).text())
})