<script setup>
import { computed } from 'vue';
import useUser from '../../composables/useUser';
import useRedeem from '../../composables/useRedeem';
const props = defineProps({
  product: {
    type: Object,
    requried: true
  }
});

const {authenticatedUser, isLoadingUser} = useUser();
const {redeem, isProccessing} = useRedeem();

const isAbleToRedeemTheProduct = computed(() => {
  if (isLoadingUser.value) return false;
  
  return authenticatedUser.value.points >= props.product.cost;
})

const pointsNeeded = computed(() => {
  return props.product.cost - authenticatedUser.value.points;
})

</script>
<template>
  <section class="product-card">
    <div class="product-card__info" v-if="!isAbleToRedeemTheProduct">
      <span>
        You need {{ pointsNeeded }}
      </span>
      <span>
        <svg width="20px" height="20px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter x="-9.1%" y="-9.1%" width="128.3%" height="128.3%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="68.6284858%" id="radialGradient-2"><stop stop-color="#FFCF00" offset="0%"></stop><stop stop-color="#F7AE15" offset="100%"></stop></radialGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Catalog-pg1" transform="translate(-609.000000, -731.000000)"><g id="products" transform="translate(132.000000, 622.000000)"><g id="line-1"><g id="product-card-hover" filter="url(#filter-1)" transform="translate(300.000000, 0.000000)"><g id="money" transform="translate(71.000000, 100.000000)"><g transform="translate(108.000000, 11.000000)"><g><circle id="Oval-Copy-3" fill="url(#radialGradient-2)" cx="13" cy="13" r="13"></circle><path d="M13,3.0952381 C7.54580357,3.0952381 3.0952381,7.54657738 3.0952381,13 C3.0952381,18.4541964 7.54657738,22.9047619 13,22.9047619 C18.4541964,22.9047619 22.9047619,18.4534226 22.9047619,13 C22.9047619,7.54580357 18.4534226,3.0952381 13,3.0952381 Z M13,21.7440476 C8.17850893,21.7440476 4.25595238,17.8214911 4.25595238,13 C4.25595238,8.17850893 8.17850893,4.25595238 13,4.25595238 C17.8214911,4.25595238 21.7440476,8.17850893 21.7440476,13 C21.7440476,17.8214911 17.8214911,21.7440476 13,21.7440476 Z" id="Shape" fill="#F8B013" fill-rule="nonzero"></path><path d="M13,5.2962963 C8.76834769,5.2962963 5.2962963,8.76956614 5.2962963,13 C5.2962963,17.2316523 8.76956614,20.7037037 13,20.7037037 C17.2316523,20.7037037 20.7037037,17.2304339 20.7037037,13 C20.7037037,8.76834769 17.2304339,5.2962963 13,5.2962963 Z M13,19.5245654 C9.40233107,19.5245654 6.47543462,16.5976689 6.47543462,13 C6.47543462,9.40233107 9.40233107,6.47543462 13,6.47543462 C16.5976689,6.47543462 19.5245654,9.40233107 19.5245654,13 C19.5245654,16.5976689 16.5976689,19.5245654 13,19.5245654 Z" id="Shape" fill="#F8B013" fill-rule="nonzero"></path></g></g></g></g></g></g></g></g></svg>
      </span>
    </div>
    <img :src="product.img.hdUrl" alt="">
    <span class="product-card__category">
      {{ product.category }}
    </span>
    <h3 class="product-card__heading">
      {{ product.name }}
    </h3>
    <div v-if="isAbleToRedeemTheProduct" class="redeem__section" :class="{'redeem__section--proccessing': isProccessing}">
      <div class="redeem-price">
        <span>
          {{ product.cost }}
        </span>
        <span>
          <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter x="-9.1%" y="-9.1%" width="128.3%" height="128.3%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="68.6284858%" id="radialGradient-2"><stop stop-color="#FFCF00" offset="0%"></stop><stop stop-color="#F7AE15" offset="100%"></stop></radialGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Catalog-pg1" transform="translate(-609.000000, -731.000000)"><g id="products" transform="translate(132.000000, 622.000000)"><g id="line-1"><g id="product-card-hover" filter="url(#filter-1)" transform="translate(300.000000, 0.000000)"><g id="money" transform="translate(71.000000, 100.000000)"><g transform="translate(108.000000, 11.000000)"><g><circle id="Oval-Copy-3" fill="url(#radialGradient-2)" cx="13" cy="13" r="13"></circle><path d="M13,3.0952381 C7.54580357,3.0952381 3.0952381,7.54657738 3.0952381,13 C3.0952381,18.4541964 7.54657738,22.9047619 13,22.9047619 C18.4541964,22.9047619 22.9047619,18.4534226 22.9047619,13 C22.9047619,7.54580357 18.4534226,3.0952381 13,3.0952381 Z M13,21.7440476 C8.17850893,21.7440476 4.25595238,17.8214911 4.25595238,13 C4.25595238,8.17850893 8.17850893,4.25595238 13,4.25595238 C17.8214911,4.25595238 21.7440476,8.17850893 21.7440476,13 C21.7440476,17.8214911 17.8214911,21.7440476 13,21.7440476 Z" id="Shape" fill="#F8B013" fill-rule="nonzero"></path><path d="M13,5.2962963 C8.76834769,5.2962963 5.2962963,8.76956614 5.2962963,13 C5.2962963,17.2316523 8.76956614,20.7037037 13,20.7037037 C17.2316523,20.7037037 20.7037037,17.2304339 20.7037037,13 C20.7037037,8.76834769 17.2304339,5.2962963 13,5.2962963 Z M13,19.5245654 C9.40233107,19.5245654 6.47543462,16.5976689 6.47543462,13 C6.47543462,9.40233107 9.40233107,6.47543462 13,6.47543462 C16.5976689,6.47543462 19.5245654,9.40233107 19.5245654,13 C19.5245654,16.5976689 16.5976689,19.5245654 13,19.5245654 Z" id="Shape" fill="#F8B013" fill-rule="nonzero"></path></g></g></g></g></g></g></g></g></svg>
        </span>
      </div>
      <button class="redeem-button" @click="redeem(product._id)" :disabled="isProccessing">
        <span v-if="!isProccessing">
          Redeem Now
        </span>
        <span v-else>
          Processing...
        </span>
      </button>
    </div>
  </section>
</template>