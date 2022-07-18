<template>
  <div class="headerBox">
    <div class="title">Virtual Cards</div>
    <button class="btn">
      <i class="btnIcon fa-solid fa-plus"></i> <span>Virtual Card</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.headerBox {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.title {
  font-size: 25px;
  font-weight: bold;
}

.btn {
  background: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2.2px 5px #cbc5c5;
  padding: 0px 12px;
}

.btnIcon {
  margin-right: 7px;
}
</style>
