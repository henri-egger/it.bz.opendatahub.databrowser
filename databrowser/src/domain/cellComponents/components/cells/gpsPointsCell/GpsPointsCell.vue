<template>
  <div v-if="isAnyPropertySet" class="flex overflow-auto w-full">
    <div class="flex gap-5">
      <div class="w-36">
        <SubCategoryItem v-if="type != null" title="GPS Type">
          <StringCell :text="type" class="break-all" />
        </SubCategoryItem>
        <SubCategoryItem v-if="latitude != null" title="Latitude">
          <StringCell :text="latitude" />
        </SubCategoryItem>
        <SubCategoryItem v-if="longitude != null" title="Longitude">
          <StringCell :text="longitude" />
        </SubCategoryItem>
        <SubCategoryItem v-if="altitude != null" title="Altitude">
          <StringCell :text="altitude" />
        </SubCategoryItem>
        <SubCategoryItem v-if="altitudeUnit != null" title="Altitude Unit">
          <StringCell :text="altitudeUnit" />
        </SubCategoryItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import StringCell from '../stringCell/StringCell.vue';
import SubCategoryItem from '../../../../datasets/category/SubCategoryItem.vue';

const props = defineProps<{
  type?: string;
  latitude?: string;
  longitude?: string;
  altitude?: string;
  altitudeUnit?: string;
}>();

const isAnyPropertySet = computed(
  () =>
    props.type != null ||
    props.latitude != null ||
    props.longitude != null ||
    props.altitude != null ||
    props.altitudeUnit != null
);
</script>
