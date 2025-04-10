export default class DimensionDiv extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const container = document.createElement('div');
		container.classList.add('dimension');

		const title = document.createElement('div');
		title.classList.add('title');
		title.textContent = `Dimension: ${this.getAttribute('type')}`;

		const content = document.createElement('div');
		content.classList.add('choices');
		content.innerHTML = `<slot></slot>`;

		const styleLink = document.createElement('link');
		styleLink.setAttribute('rel', 'stylesheet');
		styleLink.setAttribute('href', '/styles/dimension.css');

		container.append(title, content);
		this.shadowRoot.append(styleLink, container);
	}
}

customElements.define('dimension-div', DimensionDiv);
