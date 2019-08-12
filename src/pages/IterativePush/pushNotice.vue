<template>
  <div>
    <ul>
      <li v-for="(app,index) in appPushList" :key="index">
        <router-link to="/iterativePush/pushNoticeList">
          <div class="list_img">
            <img :src='app.logo'>
          </div>
          <div class="list_info">
            <span>
              <label>总计迭代</label><b>{{app.allSum}}</b>
            </span>
            <span>
              <label>未查看</label><b>{{app.unStatus}}</b>
            </span>
            <span>
              <label>已查看</label><b>{{app.onStatus}}</b>
            </span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/iterativePush/pushNoticeList">
          <div class="list_img">
            <img src="../../assets/images/push_two.png" alt="">
          </div>
          <div class="list_info">
            <span>
              <label>总计迭代</label><b>29</b>
            </span>
            <span>
              <label>未查看</label><b>26</b>
            </span>
            <span>
              <label>已查看</label><b>2</b>
            </span>
          </div>
          </router-link>
      </li>
      <li>
        <router-link to="/iterativePush/pushNoticeList">
          <div class="list_img">
            <img src="../../assets/images/push_three.png" alt="">
          </div>
          <div class="list_info">
            <span>
              <label>总计迭代</label><b>29</b>
            </span>
            <span>
              <label>未查看</label><b>26</b>
            </span>
            <span>
              <label>已查看</label><b>2</b>
            </span>
          </div>
          </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'pushNotice'
}
</script>
<style lang="scss" scoped>
  ul{
    overflow: hidden;
    li{
      float: left;
      width: 260px;
      height: 332px;
      background: #FFFFFF;
      box-shadow: 0 6px 7px 0 rgba(220,220,220,0.50);
      margin: 0 53px 40px 0;
      &:nth-child(4n){
        margin-right: 0;
      }
      a{
        display: inline-block;
        height: 332px;
        &:hover img{
          transform: scale(1.2);
        }
        .list_img{
          transform: scale(1);
          height: 173px;
          overflow: hidden;
          img{
            display: block;
            transition: all .5s;
          }
        }
        .list_info{
          overflow: hidden;
          padding: 40px 20px;
          span{
            width: 50%;
            float: left;
            margin-bottom: 27px;
            &:last-child{
              margin-bottom: 0;
            }
            label{
              display: inline-block;
              width: 56px;
              text-align: right;
              margin-right: 20px;
              font-size: 14px;
              color: #68707E;
            }
            b{
              font-size: 22px;
              color: #292F39;
            }
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    name: 'index',
    data () {
      return {
        lookStatus: 1, //
        appPushList: [] // 迭代通知应用数据统计列表
      }
    },
    created () {
      this.initData()
    },
    methods: {
      initData () {
       //  var _this = this
       //  countNewsData().then((res) => {
       //   if (res.code === 1) {
       //     if (res.data) {
       //      _this.appPushList = res.data
       //     }
       //   } else {
       //   }
       // })
      },
      //
      deletethis (event, id) {
        event.stopPropagation()
        homePage.deleteTodo(id).then((res) => {
          if (res.code === 1) {
            this.$Message.success('删除成功')
          } else {
            this.$Message.error(res.message)
          }
        })
      }

    }
  }
</script>
