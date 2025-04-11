import Utils from "../utils";

export default class CampaignDiv extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const wrapper = document.createElement('div');
		wrapper.classList.add('campaign');

		const header = document.createElement('div');
		header.classList.add('header');

		const date = this.getAttribute('date') || 'N/A';
		const commit = this.getAttribute('commit') || 'N/A';
		const tester = this.getAttribute('tester') || 'N/A';

		header.innerHTML = `
			<span class="toggle-arrow">▶</span>
			<span class="meta"> ${date} &nbsp; | &nbsp;  ${tester} &nbsp; | &nbsp; ${commit.slice(0, 7)}</span>
		`;

		const content = document.createElement('div');
		content.classList.add('content');
		content.innerHTML = `<slot></slot>`;

		Utils.AddCSS(this.shadowRoot,"campaign.css");
		Utils.AddCSS(this.shadowRoot,"common.css");

		header.addEventListener('click', () => {
			wrapper.classList.toggle('collapsed');
			const arrow = header.querySelector('.toggle-arrow');
			arrow.textContent = wrapper.classList.contains('collapsed') ? '▶' : '▼';
		});

		wrapper.append(header, content);
		this.shadowRoot.append(wrapper);
	}
}

customElements.define('campaign-div', CampaignDiv);
