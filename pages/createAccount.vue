<template>
  <div>
    {{ test }}
    <a @click="$router.push('/main')">トップへ</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'test'
    }
  }
}
</script>
