<template>
  <footer  class="footer">
    <div class="container">
        <ul class="navbar-list">
          <li v-for="link in links" :key="link" class="navbar-item">
            <router-link class="navbar-link" :to="link.url">{{link.title}}</router-link>
          </li>
        </ul>
    </div>
  </footer>
</template>
<script>
import {app,links} from "@/_config";

export default {
  data(){
    return{
      title:app.title,
      links:links
    }
  }

}
</script>