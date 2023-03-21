module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'pass_types',
      [
        {
          id: 1,
          name: 'Разовый',
          info: '',
          amount: 1,
          duration: 1,
          duration_type: 'd',
          cost: 550,
        },
        {
          id: 2,
          name: 'Стандарт 4',
          info: 'Абонемент на 4 часовых занятия',
          amount: 4,
          duration: 4,
          duration_type: 'w',
          cost: 1500,
        },
        {
          id: 3,
          name: 'Стандарт 8',
          info: 'Абонемент на 8 часовых занятий',
          amount: 8,
          duration: 4,
          duration_type: 'w',
          cost: 2700,
        },
        {
          id: 4,
          name: 'Стандарт 12',
          info: 'Абонемент на 12 часовых занятий',
          amount: 12,
          duration: 4,
          duration_type: 'w',
          cost: 3700,
        },
        {
          id: 5,
          name: 'Стандарт 16',
          info: 'Абонемент на 16 часовых занятий',
          amount: 16,
          duration: 4,
          duration_type: 'w',
          cost: 4400,
        },
        {
          id: 6,
          name: 'Вездеход',
          info: 'Абонемент на 50 часовых занятий',
          amount: 50,
          duration: 1,
          duration_type: 'm',
          cost: 5000,
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('pass_types', null, {});
  },
};
