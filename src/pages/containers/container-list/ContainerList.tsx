import React, { useEffect, useMemo } from 'react';
import { Grid } from '@canva/app-ui-kit';

import ContainerCard from '../container-card/ContainerCard';
import styles from './ContainerList.css';
import { Container } from 'src/models/containers.model';

import ErrrorMessage from 'src/components/error-message/ErrrorMessage';

type ContainerListType = {
    containers: Container[];
    searchQuery: string;
    onClick: (container: Container) => void;
};
const ContainerList = ({
    containers,
    searchQuery,
    onClick,
}: ContainerListType) => {
    const errorMessage = useMemo(() => {
        return `Sorry, we couldn’t find any containers for “${searchQuery}”.
                Try searching something related.`;
    }, [searchQuery]);

    if (!containers || containers.length === 0) {
        return <ErrrorMessage errorMessage={errorMessage} />;
    }

    return (
        <div className={styles.mainContainer}>
            {containers.map((container) => {
                return (
                    <div
                        key={container.value}
                        onClick={(e) => {
                            e.preventDefault();
                            onClick(container);
                        }}
                        className={styles.container}
                        style={{
                            width:
                                container.width == 'full'
                                    ? '100%'
                                    : 'calc(50% - 4px)',
                        }}
                    >
                        <ContainerCard container={container} />
                    </div>
                );
            })}
        </div>
    );
};

export default ContainerList;
