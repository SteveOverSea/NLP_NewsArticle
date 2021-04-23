import { formChecker } from "../src/client/js/formChecker"
  
describe("Testing the formChecker functionality", () => {
    test("Testing the formChecker() function", () => {
           const emptyInput = "";
           const notUrlInputs = ["expample@email.com", "justRandomWords", "?lookingforSomething"];
           const urlInputs = ["www.google.com", "google.com", "http://www.google.com", "https://google.com"];

           expect(formChecker(emptyInput)).toEqual(false);

           notUrlInputs.forEach(notUrlInput => {
               expect(formChecker(notUrlInput)).toEqual(false);
           });

           urlInputs.forEach(urlInput => {
            expect(formChecker(urlInput)).toEqual(true);
        });      
})});