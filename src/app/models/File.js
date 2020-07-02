import Sequelize, { Model } from 'sequelize';

class File extends Model {
	static init(sequelize) {
		// 'sequelize' contains the connection
		super.init(
			{
				name: Sequelize.STRING,
				path: Sequelize.STRING,
			},
			{
				sequelize,
			}
		);
	}
}

export default File;
