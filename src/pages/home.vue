<template>
    <div class="md-body">
      <div class="card__wrapper" v-for="item in items" :key="item.id">
        <Card :name="`${item.lvl} lvl`" :title="item.title" :img="item.img" :alias="item.alias">
              {{item.desc}}
         </Card>
      </div>
    </div>

</template>
<script>
import items from '@/seeder/items.js'
import Card from '@/components/UI/Card'

export default {
  components:{
    Card
  },
  data(){
    return{
      items:items
    }
  }
}
</script>