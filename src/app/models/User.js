import Sequelize, { Model } from 'sequelize';

class User extends Model {
	static init(sequelize) {
		// 'sequelize' contains the connection
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password_hash: Sequelize.STRING,
				provider: Sequelize.BOOLEAN,
			},
			{
				sequelize,
			}
		);
	}
}

export default User;
