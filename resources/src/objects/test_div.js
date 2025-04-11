import Utils from "../utils";

export default class TestDiv extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');

		const header = document.createElement('div');
		header.classList.add('header');
		header.textContent = `${this.getAttribute('id')}: ${this.getAttribute('name')}`;

		const content = document.createElement('div');
		content.classList.add('content');
		content.innerHTML = `<slot></slot>`; // for inner <Dimension-div> and text

		Utils.AddCSS(this.shadowRoot,"common.css");
		Utils.AddCSS(this.shadowRoot,"test.css");

		header.addEventListener('click', () => {
			wrapper.classList.toggle('collapsed');
		});

		wrapper.appendChild(header);
		wrapper.appendChild(content);
		this.shadowRoot.append(wrapper);
	}
}

customElements.define('test-div', TestDiv);
