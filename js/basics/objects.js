let persons = [
  {
    first_name: 'Trilok',
    last_name: 'Bakulapalli',
    gender: 'Male'
  },
  {
    first_name: 'Monty',
    last_name: 'Patil',
    gender: 'Male'
  },
  {
    first_name: 'Anusha',
    last_name: 'Goti',
    gender: 'Female'
  },
  {
    first_name: 'Misha',
    last_name: 'Patil',
    gender: 'Female'
  }
];

function people() {
  for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].first_name);
  }
}

people();
