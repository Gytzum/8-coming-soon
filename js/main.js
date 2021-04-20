import { clock } from './components/clock.js';
import { progressBar } from './components/progressBar.js';
import { progressBarData } from './data/progressBarData.js';

clock('#clock_birthday', '14:30:30')
progressBar('.left-column', progressBarData)
