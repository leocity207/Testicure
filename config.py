import os
import json
import pathlib

MANDATORY_KEYS = ["RelativePath"]
OPTIONAL_KEYS = []
CONFIG_PATH = os.path.dirname(os.path.abspath(__file__)) + "./config.json"

def Get_Config():
	"""
	Retrieves the configuration from a JSON file. If the configuration file does not exist,
	it initializes a new configuration. The configuration is checked for required keys
	and any missing mandatory keys are prompted for input.

	Returns:
		dict: The configuration dictionary.
	"""
	config = {}
	
	if os.path.exists(os.path.dirname(CONFIG_PATH)):
		with open(CONFIG_PATH, "r") as file:
			config = json.load(file)
	else:
		return Initialize_Config()
	
	Check_Config(config)
	return config


def Initialize_Config():
	"""
	Initializes a new configuration dictionary. The dictionary is populated with all
	members of MANDATORY_KEYS and OPTIONAL_KEYS. If any of the mandatory keys are not
	present in the dictionary, the user is prompted for input. The dictionary is then
	written to the configuration file.
	
	Returns:
		dict: The initialized configuration dictionary.
	"""
	config = {}
	for key in MANDATORY_KEYS:
		value = input(f"Enter the value for mandatory key {key}: ")
		config[key] = value
	for key in OPTIONAL_KEYS:
		value = input(f"Enter the value for optional key {key}: ")
		config[key] = value
	with open(CONFIG_PATH, "w") as file:
		json.dump(config, file, indent=4)
	return config

def Check_Config(config):
	"""
	Checks a configuration dictionary for mandatory keys and prompts the user for input
	if any of the mandatory keys are missing. The dictionary is then written to the
	configuration file.

	Args:
		config (dict): The configuration dictionary to check.
	"""
	updated = False
	for key in MANDATORY_KEYS:
		if key not in config:
			config[key] = input(f"Enter the value for mandatory key {key}: ")
			updated = True
	if updated:
		with open(CONFIG_PATH, "w") as file:
			json.dump(config, file, indent=4)

def Update_Config(key, value):
	"""
	Updates the configuration dictionary with the provided key and value. If the key is not valid,
	raises an exception. The updated dictionary is then written to the configuration file.

	Args:
		key (str): The configuration key to update.
		value (str): The new value of the configuration key.

	Returns:
		dict: The updated configuration dictionary.
	"""
	config = Get_Config()
	if(key not in MANDATORY_KEYS and key not in OPTIONAL_KEYS):
		raise Exception(f"Key {key} is not a valid config key")
	config[key] = value
	with open(CONFIG_PATH, "w") as file:
		json.dump(config, file, indent=4)
	return config