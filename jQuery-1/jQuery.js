/*
Q1:
Check if jQuery is loaded
*/

$(document).ready(function() {
    $('#q1').text('jQuery is working');
});


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$(document).ready(function () {
    $('#goUpBtn').on('click', function () {
        console.log('go up');
        $("html, body").scrollTop(0);
    });
 });


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
$(document).ready(function() {
    var changeBtn = $('#btn1');
    var resetBtn = $('#btn2');
    var box = $('#box');
    var origianDimentions = [box.height(), box.width()];
   
    changeBtn.on('click', function() {
        box.animate({height: '300px', width: '300px'})
    });

    resetBtn.on('click', function() {
        box.animate({height: origianDimentions[0], width: origianDimentions[1]});
    });
});

/*
Q4:
Learn how to fadein your boxes
*/

$(document).ready(function() {
    var div1 = $('#div1');
    var div2 = $('#div2');
    var div3 = $('#div3');
    var btn = $('#btnQ4');

    btn.on('click', function() {
        div1.fadeIn(3000);
        div2.fadeIn(3000);
        div3.fadeIn(3000);
    });
});



/*
Q5:
User must first accept then he or she can signup
*/

$(document).ready(function() {
    var acceptBtn = $('#accept');
    var submitBtn = $('#submitbtn');
   
    acceptBtn.on('click', function() {
        submitBtn.attr('disabled', !this.checked);
    });
});



/*
Q6:
Let them print
*/

$(document).ready(function() {
    $('#print').click(function(){
        window.print();
   });
});




/*
Q7:
Can username be too long? Yest it can - lets limit that
*/


/*
Q8:
Wanna make some words bolder, do it with jQuery
*/


/*
Q9:
Add new div to your website
*/


/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/


/*
Q12:
Know what user puts into textbox
*/


/*
Q13:
Change input value
*/



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 