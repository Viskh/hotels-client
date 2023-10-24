import { combineReducers } from '@reduxjs/toolkit';

import { testModel } from 'entities/Test';

export const reducers = combineReducers({
    test: testModel.reducer,
});
