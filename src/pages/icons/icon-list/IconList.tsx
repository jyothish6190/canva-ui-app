import React, { useMemo } from 'react';
import { Grid } from '@canva/app-ui-kit';

import IconCard from '../icon-card/IconCard';
import { Icon } from 'src/models/icons.model';

import styles from './IconList.css';

type IconListType = {
    icons: Icon[];
    searchQuery: string;
    onClick: (icon: Icon) => void;
};
const IconList = ({ icons, searchQuery, onClick }: IconListType) => {
    const errorMessage = useMemo(() => {
        return `Sorry, we couldn’t find any icons for “${searchQuery}”.
                Try searching something related.`;
    }, [searchQuery]);

    if (!icons || icons.length === 0) {
        return <p className={styles['error-message']}>{errorMessage}</p>;
    }

    return (
        <Grid
            alignX="stretch"
            alignY="stretch"
            columns={3}
            spacingY="2u"
            spacingX="1u"
        >
            {icons.map((icon) => {
                return (
                    <div
                        key={icon.id}
                        onClick={(e) => {
                            e.preventDefault();
                            onClick(icon);
                        }}
                    >
                        <IconCard icon={icon} />
                    </div>
                );
            })}
        </Grid>
    );
};

export default IconList;
