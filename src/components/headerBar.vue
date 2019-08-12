<template>
  <div class="header">
    <div class="header_left pull-left">
      <img src="../assets/images/logo.png" alt="">一蟹数据中心
    </div>
    <div class="header_right pull-right">
      <NavMenu></NavMenu>
      <ul>
        <li class="lilast">
          <span class="header_user">
            <img src="../assets/images/userimg.png" alt="">
            <a href="javascript:;">吴三金<em>系统管理员</em></a>
          </span>
          <span class="header_exit">
            <a href="javascript:;">退出</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import NavMenu from "./NavMenu"
export default {
  name: 'headerBar',
  components: { NavMenu }
}
</script>
<style lang="scss" scoped>
.header{
  min-width: 1200px;
  height:68px;
  line-height: 68px;
  padding: 0 30px;
  background: #FFFFFF;
  box-shadow: 0 4px 6px 0 rgba(202,213,226,0.50);
  .header_left{
    font-size: 18px;
    font-weight: bold;
    color: #292F39;
    img{
      position: relative;
      top: 8px;
      margin-right: 8px;
    }
  }
  .header_right{
    width: 980px;
    a{
      display: inline-block;
      color: #A2ADC1;
      &.router-link-active {
        color: #417CFF;
      }
    }
    ul{
      overflow: hidden;
      li{
        float: left;
        a{
          font-size: 16px;
          margin-right: 79px;
        }
        &.lilast{
          a{
            font-size: 14px;
            margin-right: 0;
          }
          .header_user{
            img{
              position: relative;
              top: 12px;
              margin-right: 12px;
            }
            a{
              font-weight: bold;
              color: #292F39;
              em{
                background: #3479F2;
                font-style: normal;
                color: #fff;
                font-weight: normal;
                margin-left: 8px;
                padding:4px 8px;
                -webkit-border-radius: 12px;
                -moz-border-radius: 12px;
                border-radius: 12px;
              }
            }
          }
          .header_exit{
            &:before{
              content: '';
              width: 1px;
              height: 21px;
              border: 1px solid #E4E4E4;
              margin:0 24px 0 20px;
            }
            a{
              padding-left: 24px;
              background: url("../assets/images/exit.png") no-repeat 0px 27px;
            }
          }
        }
      }
    }
  }
}
</style>
