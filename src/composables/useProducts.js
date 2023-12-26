import { computed, ref } from "vue";
import ky from 'ky';
import { SORT_BY } from "./sortByTypes";
import { getAuthHeaders, paginate } from "../utils/utils";

const isProductsLoading = ref(false);
const fetchedProducts = ref([]);
const currentPage = ref(1);
const sortBy = ref(SORT_BY.MOST_RECENT);
const products = computed(() => {
  if (sortBy.value === SORT_BY.MOST_RECENT) {
    return paginate(fetchedProducts.value, 13, currentPage.value);
  }

  if (sortBy.value === SORT_BY.LOWEST_PRICE) {
    return paginate(
      [...fetchedProducts.value].sort((productA, productB) => productA.cost - productB.cost),
      13,
      currentPage.value
    )
  }

  if (sortBy.value === SORT_BY.HIGHEST_PRICE) {
    return paginate(
      [...fetchedProducts.value].sort((productA, productB) => productB.cost - productA.cost),
      13,
      currentPage.value
    );
  }
})

const next = () => {
  currentPage.value = currentPage.value + 1;
}

const previous = () => {
  currentPage.value = currentPage.value - 1;
}

const numberOfPages = computed(() => {
  return Math.ceil(fetchedProducts.value.length / 13);
})

export default function useProducts() {
  const loadProducts = async () => {
    const response = ky.get('https://coding-challenge-api.aerolab.co/products', {
      headers: {
        ...getAuthHeaders()
      }
    });

    return await response.json();
  }


  const fetch = async () => {
    isProductsLoading.value = true;
    try {
      fetchedProducts.value = await loadProducts();
    } catch (error) {
      // handle errors
    } finally {
      isProductsLoading.value = false;
    }
  }

  const updateSort = (sortType) => {
    if (sortType === sortBy.value) return;
    if (!Object.values(SORT_BY).includes(sortType)) return;

    sortBy.value = sortType;
  }

  return {
    isProductsLoading,
    products,
    fetch,
    currentPage,
    sortBy,
    updateSort,
    next,
    previous,
    numberOfPages
  }
}
