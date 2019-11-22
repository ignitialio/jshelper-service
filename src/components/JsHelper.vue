<template>
  <div :id="id" class="jshelper-layout">
    {{ $t('Insert here your own UI components') }}
  </div>
</template>

<script>
export default {
  props: [ ],
  data: () => {
    return {
      id: 'jshelper_' + Math.random().toString(36).slice(2)
    }
  },
  computed: {

  },
  methods: {
  },
  mounted() {
    // dev
    // refresh service UI on hot reload
    this.$services.once('service:up', service => {
      if (service.name === 'jshelper') {
        localStorage.setItem('HR_PATH', '/service-jshelper')
        window.location.reload()
      }
    })
  },
  beforeDestroy() {

  }
}
</script>

<style>
  .jshelper-layout {
    width: 100%;
    height: calc(100% - 0px);
  }
</style>
