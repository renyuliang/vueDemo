<template>
  <div class="systemAllNav">
    <div class="tab_nav">
      <router-link to="/managementCenter" exact>权限管理</router-link>
      <router-link to="/managementCenter/managementJob">职务管理</router-link>
      <router-link to="/managementCenter/managementMan">管理员</router-link>
    </div>
    <div class="tab_list">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>
<style lang="scss" scoped>
  .tab_nav{
    padding-bottom: 19px;
    border-bottom:1px solid #D0D4DA;
    a{
      font-size: 18px;
      color: #A2ADC1;
      margin-right: 40px;
      &.router-link-active {
        color: #417CFF;
        position: relative;
        &:before{
          content: '';
          width: 38px;
          height: 0px;
          border: 1px solid #417CFF;
          display: inline-block;
          position: absolute;
          bottom: -21px;
          left: 17px;
        }
      }
    }
  }
  .tab_list{
    margin:32px 0;
  }
</style>
