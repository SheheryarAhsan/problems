const getNames = (array) => array.map(item => item.name);

const array = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
console.log(getNames(array));