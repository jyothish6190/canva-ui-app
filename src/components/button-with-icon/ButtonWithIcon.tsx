import React from 'react';

import { Button } from '@canva/app-ui-kit';

type PropType = {
    title: string;
    icon: () => JSX.Element;
    onClick: () => void;
};

const ButtonWithIcon = ({ title, icon, onClick }: PropType) => {
    return (
        <Button
            alignment="center"
            icon={icon}
            onClick={onClick}
            variant="secondary"
        >
            {title}
        </Button>
    );
};

export default ButtonWithIcon;
