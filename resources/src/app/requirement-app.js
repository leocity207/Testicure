import App from "./App.js";

class Requirement_App extends App {

    constructor(){
        super("requirement-app","requirement.svg","requirement");
    }
}

customElements.define("requirement-app", Requirement_App, { extends: "div" });

export default Requirement_App;