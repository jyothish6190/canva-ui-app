import React from 'react';
import { addNativeElement } from '@canva/design';
import styles from 'styles/components.css';
import { Box, Rows, Text } from '@canva/app-ui-kit';
type IconProps = {
    IconImg: () => JSX.Element;
    IconText: String;
};

export default function IconTile(props: IconProps) {
    const HandleClick = () => {
        console.log('IconClicked');
    };
    return (
        <Rows spacing="0.5u">
            <Box display="flex" justifyContent="center">
                <div className={styles.IconHolder} onClick={HandleClick}>
                    {props.IconImg()}
                </div>
            </Box>
            <Text size="small">{props.IconText}</Text>
        </Rows>
    );
}
