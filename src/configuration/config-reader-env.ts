import { IConfigReader } from './config-reader.interface';

export class ConfigReaderEnv implements IConfigReader {

	private _source: Record<string, string | undefined>;

	constructor() {
		this._source = process.env;
	}

	async readMandatoryItem(key: string): Promise<string> {
		const rawValue = this._source[key];
		if (!rawValue) {
			throw new Error(`environment variable required: ${key}`);
		}
		return await Promise.resolve(rawValue);
	}

	async readOptionalItem(key: string, defaultValue: string): Promise<string> {
		const value = this._source[key] ? this._source[key] : defaultValue;
		if (!value) {
			throw new Error(`environment variable required: ${key}`);
		}
		return await Promise.resolve(value);
	}
}
