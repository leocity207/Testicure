import App from "./App.js";

class Test_App extends App {

    constructor(){
        super("test-app","test.svg","test");
    }
}

customElements.define("test-app", Test_App, { extends: "div" });

export default Test_App;