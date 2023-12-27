import { ref } from "vue"
import ky from 'ky';
import useUser from './useUser';
import { getAuthHeaders } from '../utils/utils';
import useFlashMessage from "./useFlashMessage";

export default function useRedeem() {
    const isProccessing = ref(false);
    const { refetchUser } = useUser();
    const {errorMessage, successMessage} = useFlashMessage();

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
            successMessage('The product redeemed successfully');
        } catch (error) {
            errorMessage('There was a problem with the transaction');
        } finally {
            isProccessing.value = false;
        }
    }

    return {
        isProccessing,
        redeem
    }
}