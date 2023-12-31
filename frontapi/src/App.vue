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




:root {
  --var-color1: #064ACB;
  --var-color2: #366ED8;
  --var-color3: #F3A953;
  --var-color4: #F2F3F3;
}

html {
  height: 100%;
  width : 100vw;
  display: flex;
  align-items: center;
  justify-content: center; 
}


</style>
