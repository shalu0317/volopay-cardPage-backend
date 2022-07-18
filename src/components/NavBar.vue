<template>
<div>
  <ul>
    <li><router-link :class="$route.path === '/myCard' ? 'highlight': '' " :to="`/myCard`">Your</router-link></li>
    <li><router-link :class="$route.path === '/' ? 'highlight': '' " :to="`/`">All</router-link></li>
    <li><router-link :class="$route.path === '/blocked' ? 'highlight': '' " :to="`/blocked`">Blocked</router-link></li>
  </ul>
</div>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return {
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0px;
  margin-top: 40px;
  padding: 0;
  overflow: hidden;
  border: solid 1px #ded9d9;
  border-width: 0px 0px 1px 0px;
}

li {
  float: left;
}

li a {
  display: block;
  color: grey;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
}
li a:hover {
  border: solid red;
  border-width: 0px 0px 3px 0px;
}

.highlight {
    background: red;
    color: white;
    border: solid red;
    border-width: 0px 0px 3px 0px;
}
</style>