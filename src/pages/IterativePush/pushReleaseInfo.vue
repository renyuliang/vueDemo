<template>
  <div class="systemAllNav">
    <div class="breadcrumb">
      当前位置：
      <router-link to="/iterativePush/pushRelease">迭代发布</router-link><i class="el-icon-arrow-right"></i><span>迭代发布详情</span>
      <router-link to="/iterativePush/pushRelease" class="setToBack shadow pull-right">返回</router-link>
    </div>
    <div class="listinfo">
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
        <p>费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代费用管理优化迭代</p>
      </div>
      <div class="infobtn">
        <a href="javascript:;" class="setToBack active">发布</a>
        <router-link to="/iterativePush/pushEdit" class="setToBack">编辑</router-link>
        <a href="javascript:;" class="setToBack" @click="dialogDelete=true">删除</a>
      </div>
    </div>
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
  </div>
</template>
<script>
export default {
  name: 'pushReleaseInfo',
  data () {
    return {
      dialogDelete: false // 删除提示弹层
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'push';
</style>
