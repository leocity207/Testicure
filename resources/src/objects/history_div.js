import Utils from "../utils";

export default class HistoryDiv extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const wrapper = document.createElement('div');
		wrapper.classList.add('history');

		const title = document.createElement('div');
		title.classList.add('title');
		title.textContent = `Test History`;

		const content = document.createElement('div');
		content.classList.add('content');
		content.innerHTML = `<slot></slot>`;

		Utils.AddCSS(this.shadowRoot,"common.css");
		Utils.AddCSS(this.shadowRoot,"history.css");

		wrapper.append(title, content);
		this.shadowRoot.append(wrapper);
	}
}

customElements.define('history-div', HistoryDiv);
