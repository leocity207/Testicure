import App from "./App.js";
import Utils from "../utils.js";

export default class Test_App extends App {

	constructor(){
		super("test-app","test.svg");
		fetch("file/test.xml")
			.then(response => response.text())
			.then(str => this.Render(str));
	}
}

customElements.define("test-app", Test_App, { extends: "div" });