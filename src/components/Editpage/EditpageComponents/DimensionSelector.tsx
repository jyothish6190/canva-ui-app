import React from 'react';
import { Box, Pill, Rows, Text, TextInput } from '@canva/app-ui-kit';

export default function DimensionSelector() {
    const PillSize = ['Small', 'Medium', 'Large', 'Custom'];
    return (
        <Rows spacing="1.5u">
            <Text>Width</Text>
            <TextInput type="tel" />
            <Box display="flex" width="unset" justifyContent="spaceBetween">
                {PillSize.map((item, index) => {
                    return <Pill key={index} text={item} role="switch" />;
                })}
            </Box>
        </Rows>
    );
}
