<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  width : 100vw;
  display: flex;
  align-items: center;
  justify-content: center; 
}


</style>
