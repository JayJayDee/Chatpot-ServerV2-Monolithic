import { IsDefined, IsString } from 'class-validator';

export class AnonymousUserSignInDTO {
	@IsDefined()
	@IsString()
	public key: string;

	@IsDefined()
	@IsString()
	public secret: string;
}

export class EmailUserSignInDTO {
	@IsDefined()
	@IsString()
	public email: string;

	@IsDefined()
	@IsString()
	public secret: string;
}
