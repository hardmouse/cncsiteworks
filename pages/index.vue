<template>
  <section class="bg" :style="{'background-image': 'url(' + require('../static/images/DSC_0003.jpg') + ')'}">
    <div class="container-fluid">
      <h1 class="title">
        CNC WORKS
      </h1>
      <h3 style="color:#FFF;">{{this.image}}</h3>
      <div class="row">

        <div class="col-fixed-240">
          <img src="../static/images/DSC_0006.jpg" class="img-fluid">
        </div>
        <div class="col-10 col-offset-240">      
          <div class="row">
            <div class="col-sm-3">
            <img src="../static/images/DSC_0005.jpg" class="img-fluid">
            </div>
            <div class="col-sm-3">
            <img src="../static/images/DSC_0006.jpg" class="img-fluid">
            </div>
            <div class="col-sm-3">
            <img src="../static/images/DSC_0008.jpg" class="img-fluid">
            </div>
            <div class="col-sm-3">
            <img src="../static/images/DSC_0004.jpg" class="img-fluid">
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-sm-12 contentblock">
              <p class="subtitle ">
                CNC works by F.M. Tsai
              </p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <br><br>
            <div class="row">
              <div class="col-sm-4">
                <div class="contentblock">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugitadipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="contentblock">
                  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi utui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="contentblock">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <br><br><br>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

// var me = windows.location.hostname;
export default {
  components: {
    
  },
  data () {
    return {
      image: ''//me
    }
  }
}
</script>
<style>
.col-fixed-240{
    width:240px;
    /* background:red; */
    position:fixed;
    height:100%;
    z-index:1;
}

.col-fixed-160{
    margin-left:240px;
    width:160px;
    background:blue;
    position:fixed;
    height:100%;
    z-index:1;
}

.col-offset-240{
    padding-left:260px;
    z-index:0;
}
</style>
