import { FormBox, InputName, InputNumber } from "./Form.styled";
import useLocalStorage from "../../Hooks/useLocalStorageForm";
import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";


function Form({onSubmit}) {
  const [name, setName] = useLocalStorage('name', '')
  const [number, setNumber] = useLocalStorage('number', '')

  
  const handleChangeName = event => {
    setName(event.currentTarget.value)
    // console.log(`Имя: ${name}`)
  }

   const handleChangeNumber = event => {
    setNumber(event.currentTarget.value)
    // console.log(`Номер: ${number}`)
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number }); 
    setName('')
    setNumber('')
  }

  return (
      <FormBox onSubmit={handleSubmit}>
             Name
            <InputName
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                 value={name}
                 onChange={handleChangeName}
             />
            
             Number
             <InputNumber
                 type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
                 value={number}
                 onChange={handleChangeNumber}
             />
            
        <button type="submit">Add contacts</button>
      </FormBox>
    )
}

const mapDispatchToProps = dispatch => ({
  onSubmit: obj => dispatch(actions.AddContact(obj))  
})

export default connect(null, mapDispatchToProps)(Form)
 


