<template>
  <div class="systemAllNav">
    <div class="breadcrumb">
      当前位置：
      <router-link to="/managementCenter/managementMan">管理员</router-link><i class="el-icon-arrow-right"></i><span>新增管理员</span>
      <router-link to="/managementCenter/managementMan" class="setToBack shadow pull-right">取消</router-link>
    </div>
    <div class="addJob">
      <el-form ref="form" :model="form" label-width="100px" :rules="rules" class="demo-ruleForm">
        <el-form-item label="所属系统：" prop="system">
          <el-select v-model="form.system" placeholder="请选择">
            <el-option
              v-for="item in optionsystem"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择用户：" prop="name" class="manaddbtn">
          <a href="javascript:;" class="setToBack" @click="dialogChoseMan=true"><i class="el-icon-plus"></i>选择用户</a>
          <div class="chosemanlist" v-cloak>
            <span>243234 <a href="javascript:;"><i class="el-icon-close"></i></a></span>
            <span>243234 <a href="javascript:;"><i class="el-icon-close"></i></a></span>
          </div>
        </el-form-item>
        <el-form-item label="选择职务：" prop="name" class="manaddbtn">
          <a href="javascript:;" class="setToBack"><i class="el-icon-plus"></i>选择职务</a>
          <div class="chosemanlist" v-cloak>
            <span>243234 <a href="javascript:;"><i class="el-icon-close"></i></a></span>
            <span>243234 <a href="javascript:;"><i class="el-icon-close"></i></a></span>
          </div>
        </el-form-item>
        <el-form-item label="分配权限：">
          <div class="treeJob scrollbar">
            <el-tree
              :data="data"
              show-checkbox
              default-expand-all
              node-key="id"
              ref="tree"
              :expand-on-click-node="false"
              highlight-current
              :props="defaultProps">
            </el-tree>
          </div>
        </el-form-item>
        <el-form-item>
          <a href="javascript:;" class="setToBack active" @click="onSubmit">保存</a>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
      title="选择用户"
      :visible.sync="dialogChoseMan"
      width="60%">
      <chose-man></chose-man>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChoseMan = false">取消</el-button>
        <el-button type="primary" @click="dialogChoseMan = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import choseMan from '../../components/choseMan.vue'
export default {
  name: 'managementManAdd',
  data () {
    return {
      optionsystem: [{
        value: '1',
        label: '药鱼管理后台'
      }, {
        value: '2',
        label: '医蟹管理后台'
      }, {
        value: '3',
        label: '一蟹数据中心'
      }],
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
      dialogChoseMan: false, // 选择用户弹层
      form: {
        system: '',
        name: ''
      },
      rules: {
        system: [
          { required: true }
        ],
        name: [
          { required: true }
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
  },
  components: {
    choseMan
  }
}
</script>
<style lang="scss" scoped>
  @import 'management';
</style>
<style lang="scss" scoped>
  .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
    margin:0 72px 20px 0;
  }
</style>
