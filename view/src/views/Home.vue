<template>
  <div class="wrapper" @click="ifShowMenu=false">
    <div class="filetree">
      <el-tree :data="filetree" @node-click="handleNodeClick" highlight-current></el-tree>
    </div>
    <div class="home">
      <div class="tool_bar">
        <div class="mr10">
          <el-button-group>
            <el-button type="default" size="small" @click="funcBtn('h1')">h1</el-button>
            <el-button type="default" size="small" @click="funcBtn('h2')">h2</el-button>
            <el-button type="default" size="small" @click="funcBtn('h3')">h3</el-button>
            <el-button type="default" size="small" @click="funcBtn('h4')">h4</el-button>
            <el-button type="default" size="small" @click="funcBtn('h5')">h5</el-button>
            <el-button type="default" size="small" @click="funcBtn('h6')">h6</el-button>
            <el-button type="default" size="small" @click="funcBtn('br')">/br</el-button>
          </el-button-group>
        </div>
        <div class="mr10">
          <el-button-group>
            <el-button type="default" size="small" @click="funcBtn('bold')">
              <i class="fa fa-bold"></i>
            </el-button>
            <el-button type="default" size="small" @click="funcBtn('italic')">
              <i class="fa fa-italic"></i>
            </el-button>
            <el-button type="default" size="small" @click="funcBtn('strikethrough')">
              <i class="fa fa-strikethrough"></i>
            </el-button>
            <el-button type="default" size="small" @click="funcBtn('underline')">
              <i class="fa fa-underline"></i>
            </el-button>
            <el-button type="default" size="small" @click="funcBtn('list-ul')">
              <i class="fa fa-list-ul"></i>
            </el-button>
          </el-button-group>
        </div>
        <div class="mr10">
          <el-button-group>
            <el-button type="default" size="small" @click="funcBtn('red')">
              <i class="fa fa-font" style="color: red;"></i>
            </el-button>
            <el-button type="default" size="small" @click="funcBtn('marked')">
              <i class="fa fa-font" style="background-color:yellow;"></i>
            </el-button>
            <el-button type="default" size="small" @click="funcBtn('link')">
              <i class="fa fa-chain"></i>
            </el-button>
          </el-button-group>
        </div>
        <div>
          <el-button-group>
            <el-tooltip class="item" effect="dark" content="保存文件" placement="bottom-start">
              <el-button type="default" size="small" @click="funcBtn('save')">
                <i class="fa fa-save"></i>
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="编辑视图" placement="bottom-start">
              <el-button type="default" size="small" @click="funcBtn('view')">
                <i class="fa fa-columns"></i>
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="预览视图" placement="bottom-start">
              <el-button type="default" size="small" @click="funcBtn('eye')">
                <i class="fa fa-eye"></i>
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="清除全部" placement="bottom-start">
              <el-button type="default" size="small" @click="funcBtn('clear')">
                <i class="fa fa-eraser"></i>
              </el-button>
            </el-tooltip>
          </el-button-group>
        </div>
      </div>
      <div class="content" :style="content_style">
        <div class="left_side" v-if="view!=2">
          <textarea
            name
            id
            v-model="inputValue"
            @input="tr($event)"
            class="inputArea"
            autoHeight="true"
            spellcheck="false"
          ></textarea>
        </div>
        <div v-html="result" class="right_side" v-if="view==1||view==2" :style="right_side_style"></div>
      </div>
    </div>
    <div class="contextMenu" v-if="ifShowMenu" :style="menuPosition">
      <div v-for="(item,index) in contextMenuList" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";

var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  }
})
  .use(require("markdown-it-mark"))
  .use(require("markdown-it-ins"));
