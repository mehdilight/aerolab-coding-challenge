import { ref } from "vue"
import ky from 'ky';
import useUser from './useUser';
import { getAuthHeaders } from '../utils/utils';

export default function useRedeem() {
    const isProccessing = ref(false);
    const { refetchUser } = useUser();


    const redeem = async (productId) => {
        isProccessing.value = true;
        try {
            await ky.post('https://coding-challenge-api.aerolab.co/redeem', {
                headers: {
                    ...getAuthHeaders()
                },
                json: {
                    productId
                }
            });

            await refetchUser();
        } catch (error) {
            // handle error
        } finally {
            isProccessing.value = false;
        }
    }

    return {
        isProccessing,
        redeem
    }
}