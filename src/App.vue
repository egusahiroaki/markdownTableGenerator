<template>
  <div id="app">

    <el-radio-group v-model="labelPosition" size="small" style="margin-bottom:10px;">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
      <el-radio-button label="top">Top</el-radio-button>
    </el-radio-group>


    <el-table
      :data="tableData"
      border
      style="width: 50%">
      <el-table-column
        prop="column1"
        label="Column1"
        width="180">
      </el-table-column>
      <el-table-column
        prop="column2"
        label="Column1"
        width="180">
      </el-table-column>
      <el-table-column
        prop="column3"
        label="Column1">
      </el-table-column>
    </el-table>

    <!--
    <router-view></router-view>
    -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      labelPosition: 'right',
      tableData: [{
        column1: '',
        column2: '',
        column3: ''
      }, {
        column1: '',
        column2: '',
        column3: ''
      }, {
        column1: '',
        column2: '',
        column3: ''
      }]
    }
  },
  methods: {
  },
  directives: {
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 30px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 50%;
    text-align: center;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
