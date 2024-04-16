import React from 'react';
import { Grid } from '@canva/app-ui-kit';

import IconCard from '../icon-card/IconCard';
import { Icon } from 'src/models/icons.model';

type IconListType = {
    icons: Icon[];
};
const IconList = ({ icons }: IconListType) => {
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
