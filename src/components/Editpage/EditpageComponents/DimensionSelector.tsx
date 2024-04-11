import React from 'react';
import { Box, Pill, Rows, Text, TextInput } from '@canva/app-ui-kit';

export default function DimensionSelector() {
    const PillSize = ['Small', 'Medium', 'Large', 'Custom'];
    return (
        <Rows spacing="1.5u">
            <Text>Width</Text>
            <TextInput type="tel" />
            <Box display="flex" width="full" justifyContent="spaceBetween">
                {PillSize.map((item) => {
                    return <Pill text={item} role="switch" />;
                })}
            </Box>
        </Rows>
    );
}
