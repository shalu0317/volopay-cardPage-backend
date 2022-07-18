<template>
  <div class="headerDislay">
    <div>
      <div class="cardName">{{ cardDetails.name }}</div>
      <div class="cardBudget">{{ cardDetails.budget_name }}</div>
    </div>
    <div>
      <i
        v-if="cardDetails.card_type === 'burner'"
        class="cardIcon fa-solid fa-fire-flame-curved"
      ></i>
      <i
        v-else
        style="padding: 8px 8px"
        class="cardIcon fa-solid fa-rotate"
      ></i>
    </div>
  </div>
  <div class="cardTypeSection">
    <div class="cardType">{{ cardDetails.card_type }}</div>
    <div v-if="cardDetails.card_type === 'burner'" class="cardLimit">
      Expires: {{ cardDetails.expiry }}
    </div>
    <div v-else class="cardLimit">July Lmit: {{ cardDetails.limit }} SGD</div>
  </div>
  <hr v-if="spentPercent == 0" class="greenLine" />
  <hr v-else-if="spentPercent == 100" style="color: red" class="greenLine" />
  <div v-else style="display: flex">
    <hr style="color: red; border-radius: 5px 0px 0px 5px" :style="`width: ${spentPercent}%`" class="greenLine"/>
    <hr style="border-radius: 0px 5px 5px 0px" :style="`width: ${availablePercent}%`" class="greenLine"/>
  </div>
  <div>
    <div class="spentDetailBox">
      <div>
        <div class="text">
          <i style="color: red; font-size: 9px" class="fa-solid fa-circle"></i>
          <span class="spentValue">Spent</span>
        </div>
      </div>
      <div class="spendValues">
        {{ cardDetails.spent.value }} SGD
      </div>
    </div>
    <div class="spentDetailBox">
      <div>
        <div class="text">
          <i
            style="color: green; font-size: 9px"
            class="fa-solid fa-circle"
          ></i>
          <span class="spentValue">Available To Spend</span>
        </div>
      </div>
      <div class="spendValues">
        {{ cardDetails.available_to_spend.value }} SGD
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardView",
  props: {
    cardDetails: {
      type: Object,
    },
  },
  computed: {
    spentPercent() {
      const percent = Math.floor((this.cardDetails.spent.value / ( this.cardDetails.spent.value + this.cardDetails.available_to_spend.value )) * 100);
      return percent;
    },
    availablePercent() {
      return (100- this.spentPercent);
    }
  },
};
</script>

<style scoped>
.headerDislay {
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.cardName {
  color: black;
  font-weight: bold;
  padding-bottom: 1px;
}

.cardBudget {
  font-size: 13px;
  color: gray;
}

.cardIcon {
  color: red;
  border-radius: 50%;
  padding: 7px 9px;
  background: #ffecec;
  box-shadow: 1px 1px 10px #cfa2a2;
}

.cardTypeSection {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.spentValue {
      margin-left: 5px;
    padding-top: 1px;
}

.cardLimit {
  font-size: 13px;
  font-weight: bold;
  color: #959595;
  padding-top: 2px;
}

.cardType {
  text-align: left;
  font-size: 10px;
  text-transform: uppercase;
  color: #959595;
  border: solid 0.5px #959595;
  width: fit-content;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.greenLine {
  color: green;
  border: solid 4px;
  border-radius: 7px;
  margin: 12px 0px;
  background: green;
}

.spentIcon {
  font-size: 9px;
  margin: 3px;
}

.text {
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  color: #3b3b3b;
}

.spentDetailBox {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.spendValues {
  font-size: 12px;
  color: black;
  margin: 1px 0px;
  font-weight: bold;
}
</style>