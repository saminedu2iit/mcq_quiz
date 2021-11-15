'use strict'

//global variable declaration


let current_question_number;
let question_header = document.querySelector('.question_header');
let question = document.querySelector('.question_text');
let option_a = document.querySelector('#label1');
let option_b = document.querySelector('#label2');
let option_c = document.querySelector('#label3');
let option_d = document.querySelector('#label4');
let radio_a = document.querySelector('#a');
let radio_b = document.querySelector('#b');
let radio_c = document.querySelector('#c');
let radio_d = document.querySelector('#d');
let test_dificulty;
let temp_question_counter = 1;
let next_button = document.querySelector('#next_button');
let submit_button = document.querySelector('#submit_button');
let start_test_button = document.querySelector('#start_test_button');
let welcome_page = document.querySelector('.welcome_page');
let question_container = document.querySelector('.question_container');
let score = 0;
let result;
let correct_answer_option_id_element;


//questions dataset 

let dataset =
    [{
        "question": "0",
        "a": "0",
        "b": "0",
        "c": "0",
        "d": "0",
        "correct_answer": "0"
    },
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "a": "<javascript>",
        "b": "<script>",
        "c": "<scripting>",
        "d": "<js>",
        "correct_answer": "b"
    },
    {
        "question": "Where is the correct place to insert a JavaScript?",
        "a": "the <head> section",
        "b": "the <body> section",
        "c": "both",
        "d": "none",
        "correct_answer": "b"
    },
    {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "a": '<script js ="xxx.js">',
        "b": '<script src ="xxx.js">',
        "c": '<script href ="xxx.js">',
        "d": '<script link ="xxx.js">',
        "correct_answer": "b"
    },
    {
        "question": 'How do you write "Hello World" in an alert box?',
        "a": 'msgBox("Hello World");',
        "b": 'msg("Hello World");',
        "c": 'alert("Hello World");',
        "d": 'promt("Hello World");',
        "correct_answer": "c"
    },

    {
        "question": "How do you create a function in JavaScript?",
        "a": "function:function_name();",
        "b": "function - function_name();",
        "c": "function_name function();",
        "d": "function function_name();",
        "correct_answer": "d"
    },
    {
        "question": "How can you add a comment in a JavaScript?",
        "a": "'this is a comment",
        "b": "//this is a comment",
        "c": "#this is a comment",
        "d": "<!--this is a comment",
        "correct_answer": "b"
    },

    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "a": "onchange",
        "b": "onmousemove",
        "c": "onmouseclick",
        "d": "onclick",
        "correct_answer": "d"
    },
    {
        "question": "How do you declare javascript variable?",
        "a": "var var_name;",
        "b": "variable var_name;",
        "c": "v var_name;",
        "d": "var_name;",
        "correct_answer": "a"
    },

    {
        "question": "What will the following code return: Boolean(10 > 9)?",
        "a": "NaN",
        "b": "false",
        "c": "true",
        "d": "undefined",
        "correct_answer": "c"
    },
    {
        "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        "a": "if i<>5",
        "b": "if i not 5",
        "c": "if(i!=5)",
        "d": "if(i.5)",
        "correct_answer": "c"
    },
    {
        "question": "Which is not valid data type in Javascript?",
        "a": "Undefined",
        "b": "Boolean",
        "c": "Float",
        "d": "Number",
        "correct_answer": "c"
    },
    {
        "question": "Which of the following function of Array object removes the last element from an array and returns that element?",
        "a": "push()",
        "b": "delete()",
        "c": "pop()",
        "d": "link()",
        "correct_answer": "c"
    },
    {
        "question": "A function definition expression is known as .....",
        "a": "Function calls",
        "b": "Function definiation",
        "c": "Function calling",
        "d": "Function literal",
        "correct_answer": "d"
    },
    {
        "question": "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        "a": "Position",
        "b": "Window",
        "c": "Standard",
        "d": "Location",
        "correct_answer": "a"
    },

    {
        "question": "Which of the following can be used to call a JavaScript Code Snippet?",
        "a": "Function/Method",
        "b": "Preprocessor",
        "c": "Triggering Event",
        "d": "RMI",
        "correct_answer": "a"
    }

    ];

