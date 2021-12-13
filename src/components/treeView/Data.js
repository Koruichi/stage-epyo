import Tree from '@widgetjs/tree';
import { Divider } from 'semantic-ui-react';


let dataA = [{"id":"1.1", "text": "Allée 10"},{"id":"1.2", "text": "Allée 11"},{"id":"1.3", "text": "Allée 12"},{"id":"1.4", "text": "Allée 13"}];
let dataB = [{"id":"2.1", "text": "Allée 20"},{"id":"2.2", "text": "Allée 21"},{"id":"2.3", "text": "Allée 22"},{"id":"2.4", "text": "Allée 23"}];
let dataC = [{"id":"3.1", "text": "Allée 30"},{"id":"3.2", "text": "Allée 31"},{"id":"3.3", "text": "Allée 32"},{"id":"3.4", "text": "Allée 33"}];
let dataD = [{"id":"4.1", "text": "Allée 40"},{"id":"4.2", "text": "Allée 41"},{"id":"4.3", "text": "Allée 42"},{"id":"4.4", "text": "Allée 43"}];
let dataE = [{"id":"5.1", "text": "Allée 50"},{"id":"5.2", "text": "Allée 51"},{"id":"5.3", "text": "Allée 52"},{"id":"5.4", "text": "Allée 53"}];



  const myTreeA = new Tree('.containerA', {
    data: [{ id: '1', text: 'Cellule A', children: dataA }],
  });

  const myTreeB = new Tree('.containerB', {
    data: [{ id: '2', text: 'Cellule B', children: dataB }],
  });

  const myTreeC = new Tree('.containerC', {
    data: [{ id: '3', text: 'Cellule C', children: dataC }],
  });

  const myTreeD = new Tree('.containerD', {
    data: [{ id: '4', text: 'Cellule D', children: dataD }],
  });

  const myTreeE = new Tree('.containerE', {
    data: [{ id: '5', text: 'Cellule E', children: dataE }],
  });