import { Inject, Injectable } from '@nestjs/common';

import { IConfigReader } from './config-reader.interface';
import { ConfigurationSymbols } from './configuration.symbols';

@Injectable()
export class SecretConfigSet {
	private _configReader: IConfigReader;

	private _jwtSecret: string;

	constructor(
		@Inject(ConfigurationSymbols.IConfigReader) configReader: IConfigReader
	) {
		this._configReader = configReader;
		this._readAll();
	}

	public get jwtSecret(): string {
		return this._jwtSecret;
	}

	private _readAll(): void {
		this._jwtSecret = this._configReader.readMandatoryItem('JWT_SECRET');
	}
}
