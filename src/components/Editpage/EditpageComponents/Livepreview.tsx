import React, { useState } from 'react';
import { Button } from '@canva/app-ui-kit';
import styles from 'styles/components.css';

export default function LivePreview() {
    const [bgcolor, setBgColor] = useState<string>('rgba(255, 255, 255, 0.07)');
    const HandleOnclick = () => {
        bgcolor === 'white'
            ? setBgColor('rgba(255, 255, 255, 0.07')
            : setBgColor('white');
    };

    return (
        <div className={styles.LivePreviewBox} style={{ background: bgcolor }}>
            <span onClick={HandleOnclick}></span>
            <Button variant="primary" children="Button" />
        </div>
    );
}
