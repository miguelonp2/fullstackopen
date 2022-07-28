import { useState } from 'react'
import { nanoid } from 'nanoid'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const controlNewContact = ( e ) => {
    console.log( e.target.value );
    setNewName( {name: e.target.value} );
  }
  
  const setNewContact = ( e ) => {
    e.preventDefault();
    console.log( e );
    if( persons.filter( person => person.name.indexOf( newName.name ) !== -1).length > 0 ) {
      window.alert( `${newName.name} is already in the phonebook` );
    } else {
      setPersons( persons.concat( newName ) );
      setNewName('');
      e.target.form.querySelector('#inputName').value = '';
    }
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input id = 'inputName' onChange={ controlNewContact } />
        </div>
        <div>
          <button type="submit" onClick={ setNewContact }>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map ( p => <p key = { nanoid() }>{ p.name }</p> ) }
    </div>
  )
}

export default App