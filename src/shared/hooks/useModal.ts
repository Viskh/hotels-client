import { useCallback, useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen((previous) => !previous);
    };

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    return { isOpen, openModal, closeModal, toggleModal };
};
