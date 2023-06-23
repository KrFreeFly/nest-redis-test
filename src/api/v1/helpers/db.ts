import { Sequelize } from 'sequelize';

const database = process.env.POSTGRES_DATABASE;
const username = process.env.POSTGRES_USERNAME;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.info('Connected to postgres');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
