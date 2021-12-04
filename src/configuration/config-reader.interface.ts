
export interface IConfigReader {

	/**
	 * reads the configuration value from configuration source
	 * @param key key of configuration
	 */
	readMandatoryItem(key: string): Promise<string>;

	/**
	 * reads the configuration value from configuration source, it not eixsts, 
	 * @param key key of configuration
	 * @param defaultValue default value of configuration
	 */
	readOptionalItem(key: string, defaultValue: string): Promise<string>;
}
