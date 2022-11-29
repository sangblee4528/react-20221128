import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
//import Counter from './Counter';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
//root.render(<Counter />);
