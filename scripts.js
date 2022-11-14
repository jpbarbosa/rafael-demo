const people = [
  'Person 1',
  'Person 2',
  'Person 3',
]

function handleSubmit(event) {
  event.preventDefault();
  const personField = event.target['person'];
  const personValue = personField.value;
  createPerson(personValue);
  personField.value = '';
}

function loadPeople() {
  people.forEach(person => {
    createPerson(person)
  })
}

function createPerson(personName) {
  const peopleList = document.querySelector('#peopleList');
  const newPerson = document.createElement('li');
  newPerson.innerText = personName;
  peopleList.appendChild(newPerson);
}