function remove_selection() {
    radio_a.checked = false;
    radio_b.checked = false;
    radio_c.checked = false;
    radio_d.checked = false;

}


let startTest = function () {

    test_dificulty = document.querySelector('#test_dificulty').value;
    if (test_dificulty == "easy") {
        current_question_number = 1;
        alert(test_dificulty);
    }
    else if (test_dificulty == "medium") {
        current_question_number = 6;
        alert(test_dificulty);
    }
    else {
        current_question_number = 11;
    }

    remove_selection();
    document.querySelector('.welcome_page').style.visibility = "hidden";
    welcome_page.innerHTML = '';

    document.querySelector('.question_container').style.visibility = "visible";


    question_header.textContent = `Question ${temp_question_counter} out of 5`;
    question.textContent = dataset[current_question_number].question;
    option_a.textContent = dataset[current_question_number].a;
    option_b.textContent = dataset[current_question_number].b;
    option_c.textContent = dataset[current_question_number].c;
    option_d.textContent = dataset[current_question_number].d;
    correct_answer_option_id_element = dataset[current_question_number].correct_answer;
    correct_answer_option_id_element = "#" + correct_answer_option_id_element;
}





//check if user has selected an answer or not
let check_if_user_responded = function () {
    let a = document.querySelector('#a');
    let b = document.querySelector('#b');
    let c = document.querySelector('#c');
    let d = document.querySelector('#d');

    if (a.checked == false && b.checked == false && c.checked == false && d.checked == false) {
        return false;
    }
    else {
        return true;
    }
}




let verify_answer = function () {

    if (!check_if_user_responded()) {
        alert("Please select answer");
    }

    else {
        if (document.querySelector(correct_answer_option_id_element).checked == true) {
            score++;
            alert("Correct");

        }
        else {
            alert("Incorrect!\ncorrect answer is " + dataset[current_question_number].correct_answer);
        }
        submit_button.style.visibility = "hidden";

    }


}

let task = function () {
    if (next_button.value == "Finish Test") {
        verify_answer();
        alert("Finish Test");
        if (score <= 1) {
            result = 'No';
        }
        else if (score > 1 && score < 4) {
            result = 'Maybe';
        }
        else {
            result = 'Yes';
        }
        document.querySelector('.welcome_page').style.visibility = "visible";
        document.querySelector('.question_container').style.visibility = "hidden";

        welcome_page.innerHTML = '<div class="welcome_page_header"> TEST FINISHED</div><p class="p_score"></p><p class="p_result"></p><br><center><a href="" id ="home_screen_link">Home Screen</a></center>';
        document.querySelector('.p_score').textContent = "You scored " + score;
        document.querySelector('.p_result').textContent = "Selection : " + result;
        submit_button.style.visibility = "hidden";
    }
    else {
        if (!check_if_user_responded()) {
            alert("Please select answer");
        }

        else {
            change_question();
        }
    }



}
let change_question = function () {

    remove_selection();
    submit_button.style.visibility = "visible";
    temp_question_counter++;

    current_question_number++;
    if (current_question_number % 5 == 0) {
        next_button.value = "Finish Test";
        submit_button.style.visibility = "hidden";
    }


    question_header.textContent = `Question ${temp_question_counter} out of 5`;
    question.textContent = dataset[current_question_number].question;
    option_a.textContent = dataset[current_question_number].a;
    option_b.textContent = dataset[current_question_number].b;
    option_c.textContent = dataset[current_question_number].c;
    option_d.textContent = dataset[current_question_number].d;
    correct_answer_option_id_element = dataset[current_question_number].correct_answer;
    correct_answer_option_id_element = "#" + correct_answer_option_id_element;

}


//event listeners 

start_test_button.addEventListener('click', startTest);
submit_button.addEventListener('click', verify_answer);
next_button.addEventListener('click', task);
