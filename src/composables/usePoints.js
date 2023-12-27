import ky from 'ky';
import useUser from './useUser';
import { getAuthHeaders } from '../utils/utils';
import useFlashMessage from './useFlashMessage';

export default function usePoints() {
    const { refetchUser } = useUser();
    const { successMessage, errorMessage } = useFlashMessage();

    const addBalance = async (balanceToAdd) => {
        try {
            await ky.post('https://coding-challenge-api.aerolab.co/user/points', {
                headers: {
                    ...getAuthHeaders()
                },
                json: {
                    amount: Number(balanceToAdd)
                }
            });

            await refetchUser();
            successMessage(`${balanceToAdd} points were added to your account`)
        } catch (error) {
            errorMessage('An error occurred while adding points')
        }
    }

    return {
        addBalance
    }
}