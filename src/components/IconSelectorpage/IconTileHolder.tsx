import React from 'react';
import styles from 'styles/components.css';
import IconTile from './IconTile';

export default function IconTileHolder({ IconData }) {
    return (
        <div className={styles.IconListHolder}>
            {IconData?.map((item) => {
                const { id, icon, text } = item;
                return <IconTile key={id} IconImg={icon} IconText={text} />;
            })}
        </div>
    );
}
