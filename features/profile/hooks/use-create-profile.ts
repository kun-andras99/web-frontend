"use client";

import { useActionState } from "react";

import {
    createProfileAction,
    type CreateProfileState,
} from "../lib/actions/create-profile";

const initialState: CreateProfileState = {
    success: false,
    error: null,
    fieldErrors: {},
};

export function useCreateProfile() {
    const [state, formAction, isPending] = useActionState(
        createProfileAction,
        initialState,
    );

    return {
        state,
        formAction,
        isPending,
    };
}
