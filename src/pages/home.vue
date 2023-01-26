<template>

    <div class="md-body">
      <div class="card__wrapper" v-for="item in items" :key="item.id">
        <Card :name="`${item.lvl} lvl`" :title="item.title">
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
          desc:'archer,archer,archer,archer,archer',
          lvl:4
        },
        {
          id:2,
          title:'Wizzard',
          desc:'Wizzard,Wizzard,Wizzard,Wizzard,Wizzard',
          lvl:4
        },
        {
          id:3,
          title:'Wots',
          desc:'Wots,Wots,Wots,Wots,Wots',
          lvl:3
        },
        {
          id:4,
          title:'archer',
          desc:'archer,archer,archer,archer,archer',
          lvl:6
        },
      ]
    }
  }
}
</script>