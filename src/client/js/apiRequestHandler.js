import { formChecker } from "./formChecker";

document.getElementById("send-button").addEventListener("click", sendAndGetAPIData);

export async function sendAndGetAPIData(event) {
    event.preventDefault();

    resetResultDivs();

    const inputUrl = document.getElementById("url-input").value;
    let data = {};

    try {
        if (formChecker(inputUrl)) {
            data = { url: inputUrl };
        } else {
            throw new Error("invalid input");
        }
    
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

       for (const property in responseData) {
           document.getElementById(property).innerHTML += "<span>" + responseData[property] + "</span>";
       }
       document.getElementById("result-container").classList.remove("hidden");
       document.getElementById("result-container").classList.add("show");

    } catch (error) {
        console.log(error);
    }
}

function resetResultDivs() {
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("show");
    document.getElementById("score_tag").innerHTML = "score-tag";
    document.getElementById("agreement").innerHTML = "agreement";
    document.getElementById("subjectivity").innerHTML = "subjectivity";
    document.getElementById("confidence").innerHTML = "confidence";
    document.getElementById("irony").innerHTML = "irony";
}
