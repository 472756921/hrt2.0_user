<template>
  <div class="panel" v-if="grade!=1">
    <Row :gutter="16">
      <Col span="8" v-for="(it , i) in btn" style="margin-top: .4rem" :key="i">
        <Button type="ghost" size="small" :disabled="grade==0" @click="push(it)">{{it.name}}</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
      name: "team_opating",
      props: ['grade', 'teamID', 'btn'],
      methods: {
        push(i) {
          switch (i.type) {
            case 0:
              this.$router.push({path: this.teamID + '/question',  query:{data: i}})
            break;
            case 1:
              this.$router.push({path: this.teamID + '/phone',  query:{data: i}})
            break;
            case 2:
              this.$router.push({path: this.teamID + '/face',  query:{data: i}})
            break;
            case 3:
              this.$router.push({path: this.teamID + '/video',  query:{data: i}})
            break;
            case 4:
              this.$router.push({path: this.teamID + '/mt',  query:{data: i}})
            break;
            // case 12:
            //   this.$router.push({path: this.teamID + '/mt'})
            break;
          }
        }
      },
    }
</script>

<style scoped>
  button{
    border: 1px solid #43a3f0;
    color: #43a3f0;
  }
  .panel{
  }
</style>
