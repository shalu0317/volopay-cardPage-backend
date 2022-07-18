<template>
  <div class="cardDisplay">
    <div class="cardBox" v-for="(card, index) in CardData" :key="index">
        <CardItem :cardDetails="card"/>
    </div>
  </div>
</template>

<script>
import CardItem from './CardItem.vue'

export default {
    name: 'CardView',
    components : {
        CardItem
    },
    props: {
        CardData: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            cardDetails : []
        }
    },
    // mounted() {
    //     Object.values(demo.data).map((ele) => {
    //         this.cardDetails.push(ele);
    //     })
    // },
    methods:{

    }
}
</script>

<style scoped>
.cardDisplay {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;
}

.cardBox {
      width: 80%;
    border-radius: 7px;
    box-shadow: 1px 4px 11px #d4caca;
    padding: 12px;
    max-width: 500px;
    margin: 15px;
}
</style>