// const formdata = new FormData();
//     formdata.append("key", "");
//     formdata.append("txt", document.getElementById("url-input").value);
//     formdata.append("lang", "en");  // 2-letter code, like en es fr ...

//     console.log("Api Request: input: " + document.getElementById("url-input").value);

//     const requestOptions = {
//     method: 'POST',
//     body: formdata,
//     redirect: 'follow'
//     };

//     const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//     .then(response => ({
//         status: response.status, 
//         body: response.json()
//     }))
//     .then(({ status, body }) => console.log(status, body))
//     .catch(error => console.log('error', error));