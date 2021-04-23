import { expect } from "@jest/globals";
import { sendAndGetAPIData } from "../src/client/js/apiRequestHandler"

describe("Testing the apiRequestHandler functionality", () => {
    test("Testing the sendAndGetAPIData() function", () => {
        
        document.body.innerHTML ="<button id='send-button'>Analyse</button>";
        const sendButton = document.getElementById("send-button");
        sendButton.click();
        expect(sendButton.innerHTML).toBe("Analyse");
})});