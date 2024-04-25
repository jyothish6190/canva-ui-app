import React, { useCallback, useRef } from 'react';

import { addNativeElement } from '@canva/design';
import { upload } from '@canva/asset';
import { Button, Rows } from '@canva/app-ui-kit';
import { toPng } from 'html-to-image';

import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';

import { useComponentStore } from 'src/store/ComponentStore';

const ComponentDetailsPage = () => {
    const { selectedComponent } = useComponentStore();

    const ref = useRef<HTMLDivElement>(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true })
            .then(async (dataUrl) => {
                console.log('🚀 ~ .then ~ dataUrl:', dataUrl);

                const result = await upload({
                    type: 'IMAGE',
                    mimeType: 'image/png',
                    url: dataUrl,
                    thumbnailUrl: dataUrl,
                });

                await addNativeElement({
                    type: 'IMAGE',
                    ref: result.ref,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref]);

    return (
        <>
            {selectedComponent && (
                <Rows spacing="2u">
                    <LivePreview>
                        <div ref={ref}>
                            <ComponentItem
                                component={selectedComponent}
                                isProperty={true}
                            />
                        </div>
                    </LivePreview>
                    <PropertyList component={selectedComponent} />
                    <Button
                        stretch={true}
                        variant="primary"
                        children="Update Component"
                        onClick={onButtonClick}
                    />
                </Rows>
            )}
        </>
    );
};

export default ComponentDetailsPage;
