import compose from 'compose-function';

import { langProvider } from './langProvider';
import { routerProvider } from './routerProvider';
import { storeProvider } from './storeProvider';

export const providers = compose(langProvider, routerProvider, storeProvider);
