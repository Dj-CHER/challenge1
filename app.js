// Get The URL
const site = window.location.hostname

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css


// Create a new element
var container = document.createElement("div");

// Set the ID of the new element
container.setAttribute("id", "container-kyo");

// Add some content to the new element
container.innerHTML = '<div class="line1-kyo"> ' +
    '<img src="https://i.ibb.co/BgCSK5Z/1-removebg-preview.png" alt="logo">' +
    '<div>Mail Generator</div>' +
    '</div>' +
    '<div class="line2-kyo">' +
    '<div class="title-kyo">Email Context</div>' +
    '<textarea class="Email-kyo" id="email">We are delighted to have you as an accepted participant for JunctionX Algiers this year</textarea>' +
    '</div>' +
    '<div class="line3-kyo">' +
    '<button id="myButton-kyo">Generate Reply</button>' +

    '</div>' +
    '<div class="line2-kyo">' +
    '<div class="title-kyo">Generated Email</div>' +
    '<textarea class="Email-kyo" id="generated-kyo"></textarea>' +
    '</div>';

// Find the body element
var bodyElement = document.getElementsByTagName("body")[document.getElementsByTagName("body").length - 1];


// Append the new div element to the parent element
// Insert the new element into the body
bodyElement.appendChild(container);



/*

*/

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}


window.addEventListener('load', function () {
    var b2 = document.getElementsByClassName("G-tF");

    //If it isn't "undefined" and it isn't "null", then it exists.
    if (b2.length > 0) {
        b2[0].innerHTML += '<div class="bjy T-I-J3 J-J5-Ji" id="logo-bar"> <img src="https://i.ibb.co/ch02r1j/kyo.png" alt="logo"> </div>';
        var b3 = document.getElementById("logo-bar");
        b3.addEventListener('click',
            function () {

                if (document.getElementById("container-kyo").style.display == "none") {
                    document.getElementById("container-kyo").style.display = "flex";


                    var button = document.getElementById('myButton-kyo');

                    button.addEventListener('click',
                        function () {


                            var OPENAI_API_KEY = "";
                            var ohttp = new XMLHttpRequest();
                            ohttp.open("POST", "https://api.openai.com/v1/completions");

                            ohttp.setRequestHeader("Accept", "application/json");
                            ohttp.setRequestHeader("Content-Type", "application/json");
                            ohttp.setRequestHeader("Authorization", "Bearer " + OPENAI_API_KEY)


                            ohttp.onload = function () {
                                document.getElementById("generated-kyo").value =
                                    JSON.parse(this.responseText).choices[0].text;

                                document.getElementsByClassName('Am aO9 Al editable LW-avf tS-tW')[0].innerHTML = document.getElementById("generated-kyo").value
                            }


                            const textarea = document.getElementById('email');
                            const textareaContent = textarea.value;
                            var sQuestion = "generate response to : " + textareaContent;
                            var sModel = "text-davinci-003";

                            var data = {
                                model: sModel,
                                prompt: sQuestion,
                                max_tokens: 3900
                            }

                            document.getElementById("generated-kyo").value = "Response Generating ..."

                            ohttp.send(JSON.stringify(data));


                        }
                    );

                }
                else {
                    document.getElementById("container-kyo").style.display = "none";
                }
            }
        )
    }
})

// Am aO9 Al editable LW-avf tS-tW tS-tY 
// Am aO9 Al editable LW-avf tS-tW tS-tY
// :eu

//Attempt to get the element using document.getElementById


/* -------------- */
/* Add Custom CSS */
/* -------------- */
Add_Custom_Style(`


#container-kyo
{
    display: none;
    justify-content: space-around;
    height: 200px;
    transition : height 1s;
    width: 100%;
    padding-bottom: 30px;
    background-color: #1c1c23;
}

.line1-kyo
{
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    margin-left: 30px;
    width: 300px;
    height: 80%;
    font-weight: 900;
    font-size: 35px;
    color: #B5B4B3;
}

.line1-kyo img
{
    width: 200px;
}

.line2-kyo
{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}

.line2-kyo .title-kyo
{
    color: #ffffff;
    margin-left: 5px;
    font-weight: 900;
    letter-spacing: 1px;
}

.Email-kyo
{
    padding: 10px;
    margin-top: 10px;
    align-self: center;
    width: 460px;
    overflow: auto;
    height: 130px;
    border-radius: 10px;
}

#email{
    background-color: #292932;
    color: #ffffff;
}

#generated-kyo{
    background-color: #10a37e66;
    color: #ffffff;
}

.line3-kyo{
    align-self: center;
    display:flex;
    align-items:center;
    margin-top: 50px;
}

#myButton-kyo
{
    outline: 0;
    cursor: pointer;
    border: none;
    padding: 0 20px;
    height: 45px;
    line-height: 45px;
    border-radius: 10px;
    background-color: #10A37F;
    color: white;
    font-weight: 400;
    font-size: 16px;
    box-shadow: 0 4px 14px 0 #10A37F;
    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;}


#myButton-kyo:hover{
    background: #40EBC1;
    box-shadow: 0 6px 20px #40EBC1;}

    #logo-bar img
    {
        width : 20px;
    }


    #logo-bar:hover
    {
        cursor: pointer;
    }
    `);




