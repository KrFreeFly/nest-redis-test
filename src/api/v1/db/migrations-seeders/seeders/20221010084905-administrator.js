module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          login: 'Super',
          first_name: 'Admin',
          last_name: 'Admin',
          role_id: 3,
          password_hash: '1e197cb5f1980b3f1f7736bac650a214078e3140',
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
