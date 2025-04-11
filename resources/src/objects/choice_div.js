import Utils
 from "../utils";
export default class ChoiceDiv extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const wrapper = document.createElement('div');
		wrapper.classList.add('choice');
		wrapper.textContent = this.getAttribute('name');
		
		Utils.AddCSS(this.shadowRoot,"choice.css");
		Utils.AddCSS(this.shadowRoot,"common.css");
		
		this.shadowRoot.append(wrapper);
	}
}

customElements.define('choice-div', ChoiceDiv);
