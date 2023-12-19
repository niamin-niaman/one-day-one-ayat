// hooks/useImage.ts
import { useEffect, useState } from 'react';

interface ImageData {
    id: string;
    urls: {
        regular: string;
    };
    user: {
        links: {
            html: string;
        }
        name: string;
    }
}

interface UseImageHook {
    image: ImageData | null;
    loading: boolean;
    fetchImage: () => void;
}

const useImage = (): UseImageHook => {
    const [image, setImage] = useState<ImageData | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchImage = async () => {
        setLoading(true);

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID 78SG7Z7jvEsnBaPWFnUcqAFccD-JjtFlWb8SNtyyayk");

        try {
            const response = await fetch("https://api.unsplash.com/photos/random?content_filter=high&collections=9628327", {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            });

            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }

            const result: ImageData = await response.json();

            setImage(result);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching image:', error);
            setLoading(false);
        }
    };

    return { image, loading, fetchImage };
};

export default useImage;
