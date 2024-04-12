import React from 'react';
import { Box, Button, TextInput, TrashIcon } from '@canva/app-ui-kit';

export default function FileInputViewer() {
    return (
        <Box
            display="flex"
            justifyContent="spaceBetween"
            flexWrap="noWrap"
            alignItems="center"
        >
            <TextInput value="Exaplevalue" />
            <Button variant="tertiary" icon={TrashIcon} />
        </Box>
    );
}
