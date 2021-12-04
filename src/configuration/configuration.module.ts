import { Module } from '@nestjs/common';
import { SecretConfigSet, StageConfigSet } from '.';

import { ConfigReaderEnv } from './config-reader-env';
import { HttpConfigSet } from './config-set-http';
import { MysqlConfigSet } from './config-set-mysql';
import { ConfigurationSymbols } from './configuration.symbols';

@Module({
	providers: [
		{ provide: ConfigurationSymbols.IConfigReader, useClass: ConfigReaderEnv },
		HttpConfigSet,
		MysqlConfigSet,
		StageConfigSet,
		SecretConfigSet
	],
	exports: [
		HttpConfigSet,
		MysqlConfigSet,
		StageConfigSet,
		SecretConfigSet
	]
})
export class ConfigurationModule {}
