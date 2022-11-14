const people = [
  'Person 1',
  'Person 2',
  'Person 3',
]

function handleSubmit(event) {
  event.preventDefault();
  const personField = event.target['person'];
  const personValue = personField.value;
  const peopleList = document.querySelector('#peopleList');
  const newPerson = document.createElement('li');
  newPerson.innerText = personValue;
  peopleList.appendChild(newPerson);
  personField.value = '';
}

function loadPeople() {
  people.forEach(person => {
    const peopleList = document.querySelector('#peopleList');
    const newPerson = document.createElement('li');
    newPerson.innerText = person;
    peopleList.appendChild(newPerson);
  })
}
