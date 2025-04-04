import App from "./App.js";
import Utils from "../utils.js";

class Requirement_App extends App {

	constructor(){
		super("requirement-app","requirement.svg");
		fetch("file/requirement.xml")			
			.then(response => response.text())
			.then(str => this.Render(str));
	}
}

customElements.define("requirement-app", Requirement_App, { extends: "div" });

export default Requirement_App;