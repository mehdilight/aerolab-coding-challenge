<script setup>
import useFlashMessage, {FLASH_TYPE_ERROR, FLASH_TYPE_SUCCESS} from '../composables/useFlashMessage';

const { message, closeToast, type } = useFlashMessage();
</script>
<template>
    <section v-if="message" class="flash__message" :class="{'flash__message--success': type === FLASH_TYPE_SUCCESS, 'flash__message--error': type === FLASH_TYPE_ERROR}">
        <p>{{ message }}</p>

        <button @click="closeToast">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.75 5.25L5.25 18.75" stroke="#8FA3BF" stroke-width="2" stroke-linecap="square"
                    stroke-linejoin="round" />
                <path d="M18.75 18.75L5.25 5.25" stroke="#8FA3BF" stroke-width="2" stroke-linecap="square"
                    stroke-linejoin="round" />
            </svg>
        </button>
    </section>
</template>
