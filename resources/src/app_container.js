class App_Container extends HTMLDivElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.apps = [];
        this.activeApp = null;

        this.sidebar = document.createElement("div");
        this.sidebar.classList.add("sidebar");
        
        this.displayArea = document.createElement("div");
        this.displayArea.classList.add("display-area");
        
        this.shadowRoot.append(this.sidebar, this.displayArea);
        
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "style/app-container.css"; // Adjust the path to your CSS file
        this.shadowRoot.appendChild(style);
    }

    addApp(app) {
        this.apps.push(app);
        const iconElement = document.createElement("div");
        iconElement.classList.add("app-icon");
        iconElement.appendChild(app.getIcon());
        iconElement.addEventListener("click", () => this.showApp(app));
        this.sidebar.appendChild(iconElement);

        if (!this.activeApp) {
            this.showApp(app);
        }
    }

    showApp(app) {
        this.displayArea.innerHTML = "";
        this.displayArea.appendChild(app);
        this.activeApp = app;
    }
}

customElements.define("app-container", App_Container, { extends: "div" });

export default App_Container;