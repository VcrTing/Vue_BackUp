/*
    VUE的插件
    描述：第一次写插件
    作者：VcrT
    时间：2018-8-10
*/
(function () {
    // 定义需要向外暴露的插件对象
    const MyPlugin = {};

    // 插件对象必须有一个install()
    MyPlugin.install = function (Vue, options) {
        // 1、添加全局方法 或1属性
        Vue.myGlobalMethod = function (){
            // Something in here
            console.info('Vue函数对象的方法');
        }

        // 2、添加全局资源
        Vue.directive('my-directive', {
            bind (el, binding, vnode, old_vnode) {
                // Something in here
                console.info('自定义指令');
                el.textContent = binding.value.toUpperCase();
            }
        })

        // 3、注入组件
        /*
        Vue.mixin({
            created: function () {

            },
            mounted: function () {

            },
        });
        */

        // 4、添加实例方法
        Vue.prototype.$my_method = function () {
            console.info('这是vue实例对象的方法');
        }
    }
    // 5、向外暴露
    window.MyPlugin = MyPlugin;
});