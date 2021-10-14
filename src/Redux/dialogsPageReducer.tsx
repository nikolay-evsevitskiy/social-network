import React from "react";
import {postAddActionCreator, updateNewPostTextActionCreator} from "./profilePageReducer";

export type MessagesType = {
    id: number
    message: string
};
export type DialogsType = {
    id: number
    name: string
};
type MessageActionType = ReturnType<typeof addMessageActionCreator> | ReturnType<typeof updateNewMessageActionCreator>;
type PostActionType = ReturnType<typeof postAddActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>;


export const addMessageActionCreator = () => {
    return {type: "ADD-MESSAGE"} as const
};
export const updateNewMessageActionCreator = (text: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", newText: text} as const
};
const initialState = {
    dialogs: [
        {id: 1, name: 'Mark'},
        {id: 2, name: 'Miron'},
        {id: 3, name: 'Vadim'},
        {id: 4, name: 'Milana'},
        {id: 5, name: 'Polina'}
    ] as DialogsType[],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Cool!!!'}
    ] as MessagesType[],
    newMessageText: ""
}
export type InitialStateTypeDialogsPage = typeof initialState

const dialogPageReducer = (state: InitialStateTypeDialogsPage = initialState, action: PostActionType | MessageActionType): InitialStateTypeDialogsPage => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const copyState = {...state}
            const newText: MessagesType = {
                id: new Date().getTime(),
                message: state.newMessageText
            };
            copyState.messages = [...state.messages]
            copyState.messages.push(newText);
            copyState.newMessageText = '';
            return copyState;
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            const copyState = {...state}
            copyState.newMessageText = action.newText;
            return copyState;
        }

        default:
            return state;
    }
};

export default dialogPageReducer