export default {
  name: "home",
  data() {
    return {
      result: "",
      inputValue: "",
      view: 1,
      filetree: [], //文件树列表
      nowPath: "",
      content_style: "",
      right_side_style: "",
      menuPosition: "",
      ifShowMenu: false,
      contextMenuList: [
        "新建目录",
        "新建文件",
        "删除文件",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ]
    };
  },
  created() {
    this.listenKeyDown();
    document.oncontextmenu = e => {
      let x = e.clientX;
      let y = e.clientY;
      this.menuPosition = ` left:${x}px;top:${y}px`;
      this.ifShowMenu = true;
      return false;
    };
  },
  mounted() {
    //监听主进程的消息
    ipcRenderer.on("filedata", (event, arg) => {
        this.inputValue = arg.data;
        this.nowPath = arg.path;
        this.result = md.render(this.inputValue);
    });
    ipcRenderer.on("filetree", (event, arg) => {
        this.filetree = arg;
    });
    ipcRenderer.on("saveSuccess", (e, back) => {
        this.$message.success("保存成功");
    });
  },
  methods: {
    tr() {
      this.result = md.render(this.inputValue);
    },
    /**
     * 功能按键
     */
    funcBtn(type) {
      switch (type) {
        case "h1":
          this.insertText("#");
          break;
        case "h2":
          this.insertText("##");
          break;
        case "h3":
          this.insertText("###");
          break;
        case "h4":
          this.insertText("####");
          break;
        case "h5":
          this.insertText("#####");
          break;
        case "h6":
          this.insertText("######");
          break;
        case "br":
          this.insertText("</br>");
          break;
        case "bold":
          this.replaceSelectedWords("**");
          break;
        case "italic":
          this.replaceSelectedWords("*");
          break;
        case "strikethrough":
          this.replaceSelectedWords("~~");
          break;
        case "underline":
          this.replaceSelectedWords("++");
          break;
        case "marked":
          this.replaceSelectedWords("==");
          break;
        case "list-ul":
          this.insertText("- ");
          break;
        case "red":
          this.replaceSelectedWords("<span style='color: red'>", "</span>");
          break;
        case "link":
          this.replaceSelectedWords("[", "](https://)");
          break;
        case "view":
          this.view = this.view == 1 ? 0 : 1;
          break;
        case "eye":
           this.view = this.view ==2? 1 : 2;
          break;    
        case "clear":
          this.inputValue = "";
          this.tr();
          break;
        case "save":
          ipcRenderer.send("saveFile", {
            fileContent: this.inputValue,
            path: this.nowPath
          });
          break;
      }
    },
    /**
     * 替换成markdown语法
     * @param a
     */
    replaceSelectedWords(a, b) {
      let selectString = window.getSelection().toString();
      if (!b) {
        document.execCommand("insertText", false, a + selectString + a);
      } else {
        document.execCommand("insertText", false, a + selectString + b);
      }
    },
    /**
     * 监听按键
     */
    listenKeyDown() {
      document.addEventListener("keydown", e => {
        //换行
        if (e.ctrlKey && e.key == "Enter") {
          this.funcBtn("br");
          return false;
        }
        //加粗
        if (e.ctrlKey && e.key == "b") {
          this.replaceSelectedWords("**");
          return false;
        }
        //下划线
        if (e.ctrlKey && e.key == "u") {
          this.replaceSelectedWords("++");
          return false;
        }
        //倾斜
        if (e.ctrlKey && e.key == "i") {
          this.funcBtn("italic");
          return false;
        }
        //保存文件
        if (e.ctrlKey && e.key == "s") {
          this.funcBtn("save");
          return false;
        }
        //H1-H6标题
        if (e.ctrlKey && e.key == "1") {
          this.funcBtn("h1");
          return false;
        }
        if (e.ctrlKey && e.key == "2") {
          this.funcBtn("h2");
          return false;
        }
        if (e.ctrlKey && e.key == "3") {
          this.funcBtn("h3");
          return false;
        }
        if (e.ctrlKey && e.key == "4") {
          this.funcBtn("h4");
          return false;
        }
        if (e.ctrlKey && e.key == "5") {
          this.funcBtn("h5");
          return false;
        }
        if (e.ctrlKey && e.key == "6") {
          this.funcBtn("h6");
          return false;
        }
        if (e.ctrlKey && e.key == "]") {
          this.funcBtn("view");
          return false;
        }
      });
    },
    handleNodeClick(obj, b, c) {
      if (obj.isDir == false) {
        ipcRenderer.send("getFileData", obj.filepath);
      }
    },
    /**
     * 右键菜单劫持
     */
    createContextMenu(e) {},
    insertText(text) {
      document.execCommand("insertText", false, text);
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
}

.filetree {
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  border-right: 1px solid #eeeeee;
  border-bottom: #eeeeee 1px solid;
  height: 752px;
  overflow-y: scroll;
}

.home {
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  border-bottom: #eeeeee 1px solid;
  .tool_bar {
    width: 100%;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
  }
  .content {
    width: 100%;
    height: 700px;
    display: flex;
    border-top: 1px solid #eeeeee;
    box-sizing: border-box;
  }
  .left_side {
    flex: 1;
    height: 100%;
    border-right: 1px solid #eeeeee;
    box-sizing: border-box;
    padding: 10px;
  }
  .right_side {
    flex: 1;
    height: 100%;
    font-size: 16px;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 10px;
    list-style-position: inside;
  }

  .inputArea {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    resize: none;
    font-size: 16px;
  }
}

.contextMenu {
  position: fixed;
  width: 200px;
  height: auto;
  background-color: lightcyan;
  color: black;
  cursor: default;
  div:hover {
    background-color: blue;
    color: white;
  }
  border: 1px solid #cccccc;
}
.ml10 {
  margin-left: 10px;
}

.mr10 {
  margin-right: 10px;
}
</style>

