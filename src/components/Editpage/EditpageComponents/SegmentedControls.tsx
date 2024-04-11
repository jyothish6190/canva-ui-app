import React from 'react';
import { Rows, SegmentedControl, Text } from '@canva/app-ui-kit';

export default function SegmentedControls() {
    const SampleValue = [
        {
            label: 'Primary',
            value: 'Primary',
        },
        {
            label: 'Secondary',
            value: 'Secondary',
        },
        {
            label: 'Tertiary',
            value: 'Tertiary',
        },
    ];
    return (
        <Rows spacing="1u">
            <Text>Variant</Text>
            <SegmentedControl options={SampleValue} defaultValue="Primary" />
        </Rows>
    );
}
