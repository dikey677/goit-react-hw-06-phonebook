import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";


function Filter({ value, onChange }) {

    return (
        <label>
            <p>Find contacts by name</p>
            <input type="text" name="name" value={value} onChange={onChange}/>
        </label>
    );
}

// const getVisibleFilter = () => {
//     const nrlzdFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(nrlzdFilter))
//   }


const mapStateToProps = state => {
    const {filter, items} = state.contacts
    const nrlzdFilter = filter.toLowerCase();
    const visibleContacts = items.filter(({name}) => name.toLowerCase().includes(nrlzdFilter))

    return {
        value: visibleContacts,
    }
}

const mapDispatchToProps = dispatch => ({
    onChange: evt => dispatch(actions.FilterContact(evt.target.value))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Filter) 