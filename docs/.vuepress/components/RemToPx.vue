<script setup lang="ts">
import { computed, ref } from "vue";

const input = ref(0);

const base = ref(75);

const resultNumber = computed(() => (input.value * base.value) / 2);
</script>

<template>
  <ElSpace wrap>
    <div>
      <div class="base-number-label">基础数值(px)</div>
      <ElInputNumber v-model="base" placeholder="输入数值" :controls="false" />
    </div>
    <div>
      <div class="base-number-label">待转换数值数值(rem)</div>
      <ElInputNumber v-model="input" placeholder="输入数值" :controls="false" />
    </div>

    <div>
      <div class="base-number-label">结果</div>
      <div class="base-number-label">{{ resultNumber }}px</div>
    </div>
  </ElSpace>
</template>

<style>
.base-number-label {
  line-height: var(--el-component-size);
}
</style>
