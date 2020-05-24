<template>
  <div id="app" :style="{ display: 'flex', textAlign: 'center' }">
    <div>
      <ColorPicker
          :onStartChange="color => onChange(color, 'start')"
          :onChange="color => onChange(color, 'change')"
          :onEndChange="color => onChange(color, 'end')"
      />
    </div>
    <div>
      <ColorPicker
          :is-gradient="true"
          :onStartChange="color => onChange(color, 'start')"
          :onChange="color => onChange(color, 'change')"
          :onEndChange="color => onChange(color, 'end')"
      />
    </div>
  </div>
</template>

<script>
import { ColorPicker } from './lib'

export default {
  name: 'App',
  components: {
    ColorPicker
  },

  methods: {
    onChange(attrs, name) {
      console.log(name);
    }
  }
}
</script>

<style src="@/lib/index.scss" lang="scss" />
