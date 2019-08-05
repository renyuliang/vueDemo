<template>
  <div class="systemAllNav">
    <div class="breadcrumb">
      当前位置：
      <router-link to="/iterativePush/pushRelease">迭代发布</router-link><i class="el-icon-arrow-right"></i><span>新增迭代</span>
      <router-link to="/iterativePush/pushRelease" class="setToBack shadow pull-right">返回</router-link>
    </div>
    <div class="addlist">
      <el-form ref="form" :model="form" label-width="90px" :inline="true" class="demo-form-inline">
        <el-form-item label="所属系统：" >
          <el-select v-model="form.system" placeholder="请选择">
            <el-option
              v-for="item in optionsystem"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="更新时间：">
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="版本号：">
          <el-input v-model="form.version"></el-input>
        </el-form-item>
        <el-form-item label="迭代标题：">
          <el-input v-model="form.title"></el-input>
          <a href="javascript:;" class="autogener">自动生成</a>
        </el-form-item>
        <el-form-item label="内容：" style="display: block">
          <!--<el-input v-model="form.content"></el-input>-->
          <!-- 图片上传组件辅助-->
          <el-upload
            class="avatar-uploader"
            :action="serverUrl"
            name="img"
            :headers="header"
            :show-file-list="false"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :before-upload="beforeUpload">
          </el-upload>
          <!--富文本编辑器组件-->
          <el-row v-loading="quillUpdateImg">
            <quill-editor
              v-model="form.content"
              ref="myQuillEditor"
              :options="editorOption"
            >
            </quill-editor>
          </el-row>
        </el-form-item>
        <br>
        <el-form-item style="margin-left: 90px">
          <a href="javascript:;" class="setToBack" @click="onSubmit()">保存</a>
          <a href="javascript:;" class="setToBack" @click="dialogPreview=true">预览</a>
          <a href="javascript:;" class="setToBack active" @click="onSubmit()">发布</a>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
      title="预览"
      :visible.sync="dialogPreview"
      width="50%"
      :close-on-click-modal="false">
      <div class="dialogPreview scrollbar">
        <div class="infowpd">
          <label>迭代标题：</label>
          <p>费用管理优化迭代</p>
        </div>
        <div class="infowpd">
          <label>所属系统：</label>
          <p>药鱼管理后台</p>
        </div>
        <div class="infowpd">
          <label>版本号：</label>
          <p>V1.4.2</p>
        </div>
        <div class="infowpd">
          <label>更新时间：</label>
          <p>2018-02-23</p>
        </div>
        <div class="infowpd">
          <label class="top">内容：</label>
          <p>
            费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代
            <img src="../../assets/images/qq.jpg" alt="">
            费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代</p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogPreview = false">保存</el-button>
        <el-button type="primary" @click="dialogPreview = false">发布</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// 工具栏配置
const toolbarOptions = [
  ['bold', 'underline'],
  [{'align': []}],
  ['image']
]
export default {
  name: 'pushAdd',
  data () {
    return {
      form: {
        system: '',
        date: '',
        version: '',
        title: '',
        content: ''
      },
      optionsystem: [{
        value: '1',
        label: '药鱼管理后台'
      }, {
        value: '2',
        label: '医蟹管理后台'
      }],
      dialogPreview: false, // 预览的弹窗
      serverUrl: '', // 这里写你要上传的图片服务器地址
      header: {token: sessionStorage.token}, // 有的图片服务器要求请求头需要有token
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      editorOption: {
        placeholder: '',
        theme: 'snow',
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              'image': function (value) {
                if (value) {
                  document.querySelector('.avatar-uploader input').click()
                } else {
                  this.quill.format('image', false)
                }
              }
            }
          }
        }
      } // 富文本编辑器配置
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    },
    // 上传图片前
    beforeUpload () {
      // 显示loading动画
      this.quillUpdateImg = true
    },
    // 上传图片成功
    uploadSuccess (res, file) {
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill
      // 如果上传成功
      if (res.code === '200' && res.info !== null) {
        // 获取光标所在位置
        let length = quill.getSelection().index
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', res.info)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    // 上传图片失败
    uploadError (res, file) {
      // loading动画消失
      this.quillUpdateImg = false
      this.$message.error('图片插入失败')
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'push';
</style>
<style lang="scss" scoped>
  .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
    margin:0 72px 40px 0;
  }
  .quill-editor {
    height: 234px;
    width:640px;
    margin-bottom: 60px;
  }
  .avatar-uploader{
    display: none;
  }
  .ql-snow .ql-editor img {
    max-width: 480px;
  }
</style>
