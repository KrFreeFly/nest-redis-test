import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/sqlite.db',
});

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.info('Connected to sqlite');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
