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

		const styleLink = document.createElement('link');
		styleLink.rel = 'stylesheet';
		styleLink.href = '/styles/history.css';

		wrapper.append(title, content);
		this.shadowRoot.append(styleLink, wrapper);
	}
}

customElements.define('history-div', HistoryDiv);
