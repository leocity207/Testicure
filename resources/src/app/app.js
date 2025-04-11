export default class App extends HTMLDivElement {
	constructor(name, icon) {
		super();
		this.classList.add("app");
		this.dataset.name = name;

		this.m_icon = document.createElement("img");
		this.m_icon.src = './image/' + icon;

		this.attachShadow({ mode: "open" });
		this.m_content_node = document.createElement("div");
		this.m_content_node.classList.add("app-content");

		this.shadowRoot.appendChild(this.m_content_node);
	}



	Render(content) {
		this.m_content_node.innerHTML = content
	}

	Get_Icon() {
		//return this.icon.cloneNode(true);
		return  this.m_icon;
	}
}

customElements.define("custom-app", App, { extends: "div" });