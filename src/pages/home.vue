<template>
    <div class="md-body">
      <div class="card__wrapper" v-for="item in items" :key="item.id">
        <Card :name="`${item.lvl} lvl`" :title="item.title" :img="item.img">
              {{item.desc}}
         </Card>
      </div>
    </div>

</template>
<script>
import Card from '@/components/UI/Card'

export default {
  components:{
    Card
  },
  data(){
    return{
      items:[
        {
          id:1,
          title:'archer',
          desc:'archer,archer,archer,archer',
          lvl:4,
          img:require('@/images/archer.png')
        },
        {
          id:2,
          title:'Wizzard',
          desc:'Wizzard,Wizzard,Wizzard,Wizzard',
          lvl:4,
          img:require('@/images/archer.png')
        },
        {
          id:3,
          title:'Wots',
          desc:'Wots,Wots,Wots,Wots,Wots',
          lvl:3,
          img:require('@/images/archer.png')
        },

      ]
    }
  }
}
</script>