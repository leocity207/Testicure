export default class FolderDiv extends HTMLElement {
	constructor() {
	  super();
	  const shadow = this.attachShadow({ mode: 'open' });
  
	  const title = document.createElement('div');
	  title.classList.add('title');
  
	  const content = document.createElement('div');
	  content.classList.add('content');
	  content.innerHTML = `<slot></slot>`;
  
	  shadow.appendChild(title);
	  shadow.appendChild(content);
  
	  // Load external CSS
	  const link = document.createElement('link');
	  link.setAttribute('rel', 'stylesheet');
	  link.setAttribute('href', '/styles/folder.css');
	  shadow.appendChild(link);
  
	  title.addEventListener("click", () => {
		this.classList.toggle("collapsed");
	  });
	}
  
	connectedCallback() {
	  const name = this.getAttribute("name") || "Unnamed Folder";
	  this.shadowRoot.querySelector(".title").textContent = ` ${name}`;
	}
  }
  
  customElements.define("folder-div", FolderDiv);
  