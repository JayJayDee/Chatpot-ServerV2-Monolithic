import { Inject, Injectable } from '@nestjs/common';
import { IConfigReader } from './config-reader.interface';
import { ConfigurationSymbols } from './configuration.symbols';

export type Stage = 'DEV' | 'STG' | 'PRD';

@Injectable()
export class StageConfigSet {
	private _configReader: IConfigReader;
	private _stage: Stage;

	constructor(
		@Inject(ConfigurationSymbols.IConfigReader) configReader: IConfigReader
	) {
		this._configReader = configReader;
		this._readAll();
	}

	public get stage(): Stage {
		return this._stage;
	}

	private _readAll() {
		const rawStage = this._configReader.readOptionalItem('CHATPOT_STAGE', 'DEVELOPMENT');
		if (rawStage === 'DEV' || rawStage === 'STG' || rawStage === 'PRD') {
			this._stage = rawStage;
		} else {
			throw new Error(`the CHATPOT_STAGE invalid, given CHATPOT_STAGE: ${rawStage}`);
		}
	}
}
