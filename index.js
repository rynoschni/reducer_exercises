console.log('file loaded .....');

const numbersArray = [1,2,3,4];

const reducerCallback = (accumulator, current) =>{
  console.log("accumulator, current value", accumulator, current);
  return accumulator + current;
}

// const total = numbersArray.reduce(reducerCallback, 0);
// const total2 = numbersArray.reduce(reducerCallback,1);
// console.log('Total is: ', total);
// console.log('Total 2 is: ', total2);

const lettersArray = ['r','e','d','u','c','e','r'];

// const word = lettersArray.reduce(reducerCallback,'');
// console.log('The word is: ', word);

// const wordArray = ['b','i','r','d'];
// const word = wordArray.reduce(reducerCallback,'');
// console.log ('The Word is: ', word);

const stateReducer = (state, action) =>{
  switch (action.type) {
    case 'ACTION_ADD':
      return state + action.item;
    case 'ACTION_RESET':
      return '';
    default:
      return state;
  }
}

// let wordStore;
// wordStore = stateReducer(wordStore, { type: 'ACTION_RESET'});
// wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'r'});
// wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'e'});
// wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'd'});
// wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'u'});
// wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'x'});

// console.log(wordStore);

const catReducer = (state = 'Purring', action) =>{
  switch(action.type) {
    case 'ACTION_NAP':
      return 'Napping';
    case 'ACTION_EAT':
      return 'Eating';
    case 'ACTION_PLAY':
      return 'Playing';
    default:
      return state;
  }
}

let oakley;
oakley = catReducer(oakley, { type: "ACTION_NAP" });
console.log('Oakley is:', oakley);


