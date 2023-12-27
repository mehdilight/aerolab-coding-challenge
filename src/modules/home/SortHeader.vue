<script setup>
import { SORT_BY } from '../../composables/sortByTypes';
import useProducts from '../../composables/useProducts';

const { sortBy, updateSort, next, previous, currentPage, numberOfPages } = useProducts();
</script>

<template>
    <header class="sort-header">
        <div class="left-section">
            <span class="sort-header-info">
                16 of 32 products
            </span>
            <span class="sort-by">
                Sort By:
            </span>
            <div class="sorters-wrapper">
                <button @click="updateSort(SORT_BY.MOST_RECENT)" class="sort-by-buttton" :class="{ 'sort-by-buttton--active': sortBy === SORT_BY.MOST_RECENT }">
                    Most recent
                </button>
                <button @click="updateSort(SORT_BY.LOWEST_PRICE)" class="sort-by-buttton" :class="{ 'sort-by-buttton--active': sortBy === SORT_BY.LOWEST_PRICE }">
                    Lowest price
                </button>
                <button @click="updateSort(SORT_BY.HIGHEST_PRICE)" class="sort-by-buttton" :class="{ 'sort-by-buttton--active': sortBy === SORT_BY.HIGHEST_PRICE }">
                    Highest price
                </button>
            </div>
        </div>
        <div class="right-section">
            <div class="paginations">
                <button title="previous" class="pagination-item" @click="previous" v-if="currentPage !== 1">
                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <circle stroke="#D9D9D9" cx="24" cy="24" r="23.5" />
                            <path fill="#D9D9D9" d="m27.705 28.295-4.58-4.59 4.58-4.59-1.41-1.41-6 6 6 6z" />
                        </g>
                    </svg>
                </button>
                <button title="next" class="pagination-item" @click="next" v-if="currentPage !== numberOfPages">
                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <circle stroke="#D9D9D9" cx="24" cy="24" r="23.5" />
                            <path fill="#D9D9D9" d="m20.295 28.295 4.58-4.59-4.58-4.59 1.41-1.41 6 6-6 6z" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

