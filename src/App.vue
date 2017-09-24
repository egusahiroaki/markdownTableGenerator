<template>
  <div id="app">

    <el-radio-group v-model="labelPosition" size="small" style="margin-bottom:10px;" @change="changeLayout">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="center">Center</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
    </el-radio-group>

    <div>
      <el-input-number :min="2" size="small" v-model="rowNum" @change="changeRow"></el-input-number>
      <el-input-number :min="2" size="small" v-model="colNum" @change="changeCol"></el-input-number>
    </div>

    <table>
       <tr v-for="cells in values">
          <td v-for="cell in cells" @click="selectValue(cell)" @keyup.enter="submit(cell)">
            <div v-if="!cell.edit" class="display" v-text="cell.text" @click="cell.edit = true"></div>
            <input onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';" v-if="cell.edit" type="text" v-model="cell.text" v-on:blur="cell.edit = false" ref="textInput" v-focus />
          </td>
       </tr>
    </table>

    <el-button @click="copyToClipBoard">Copy to ClipBoard</el-button>
    <pre>
      <code id="mdArea">
        {{generateMdTable}}
      </code>
    </pre>
    </div>
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
      labelPosition: 'center',
      beforeRowNum: 2,
      beforeColNum: 2,
      rowNum: 2,
      colNum: 2,
      values: [
        [
          {text: '', edit: false},
          {text: 'b', edit: false}
        ],
        [
          {text: '', edit: false},
          {text: 'd', edit: false}
        ]
      ],
      sizingCache: [] // サイズ変更に利用するキャッシュ
    }
  },
  computed: {
    generateMdTable () {
      var all = '\n'

      // タイトル
      var title = '|' // 左端
      for (var i = 0; i < this.values[0].length; i++) {
        title += ' ' + this.values[0][i].text + ' |'
      }

      all += title + '\n'

      // ２段目
      var arrangement = this.labelPosition === 'left' ? '|:' : '|'
      for (var j = 0; j < this.values[0].length; j++) {
        switch (this.labelPosition) {
          case 'left':
            arrangement += j > 0 ? ':' : ''
            arrangement += '-'.repeat(this.values[0][j].text.length + 1) + '--|'
            break
          case 'center':
            arrangement += '-'.repeat(this.values[0][j].text.length + 1) + '--|'
            break
          case 'right':
            arrangement += '-'.repeat(this.values[0][j].text.length + 1) + '--:|'
            break
        }
      }

      all += arrangement + '\n'

      // それ以降
      for (var k = 1; k < this.values.length; k++) {
        var row = '|'
        for (var l = 0; l < this.values[k].length; l++) {
          row += ' ' + this.values[k][l].text + ' |'
        }
        all += row + '\n'
      }

      all += ''
      return all
    }
  },
  methods: {
    changeLayout () {
      console.log(this.labelPosition)
    },
    changeRow (val) { // 行追加
      this.beforeRowNum = this.rowNum
      var newRow = []
      if (val > this.beforeRowNum) {
        for (var i = 0; i < parseInt(this.colNum); i++) {
          newRow.push({text: '', edit: false})
        }
        this.values.push(newRow)
      } else {
        this.values.pop()
      }
    },
    changeCol (val) { // 列追加
      this.beforeColNum = this.colNum
      if (val > this.beforeColNum) {
        this.values.forEach((row) => {
          row.push({text: '', edit: false})
        })
      } else {
        this.values.forEach((row) => {
          row.pop()
        })
      }
    },
    selectValue (cell) {
      if (cell.text === '') { // 最初の、入力がない場合
        cell.edit = true
      }
    },
    submit (cell) {
      cell.edit = !cell.edit
    },
    copyToClipBoard () {
      var target = document.querySelector('#mdArea')
      var range = document.createRange()
      range.selectNode(target)
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(range)
      document.execCommand('copy')
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

  table {
    border: solid 1px #000000;
    border-collapse: collapse;
    table-layout: fixed;
  }

  td {
    width: 20px;
    height: 30px;
    border: solid 1px #ff0000
  }

  input[type="text"] {
     width: 100%; 
     box-sizing: border-box;
     -webkit-box-sizing:border-box;
     -moz-box-sizing: border-box;
  }

  pre {
    width: 50% ;
    border: 1px solid #000 ;
    text-align: left;
    white-space: pre-wrap ;
  }

  #myArea::selection {
    background-color:transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
  }
</style>
