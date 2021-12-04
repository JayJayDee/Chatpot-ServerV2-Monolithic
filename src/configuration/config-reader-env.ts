import { IConfigReader } from './config-reader.interface';

export class ConfigReaderEnv implements IConfigReader {

	private _source: Record<string, string | undefined>;

	constructor() {
		this._source = process.env;
	}

	readMandatoryItem(key: string): string {
		const rawValue = this._source[key];
		if (!rawValue) {
			throw new Error(`environment variable required: ${key}`);
		}
		return rawValue;
	}

	readOptionalItem(key: string, defaultValue: string): string {
		const value = this._source[key] ? this._source[key] : defaultValue;
		if (!value) {
			throw new Error(`environment variable required: ${key}`);
		}
		return value;
	}
}
