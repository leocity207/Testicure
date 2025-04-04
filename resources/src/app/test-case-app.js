import App from "./App.js";

class Test_Case_App extends App {
    constructor(){
        super("taste-case-app","test-case.svg","test-case")
    }
}

customElements.define("test-case-app", Test_Case_App, { extends: "div" });

export default Test_Case_App;