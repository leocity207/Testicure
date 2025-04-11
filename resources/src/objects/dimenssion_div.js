import Utils from "../utils";

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

		Utils.AddCSS(this.shadowRoot,"dimension.css");
		Utils.AddCSS(this.shadowRoot,"common.css");

		container.append(title, content);
		this.shadowRoot.append(container);
	}
}

customElements.define('dimension-div', DimensionDiv);
