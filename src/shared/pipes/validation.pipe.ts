import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform, Type } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

const ValidationTargetTypes: Type<any>[] = [
	String, Boolean, Number, Array, Object
];

@Injectable()
export class ValidationPipe implements PipeTransform<Record<string, string>> {

	async transform(
		value: Record<string, string>,
		meta: ArgumentMetadata
	): Promise<Record<string, string>> {
		const { metatype } = meta;
		if (!metatype || this._isPrimitiveType(metatype) === true) {
			return value;
		}
		const convertedObject = plainToClass(metatype, value);
		const errors = await validate(convertedObject);
		if (errors.length > 0) {
			throw new HttpException({
				code: 'INVALID_PARAMETER',
				message: this._buildErrorDebugMessage(errors[0])
			}, HttpStatus.BAD_REQUEST);
		}
		return value;
	}

	private _isPrimitiveType(
		metatype: Type<any>
	): boolean {
		const found = ValidationTargetTypes.find(type => type === metatype);
		return found ? true : false;
	}

	private _buildErrorDebugMessage(error: ValidationError): string {
		return `does not meets the requirement. field: ${error.property}`;
	}
}
