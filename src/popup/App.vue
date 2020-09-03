<template>
  <div id="popup_app">
    <div class="title">Quiz Crawler</div>
    <el-divider content-position="left">点击下载数据</el-divider>
    <div class="btn-group">
      <el-row>
        <el-col
          v-for="btn in buttons"
          :key="btn.id"
          :span="12"
          style="padding: .5em;"
        >
          <el-button
            type="primary"
            :icon="btn.type == 1 ? 'el-icon-download' : ''"
            style="width: 100%;"
            @click="runFile(btn.script)"
          >
            {{ btn.name }}
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
let btnType = {
  physical: 1,
  extend: 2,
  virtual: 3
};
let buttons = [
  {
    id: 1,
    type: btnType.physical,
    name: "中国大学MOOC",
    script: "mooc.js"
  },
  {
    id: 2,
    type: btnType.physical,
    name: "PTA",
    script: "pta.js"
  },
  {
    id: 3,
    type: btnType.physical,
    name: "BB平台",
    script: "bb.js"
  },
  {
    id: 4,
    type: btnType.extend,
    name: "即将支持更多平台"
  }
];
export default {
  name: "App",
  data: () => {
    return {
      buttons
    };
  },
  methods: {
    runFile(filename) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          file: `js/jquery-3.5.1.min.js`
        });
        chrome.tabs.executeScript(tabs[0].id, {
          file: `js/download.js`
        });
        chrome.tabs.executeScript(tabs[0].id, {
          file: `js/${filename}`
        });
      });
    }
  }
};
</script>

<style>
:root {
  width: 350px;
  height: 400px;
}
</style>

<style scoped>
.title {
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #646464;
  text-align: center;
}
.platform {
  padding: 0.5em;
}
</style>
