export function formChecker (inputUrl) {
    const errorDiv = document.getElementById("error") || document.createElement("div"); // for jest
    const regEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

    if (inputUrl == "") {
        errorDiv.innerHTML = "Please enter a URL!";
        return false;
    } else if (!inputUrl.match(regEx)) {
        errorDiv.innerHTML = "Not a valid URL!";
        return false;
    } else {
        errorDiv.innerHTML = "";
        return true;
    }
}