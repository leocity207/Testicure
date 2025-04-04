
/**
 * General Scope for utilitary function
 */
class Utils {
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
}

export default Utils