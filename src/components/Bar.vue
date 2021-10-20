<template>
<div class="parent">
  <p class="textBar">{{parseInt(getPerc)}}% COMPLETATO</p>
  <div class="barContainer">
    <div :style="{width: getPerc + '%'}" class="child"></div>
    <div :style="{width: 100 - getPerc + '%'}" class="empty"></div>
  </div>

</div>
</template>

<script>
export default {
  name: "Bar",
  props: {
    max: {type: Number},
    current: {type: Number}
  },
  computed:{
    getPerc(){
      return (this.current / this.max ) * 100
    }
  }
}
</script>

<style lang="scss" scoped>
.parent{
  margin-bottom: 24px;
}
.child{
  background-color: rgb(245, 228, 218);
  height: 12px;
}
.textBar{
  color: rgb(207, 176, 163);
  font-size: 12px;
  margin-bottom: 4px;
}
.empty{
  height: 12px;
  border: 1px solid rgb(245, 228, 218);
}
.barContainer{
  display: flex;
  align-items: center;
  width: 100%;
}
</style>