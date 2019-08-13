<template>
  <div>
    <el-menu unique-opened :default-active="$route.path" :collapse="isCollapse" class="my-menu" router background-color="#324157" active-text-color="#3479F2" text-color="#fff" >
      <template  v-for="(item, index) in $router.options.routes[1].children">
        <el-submenu :index="item.path" v-if="item.children && item.children.length > 1" :key="index">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title" v-if="isOpen !== true">{{item.meta.title}}</span>
          </template>
          <el-menu-item v-for="(itemChild , index) in item.children" :index="itemChild.path" :key="index" v-if="!itemChild.hidden">
            <span slot="title">{{itemChild.meta.title}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" v-else :key="index">
          <i :class="item.meta.icon"></i>
          <span slot="title" v-if="isOpen !== true">{{item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    // 控制折叠
    isCollapse: {
      type: Boolean,
      default: false
    },
    // 控制显示文字
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>
