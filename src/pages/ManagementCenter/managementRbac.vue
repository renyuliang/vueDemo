<template>
    <div style="position: relative">
      <span class="release">
        <a href="javascript:;" class="setToBack shadow" @click="handleBatchDelRbac">批量删除</a>
        <a href="javascript:;" class="setToBack shadow" @click="addRbac('form')">新增权限</a>
      </span>
      <div class="list_select">
        <label>所属系统：</label>
        <el-select v-model="query.appId" placeholder="请选择">
          <el-option
            v-for="item in appList"
            :key="item.id"
            :label="item.name"
            :value="item.id" v-cloak>
          </el-option>
        </el-select>
        <label class="margin">权限名称：</label>
        <el-input v-model="query.name" placeholder="请输入内容" maxlength="10"></el-input>
        <label class="margin">URL：</label>
        <el-input v-model="query.url" placeholder="请输入内容" maxlength="50"></el-input>
        <label class="margin">权限标识：</label>
        <el-input v-model="query.perms" placeholder="请输入内容" maxlength="50"></el-input>
        <span class="selectaction">
          <a href="javascript:;" class="setToBack" @click="reset">重置</a>
          <a href="javascript:;" class="setToBack active" @click="search">筛选</a>
        </span>
      </div>
      <el-table
        :data="page.list"
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
          label="权限名称">
        </el-table-column>
        <el-table-column
          prop="appName"
          label="所属系统"
          :formatter="formatApp">
        </el-table-column>
        <el-table-column
          prop="url"
          label="URL"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="perms"
          label="权限标识">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          :formatter="formatType"
          width="120">
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <span>
              <a href="javascript:;" @click="editRbac(scope.row.id, 'form')">编辑</a>
              <a href="javascript:;" @click="handleDelRbac(scope.row.id)">删除</a>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          background
          :current-page="page.pageNum"
          :page-size="page.pageSize"
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          :total="page.total">
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
        <el-button type="primary" @click="delRbac">确定</el-button>
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
        <el-button type="primary" @click="batchDelRbac">确定</el-button>
      </span>
      </el-dialog>
      <el-dialog
        :title="(menu.id ? '编辑':'新增')+'权限'"
        :visible.sync="dialogRbacAdd"
        width="25%"
        top="15%"
        :show-close="false">
        <el-form ref="form" :model="menu" :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="所属系统：" prop="appId">
            <el-select v-model="menu.appId" placeholder="请选择">
              <el-option
                v-for="item in appList"
                :key="item.id"
                :label="item.name"
                :value="item.id" v-cloak>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="权限名称：" prop="name">
            <el-input v-model="menu.name" maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="URL：" prop="url">
            <el-input v-model="menu.url" maxlength="50"></el-input>
          </el-form-item>
          <el-form-item label="权限标识：" prop="perms">
            <el-input v-model="menu.perms" maxlength="50"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="cancelForm">取消</el-button>
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
      </span>
      </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'managementRbac',
  data () {
  }
}
</script>
<style lang="scss" scoped>
  @import 'management';
</style>
