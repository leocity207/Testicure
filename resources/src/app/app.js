class App extends HTMLDivElement {
    constructor(name, icon, content) {
        super();
        this.classList.add("app");
        this.dataset.name = name;
        this.m_content = content;

        this.m_icon = document.createElement("iframe");
        this.m_icon.src = './image/' + icon;
        this.m_icon.width = '100%';
        this.m_icon.height = '100%';
        
        this.render();
    }

    render() {
        this.innerHTML = `<div class="app-content">${this.content}</div>`;
    }

    getIcon() {
        //return this.icon.cloneNode(true);
        return  this.m_icon;
    }
}

customElements.define("custom-app", App, { extends: "div" });

export default App;