import { ref } from "vue";
import ky from 'ky';
import { getAuthHeaders } from "../utils/utils";
import useFlashMessage from "./useFlashMessage";

const isLoadingUser = ref(false);
const authenticatedUser = ref({});

export default function useUser() {
  const { errorMessage } = useFlashMessage();

  const loadUser = async () => {
    const response = ky.get('https://coding-challenge-api.aerolab.co/user/me', {
      headers: {
        ...getAuthHeaders()
      }
    });

    return await response.json();
  }

  const fetch = async () => {
    isLoadingUser.value = true;
    try {
      authenticatedUser.value = await loadUser();
    } catch (error) {
      errorMessage('an error occurred while loading user informations')
    } finally {
      isLoadingUser.value = false;
    }
  }

  const refetchUser = async () => {
    await fetch();
  }

  return {
    authenticatedUser,
    isLoadingUser,
    fetch,
    refetchUser
  }
}
