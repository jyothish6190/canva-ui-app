import React from 'react';
import { Link, Text } from '@canva/app-ui-kit';

const LinkComponent = () => {
    return (
        <Text size="large">
            <Link
                href="https://www.canva.com"
                id="id"
                requestOpenExternalUrl={() => {}}
                title="Canva"
            >
                Go to Canva
            </Link>
        </Text>
    );
};

export default LinkComponent;
