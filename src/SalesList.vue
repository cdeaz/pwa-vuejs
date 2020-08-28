<template>
  <div id="app" class="content">
  
   <nav class="navbar navbar-light bg-light justify-content-between">
    <span class="go-back">
      <md-button class="md-fab md-mini md-primary" @click="goBack">
        <md-icon>chevron_left</md-icon>
      </md-Button>
    </span>
    <a class="navbar-brand">Sales Orders</a>
    <form class="form-inline">
      <input 
      class="form-control mr-sm-2" 
      type="search" 
      placeholder="Search" 
      aria-label="Search">
      <button class="btn btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
    </nav>
      <Table v-if="tableData" 
      :theData="tableData" 
      :config="config" 
      :style="{height: '600px'}"
      />
    </div>

</template>

<script>
import Table from './components/Table';

//TODO : set ENV variable instead of hard-coding the API KEY value (https://cli.vuejs.org/guide/mode-and-env.html)
const APIKEY = 'lnsJ0j0B1sJ5trfTMbMqrmIqIarVApME';
const BASEURL = '/api/v0/';
function buildUrl(url) {
  return BASEURL + url;
}


export default {
  name: 'SalesList',

  components: {
    Table,
  },
  data: () => ({
    tableData: undefined,
    config: [
      {
        key: 'salesdoc',
        title: 'SalesDoc.',
        type: 'number',
      },
      {
        key: 'status',
        title: 'Status',
        type: 'text',
      },
      {
        key: 'city',
        title: 'Ship-to',
        type: 'text',
      },
      {
        key: 'companyName',
        title: 'Order received Date',
        type: 'number',
      },
      {
        key: 'createdAt',
        title: 'Sold-To party',
        type: 'number',
      },
      {
        key: 'createdAt',
        title: 'Shipped Date',
        type: 'text',
      },
      {
        key: 'createdAt',
        title: 'Material',
        type: 'text',
      },
      {
        key: 'createdAt',
        title: 'Quantities',
        type: 'number',
      },
      {
        key: 'createdAt',
        title: 'Tracking Number',
        type: 'number',
      },
    ],
  }),
  mounted() {
    const config = {
      headers: {
        APIKey: APIKEY,
      },
    };
    this.$axios
      .get(buildUrl('salesOrder'), config)

      .then(({ data }) => {
        this.tableData = data;
      });

  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  font-weight: 400;
}

.table thead th {
  vertical-align: middle;
}

.md-theme-default a:not(.md-button) {
  color: #000;
  color: var(--md-theme-default-primary-on-background, #000);
}
</style>
