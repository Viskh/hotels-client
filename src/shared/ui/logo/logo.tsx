import { type FC, type HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type LogoProps = HTMLAttributes<HTMLDivElement>;

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
    return (
        <div className={clsx(styles.logo, className)} {...props}>
            Travel
        </div>
    );
};
