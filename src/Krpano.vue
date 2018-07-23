<script>
import core from "./core";
import lazyLoad from "./features/lazyLoad";
import freezeVertical from "./features/freezeVertical";

export default {
  name: "kr-pano",
  mixins: [core, lazyLoad, freezeVertical],
  render: function (createElement) {
    return createElement('div', { staticClass: 'vue-krpano' });
  },
  mounted(){
    this.createPano();
  }
};
</script>
