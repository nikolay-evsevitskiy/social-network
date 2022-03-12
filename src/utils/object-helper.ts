import {ItemGetUsersType} from "../api/api";

export const UpdateObjectInArray = (items: Array<ItemGetUsersType>, itemId: number, newObjectProps: {}) => {
    return items.map(t => {
        if (t.id === itemId) {
            return {...t, ...newObjectProps}
        }
        return t;
    })

}