<template>
  <div style="position: relative">
    <span class="release">
      <router-link to="/iterativePush/pushAdd" class="setToBack shadow"><i class="el-icon-plus"></i>新增</router-link>
    </span>
    <div class="list_select">
      <label>发布状态：</label>
      <el-select v-model="getvalue" placeholder="请选择" @change="getChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <label class="margin">标题：</label>
      <el-input v-model="getinput" placeholder="请输入内容"></el-input>
      <label class="margin">所属系统：</label>
      <el-select v-model="getsystem" placeholder="请选择" @change="getChange">
        <el-option
          v-for="item in optionsystem"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="selectaction">
        <a href="javascript:;" class="setToBack">重置</a>
        <a href="javascript:;" class="setToBack active">筛选</a>
      </span>
    </div>
    <el-table
      :data="tableDataRelease"
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
      <el-table-column label="操作" width="230">
        <template slot-scope="scope">
          <span v-if="isAlreadyPush">
            <router-link to="/iterativePush/pushReleaseInfo" class="active">查看</router-link>
            <router-link to="/iterativePush/pushEdit">编辑</router-link>
            <a href="javascript:;" @click="dialogPush=true">发布</a>
            <a href="javascript:;" @click="dialogDelete=true" class="delete">删除</a>
          </span>
          <span v-else>
            <router-link to="/iterativePush/pushReleaseInfo">查看</router-link>
            <a href="javascript:;" @click="dialogRecover = true">回收</a>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        :current-page="currentPage"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="50">
      </el-pagination>
    </div>
    <el-dialog
      title="发布提示"
      :visible.sync="dialogPush"
      width="25%"
      top="15%"
      :show-close="false">
      <span>发布后，相关系统即会推送迭代信息，请确定信息的准确性！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogPush = false">取消</el-button>
        <el-button type="primary" @click="dialogPush = false">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="删除提示"
      :visible.sync="dialogDelete"
      width="25%"
      top="15%"
      :show-close="false">
      <span>是否确认删除当前辛苦编写的迭代信息？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDelete = false">取消</el-button>
        <el-button type="primary" @click="dialogDelete = false">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="回收提示"
      :visible.sync="dialogRecover"
      width="25%"
      top="15%"
      :show-close="false">
      <span>是否确认推送的迭代信息有误，需要进行修改或删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRecover = false">取消</el-button>
        <el-button type="primary" @click="dialogRecover = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'pushRelease',
  data () {
    return {
      options: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '未发布'
      }, {
        value: '3',
        label: '已发布'
      }],
      optionsystem: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '一蟹数据中心'
      }, {
        value: '3',
        label: '药鱼管理后台'
      }, {
        value: '4',
        label: '医蟹管理后台'
      }],
      getvalue: '1', // 下拉框值
      getinput: '', // 输入框值
      getsystem: '1', // 所属系统
      currentPage: 1, // 显示当前页梳
      isAlreadyPush: false, // 是否发布
      dialogPush: false, // 发布提示弹层
      dialogDelete: false, // 删除提示弹层
      dialogRecover: false, // 回收提示弹层
      tableDataRelease: [{
        title: '费用管理优化迭代费用管理优化迭代费用管理优化迭代',
        system: '药鱼管理后台',
        edition: 'V1.4.2',
        date: '2016-05-02',
        status: '未发布',
        isPush: 0
      }, {
        title: '费用管理优化迭代',
        system: '药鱼管理后台',
        edition: 'V1.4.2',
        date: '2016-05-02',
        status: '已发布',
        isPush: 1
      }]
    }
  },
  methods: {
    getChange (val) {
      alert(val)
    },
    tableRowClassName ({row}) {
      if (row.isPush === 1) {
        this.isAlreadyPush = false
        return 'alreadyread'
      }
      this.isAlreadyPush = true
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'push';
</style>
