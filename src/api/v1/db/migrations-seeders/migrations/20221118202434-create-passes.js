/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('passes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
        },
      },
      passTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'pass_type_id',
        references: {
          model: 'pass_types',
        },
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'start_date',
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'end_date',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('passes');
  },
};
