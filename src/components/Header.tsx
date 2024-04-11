
import React from 'react';
import styles from './Header.css';
import { ArrowLeftIcon } from '@canva/app-ui-kit';

type Props = {
    showBackButton: boolean;
    name: string;
    onClickBack(): void;
    buttons?: React.ComponentType[];
};

export const Header = React.memo(function Header({
    showBackButton,
    name,
    onClickBack,
    buttons,
}: Props) {
    return (
        <div className={styles.Header}>
            {showBackButton && (
                <button
                    className={styles.HeaderBackButton}
                    onClick={onClickBack}
                >
                    <ArrowLeftIcon />
                </button>
            )}
            <span className={styles.HeaderTitle}>{name}</span>
            {buttons?.length && (
                <div className={styles.ButtonWrapper}>
                    {buttons.map((Button, i) => (
                        <div className={styles.Button} key={i}>
                            <Button />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});
