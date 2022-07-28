import { useState } from 'react'
import { nanoid } from 'nanoid'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123451234', id:nanoid() },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: nanoid() },
    { name: 'Dan Abramov', number: '12-43-234345', id: nanoid() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: nanoid() }
  ]) 
  const [filteredPersons, setFilteredPersons] = useState([...persons]);
  const [newName, setNewName] = useState('')
  
  const filteringContacts = ( e ) => {
    let filteredPersons = persons.filter( person => person.name.toUpperCase().indexOf( e.target.value.toUpperCase() ) !== -1);
    setFilteredPersons ( filteredPersons );
  }

  const controlNewContact = ( e ) => {
    let name =  e.target.form.querySelector('#inputName').value;
    let number =  e.target.form.querySelector('#inputNumber').value;
    setNewName( {name, number} );
  }
  
  const setNewContact = ( e ) => {
    e.preventDefault();
    if( persons.filter( person => person.name.indexOf( newName.name ) !== -1).length > 0 ) {
      window.alert( `${newName.name} is already in the phonebook` );
    } else {
      setPersons( persons.concat( newName ) );
      setNewName('');
      e.target.form.querySelector('#inputName').value = '';
      e.target.form.querySelector('#inputNumber').value = '';
    }
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <input onChange={ filteringContacts }/>
      <form>
        <div>
          name: <input id = 'inputName' onChange={ controlNewContact } />
        </div>
        <div>
          number: <input id = 'inputNumber' onChange={ controlNewContact } />
        </div>
        <div>
          <button type="submit" onClick={ setNewContact }>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { filteredPersons.map ( p => <p key = { nanoid() }>{ p.name }: {p.number}</p> ) }
    </div>
  )
}

export default App