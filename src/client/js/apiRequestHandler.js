document.getElementById("send-button").addEventListener("click", makeApiRequest);

export async function makeApiRequest() {

    const inputUrl = document.getElementById("url-input").value;
    const data = { url: inputUrl };

    try {
        const response = await fetch("/analyze", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.log(error);
    }
}
