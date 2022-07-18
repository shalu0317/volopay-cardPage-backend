<template>
<div id="infinite-list" style="position: relative">
    <Search @onFilter="spentFilter" />
    <Card style="position: absolute; top: 34px; width: 100%" :CardData="filteredList" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import Search from "./Search.vue";

export default {
  name: "BlockedCard",
  components: {
    Card,
    Search
  },
  data() {
    return {
      base_url: "http://localhost:5000",
      cardList: [],
      filteredList: [],
    };
  },
  mounted() {
// for Infinite scroll
  window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      this.filteredList = this.filteredList.concat(this.cardList.slice(this.filteredList.length, this.filteredList.length + 10));
    }
}, {
    passive: true
});
  },
  methods: {
    //Search And Fiter functions
     spentFilter(filter) {
      this.filteredList = this.cardList.filter((ele) => {
      return ((filter.searchText != '' ? ele.name
            .trim()
            .toLowerCase()
            .includes(filter.searchText.toLowerCase().trim()) : true) &&
          (filter.cardholder != null ? ele.owner_id === filter.cardholder : true) && 
         (filter.burner ? (filter.subscription ? ele.card_type === "burner" || ele.card_type === "subscription" : ele.card_type === "burner")  : filter.subscription ? ele.card_type === "subscription" : true));
      })
    }
  },
  async created() {
    // fetching the carddetails from backend
    const res = await fetch(`${this.base_url}/data`);
      let data = await res.json();
      data = data.filter(ele => {
        return (ele.status.toLowerCase() != "active");
      })
      this.filteredList = data.slice(0, 10);
    this.cardList = data;
  },
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
  color: black;
}
</style>