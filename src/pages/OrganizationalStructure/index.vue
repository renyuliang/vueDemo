<template>
  <div class="systemAllNav">
    <div class="structure_left">
      <div class="structure_managent">
        部门管理
        <a href="javascript:;" class="editdopt pull-right"></a>
      </div>
      <div class="tree">
        <a href="javascript:;"><i></i>{{companyName}}</a>
        <el-tree :data="baseData" :props="defaultProps" :expand-on-click-node="false" default-expand-all @node-click="handleNodeClick"></el-tree>
      </div>
    </div>
    <div class="structure_right">
      <div class="list_managent">
        <a href="javascript:;" @click="changeAllActive" class="setAllChecked">成员全选</a>
        <span class="pull-right">
          <a href="javascript:;" class="list_delete_man" @click="dialogAllDelete = true">批量删除</a>
          <a href="javascript:;" class="list_move_man" @click="dialogMoveMan = true">移动成员</a>
          <a href="javascript:;" class="list_leading_man" @click="dialogDataUpLoad = true">导入成员</a>
          <a href="javascript:;" class="list_add_man"><i class="el-icon-plus"></i>新增</a>
        </span>
      </div>
      <div class="list_news">
        <div class="news_one" v-for="item in usersData " v-bind:key="item.id" v-cloak>
          <el-row>
            <el-col :span="10" class="one_left">
              <img v-if="item.headImg" :src="item.headImg"  alt="">
              <img v-else src="../../assets/images/qq.jpg"  alt="">
            </el-col>
            <el-col :span="11" class="one_right">
              <h6>{{item.name}}
                <i v-if="item.sex == 1" class="man"></i>
                <i v-else-if="item.sex == 0" class="woman"></i>
              </h6>
              <p>{{item.departmentName}}</p>
              <p>{{item.title}}</p>
              <p>{{item.mobile}}</p>
              <p>{{item.email}}</p>
            </el-col>
          </el-row>
          <i class="setchecked" @click="changeActive" :name="item.id"></i>
          <div class="hovershow">
            <a href="javascript:;" class="hover_search" @click="userView(item.id)">查看</a>
            <a href="javascript:;" class="hover_update">编辑</a>
            <a href="javascript:;" class="hover_delete" @click="deleteSure(item.id, item.name)">删除</a>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination
          background
          :current-page="currentPage"
          :page-size="usersParams.pageSize"
          layout="total, prev, pager, next, jumper"
          :total="usersTotal" @current-change="queryPageForUsers">
        </el-pagination>
      </div>
    </div>
    <!--查看详情-->
    <el-dialog
      title="成员详情"
      :visible.sync="dialogVisible"
      width="34%"
      top="15%"
      :before-close="handleClose" class="search_news">
      <el-row>
        <el-col :span="10" class="new_left">
          <img v-if="user.headImg" :src="user.headImg" alt="">
          <img v-else src="../../assets/images/qq.jpg" alt="">
        </el-col>
        <el-col :span="14" class="new_right">
          <p><label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>{{user.name}}</p>
          <p v-if="user.sex === 1"><label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label>男</p>
          <p v-else-if="user.sex === 0"><label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label>女</p>
          <p><label>联系电话：</label>{{user.mobile}}</p>
          <p><label>联系邮箱：</label>{{user.email}}</p>
          <p><label>所属部门：</label>{{user.departmentName}}</p>
          <p><label>工作职称：</label>{{user.title}}</p>
        </el-col>
      </el-row>
    </el-dialog>
    <!--批量删除-->
    <el-dialog
      title="批量删除"
      :visible.sync="dialogAllDelete"
      width="25%"
      top="15%"
      :show-close="false">
      <span>是否确认删除选中成员？删除后不可恢复！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAllDelete = false">取消</el-button>
        <el-button type="primary" @click="batchDelete">确定</el-button>
      </span>
    </el-dialog>
    <!--删除单个成员-->
    <el-dialog
      title="删除成员"
      :visible.sync="dialogDeleteId"
      width="25%"
      top="15%"
      :show-close="false">
      <span>是否确认删除：{{deleteName}}？删除后不可恢复！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteId = false">取消</el-button>
        <el-button type="primary" @click="deleteOne">确定</el-button>
      </span>
    </el-dialog>
    <!--移动成员-->
    <el-dialog
      title="移动成员"
      :visible.sync="dialogMoveMan"
      width="40%"
      custom-class="dialoginit"
      :show-close="false">
      <div class="moveman">
        <el-row>
          <el-col :span="10" class="moveleft scrollbar">
            <h1><i class="movechecked moveall" @click="changeMoveAllActive"></i>成都一蟹科技有限公司</h1>
            <ul>
              <li>
                <i class="movechecked movethis" @click="changeMoveActive"></i> 张三
              </li>
              <li>
                <i class="movechecked movethis" @click="changeMoveActive"></i> 张三张三张三
              </li>
            </ul>
          </el-col>
          <el-col :span="4" class="movecenter">移动至</el-col>
          <el-col :span="10" class="moveright scrollbar">
            <el-tree :data="dataMove" :props="defaultProps" default-expand-all :expand-on-click-node="false"></el-tree>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogMoveMan = false">取消</el-button>
        <el-button type="primary" @click="dialogMoveMan = false">确定</el-button>
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
          ref="upload"
          :limit='1'
          class="upload-demo"
          action="/api/opdcOrgUser/importUsersByExcel"
          accept="application/vnd.ms-excel"
          :file-list="fileList"
          :on-success="handleSuccess"
          :auto-upload="false"
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
          <a :href="baseURL + '/opdcOrgUser/downLoadErrorList'" class="setToBack active">下载错误数据</a>
          <a href="javascript:;" class="setToBack" @click="importByModifyData">修改完成</a>
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
            <tr v-for="(item, index) in errorPage.list" :id="index" :key="index" v-cloak>
              <td name="name">
                <input type="text" v-model="item.name" :class="{error:contains('name',item.errorFields)}" :disabled="!contains('name',item.errorFields)">
              </td>
              <td name="mobile">
                <input type="text" v-model="item.mobile" :class="{error:contains('mobile',item.errorFields)}" :disabled="!contains('mobile',item.errorFields)">
              </td>
              <td name="sex">
                <input type="text" v-model="item.sex" :class="{error:contains('sex',item.errorFields)}" :disabled="!contains('sex',item.errorFields)">
              </td>
              <td name="email">
                <input type="text" v-model="item.email" :class="{error:contains('email',item.errorFields)}" :disabled="!contains('email',item.errorFields)">
              </td>
              <td name="department">
                <input type="text" v-model="item.department" :class="{error:contains('department',item.errorFields)}" :disabled="!contains('department',item.errorFields)">
              </td>
              <td name="role">
                <input type="text" v-model="item.role" :class="{error:contains('role',item.errorFields)}" :disabled="!contains('role',item.errorFields)">
              </td>
              <td class="error_td" :title="item.errorMsg">{{item.errorMsg}}</td>
            </tr>
          </tbody>
        </table>
        <div class="page">
          <el-pagination
            small
            layout="prev, pager, next"
            :total="errorPage.total"
            :page-size="errorPage.pageSize"
            :current="errorPage.pageNo"
            @current-change="errorPageNoChange"
          >
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
  name: 'index',
  data () {
  }
}
</script>
<style lang="scss" scoped>
  @import 'structure';
</style>
