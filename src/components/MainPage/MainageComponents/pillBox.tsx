import { Box, Carousel, Pill } from '@canva/app-ui-kit';
import React from 'react';

export default function PillBox() {
    const Options = [
        'Action',
        'Card',
        'Color',
        'Form',
        'Icon',
        'Informational',
        'Layout',
        'Link',
    ];
    return (
        <Box flexDirection="column" justifyContent="spaceBetween">
            <Carousel>
                {Options.map((item) => {
                    return <Pill text={item} role="switch" />;
                })}
            </Carousel>
        </Box>
    );
}
