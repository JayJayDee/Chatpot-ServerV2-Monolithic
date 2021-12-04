import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
	private _appService: AppService;

	constructor(
		@Inject(AppService) appService: AppService
	) {
		this._appService = appService;
	}
	
	@Get()
	getHello(): string {
		return this._appService.getHello();
	}
}
