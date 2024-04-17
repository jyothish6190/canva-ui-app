import React from 'react';
import { Icon } from 'src/models/icons.model';

import styles from './IconItem.css';

type IconItemType = {
    icon: Icon;
};

const IconItem = ({ icon }: IconItemType) => {
    return <div className={styles['icon-container']}>{icon.Icon()}</div>;
};

export default IconItem;
