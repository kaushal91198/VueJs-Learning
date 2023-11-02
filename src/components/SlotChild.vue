<template>
    <div>
      <p>{{ header }}</p>
      <h1>Child Component Content</h1>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SlotsChild',
    props: {
      header: String
    },
  }
  </script>
  