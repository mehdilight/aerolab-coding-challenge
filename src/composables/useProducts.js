import { onMounted, ref } from "vue";
import ky from 'ky';

export default function useProducts() {
  const isProductsLoading = ref(false);
  const products = ref([]);

  const getAuthHeaders = () => {
    return {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg5YTU4NDM4YTk5OTAwMTlmNjM2MjgiLCJpYXQiOjE3MDM1MTk2MjB9.S-oKu3Y_Y_mV0DY5cj9K0YkOGos6-J8J3QHA0sYJjB4'
    }
  }

  const loadProducts = async () => {
    const response = ky.get('https://coding-challenge-api.aerolab.co/products', {
      headers: {
        ...getAuthHeaders()
      }
    });

    return await response.json();
  }

  onMounted(async () => {
    isProductsLoading.value = true;
    try {
      products.value = await loadProducts();
    } catch (error) {
      // handle errors
    } finally {
      isProductsLoading.value = false;
    }
  })

  return {
    isProductsLoading,
    products
  }
}
