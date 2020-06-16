import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

type TypeCurrentuser = {
    USERID: string;
    email: string;
    gender: string;
    description: string;
    fullname: string;
    status: string;
    profilepicture: string;
    permission: string;
}

type TypeInitState = {
    currentUser: TypeCurrentuser | null;
}

const initialState: TypeInitState = {
    currentUser: null
};

const { useGlobalState } = createGlobalState(initialState);

export {
    useGlobalState
}