<template>
  <div style="position: relative">
      <span class="release">
        <a href="javascript:;" class="setToBack shadow" @click="dialogDeleteChecked=true">批量删除</a>
        <router-link to="/managementCenter/managementManAdd" class="setToBack shadow">新增管理员</router-link>
        <a href="javascript:;" class="setToBack shadow" @click="dialogDataUpLoad=true">上传管理员</a>
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
      <label class="margin">管理员：</label>
      <el-input v-model="getName" placeholder="请输入"></el-input>
      <label class="margin">职务名称：</label>
      <el-input v-model="getJobName" placeholder="请输入"></el-input>
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
        prop="managenman"
        label="管理员"
        width="120">
      </el-table-column>
      <el-table-column
        prop="system"
        label="所属系统">
      </el-table-column>
      <el-table-column
        prop="name"
        label="职务名称"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="120">
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
              <a href="javascript:;">查看</a>
              <a href="javascript:;" @click="editMan">编辑</a>
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
    <!--导入成员-->
    <el-dialog
      title="数据上传"
      :visible.sync="dialogDataUpLoad"
      width="28%"
      top="15%"
      :show-close="false">
      <div class="upload">
        <label class="label">上传文件：</label>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="fileList"
          :on-change="handleChange">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <p>1.点击<a href="javascript:;">下载模版</a></p>
        <p>2.按模版内要求的格式填写正确完整的数据</p>
        <p>3.上传excel完成批量上传</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDataUpLoad = false">取消</el-button>
        <el-button type="primary" @click="saveUpload">确定</el-button>
      </span>
    </el-dialog>
    <!--导入成员失败后的弹窗-->
    <el-dialog
      title="上传数据错误"
      :visible.sync="dialogUpLoadError"
      width="60%"
      :close-on-click-modal="false"
      :show-close="false">
      <div class="uploadError">
        <div class="error_btn">
          <a href="javascript:;" class="setToBack active">下载错误数据</a>
          <a href="javascript:;" class="setToBack">修改完成</a>
          <span>*点击标红数据进行修改，数据重复记录不再上传</span>
        </div>
        <table class="table">
          <thead>
          <th style="width:110px">成员姓名</th>
          <th style="width:110px">联系电话</th>
          <th style="width:80px">成员性别</th>
          <th>联系邮箱</th>
          <th>所属部门</th>
          <th>工作职务</th>
          <th style="width:160px">错误提示</th>
          </thead>
          <tbody>
          <!--每页显示8调数据-->
          <tr>
            <td><input type="text" value="张三张三张三" disabled="disabled"></td>
            <td><input type="text" value="13219941001" class="error"></td>
            <td><input type="text" value="男" disabled="disabled"></td>
            <td><input type="text" value="785788909@qq.com" disabled="disabled"></td>
            <td><input type="text" value="技术部" disabled="disabled"></td>
            <td><input type="text" value="java工程师" disabled="disabled"></td>
            <td class="error_td" title="错误提示">错误提示</td>
          </tr>
          </tbody>
        </table>
        <div class="page">
          <el-pagination
            small
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogUpLoadError = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'managementMan',
  data () {
  }
}
</script>
<style lang="scss" scoped>
  @import 'management';
</style>
