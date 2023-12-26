import ky from 'ky';
import useUser from './useUser';
import { getAuthHeaders } from '../utils/utils';

export default function usePoints() {
    const {refetchUser} = useUser();

    const addBalance = async (balanceToAdd) => {
        await ky.post('https://coding-challenge-api.aerolab.co/user/points', {
            headers: {
                ...getAuthHeaders()
            },
            json: {
                amount: Number(balanceToAdd)
            }
        });

        await refetchUser();
    }
    return {
        addBalance
    }
}