import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebook-reducer";
// Виесто legacy_createStore as createStore, ниже добавляем configureStore
// import { combineReducers } from "redux"; - включен в configureStore
// По-умолчанию в Redux Toolkit включены инструменты разработчика composeWithDevTools, импортировать отдельно их не нужно
// import { composeWithDevTools } from "redux-devtools-extension";
//-------------------------------------------------------------------------

// Redux
// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());
//-------------------------------------------------------------------------

//Redux Toolkit
// console.log(process.env.NODE_ENV); - посмотреть, какой режим разработки используется (development/production)
const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === "development", // Данная строка сообщает - инструменты разрботчика в production доступны не будут --> process+NodeEnvironment+NodeEnvironment
});

export default store;
