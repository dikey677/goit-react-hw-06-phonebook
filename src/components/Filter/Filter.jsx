import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";
import { useState } from "react";


function Filter({ value, onChange }) {
    const [filter, setFilter] = useState('')

    return (
        <label>
            <p>Find contacts by name</p>
            <input type="text" name="name" value={value} onChange={onChange}/>
        </label>
    );
}

const getVisibleFilter = () => {
    const nrlzdFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(nrlzdFilter))
  }


const mapStateToProps = state => ({

    return {
        value: state.contacts.filter,
    }
})

const mapDispatchToProps = dispatch => ({
    onChange: evt => dispatch(actions.FilterContact(evt.target.value))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Filter) 