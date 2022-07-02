import { combineReducers } from "redux";
// Виесто legacy_createStore as createStore, ниже добавляем configureStore
import { configureStore } from "@reduxjs/toolkit";
// По-умолчанию в Redux Toolkit включены инструменты разработчика composeWithDevTools, импортировать отдельно их не нужно
// import { composeWithDevTools } from "redux-devtools-extension";
//-------------------------------------------------------------------------

import phonebookReducer from "./phonebook/phonebook-reducer";

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

// Redux
// const store = createStore(rootReducer, composeWithDevTools());

console.log(process.env.NODE_ENV);

//Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development", // Данная строка сообщает о том, что инструменты разрботчика в сборе production доступны не будут --> process+NodeEnvironment+NodeEnvironment
});

export default store;
