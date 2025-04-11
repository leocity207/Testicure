import Utils from "../utils";

export default class FolderDiv extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const title = document.createElement('div');
		title.classList.add('title');

		const content = document.createElement('div');
		content.classList.add('content');
		content.innerHTML = `<slot></slot>`;

		this.shadowRoot.appendChild(title);
		this.shadowRoot.appendChild(content);

		const addRequirementBtn = document.createElement('button');
		addRequirementBtn.textContent = '+ Add Requirement';
		addRequirementBtn.classList.add('add-req-btn');

		addRequirementBtn.addEventListener('click', () => {
			const newId = Utils.GenerateNewId('R'); // Helper function
			const newReq = document.createElement('requirement-div');
			newReq.setAttribute('id', newId);
			newReq.setAttribute('name', 'New Requirement');
			newReq.innerText = 'Describe the requirement here.';
			content.appendChild(newReq);
		});

		const addSubFolderBtn = document.createElement('button');
		addSubFolderBtn.textContent = '+ Add Subfolder';
		addSubFolderBtn.classList.add('add-subfolder-btn');

		addSubFolderBtn.addEventListener('click', () => {
			const newFolder = document.createElement('folder-div');
			newFolder.setAttribute('name', 'New Subfolder');
			content.appendChild(newFolder);
		});

		this.shadowRoot.appendChild(addRequirementBtn);
		this.shadowRoot.appendChild(addSubFolderBtn);

		Utils.AddCSS(this.shadowRoot,"common.css");
		Utils.AddCSS(this.shadowRoot,"folder.css");

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
  