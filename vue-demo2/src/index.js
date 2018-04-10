import vue from 'vue';//npm 安装过vue.可以直接import
import hello from './vue/hello.vue'

new vue({
    el:'#app',//这个是在模板文件中需要替换的div ID.
     render:function(createElement){
        return createElement(hello);
     }
  
})