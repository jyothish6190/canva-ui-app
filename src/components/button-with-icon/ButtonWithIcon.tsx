import React from 'react';

import { Button } from '@canva/app-ui-kit';

type PropType = {
    title: string;
    icon: () => JSX.Element;
    onClick: () => void;
    disabled: boolean;
};

const ButtonWithIcon = ({ title, icon, onClick, disabled }: PropType) => {
    return (
        <Button
            alignment="center"
            icon={icon}
            onClick={onClick}
            variant="secondary"
            disabled={disabled}
        >
            {title}
        </Button>
    );
};

export default ButtonWithIcon;
