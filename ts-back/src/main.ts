import mongodb from 'infra/Mongodb';
import { App } from './infra/App';

const app = new App();
app.init();
mongodb();
