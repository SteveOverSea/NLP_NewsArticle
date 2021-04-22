import { formChecker } from "./formChecker";

document.getElementById("send-button").addEventListener("click", sendAndGetAPIData);
const errorDiv = document.getElementById("error");

export async function sendAndGetAPIData(event) {
    event.preventDefault();

    resetResultDivs();

    const inputUrl = document.getElementById("url-input").value;
    let data = {};

    try {
        //check if input is valid
        if (formChecker(inputUrl)) {
            data = { url: inputUrl };
        } else {
            throw new Error("invalid input");
        }

        //show loading text
        error.classList.add("loading");
        error.innerHTML = "loading...";
    
        //server post request
        const response = await fetch("/analyze", {
            method: "POST",
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
       const responseData = await response.json();

       //remove loading text
       error.innerHTML = "";
       error.classList.remove("loading");

       //update result text and show result container
       for (const property in responseData) {
           document.getElementById(property).innerHTML += "<span>" + responseData[property] + "</span>";
       }
       document.getElementById("result-container").classList.remove("hidden");
       document.getElementById("result-container").classList.add("show");

    } catch (error) {
        console.log(error);
    }
}

//resets all the result elements
function resetResultDivs() {
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("show");
    document.getElementById("score_tag").innerHTML = "score-tag";
    document.getElementById("agreement").innerHTML = "agreement";
    document.getElementById("subjectivity").innerHTML = "subjectivity";
    document.getElementById("confidence").innerHTML = "confidence";
    document.getElementById("irony").innerHTML = "irony";
}
