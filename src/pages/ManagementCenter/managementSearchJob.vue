<template>
  <div class="systemAllNav">
    <div class="breadcrumb">
      当前位置：
      <router-link to="/managementCenter/managementJob">职务管理</router-link><i class="el-icon-arrow-right"></i><span>查看职务</span>
      <router-link to="/managementCenter/managementJob" class="setToBack shadow pull-right">返回</router-link>
    </div>
    <div class="addJob">
      <el-form ref="form" :model="form" label-width="100px" :inline="true" class="demo-form-inline demo-ruleForm">
        <el-form-item label="所属系统：">
          <span>药鱼管理后台</span>
        </el-form-item>
        <el-form-item label="职务名称：">
          <span>职务名称</span>
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
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'managementSearchJob',
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
      }
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
