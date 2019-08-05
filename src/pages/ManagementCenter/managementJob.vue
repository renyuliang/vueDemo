<template>
  <div style="position: relative">
      <span class="release">
        <a href="javascript:;" class="setToBack shadow" @click="dialogDeleteChecked=true">批量删除</a>
        <router-link to="/managementCenter/managementAddJob" class="setToBack shadow">新增职务</router-link>
      </span>
    <div class="list_select">
      <label>所属系统：</label>
      <el-select v-model="getSystem" placeholder="请选择" @change="getChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <label class="margin">职务名称：</label>
      <el-input v-model="getUrl" placeholder="请输入内容"></el-input>
      <label class="margin">权限名称：</label>
      <el-input v-model="getName" placeholder="请输入内容"></el-input>
      <span class="selectaction">
          <a href="javascript:;" class="setToBack">重置</a>
          <a href="javascript:;" class="setToBack active">筛选</a>
        </span>
    </div>
    <el-table
      :data="tableData"
      ref="multipleTable"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="职务名称">
      </el-table-column>
      <el-table-column
        prop="system"
        label="所属系统">
      </el-table-column>
      <el-table-column
        prop="url"
        label="权限范围"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="style"
        label="类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="number"
        label="编号"
        width="140">
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
            <span>
              <a href="javascript:;" @click="searchJob">查看</a>
              <a href="javascript:;" @click="editJob">编辑</a>
              <a href="javascript:;" @click="dialogDelete = true">删除</a>
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
      title="删除提示"
      :visible.sync="dialogDelete"
      width="25%"
      top="15%"
      :show-close="false">
      <span>删除权限后，相应的功能将无法正常使用，是否确认删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDelete = false">取消</el-button>
        <el-button type="primary" @click="dialogDelete = false">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="批量删除提示"
      :visible.sync="dialogDeleteChecked"
      width="25%"
      top="15%"
      :show-close="false">
      <span>删除选中权限后，相应的功能将无法正常使用，是否确认删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteChecked = false">取消</el-button>
        <el-button type="primary" @click="dialogDeleteChecked = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'managementJob',
  data () {
    return {
      options: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '一蟹管理中心'
      }, {
        value: '3',
        label: '药鱼管理后台'
      }, {
        value: '4',
        label: '医蟹管理后台'
      }],
      tableData: [{
        name: '费用管理优化迭代',
        system: '药鱼管理后台',
        url: '权限范围',
        style: '系统生成',
        number: 'HB293842934'
      }, {
        name: '费用管理优化迭代',
        system: '药鱼管理后台',
        url: '权限范围',
        style: '自主添加',
        number: 'HB293842934'
      }],
      getSystem: '',
      getName: '',
      getUrl: '',
      currentPage: 1,
      dialogDelete: false, // 删除弹层
      dialogDeleteChecked: false // 批量删除
    }
  },
  methods: {
    getChange (val) {
      alert(val)
    },
    // 获取勾选的数据
    handleSelectionChange (val) {
      console.log(val)
    },
    // 编辑职务
    editJob () {
      this.$router.push('/managementCenter/managementEditJob?id=11')
    },
    // 查看权限
    searchJob () {
      this.$router.push('/managementCenter/managementSearchJob?id=11')
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'management';
</style>
