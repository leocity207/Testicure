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
  
	  // Load external CSS
	  const link = document.createElement("link");
	  link.setAttribute("rel", "stylesheet");
	  link.setAttribute("href", "/styles/requirement.css");
	  shadow.appendChild(link);
	}
  
	connectedCallback() {
	  const id = this.getAttribute("id") || "No ID";
	  const name = this.getAttribute("name") || "Unnamed Requirement";
	  this.shadowRoot.querySelector(".meta").textContent = `[${id}] ${name}`;
	}
  }
  
  customElements.define("requirement-div", RequirementDiv);
  