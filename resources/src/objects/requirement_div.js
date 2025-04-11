import Utils from "../utils";

export default class RequirementDiv extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });

		const meta = document.createElement("div");
		meta.classList.add("meta");

		const text = document.createElement("div");
		text.classList.add("text");
		text.innerHTML = `<slot></slot>`;

		shadow.appendChild(meta);
		shadow.appendChild(text);

		Utils.AddCSS(this.shadowRoot,"common.css");
		Utils.AddCSS(this.shadowRoot,"requirement.css");
	}
  
	connectedCallback() {
		const id = this.getAttribute("id") || "No ID";
		const name = this.getAttribute("name") || "Unnamed Requirement";
		this.shadowRoot.querySelector(".meta").textContent = `[${id}] ${name}`;
	}
  }
  
  customElements.define("requirement-div", RequirementDiv);
  