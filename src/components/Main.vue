<template>
<div class='container'>
  <Profile/>
  <Skills/>
  <Works/>
  <Certifications/>
</div>
</template>

<script>
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Certifications from '@/components/Certifications'
export default {
  name: 'Main',
  components: {
    Profile,
    Skills,
    Works,
    Certifications
  }
}
</script>

<style>
.container {
  padding: 24px 10%;
}
</style>
