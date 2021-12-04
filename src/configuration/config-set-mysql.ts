import { Inject, Injectable } from '@nestjs/common';
import { IConfigReader } from './config-reader.interface';
import { ConfigurationSymbols } from './configuration.symbols';

@Injectable()
export class MysqlConfigSet {
	private _configReader: IConfigReader;

	private _host: string;
	private _port: number;
	private _database: string;
	private _user: string;
	private _password: string;

	constructor(
		@Inject(ConfigurationSymbols.IConfigReader) configReader: IConfigReader
	) {
		this._configReader = configReader;
		this._readAll();
	}

	public get host(): string {
		return this._host;
	}

	public get port(): number {
		return this._port;
	}

	public get database(): string {
		return this._database;
	}

	public get user(): string {
		return this._user;
	}

	public get password(): string {
		return this._password;
	}

	private _readAll() {
		this._host = this._configReader.readMandatoryItem('MYSQL_HOST');
		this._port = Number(this._configReader.readOptionalItem('MYSQL_PORT', '3306'));
		this._database = this._configReader.readMandatoryItem('MYSQL_DATABASE');
		this._user = this._configReader.readMandatoryItem('MYSQL_USER');
		this._password = this._configReader.readMandatoryItem('MYSQL_PASSWORD');
	}
}
