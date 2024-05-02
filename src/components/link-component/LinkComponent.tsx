import React, { useEffect, useState } from 'react';
import { Link, Text } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { LinkFieldConfig } from 'src/constants/component-configs/LinkConfig';

type LinkProps = {
    component: Component;
    isProperty: boolean;
};
type LinkElemetData = {
    linkText: string;
    linkSize: 'large' | 'medium' | 'small';
    linkVariant: 'regular' | 'bold';
};
const initialState: LinkElemetData = {
    linkText: ' Go to Canva',
    linkSize: 'medium',
    linkVariant: 'regular',
};

const LinkComponent = ({ component, isProperty }: LinkProps) => {
    const [linkState, setLinkState] = useState<LinkElemetData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === LinkFieldConfig.TEXT) {
                setLinkState((prevState) => {
                    return {
                        ...prevState,
                        linkText: field.value || ' Go to Canva',
                    };
                });
            }
            if (field.name === LinkFieldConfig.SIZE) {
                setLinkState((prevState) => {
                    return {
                        ...prevState,
                        linkSize: field.value || prevState.linkSize,
                    };
                });
            }
            if (field.name === LinkFieldConfig.VARIANT) {
                setLinkState((prevState) => {
                    return {
                        ...prevState,
                        linkVariant: field.value || prevState.linkVariant,
                    };
                });
            }
        });
    }, [component]);
    if (isProperty) {
        return (
            <Text size={linkState.linkSize} variant={linkState.linkVariant}>
                <Link
                    href="https://www.canva.com"
                    id="id"
                    requestOpenExternalUrl={() => {}}
                    title="Canva"
                >
                    {linkState.linkText}
                </Link>
            </Text>
        );
    } else {
        return (
            <Text size="large">
                <Link
                    href="https://www.canva.com"
                    id="id"
                    requestOpenExternalUrl={() => {}}
                    title="Canva"
                >
                    Go to Canva
                </Link>
            </Text>
        );
    }
};

export default LinkComponent;
