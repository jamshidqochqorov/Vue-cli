<template>

  <div class="card">
    <div v-if="img" class="card-img__wrapper">
     <img class="card-img" :src="img">
    </div>
       <span class="card-name">{{name}}</span>
       <span class="card-title">{{title}}</span>
        <div class="card-body">
          <slot></slot>
        </div>
    <router-link :to="`/${alias}`">See more</router-link>
  </div>
</template>

<script>
export default {
props:{
  name:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  img:{
    type:String
  },
  alias:{
    type:String
  }
}
}
</script>