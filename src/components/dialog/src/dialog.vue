<script lang="ts">
export default {
  name: 'QDialog'
}
</script>
<script setup lang="ts">
import { Icon } from '@vicons/utils'
import {onMounted, ref} from "vue";
import { Close } from '@vicons/ionicons5'

const dialog = ref<HTMLDialogElement | undefined>(undefined)
onMounted(() => {
  dialog.value && dialog.value.showModal()
})

const closeDialog = ()=>{
  dialog.value && dialog.value.close()
}
</script>

<template>

  <template  class="q-dialog-mask" @click="closeDialog" />

  <dialog ref="dialog" class="q-dialog-model">
    <div class="q-dialog-model-header">
      <slot name="header">
      </slot>
      <Icon size="24">
        <Close />
      </Icon>
    </div>
    <div class="q-dialog-model-body">
      <slot name="default">
      </slot>
    </div>
    <div class="q-dialog-model-footer">
      <slot name="footer">
      </slot>
    </div>
    <div class="q-dialog-model-action">
    <slot name="action">
    </slot>
    </div>
  </dialog>

</template>

<style scoped>
.q-dialog-mask {
  width: 100%;
  height: 100%;
  background: rgb(0,0,0,.4);
  position:fixed;
  left: 0;
  top: 0;
  z-index: 9;
  display: block
}
.q-dialog-model {
  z-index: 99;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: transparent;
  position: fixed;
  width: 50%;
  height: 50%;
}
.q-dialog-model-header {
  display: flex;
  flex-direction: row;
  height: 10%;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 800;
  border-bottom: solid 0.5pt rgb(0,0,0,.1);
}
.q-dialog-model-body {
  height: 70%;
  padding: 8px;
}
.q-dialog-model-footer {
  height: 10%;
}
.q-dialog-model-action {
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 14px;
}
</style>