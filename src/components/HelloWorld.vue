<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>功能页面</h2>
    <ul>
      <li>
        <a
          href="#/home"
          target="_blank"
        >
          我的团队
        </a>
      </li>
      <li>
        <a
          href="#/addTeam"
          target="_blank"
        >
          加入团队
        </a>
      </li>
    </ul>
    <h2>用户个人中心</h2>
    <ul>
      <li>
        <a
          href="#/center"
          target="_blank"
        >个人中心
        </a>
      </li>
    </ul>
    <div @click="ctre">创建用户</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '哈瑞特APP'
    }
  },
  methods:{
    ctre() {
      let url = 'http://www.schrtinfo.com/app/api/customer/addSession';
      this.$ajax({
        method: 'get',
        url:url,
        dataType: 'JSON',
        contentType: 'application/json;charset=UTF-8',
      }).then((res) => {
        this.$Message.success('ok');
      }).catch((error) => {
        this.$Message.error('失败');
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
