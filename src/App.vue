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
      <el-button @click="clearTable" type="small" >Clear Table</el-button>
    </div>

    <div>
      <el-button @click="insertColumnLeft" type="small" >Insert Column to the Left</el-button>
      <el-button @click="insertColumnRight" type="small" >Insert Column to the Right</el-button>
    </div>

<!-- 
    <el-upload
      class="upload-demo"
      >
      <el-button size="small" type="primary" icon="document" @click="importCSV">Import from CSV</el-button>
      <div slot="tip" class="el-upload__tip">csv files with a size less than 500kb</div>
    </el-upload>
 -->
    <table>
      <!-- <draggable :list="values"> -->
        <tr>
          <td class="outline header">
          </td>
          <td v-for="r in currentRowNum"  class="outline header">
          </td>
        </tr>

        <tr v-for="(cells, i) in currentValue">
          <td class="outline">
          </td>
          <td v-for="(cell, j) in cells" @click="selectValue(cell, i, j)" @keyup.enter="submit(cell)" :class="{ active: cell.select }" >

            <div v-if="!cell.edit" class="display" v-text="cell.text" @click="cell.edit = true"></div>
            <input @input="inputCell" onfocus="this.style.width = ((this.value.length + 1) * 8) + 'px';" v-if="cell.edit" type="text" v-model="cell.text" v-on:blur="cell.edit = false" ref="textInput" v-focus @keydown.tab="nextCell($event)" />
          </td>
        </tr>
      <!-- </draggable> -->
    </table>

    <el-button @click="copyToClipBoard" type="primary" icon="document" style="margin-bottom:20px;">Copy to ClipBoard</el-button>
    <div>
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
      beforeRowNum: 3, // 増減に対応するために必要
      beforeColNum: 3, // 増減に対応するために必要
      rowNum: 3,
      colNum: 3,
      curSelectRowNum: 0, // -1は選択してない状態とする
      curSelectColNum: 0, // -1は選択してない状態とする
      cellSelectStatus: 0, // 0,1,2を取る。 0: 未選択, 1: 選択中, 2: 編集中
      values: [
        [
          {text: '', edit: false, width: 20, select: false},
          {text: '', edit: false, width: 20, select: false},
          {text: '', edit: false, width: 20, select: false}
        ],
        [
          {text: '', edit: false, width: 20, select: false},
          {text: '', edit: false, width: 20, select: false},
          {text: '', edit: false, width: 20, select: false}
        ],
        [
          {text: '', edit: false, width: 20, select: false},
          {text: '', edit: false, width: 20, select: false},
          {text: '', edit: false, width: 20, select: false}
        ]
      ],
      valuesCache: []
    }
  },
  computed: {
    currentValue () {
      return this.values
    },
    currentRowNum () {
      return this.values[0]
    },
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
            newRow.push({text: '', edit: false, width: 20, select: false})
          }
          this.values.push(newRow)
        }
        this.rowNum++
      } else {
        for (var k = 0; k < this.beforeRowNum - val; k++) {
          this.values.pop()
        }
        this.rowNum--
      }
    },
    changeCol (val) { // 列追加
      this.beforeColNum = this.colNum
      if (val > this.beforeColNum) { // 列を増やす場合
        this.values.forEach((row) => {
          for (var i = 0; i < val - this.beforeColNum; i++) {
            row.push({text: '', edit: false, width: 20, select: false})
          }
        })
      } else {  // 列を減らす場合
        if (this.curSelectColNum === val) { // 現在選択中のcellが表示から消える場合には、右端に選択中を合わせる
          this.curSelectColNum -= 1
          this.values[this.curSelectRowNum][val - 1].select = true
        }

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
        row.map((cell) => {
          cell.text = ''
          cell.edit = false
        })
      })
    },
    insertColumnLeft () {
      this.values.forEach((row) => {
        if (this.curSelectColNum === 0) { // 左端を選択しているときは
          row.unshift({text: '', edit: false, width: 20, select: false})
        } else {
          row.splice(this.curSelectColNum, 0, {text: '', edit: false, width: 20, select: false})
        }
      })
      this.curSelectColNum++ // 追加によるselectの位置の整合性をとる
      this.colNum++
    },
    insertColumnRight () {
      this.values.forEach((row) => {
        row.splice(this.curSelectColNum + 1, 0, {text: '', edit: false, width: 20, select: false})
      })
      this.colNum++
    },
    nextCell (event) { // 次のセルへフォーカス
      // console.log(this.values[0][1].edit)
      // this.values[0][1].edit = false
      // console.log(this.values[0][1].edit)
      // this.values[0][2].edit = true
    },
    selectValue (cell, i, j) {
      if ((i !== this.curSelectRowNum || j !== this.curSelectColNum)) { // 選択中だが、別のcellを選んだ場合
        this.cellSelectStatus = 0
        this.values[this.curSelectRowNum][this.curSelectColNum].select = false // もともと選択してたものは色を戻す
      }

      if (this.cellSelectStatus === 0) { // 未選択の時には、curSelectRowNum, this.curSelectColNumに値を入れて保持
        this.curSelectRowNum = i
        this.curSelectColNum = j
        this.cellSelectStatus++ // 1にする
        cell.select = true
        cell.edit = false
        return
      }

      if (i === this.curSelectRowNum && j === this.curSelectColNum) { // どのcellか選択中
        this.cellSelectStatus++ // 2にする
        if (cell.text === '' && this.cellSelectStatus === 2) { // 編集可能にする
          cell.edit = true
        }
      } else {
        this.cellSelectStatus = 0
      }
    },
    inputCell ({type, target}) { // textの入力を取得
      var width = (target.value.length + 1) * 8 + 'px'
      target.style.width = width
      target.parentNode.style.width = width
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

td.header {
  height: 10px;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
}

td {
  width: 20px;
  height: 30px;
  vertical-align: middle;
  background-color: white;
  border: 1px solid black;
}

td.active {
  background-color: #a8d0ef;
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
  text-align: left;
  white-space: pre-wrap ;
  margin: auto;
}

code {

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
