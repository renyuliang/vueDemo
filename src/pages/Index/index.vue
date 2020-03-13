<template>
  <div class="systemAllNav">
    这是首页
    <init-sum :num1="12" :num2="3"></init-sum>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      recordList: [],
      appList: [],
      queryParams: {
        pageNum: 1,
        pageSize: 3
      },
      showMore: false
    }
  },
  created: function () {
    this.queryRecords()
    this.queryApps()
    // this.load()
  },
  methods: {
    load () {
      this.$axios.get('/opdcApp/queryAppList').then(res => {
        console.log(res.data)
      })
    },
    queryRecords () {
      let self = this
      self.recordList = []
    },
    queryApps () {
      let self = this
      self.appList = []
    },
    showDetails (id) {
      this.$router.push('/iterativePush/pushNoticeListInfo?index=1&id=' + id)
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
    em{
      font-weight: normal;
      font-style: normal;
      font-size: 14px;
      color: #A2ADC1;
      margin-left: 4px;
    }
    .addmore{
      font-size: 16px;
      font-weight: normal;
      color: #A2ADC1;
      &:hover{
        color: #3479F2
      }
    }
  }
  .nav_ul{
    margin-bottom: 56px;
    ul{
      overflow: hidden;
      li{
        width:378px;
        height:221px;
        background: #fff;
        box-shadow: 0 6px 7px 0 rgba(220,220,220,0.50);
        padding: 32px;
        float: left;
        margin:32px 33px 7px 0;
        transition: all .5s;
        &:nth-child(3n){
          margin-right: 0;
        }
        &:hover{
          transform: translateY(-10px);
        }
        h1{
          font-size: 18px;
          color: #292F39;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        p{
          margin:24px 0;
          color: #68707E;
          font-size: 14px;
          &:last-child{
            margin-bottom: 0;
          }
          label{
            width:80px;
            text-align: right;
          }
          a{
            color: #A2ADC1;
            &.active{
              color: #3479F2;
            }
          }
        }
      }
    }
  }
  .nav_apply{
    margin-top: 32px;
    padding:56px 56px 0 56px;
    background: #FFFFFF;
    box-shadow: 0 6px 7px 0 rgba(220,220,220,0.50);
    ul{
      overflow: hidden;
      li{
        float: left;
        margin:0 56px 56px 0;
        img{
          display: block;
          margin: auto;
        }
        p{
          text-align: center;
          margin-top: 24px;
          color: #292F39;
        }
      }
    }
  }
</style>
