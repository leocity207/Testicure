class App_Container extends HTMLDivElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.m_apps = [];
		this.m_activeApp = null;

		this.m_main_container = document.createElement("div");
		this.m_main_container.classList.add("app-container");

		this.m_sidebar = document.createElement("div");
		this.m_sidebar.classList.add("sidebar");
		
		this.m_displayArea = document.createElement("div");
		this.m_displayArea.classList.add("display-area");
		
		this.m_main_container.append(this.m_sidebar, this.m_displayArea);
		this.shadowRoot.append(this.m_main_container);
		
		const style = document.createElement("link");
		style.rel = "stylesheet";
		style.href = "style/app-container.css"; // Adjust the path to your CSS file
		this.shadowRoot.appendChild(style);
	}

	Add_App(app) {
		this.m_apps.push(app);
		const iconElement = document.createElement("div");
		iconElement.classList.add("app-icon");
		iconElement.appendChild(app.Get_Icon());
		app.Get_Icon().addEventListener("click", () => this.Show_App(app));
		this.m_sidebar.appendChild(iconElement);

		if (!this.m_activeApp) {
			this.Show_App(app);
		}
	}

	Show_App(app) {

		this.m_displayArea.innerHTML = "";
		this.m_displayArea.appendChild(app);
		this.m_activeApp = app;
	}
}

customElements.define("app-container", App_Container, { extends: "div" });

export default App_Container;