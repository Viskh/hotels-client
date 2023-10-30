import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorage } from 'shared/lib';
import { type Theme } from 'shared/ui/theme-switcher';

import { STORAGE_KEY_THEME } from './config';

type InitialState = {
    theme: Theme;
};

const initialState: InitialState = {
    theme: getLocalStorage<Theme>(STORAGE_KEY_THEME) || 'light',
};

const slice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (
            state,
            { payload }: PayloadAction<InitialState['theme']>
        ) => {
            state.theme = payload;
        },

        resetTheme: () => initialState,
    },
});

export const { reducer, actions } = slice;
