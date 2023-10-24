import {
    type Dispatch,
    type SetStateAction,
    useCallback,
    useMemo,
} from 'react';

export const useBind = (
    state: string,
    setState: Dispatch<SetStateAction<string>>
) => {
    const onChange = useCallback(
        (
            value:
                | string
                | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            const eValue =
                typeof value === 'string' ? value : value.target.value;
            setState(eValue);
        },
        [setState]
    );
    return useMemo(() => {
        return {
            value: state,
            onChange,
        };
    }, [state, onChange]);
};
