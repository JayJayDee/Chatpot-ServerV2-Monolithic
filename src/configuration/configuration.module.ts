import { Module } from '@nestjs/common';

import { ConfigReaderEnv } from './config-reader-env';
import { HttpConfigSet } from './config-set-http';
import { ConfigurationSymbols } from './configuration.symbols';

@Module({
	providers: [
		{ provide: ConfigurationSymbols.IConfigReader, useClass: ConfigReaderEnv },
		HttpConfigSet
	],
	exports: [
		HttpConfigSet
	]
})
export class ConfigurationModule {}
