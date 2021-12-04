import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {

	@Column()
	@PrimaryGeneratedColumn()
	public id: number;

	@Column(() => Nickname)
	public nickname: Nickname;

	@CreateDateColumn({
		type: 'timestamp'
	})
	public createdAt: Date;
}

class Nickname {
	@Column({
		length: 50
	})
	public en: string;

	@Column({
		length: 40
	})
	public ko: string;

	@Column({
		length: 40
	})
	public ja: string;
}
