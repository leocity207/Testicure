import App from "./App.js";
import Utils from "../utils.js";

class Parameter_App extends App {

	constructor(){
		super("parameter-app","parameter.svg");
		fetch("file/test-dimension.xml")
			.then(response => response.text())
			.then(str => this.Render(str));
	}
}

customElements.define("parameter-app", Parameter_App, { extends: "div" });

export default Parameter_App;