
/**
 * General Scope for utilitary function
 */
export default class Utils {
	static Fetch_Resource = async (endpoint) =>
	{
		try {
			const response = await fetch(endpoint);

			// Check if the response status is OK (200-299)
			if (!response.ok)
				throw new Error(`HTTP error! Status: ${response.status} (${response.statusText})`);

			const data = await response.text(); // Parse
			return data;
		} catch (error) {
			console.error("Error fetching resource:", error.message);
			throw error; // Re-throw the error for further handling
		}
	}

	static GenerateNewId(prefix = 'R') {
		const allElements = document.querySelectorAll(`${prefix.toLowerCase()}-div[id]`);
		let maxId = 0;
		allElements.forEach(el => {
			const id = parseInt(el.getAttribute('id')?.replace(/\D/g, ''));
			if (!isNaN(id) && id > maxId) maxId = id;
		});
		return `${prefix}${maxId + 1}`;
	}

	static SerializeXML(rootEl) {
		const serializer = new XMLSerializer();
		return serializer.serializeToString(rootEl);
	}

	static AddCSS(node, filename) {
		const link = document.createElement('link');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', '/styles/' + filename);
		node.appendChild(link);
		return link;
	}
}