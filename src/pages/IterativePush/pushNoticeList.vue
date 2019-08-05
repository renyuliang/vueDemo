<template>
  <div class="systemAllNav">
    <div class="breadcrumb">
      当前位置：
      <router-link to="/iterativePush">迭代通知</router-link><i class="el-icon-arrow-right"></i><span>迭代列表</span>
      <router-link to="/iterativePush" class="setToBack shadow pull-right">返回</router-link>
    </div>
    <div class="list_select">
      <el-row :gutter="20">
        <el-col :span="5">
          <strong>所属系统：药鱼管理后台</strong>
        </el-col>
        <el-col :span="19">
          <label>状态：</label>
          <el-select v-model="getValue" placeholder="请选择" @change="getChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <label class="margin">标题：</label>
          <el-input v-model="getInput" placeholder="请输入内容"></el-input>
          <span class="selectaction">
            <a href="javascript:;" class="setToBack">重置</a>
            <a href="javascript:;" class="setToBack active">筛选</a>
          </span>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableDataList"
      border
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="title"
        label="标题"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="system"
        label="所属系统">
      </el-table-column>
      <el-table-column
        prop="edition"
        label="系统版本"
        width="160">
      </el-table-column>
      <el-table-column
        prop="date"
        label="更新日期"
        width="160">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="160">
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <router-link to="/iterativePush/pushNoticeListInfo" :class="{active:isAlreadySearch}">查看</router-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        :current-page="currentPage4"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pushNoticeList',
  data () {
    return {
      options: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '未查看'
      }, {
        value: '3',
        label: '已查看'
      }],
      getValue: '1', // 下拉框值
      getInput: '', // 输入框值
      currentPage4: 4, // 分页
      isAlreadySearch: false, // 是否查看
      tableDataList: [{
        title: '费用管理优化迭代费用管理优化迭代费用管理优化迭代',
        system: '药鱼管理后台',
        edition: 'V1.4.2',
        date: '2016-05-02',
        status: '未查看',
        ready: 0
      }, {
        title: '费用管理优化迭代',
        system: '药鱼管理后台',
        edition: 'V1.4.2',
        date: '2016-05-02',
        status: '已查看',
        ready: 1
      }]
    }
  },
  methods: {
    getChange (val) {
      alert(val)
    },
    // 判断是否已查看
    tableRowClassName ({row}) {
      if (row.ready === 1) {
        this.isAlreadySearch = false
        return 'alreadyread'
      }
      this.isAlreadySearch = true
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'push';
</style>
