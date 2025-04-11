import App from "./App.js";
import Utils from "../utils.js";

export default class Test_Case_App extends App {
	constructor() {
		super("taste-case-app","test-case.svg");
		fetch("file/test-case.xml")
			.then(response => response.text())
			.then(str => this.Render(str));
	}
}

customElements.define("test-case-app", Test_Case_App, { extends: "div" });