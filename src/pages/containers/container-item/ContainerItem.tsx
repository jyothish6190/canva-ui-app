import React from 'react';
import { Container } from 'src/models/containers.model';

import styles from './ContainerItem.css';

type ContainerItemType = {
    container: Container;
};

const ContainerItem = ({ container }: ContainerItemType) => {
    const ContainerSelect = () => {
        let SVG = container.list;
        return <SVG />;
    };

    const getClasses = () => {
        let classList = [styles['container']];
        if (container.align == 'right')
            classList = [...classList, styles['right-aligned-item']];
        if (container.width == 'half')
            classList = [...classList, styles['half-container']];
        return classList.join(' ');
    };

    return (
        <div
            id={container.value}
            className={getClasses()}
            style={{
                justifyContent:
                    container.align == 'left'
                        ? 'flex-start'
                        : container.align == 'right'
                        ? 'flex-end'
                        : container.align == 'center'
                        ? 'center'
                        : '',
                marginLeft:
                    container.value == 'selection-handles' ? '-7px' : '',
            }}
        >
            {ContainerSelect()}
        </div>
    );
};

export default ContainerItem;
