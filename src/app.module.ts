import { Module } from '@nestjs/common';

import { ConfigurationModule } from './configuration';

@Module({
	imports: [
		{ module: ConfigurationModule, global: true }
	],
	exports: [],
	providers: []
})
export class AppModule {}
