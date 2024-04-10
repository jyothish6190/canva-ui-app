import React from 'react';
import styles from 'styles/components.css';
import IconTile from './IconTile';
import { useSearchInputStore } from 'src/Store/SearchInputstore';

export default function IconTileHolder({ IconData }) {
    const Searchtext = useSearchInputStore((state) => state.searchValue);
    return (
        <div className={styles.IconListHolder}>
            {IconData.length > 0 ? (
                IconData.map((item) => {
                    const { id, icon, Icontext } = item;
                    return (
                        <IconTile key={id} IconImg={icon} IconText={Icontext} />
                    );
                })
            ) : (
                <p className={styles.IconSearchErrorText}>
                    Sorry, we couldn’t find any icons for <br /> “{Searchtext}”.
                    Try searching something related.
                </p>
            )}
        </div>
    );
}
