<template>
    <div class="systemAllNav">
      <div class="breadcrumb" v-if="ifFormIndex == 1">
        当前位置：
        <router-link to="/">首页</router-link><i class="el-icon-arrow-right"></i><span>迭代详情</span>
        <router-link to="/" class="setToBack shadow pull-right">返回</router-link>
      </div>
      <div class="breadcrumb" v-else>
        当前位置：
        <router-link to="/iterativePush">迭代通知</router-link><i class="el-icon-arrow-right"></i><router-link to="/iterativePush/pushNoticeList">迭代列表</router-link><i class="el-icon-arrow-right"></i><span>迭代详情</span>
        <router-link to="/iterativePush/pushNoticeList" class="setToBack shadow pull-right">返回</router-link>
      </div>
      <div class="listinfo">
        <div class="infowpd">
          <label>迭代标题：</label>
          <p>{{updateRecord.updateName}}</p>
        </div>
        <div class="infowpd">
          <label>所属系统：</label>
          <p>{{updateRecord.appName}}</p>
        </div>
        <div class="infowpd">
          <label>版本号：</label>
          <p>{{updateRecord.version}}</p>
        </div>
        <div class="infowpd">
          <label>更新时间：</label>
          <p>{{updateRecord.updateTime}}</p>
        </div>
        <div class="infowpd">
          <label class="top">内容：</label>
          <p v-text="updateRecord.content"></p>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  name: 'pushNoticeListInfo',
  data () {
    return {
      ifFormIndex: '',
      recordId: '',
      updateRecord: ''
    }
  },
  mounted: function () {
    this.ifFormIndex = this.queryStringParam('index')
    this.recordId = this.queryStringParam('id')
    this.queryRecordDetail()
  },
  methods: {
    queryRecordDetail () {
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'push';
</style>
