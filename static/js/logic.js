let responses = [];
let counter = 0;
let writing_counter = 0;
let prediction;

let choice1 = d3.select('#image1');
let choice2 = d3.select('#image2');
let question = d3.select('#modal-question');
let writing_question = d3.select('#writing-question');
let writing_image = d3.select('#writing-image');
let writing_button = d3.select('#writing-button');
let text_input = d3.select('#writing-input');
let startModal = d3.select('#startModal');
let image_body = d3.select('#image-body');
let writing_body = d3.select('#writing-body');
let close_button = d3.select('#close-button')

$("#writing-body").hide();
$("#writing-button").hide();
$('#close-button').hide();
$('#forL').hide();
$('#forR').hide();
$("#right-worldview").hide();
$("#center-right-worldview").hide();
$("#center-left-worldview").hide();
$("#left-worldview").hide();
$('#intro-p').hide();


function changeImage1 () {
    if (counter == 1){
        responses.push('r');
        console.log("clicked image 1!");
        console.log(responses);
        console.log('counter = ' + counter);
        question.text('Who has the better economic policy?');
        choice1.attr('src', 'https://media2.giphy.com/media/13yNFN1TlNCjC0/200w.webp?cid=3640f6095bb590b33871315a63a98e18');
        choice2.attr('src', 'https://media3.giphy.com/media/6LxGaLrEdGNHi/200w.webp?cid=3640f6095bb59115416d564d2ef10384');
        // counter += 1;
    }
    else if (counter == 2){
        responses.push('r');
        console.log("clicked image 1!");
        console.log(responses);
        console.log('counter = ' + counter);
        question.text('Which is closest to reality?');
        choice1.attr('src', 'https://media2.giphy.com/media/yKImbvwINkSQw/giphy.gif?cid=3640f6095bb638c948766b6c553ed605');
        choice2.attr('src', 'https://media.giphy.com/media/C7e950wHWHrUs/giphy.gif');  
        // counter += 1;      
    }
    else if (counter == 3){
        responses.push('r');
        console.log("clicked image 1!");
        console.log(responses);
        console.log('counter =' + counter);
        question.text('How do you feel about guns?');
        choice1.attr('src', 'https://media0.giphy.com/media/QswHqxRk7svjq/giphy.webp?cid=3640f6095bb653314c762f3773ff882b');
        choice2.attr('src', 'https://media.giphy.com/media/l0MYL8YagQPg8CSti/giphy.gif');  
        // counter += 1;            
    }
    else if (counter == 4){
        responses.push('r');
        console.log("clicked image 1!");
        console.log(responses);
        console.log('counter =' + counter); 
        $('#image-body').hide();
        $('#writing-body').show();
        $('#writing-button').show();  
    }
}

function changeImage2 () {
    if (counter == 1){
        responses.push('l');
        console.log("clicked image 2!");
        console.log(responses);
        console.log('counter =' + counter);
        question.text('Who has the better economic policy?');
        choice1.attr('src', 'https://media2.giphy.com/media/13yNFN1TlNCjC0/200w.webp?cid=3640f6095bb590b33871315a63a98e18');
        choice2.attr('src', 'https://media3.giphy.com/media/6LxGaLrEdGNHi/200w.webp?cid=3640f6095bb59115416d564d2ef10384');
        // counter += 1;
    }
    else if (counter == 2){
        responses.push('l');
        console.log("clicked image 2!");
        console.log(responses);
        console.log('counter =' + counter);
        question.text('Which is closest to reality?');
        choice1.attr('src', 'https://media2.giphy.com/media/yKImbvwINkSQw/giphy.gif?cid=3640f6095bb638c948766b6c553ed605');
        choice2.attr('src', 'https://media.giphy.com/media/C7e950wHWHrUs/giphy.gif');  
        // counter += 1;      
    }
    else if (counter == 3){
        responses.push('l');
        console.log("clicked image 2!");
        console.log(responses);
        console.log('counter =' + counter);
        question.text('How do you feel about guns?');
        choice1.attr('src', 'https://media0.giphy.com/media/QswHqxRk7svjq/giphy.webp?cid=3640f6095bb653314c762f3773ff882b');
        choice2.attr('src', 'https://media.giphy.com/media/l0MYL8YagQPg8CSti/giphy.gif');  
        // counter += 1;            
    }
    else if (counter == 4){
        responses.push('l');
        console.log("clicked image 2!");
        console.log(responses);
        console.log('counter =' + counter);   
        $('#image-body').hide();
        $('#writing-body').show();
        $('#writing-button').show();       
    }
}

function changeWriting () {
    if (counter == 5) {
        let inputElement = d3.select("#writing-input");
        let inputValue = inputElement.property("value");
        console.log(inputValue);
        responses.push(inputValue);
        console.log(responses)
        console.log('counter =' + counter);
        // $('input[name=checkListItem]').val("")
        $('input[name=writing]').val("")
        writing_question.text("What do you think of this image?");
        writing_image.attr('src', 'https://images.unsplash.com/photo-1512397739299-fe5a4327d192?ixlib=rb-0.3.5&s=6841244533c764c3a2c2e1baca6fb24d&auto=format&fit=crop&w=1050&q=80');
        text_input.attr('placeholder', "what's she doing there? / I love that dress / beautiful church / etc...");
        $('#close-button').show();
        $('#writing-button').hide();
    }
}


choice1.on('click', function () {
    counter += 1;
    changeImage1();
});

choice2.on('click', function () {
    counter += 1;
    changeImage2();
});

writing_button.on('click', function (){
    counter += 1;
    changeWriting();
})

close_button.on('click', function (){
    counter += 1;
    let inputElement = d3.select("#writing-input");
    let inputValue = inputElement.property("value");
    console.log(inputValue);
    responses.push(inputValue);
    console.log(responses);
    console.log('counter =' + counter);
    $('#startModal').hide();
    $('#start_button').hide();
    $('#jumbotron').hide();
    $.post("/receive", {'resultsData': responses}, function(responseData){
        var responseData;
        console.log("success");
        console.log(responseData);
        console.log(responseData.choice)
        console.log(typeof responseData);
        if (responseData.choice == "R"){
            $('#forR').show();
            $("#right-worldview").show();
            $('#intro-p').show();
            console.log('for right-leaning thinkers');
            }
        else if (responseData.choice == "CR"){
            $('#forR').show();
            $("#center-right-worldview").show();
            $('#intro-p').show();
            console.log('for right-leaning thinkers');
            }
        else if (responseData.choice == "L"){
            $('#forL').show();
            $("#left-worldview").show();
            $('#intro-p').show();
            console.log('for left-leaning thinkers');
            }
        else if (responseData.choice == "CL"){
            $('#forL').show();
            $("#center-left-worldview").show();
            $('#intro-p').show();
            console.log('for left-leaning thinkers');
            }
        }, );
    
    });