import React from 'react';
import { Container } from 'src/models/containers.model';

import styles from './ContainerItem.css';

type ContainerItemType = {
    container: Container;
};

const ContainerItem = ({ container }: ContainerItemType) => {
    const ContainerSelect = () => {
        return <img src={container.list} alt="My SVG" />;
    };

    return (
        <div
            id={container.value}
            className={styles['container-container']}
            style={{
                justifyContent:
                    container.align == 'left'
                        ? 'flex-start'
                        : container.align == 'right'
                        ? 'flex-end'
                        : container.align == 'center'
                        ? 'center'
                        : '',
                paddingLeft:
                    container.value == 'selection-handles' ? '20px' : '',
            }}
        >
            {ContainerSelect()}
        </div>
    );
};

export default ContainerItem;
