<template>
  <div class="systemAllNav">
    <div class="nav_topic">
      应用中心
      <span class="pull-right" v-if="isEditing">
        <a href="javascript:;" class="setToBack shadow" @click="updateApply">编辑应用</a>
        <a href="javascript:;" class="setToBack shadow" @click="addApply"><i class="el-icon-plus"></i>新增应用</a>
      </span>
      <span class="pull-right" v-else>
        <a href="javascript:;" class="setToBack shadow" @click="exitApply">取消</a>
      </span>
    </div>
    <div class="apply_list">
        <div class="list_one">
          <el-row :gutter="20">
            <el-col :span="14" class="one_left">
              <img src="../../assets/images/application_yaoyu.png" alt="">
              <p>药鱼管理后台</p>
            </el-col>
            <el-col :span="10" class="one_right" v-if="applyStatus == 2">
              <a href="javascript:;" class="setToBack apply_close">关闭</a>
              <a href="javascript:;" class="setToBack active apply_open">启动</a>
            </el-col>
            <el-col :span="10" class="one_right one_update" v-if="applyStatus == 1">
              <a href="javascript:;" class="setToBack active apply_open" @click="list_edit">编辑</a>
            </el-col>
          </el-row>
        </div>
      <div class="list_one">
        <el-row :gutter="20">
          <el-col :span="14" class="one_left">
            <img src="../../assets/images/application_houtai.png" alt="">
            <p>医蟹管理后台</p>
          </el-col>
          <el-col :span="10" class="one_right" v-if="applyStatus == 2">
            <a href="javascript:;" class="setToBack apply_close">关闭</a>
            <a href="javascript:;" class="setToBack active apply_open">启动</a>
          </el-col>
          <el-col :span="10" class="one_right one_update" v-if="applyStatus == 1">
            <a href="javascript:;" class="setToBack active apply_open" @click="list_edit">编辑</a>
          </el-col>
        </el-row>
      </div>
      <div class="list_one">
        <el-row :gutter="20">
          <el-col :span="14" class="one_left">
            <img src="../../assets/images/application_base.png" alt="">
            <p>基础数据后台</p>
          </el-col>
          <el-col :span="10" class="one_right" v-if="applyStatus == 2">
            <a href="javascript:;" class="setToBack apply_close">关闭</a>
            <a href="javascript:;" class="setToBack active apply_open">启动</a>
          </el-col>
          <el-col :span="10" class="one_right one_update" v-if="applyStatus == 1">
            <a href="javascript:;" class="setToBack active apply_open" @click="list_edit">编辑</a>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog
      title="新增应用"
      :visible.sync="dialogAddApplay"
      width="25%"
      top="15%"
      :show-close="false">
      <div class="addapplay_news">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="应用名称：" prop="name">
            <el-input v-model="form.name" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="应用网址：" prop="httpUrl">
            <el-input v-model="form.httpUrl" :maxlength="50"></el-input>
          </el-form-item>
          <el-form-item label="应用logo：" prop="ImgUrl">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.ImgUrl" :src="form.ImgUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddApplay = false">取消</el-button>
        <el-button type="primary" @click="dialogAddApplay = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      isEditing: true, // 判断是否处于操作状态
      applyStatus: 2, // 判断操作状态 2表示正常，1表示编辑
      dialogAddApplay: false, // 新增应用
      form: {
        name: '', // 应用名称
        httpUrl: '', // 应用网址
        ImgUrl: '' // 应用logo
      },
      rules: {
        name: [
          { required: true, message: '请输入应用名称', trigger: 'blur' }
        ],
        httpUrl: [
          { required: true, message: '请输入应用网址', trigger: 'blur' }
        ],
        ImgUrl: [
          { required: true, message: '请选择应用logo', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 编辑应用
    updateApply () {
      this.isEditing = false
      this.applyStatus = 1
    },
    // 编辑操作
    list_edit () {
      this.dialogAddApplay = true
      this.form.name = '医蟹管理后台'
      this.form.httpUrl = 'www.medcrab.com'
      this.form.ImgUrl = 'https://avatars2.githubusercontent.com/u/19343?s=460&v=4'
    },
    // 取消应用
    exitApply () {
      this.isEditing = true
      this.applyStatus = 2
    },
    // 添加应用
    addApply () {
      this.dialogAddApplay = true
    },
    handleAvatarSuccess (res, file) {
      this.form.ImgUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt3M = file.size / 1024 / 1024 < 3

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG 格式或者 PNG 格式!')
      }
      if (!isLt3M) {
        this.$message.error('上传头像图片大小不能超过 3MB!')
      }
      return isJPG && isLt3M
    }
  }
}
</script>
<style lang="scss" scoped>
  .nav_topic{
    font-size: 18px;
    color: #292F39;
    font-weight: bold;
    border-bottom: 1px solid #D0D4DA;
    padding-bottom: 19px;
    .pull-right{
      margin-top: -4px;
      a{
        margin-left: 20px;
        i{
          font-size: 12px;
          margin-right: 2px;
        }
      }
    }
  }
  .apply_list{
    margin-top: 32px;
    .list_one{
      background: #FFFFFF;
      box-shadow: 0 6px 7px 0 rgba(220,220,220,0.50);
      width: 348px;
      height: 196px;
      margin: 0 78px 78px 0;
      padding: 32px 42px;
      text-align: center;
      float: left;
      &:nth-child(3n){
        margin: 0 0 78px 0;
      }
      .one_left{
        padding-left: 0 !important;
        padding-right: 24px !important;
        p{
          color: #292F39;
          margin-top: 20px;
          font-size: 14px;
          font-weight: bold;
        }
      }
      .one_right{
        padding-left: 30px !important;
        padding-right: 0px !important;
        position: relative;
        &:before{
          display: inline-block;
          content: '';
          width: 1px;
          height:140px;
          background: #D0D4DA;
          position: absolute;
          top:-12px;
          left: 0;
        }
        margin-top: 12px;
        .apply_close{
          border:1px solid #EAEBEE;
          background: #EAEBEE;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
        }
        a:first-child{
          margin-bottom: 31px;
        }
        &.one_delete,&.one_update{
          padding-top: 40px;
        }
      }
    }
  }
  .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
    margin-bottom: 22px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  // 上传图片按钮
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 99px;
    height: 99px;
    line-height: 99px;
    text-align: center;
    border: 1px solid #D0D4DA;
  }
  .avatar {
    width: 99px;
    height: 99px;
    display: block;
  }
</style>
