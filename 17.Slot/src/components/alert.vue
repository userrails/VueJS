<template>
  <div>
    <div style="display:block; color: red;">
      <slot name="alert-danger"></slot>
    </div>

    <div style="display:block; color: green;">
      <slot name="alert-success"></slot>
    </div>
  </div>
</template>