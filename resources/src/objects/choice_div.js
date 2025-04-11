export default class ChoiceDiv extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const wrapper = document.createElement('div');
		wrapper.classList.add('choice');
		wrapper.textContent = this.getAttribute('name');

		const styleLink = document.createElement('link');
		styleLink.setAttribute('rel', 'stylesheet');
		styleLink.setAttribute('href', '/styles/choice.css');

		this.shadowRoot.append(styleLink, wrapper);
	}
}

customElements.define('choice-div', ChoiceDiv);
