document.getElementById("send-button").addEventListener("click", sendAndGetAPIData);

export async function sendAndGetAPIData(event) {
    event.preventDefault();

    const inputUrl = document.getElementById("url-input").value;
    const data = { url: inputUrl };

    try {
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
           document.getElementById(property).innerHTML = property + ": " + responseData[property];
       }

    } catch (error) {
        console.log(error);
    }
}
