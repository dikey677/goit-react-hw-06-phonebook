import React from "react";
import { Ul, Li, Box, Button, P } from "../Contacts/Contacts.styled"
import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";

const Contacts = ({ contacts, removeContact }) => {
    return (
            <Box>
                <Ul>
                    {contacts.map(contact => {
                        return (
                            <Li key={contact.id}>
                                <P>{contact.name}: {contact.number}</P>
                                <Button type="button" onClick={() => removeContact(contact.id)}>Delete</Button>  
                            </Li>
                        )
                    })}
                </Ul>
            </Box>
    );
}

const mapStateToProps = state => ({
    contacts: state.contacts.items,
})

const mapDispatchToProps = dispatch => ({
    removeContact: (contactId) => dispatch(actions.DeleteContact(contactId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)

