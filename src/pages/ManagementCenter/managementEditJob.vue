<template>
  <div class="systemAllNav">
    <div class="breadcrumb">
      当前位置：
      <router-link to="/managementCenter/managementJob">职务管理</router-link><i class="el-icon-arrow-right"></i><span>编辑职务</span>
      <router-link to="/managementCenter/managementJob" class="setToBack shadow pull-right">取消</router-link>
    </div>
    <div class="addJob">
      <el-form ref="form" :model="form" label-width="100px" :rules="rules" :inline="true" class="demo-form-inline demo-ruleForm">
        <el-form-item label="所属系统：">
          <span>药鱼管理后台</span>
        </el-form-item>
        <el-form-item label="职务名称：" prop="name">
          <el-input v-model="form.name" placeholder="请输入职务名称" :maxlength="8"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="分配权限：">
          <div class="treeJob scrollbar">
            <el-tree
              :data="data"
              show-checkbox
              default-expand-all
              node-key="id"
              ref="tree"
              :default-checked-keys="[5,7]"
              :expand-on-click-node="false"
              highlight-current
              :props="defaultProps">
            </el-tree>
          </div>
        </el-form-item>
        <el-form-item style="margin-left: 100px;display: block">
          <a href="javascript:;" class="setToBack active" @click="onSubmit">保存</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'managementEditJob',
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      form: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入职务名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.getCheckedNodes()
    },
    getCheckedNodes () {
      console.log(this.form, this.$refs.tree.getCheckedNodes())
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'management';
</style>
<style lang="scss" scoped>
  .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
    margin:0 72px 40px 0;
  }
</style>
