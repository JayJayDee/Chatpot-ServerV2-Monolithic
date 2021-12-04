import { Inject, Injectable } from '@nestjs/common';

import { IConfigReader } from './config-reader.interface';
import { ConfigurationSymbols } from './configuration.symbols';

@Injectable()
export class HttpConfigSet {
	private _configReader: IConfigReader;
	private _port: number;

	constructor(
		@Inject(ConfigurationSymbols.IConfigReader) configReader: IConfigReader
	) {
		this._configReader = configReader;
		this._readAll();
	}

	private _readAll() {
		this._port = Number(this._configReader.readMandatoryItem('HTTP_PORT'));
	}

	public get port(): number {
		return this._port;
	}
}
