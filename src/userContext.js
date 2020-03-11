import React from 'react'

const UserContext = React.createContext();

export const defaultContext = {text: "William", 
mail: [
    {from:"Peter",subject:"Hello",sent:"10 mins ago"},
    {from:"John",subject:"Hello",sent:"10 mins ago"},
    {from:"Patri",subject:"Hello, this is a longer subject",sent:"10 mins ago"}
]};

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext