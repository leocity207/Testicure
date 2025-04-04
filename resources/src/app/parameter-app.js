import App from "./App.js";

class Parameter_App extends App {

    constructor(){
        super("parameter-app","parameter.svg","parameter");
    }
}

customElements.define("parameter-app", Parameter_App, { extends: "div" });

export default Parameter_App;