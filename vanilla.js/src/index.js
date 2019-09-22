import Logger from './log';
import './style.scss';

const app = new Logger();

app.run([1, 2, 3, [14, 15]].flat());
console.log(app.zero);

