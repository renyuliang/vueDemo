<template>
  <div>
    <el-menu unique-opened mode="horizontal" :default-active="$route.path" class="my-menu" router background-color="#324157" active-text-color="#3479F2" text-color="#fff" >
      <template  v-for="(item, index) in $router.options.routes[1].children">
        <el-submenu :index="item.path" v-if="item.children && item.children.length > 1" :key="index">
          <template slot="title">
            {{item.meta.title}}
          </template>
          <el-menu-item v-for="(itemChild , index) in item.children" :index="itemChild.path" :key="index" v-if="!itemChild.hidden">
            <span>{{itemChild.meta.title}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" v-else :key="index">
          {{item.meta.title}}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navlist'],
  data () {
    return {}
  },
  methods: {
  }
}
</script>
