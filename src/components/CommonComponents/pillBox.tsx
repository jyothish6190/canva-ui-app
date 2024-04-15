import React from 'react';
import { Box, Carousel, Pill } from '@canva/app-ui-kit';

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
                {Options.map((item, index) => {
                    return <Pill key={index} text={item} role="switch" />;
                })}
            </Carousel>
        </Box>
    );
}
