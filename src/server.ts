import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;

  newOptions.host = 'database';

  createConnection({
    ...options,
  }).then(async () => {
    const app = (await import('./app')).default;
    app.listen(3300, () => console.log('server is running'));
  }).catch(() => {
    console.log('create dabase connection error');
  });
});
