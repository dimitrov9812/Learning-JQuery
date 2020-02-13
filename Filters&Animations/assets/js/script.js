
$(document).ready(function(){
    $('ol').css('border','1 px solid red');
    $('.div-test').attr('id','test');
    $('#test').css('background-color','red');
    //checks if the element with id test has the child with id first and if it has it adds the css
    $('#test').has('#first').css('border','1px solid black').css('background-color','blue');


    //i made a search bar wich will filter my information 
    $('#myInput').on('keyup',function(){
        var value = $(this).val().toLowerCase();
        $('#first-ol li').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        })
        $('#second-ol li').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        })
    })

    //cheick if list has link in it
    //we can also use 'not'(to check if there is no element and apply desired effect)
    $('li').has('a').css('background-color','red').click(function(){
        $(this).css('background-color','blue');
    });


    //we will test the display function and hide function
    
    //hides the elements
    $('#hide').click(function(){
        $('.div-test').hide(500);
    })
    
    //shows the element
    $('#show').click(function(){
        $('.div-test').show(500,function(){
            console.log('Transition Complete')
        });
    })
    
    //2in1 function of showing or hiding is the toggle
    $('#toggle').click(function(){
        $('.div-test').toggle(500,function(){
            console.log('Transition Complete')
        });
    })
    
    //the element fades in on button click
    $('#fadeIn').click(function(){
        $('.div-test').fadeIn(500);
    })


    //the elements fades out on button click
    $('#fadeOut').click(function(){
        $('.div-test').fadeOut(500);
    })

    //reduces the opacity of the elements
    $('#fadeToHalf').click(function(){
        $('.div-test').fadeTo(2000,0.5);
    })

    //restores the opacity of the elements
    $('#fadeToFull').click(function(){
        $('.div-test').fadeTo(2000,1);
    })

    //slides the element up
    $('#slideUp').click(function(){
        $('.div-test').slideUp(2000);
    })
    //sliders the element down
    $('#slideDown').click(function(){
        $('.div-test').slideDown(2000);
    })

    //toggles the slide function
    $('#slideToggle').click(function(){
        $('.div-test').slideToggle(2000);
    })


    //JQuery Animate 
    $('#animate').click(function(){
        $('.div-test').animate({
            height:'200px',
            opacity: 0.4,
            marginLeft: "0.6in",
            borderWidth: "10px"
        }, 2000);
    })
})