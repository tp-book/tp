import '@awesome.me/webawesome/dist/styles/webawesome.css';

import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/card/card.js';
import '@awesome.me/webawesome/dist/components/rating/rating.js';

import { allDefined } from '@awesome.me/webawesome/dist/webawesome.js';

await allDefined({
  match: tagName => tagName.startsWith('wa-') || tagName.startsWith('tp-'),
  root: document,
  additionalElements: [],
});

console.log('TP Components loaded');
