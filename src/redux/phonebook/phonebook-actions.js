import types from "./phonebook-types";
import { nanoid } from "nanoid";

const AddContact = (onSubmit) => ({
  type: types.ADD,
  payload: { id: nanoid(10), ...onSubmit },
});

const DeleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const FilterContact = (value) => ({
  type: types.FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { AddContact, DeleteContact, FilterContact };
