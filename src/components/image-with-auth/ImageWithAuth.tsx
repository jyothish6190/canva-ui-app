import React, { useEffect, useState } from 'react';
import { auth } from '@canva/user';

import { CANVAUI_BASEURL } from 'src/constants/common-constants';
import { Placeholder } from '@canva/app-ui-kit';

const ImageWithAuth = ({ imageUrl }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const token = await auth.getCanvaUserToken();
                const response = await fetch(CANVAUI_BASEURL + imageUrl, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch image');
                }

                const blob = await response.blob();
                const objectUrl = URL.createObjectURL(blob);
                setImageSrc(objectUrl);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();

        return () => {
            if (imageSrc) {
                URL.revokeObjectURL(imageSrc);
            }
        };
    }, [imageUrl]);

    return imageSrc ? (
        <div>
            <img src={imageSrc} alt="Authenticated" />
        </div>
    ) : (
        <Placeholder shape="sharpRectangle" />
    );
};

export default ImageWithAuth;
