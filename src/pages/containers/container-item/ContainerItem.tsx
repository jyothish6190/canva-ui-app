import React from 'react';
import { Container } from 'src/models/containers.model';

import styles from './ContainerItem.css';
import ImageWithAuth from 'src/components/image-with-auth/ImageWithAuth';

type ContainerItemType = {
    container: Container;
};

const ContainerItem = ({ container }: ContainerItemType) => {
    const ContainerSelect = () => {
        return <ImageWithAuth imageUrl={container.list} />;
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
            }}
        >
            {ContainerSelect()}
        </div>
    );
};

export default ContainerItem;
