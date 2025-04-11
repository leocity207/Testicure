import Utils from "../utils";

export default class ProjectDiv extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
  
		const wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');
  
		const header = document.createElement('div');
		header.classList.add('header');
  
		const slot = document.createElement('slot');

		// Inside the constructor or connectedCallback
		const addFolderBtn = document.createElement('button');
		addFolderBtn.textContent = '+ Add Folder';
		addFolderBtn.classList.add('add-folder-btn');

		addFolderBtn.addEventListener('click', () => {
			const newFolder = document.createElement('folder-div');
			newFolder.setAttribute('name', 'New Folder');
			this.shadowRoot.querySelector('.content').appendChild(newFolder);
		});

		wrapper.append(header, addFolderBtn, slot);
  
		this.shadowRoot.appendChild(wrapper);

		Utils.AddCSS(this.shadowRoot,"common.css");
		Utils.AddCSS(this.shadowRoot,"project.css");

		
	}
  
	connectedCallback() {
		const name = this.getAttribute("name") || "Unnamed Project";
		this.shadowRoot.querySelector(".header").textContent = `Project: ${name}`;
	}
}
  
  customElements.define("project-div", ProjectDiv);