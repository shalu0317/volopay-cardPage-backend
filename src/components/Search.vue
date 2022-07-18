<template>
  <div style="margin: 20px 33px 0px">
    <div class="fullBox">
      <div>
        <input
          class="searchBox"
          type="text"
          v-model="filters.searchText"
          placeholder="Search Card Name..."
        />
      </div>
      <div
        @click="showFilter = !showFilter"
        class="filter"
        style="cursor: pointer"
      >
        <i style="font-size: 11px" class="fa-solid fa-filter"></i> filter
      </div>
    </div>
    <div class="filterBox">
      <!-- <div v-if="showFilter"> -->
      <div v-if="showFilter" class="filterInside">
        <div>Filters</div>
        <hr />
        <div class="heading">Type</div>
        <div class="typeSection">
          <div>
            <input
              type="checkbox"
              id="vehicle3"
              v-model="filters.burner"
              name="vehicle3"
              value="burner"
            /><span> Burner</span>
          </div>
          <div>
            <input
              type="checkbox"
              id="vehicle3"
              v-model="filters.subscription"
              name="vehicle3"
              value="cardType"
            />
            <span>Subscription</span>
          </div>
        </div>
        <div class="heading">Cardholder</div>
        <select
          name="cardholder"
          id="cardholder"
          v-model="filters.cardholder"
          class="cardholderBox"
        >
          <option :value="null">Select Cardholder</option>
          <option
            v-for="(owner, index) in owners"
            :key="index"
            :value="owner.owner_id"
          >
            {{ owner.name }}
          </option>
        </select>
        <div class="btnSection">
          <button class="btn applyBtn" @click="applyFilter()">Apply</button>
          <button class="btn" @click="clearFilter()">Clear</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchView",
  data() {
    return {
      base_url: "http://localhost:5000",
      isSearch: false,
      showFilter: false,
      filters: {
        searchText: "",
        cardholder: null,
        burner: null,
        subscription: null,
      },
      owners: [],
    };
  },
  async created() {
    const res = await fetch(`${this.base_url}/owners`);
    let data = await res.json();
    this.owners = data;
  },
  watch: {
    "filters.searchText"(newValue) {
      this.filters.searchText = newValue;
      this.$emit("onFilter", this.filters);
    },
  },
  methods: {
    applyFilter() {
      this.$emit("onFilter", this.filters);
      this.showFilter = false;
    },
    clearFilter() {
      this.filters = {
        searchText: this.filters.searchText,
        cardholder: null,
        burner: null,
        subscription: null,
      };
      this.$emit("onFilter", this.filters);
      this.showFilter = false;
    },
  },
};
</script>

<style scoped>
.fullBox {
  display: flex;
  justify-content: right;
}

.typeSection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.btn {
  margin: 2px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
}

.applyBtn {
  background: #ff2a2a;
  color: white;
}
.cardholderBox {
  width: 100%;
  text-align: center;
  background: #ebebeb;
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: #6a6a6a;
}

.filterBox {
  display: flex;
  justify-content: right;
  margin-top: 7px;
}

.btnSection {
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-around;
}

.heading {
  padding: 20px 0px;
}

.filterInside {
  z-index: 1000;
  background: white;
  padding: 20px;
  min-width: 300px;
  margin: 20px;
  box-shadow: 0px 2px 4px grey;
  border-radius: 10px;
  font-size: 14px;
  text-align: left;
}

.filter {
  margin-left: 16px;
  background: #ebebeb;
  padding: 6px 20px;
  border-radius: 5px;
  color: grey;
  z-index: 1000;
  box-shadow: 0px 2px 4px #cecece;
  font-size: 13px;
  font-weight: bold;
}

.searchBox {
  padding: 5px 13px;
  width: 300px;
  background: #ebebeb;
  border: none;
  border-radius: 11px;
  box-shadow: 0px 2px 5px #cecbcb;
}

.searchIcon {
  padding: 10px;
}

.searchIcon:hover {
  background: #ebebeb;
  box-shadow: 1px 1px 3px #bab6b6;
  border-radius: 50%;
  cursor: pointer;
}
</style>