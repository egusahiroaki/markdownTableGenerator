<template>
  <div id="app">

    <el-radio-group v-model="labelPosition" size="small" style="margin-bottom:10px;">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
      <el-radio-button label="top">Top</el-radio-button>
    </el-radio-group>


    <table style="border: solid 1px #000000; border-collapse: collapse;">
       <tr>
          <td v-for="cell in cells" @click="selectValue(cell)" @keyup.enter="submit(cell)">
            <div v-if="!cell.edit" class="display" v-text="cell.text" @click="cell.edit = true"></div>
            <input v-if="cell.edit" type="text" v-model="cell.text" v-on:blur="cell.edit = false" ref="textInput" v-focus />
          </td>
       </tr>
       <tr>
          <td>2</td><td>2</td><td>2</td>
       </tr>
    </table>

    <!--
    <router-view></router-view>
    -->
  </div>
</template>

<script>
import Vue from 'vue'

const focus = {
  inserted (el) {
    Vue.nextTick(function () {
      el.focus()
    })
  }
}

export default {
  name: 'app',
  data () {
    return {
      labelPosition: 'right',
      currentEdittingCellText: '',
      textEdit: false,
      cells: [
        {text: '', edit: false},
        {text: 'b', edit: false},
        {text: 'c', edit: false}
      ]
    }
  },
  computed: {
    inputExist () {
      return !this.textExist
    }
  },
  methods: {
    selectValue (cell) {
      // console.log(event.target.getElementsByClassName('display')[0].innerHTML === '')
      // console.log(event.target.getElementsByClassName('display')[0].innerHTML)
      // if (event.target.getElementsByClassName('display')[0].innerHTML === '') { // 最初の、入力がない場合
      //   this. = true
      // }

      if (cell.text === '') { // 最初の、入力がない場合
        cell.edit = true
      }

      console.log(cell.edit)
    },
    submit (cell) {
      cell.edit = !cell.edit
    }
  },
  directives: {
    focus
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

  td {
    width: 20px;
    height: 30px;
    border: solid 1px #ff0000
  }
</style>
