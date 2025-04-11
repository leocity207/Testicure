export default class ProjectDiv extends HTMLElement {
	constructor() {
	  super();
	  const shadow = this.attachShadow({ mode: 'open' });
  
	  const wrapper = document.createElement('div');
	  wrapper.classList.add('wrapper');
  
	  const header = document.createElement('div');
	  header.classList.add('header');
	  wrapper.appendChild(header);
  
	  const slot = document.createElement('slot');
	  wrapper.appendChild(slot);
  
	  shadow.appendChild(wrapper);
  
	  // Load external CSS
	  const link = document.createElement('link');
	  link.setAttribute('rel', 'stylesheet');
	  link.setAttribute('href', '/styles/project.css');
	  shadow.appendChild(link);
	}
  
	connectedCallback() {
	  const name = this.getAttribute("name") || "Unnamed Project";
	  this.shadowRoot.querySelector(".header").textContent = `Project: ${name}`;
	}
  }
  
  customElements.define("project-div", ProjectDiv);