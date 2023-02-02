<template>
  <div class="wrapper">
    <div v-if="item">
      <img :src="item.img">
      <h1 class="">{{item.title}}</h1>
      <router-link class="btn btnPrimary" to="/">Back to home</router-link>
    </div>
  </div>
</template>
<script>
import items from "@/seeder/items";

export default {
  data(){
    return{
      item:null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el=>el.alias === alias)
    if(item == null){

    }
    else{
      this.item = item
    }
  }
}
</script>