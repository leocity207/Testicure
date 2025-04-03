class App extends HTMLDivElement {
    constructor(name, icon, content) {
        super();
        this.classList.add("app");
        this.dataset.name = name;
        this.icon = icon;
        this.content = content;
        
        this.render();
    }

    render() {
        this.innerHTML = `<div class="app-content">${this.content}</div>`;
    }

    getIcon() {
        return this.icon.cloneNode(true);
    }
}

customElements.define("custom-app", App, { extends: "div" });

export default App;