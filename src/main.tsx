import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css';

import { App } from './app';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);