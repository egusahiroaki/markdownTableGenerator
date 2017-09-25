<template>
  <div id="app">

    <h1>
      Markdown Table Generator
    </h1>


    <el-radio-group v-model="labelPosition" size="small" style="margin-bottom:10px;" @change="changeLayout">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="center">Center</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
    </el-radio-group>

    <div>
      <el-input-number :min="2" size="small" v-model="rowNum" @change="changeRow"></el-input-number>
      <el-input-number :min="2" size="small" v-model="colNum" @change="changeCol"></el-input-number>
    </div>

    <el-button @click="clearTable" type="primary" >Clear Table</el-button>

<!-- 
    <el-upload
      class="upload-demo"
      >
      <el-button size="small" type="primary" icon="document" @click="importCSV">Import from CSV</el-button>
      <div slot="tip" class="el-upload__tip">csv files with a size less than 500kb</div>
    </el-upload>
 -->

    <table>
      <draggable :list="values">
        <tr v-for="cells in values">
          <td class="outline">
          </td>
          <td v-for="cell in cells" @click="selectValue(cell)" @keyup.enter="submit(cell)">
            <div v-if="!cell.edit" class="display" v-text="cell.text" @click="cell.edit = true"></div>
            <input onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';" onfocus="this.style.width = ((this.value.length + 1) * 8) + 'px';" v-if="cell.edit" type="text" v-model="cell.text" v-on:blur="cell.edit = false" ref="textInput" v-focus @keydown.tab="nextCell($event)" />
          </td>
        </tr>
      </draggable>
    </table>

    <el-button @click="copyToClipBoard" type="primary" icon="document">Copy to ClipBoard</el-button>
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
import draggable from 'vuedraggable'

const focus = {
  inserted (el) {
    Vue.nextTick(function () {
      el.focus()
    })
  }
}

export default {
  name: 'app',
  components: {
    draggable
  },
  data () {
    return {
      labelPosition: 'center',
      beforeRowNum: 3,
      beforeColNum: 3,
      rowNum: 3,
      colNum: 3,
      values: [
        [
          {text: '', edit: false},
          {text: '', edit: false},
          {text: '', edit: false}
        ],
        [
          {text: '', edit: false},
          {text: '', edit: false},
          {text: '', edit: false}
        ],
        [
          {text: '', edit: false},
          {text: '', edit: false},
          {text: '', edit: false}
        ]
      ],
      valuesCache: []
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
      if (val > this.beforeRowNum) {
        for (var i = 0; i < val - this.beforeRowNum; i++) {
          var newRow = []
          for (var j = 0; j < this.colNum; j++) {
            newRow.push({text: '', edit: false})
          }
          this.values.push(newRow)
        }
      } else {
        for (var k = 0; k < this.beforeRowNum - val; k++) {
          this.values.pop()
        }
      }
    },
    changeCol (val) { // 列追加
      this.beforeColNum = this.colNum
      if (val > this.beforeColNum) {
        this.values.forEach((row) => {
          for (var i = 0; i < val - this.beforeColNum; i++) {
            row.push({text: '', edit: false})
          }
        })
      } else {
        this.values.forEach((row) => {
          for (var j = 0; j < this.beforeColNum - val; j++) {
            row.pop()
          }
        })
      }
    },
    importCSV (filePath) {
      console.log(filePath)
      var req = new XMLHttpRequest() // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
      req.open('get', filePath, true) // アクセスするファイルを指定
      req.send(null) // HTTPリクエストの発行

      req.onload = function () {
        console.log(req.responseText) // 渡されるのは読み込んだCSVデータ
      }
    },
    clearTable () {
      this.values.forEach((row) => {
        console.log(row)
        row.map((cell) => {
          cell.text = ''
          cell.edit = false
        })
      })
    },
    nextCell (event) { // 次のセルへフォーカス
      // console.log('tabba')
      // console.log(event.target.parentNode.nextSibling.childNodes[0])
      // event.target.parentNode.nextSibling.childNodes[0].click()
      console.log(this.values[0][1].edit)
      this.values[0][1].edit = false
      console.log(this.values[0][1].edit)
      this.values[0][2].edit = true
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
      this.$message({
        message: 'Copy Success',
        type: 'success',
        duration: 1000
      })
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

table {
  border-collapse: collapse;
  table-layout: fixed;
}

td {
  width: 20px;
  height: 30px;
  vertical-align: middle;
  border: 1px solid black;
}

td.outline {
  background: #f2f2f2;
}

tr.sortable-ghost {
  color: #EAEAEA;
  background-color: #EAEAEA;
  border: 1px dashed #aaa;
}

tr.sortable-chosen:not(.sortable-ghost) {
  color: #224466;
/*  background-color: #2299ff;*/
  background-color: #dddddd;
}

tr.sortable-drag {
  color: white;
  background-color: gray;
  border: 1px dashed #aaa;
}

input[type="text"] {
   width: 100%; 
   font-size: 15px;
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
