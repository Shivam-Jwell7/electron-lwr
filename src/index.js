import { createElement } from 'lwc';
import App from './modules/my/app/app';

const app = createElement('my-app', { is: App });
document.body.appendChild(app);
