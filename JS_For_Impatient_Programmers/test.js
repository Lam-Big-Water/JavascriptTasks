const obj = {

    num: 'type',
    someMethod(x, y) {
        console.log(this.num);
        console.log(x, y);
    }
}

obj.someMethod('1', '2');


const persons = [
    {
      surname: 'Zoe',
      address: {
        street: {
          name: 'Sesame Street',
          number: '123',
        },
      },
    },
    {
      surname: 'Mariner',
    },
    {
      surname: 'Carmen',
      address: {
      },
    },
  ];

const streetNames = persons.map(
    p => p.address?.street?.name
   
);

console.log(streetNames);