import { createGlobalState } from 'react-hooks-global-state';

export type TypeUser = {
    USERID: string;
    email: string;
    gender: string;
    description: string;
    fullname: string;
    status: string;
    profilepicture: string;
    permission: string;
}

type TypeCategory = {
    id: number;
    text: string;
}

type TypeInitState = {
    token?: string;
    categories: TypeCategory[];
    currentUser: TypeUser | null;
}

const initialState: TypeInitState = {
    token: '',
    categories: [],
    currentUser: null,
};

const { useGlobalState } = createGlobalState(initialState);

export {
    useGlobalState
}