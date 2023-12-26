import { ref } from "vue";
import ky from 'ky';

const isLoadingUser = ref(false);
const authenticatedUser = ref({});

export default function useProducts() {
  const getAuthHeaders = () => {
    return {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg5YTU4NDM4YTk5OTAwMTlmNjM2MjgiLCJpYXQiOjE3MDM1MTk2MjB9.S-oKu3Y_Y_mV0DY5cj9K0YkOGos6-J8J3QHA0sYJjB4'
    }
  }

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
      // handle errors
    } finally {
      isLoadingUser.value = false;
    }
  }

  return {
    authenticatedUser,
    isLoadingUser,
    fetch
  }
}
