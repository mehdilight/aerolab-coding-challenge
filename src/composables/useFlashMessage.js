import { ref } from "vue"

export const FLASH_TYPE_SUCCESS = 'success';
export const FLASH_TYPE_ERROR = 'error';

const message = ref(null);
const type = ref(FLASH_TYPE_SUCCESS)

export default function useFlashMessage() {
    const successMessage = (successMessage) => {
        message.value = successMessage;
        type.value = FLASH_TYPE_SUCCESS;
    }

    const errorMessage = (errorMessage) => {
        message.value = errorMessage;
        type.value = FLASH_TYPE_ERROR;
    }
    const closeToast = () => {
        message.value = null;
    }

    return {
        message,
        type,
        successMessage,
        errorMessage,
        closeToast
    }
}