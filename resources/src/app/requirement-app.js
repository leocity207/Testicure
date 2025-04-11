import App from "./App.js";
import Utils from "../utils.js";

export default class Requirement_App extends App {

	constructor(){
		super("requirement-app","requirement.svg");

		this.saveBtn = document.createElement("button");
		this.saveBtn.textContent = "Save XML";
		this.saveBtn.classList.add("save-btn");
		this.saveBtn.addEventListener("click", () => this.SaveXML());

		this.appendChild(this.saveBtn);

		fetch("file/requirement.xml")			
			.then(response => response.text())
			.then(str => this.Render(str));
	}

	async SaveXML() {
		const xmlString = Utils.SerializeXML(this.m_content_node.firstElementChild);

		await fetch("file/requirement.xml", {
			method: "PUT",
			headers: { "Content-Type": "application/xml" },
			body: xmlString
		}).then(res => {
			if (res.ok) alert("Saved!");
			else alert("Save failed");
		});
	}
}

customElements.define("requirement-app", Requirement_App, { extends: "div" });