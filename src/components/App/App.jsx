import useLocalStorage from "../../Hooks/useLocalStorageApp";

import Title from "../Title/Title";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import { Container } from "../Contacts/Contacts.styled";

// redux

export default function App() {
  const phonebookName = [ 
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  
  const [contacts, setContacts] = useLocalStorage('contacts', phonebookName)

  return (
      <section>
        <Title title='Phonebook' />
        <Form />
        <Container>
          <div> 
            <Title title='Contacts' />
            <Filter />
          </div>
          
          <Contacts />
        </Container>  
      </section>
    )
}



