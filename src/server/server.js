const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const FormData = require("form-data");
const fetch = require("node-fetch");

const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("dist"));

app.listen(port, () => {
    console.log("Server listening on Port " + port);
});

app.post("/analyze", async (req, res) => {
    console.log(req.body.url);
    const apiResponse = await makeApiRequest(req.body.url);
    console.log("API Response");
    console.log(apiResponse);
    res.send(apiResponse);
});

async function makeApiRequest(urlToAnalyze) {
    let data = {};
    console.log("--makeApiRequest--");
    const formdata = new FormData();
    console.log(process.env.API_KEY);
    console.log(urlToAnalyze);
    formdata.append("key", process.env.API_KEY);
    formdata.append("txt", urlToAnalyze);
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        const responseData = await response.json();
        console.log("response");
        console.log(responseData);
        data = {
            score_tag: responseData.score_tag,
            agreement: responseData.agreement,
            subjectivity: responseData.subjectivity,
            confidence: responseData.confidence,
            irony: responseData.irony
        };
    } catch(error) {
        console.log('error', error);
    } 

    return data;
}

