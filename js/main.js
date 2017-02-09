/**
 * Created by Macbook on 2017/1/24.
 */


$(function(){
    //使用轮播
    $('.banner').unslider({
        speed: 500,               //  速度动画每张幻灯片（以毫秒为的单位）
        delay: 3000,              //  幻灯片动画之间的延迟（以毫秒为单位）
        complete: function() {},  //  A中每张幻灯片的动画之后被调用函数
        keys: false,               //  启用键盘（左，右）箭头的快捷方式
        dots: true,               //  显示点导航
        fluid: false              //  支持响应式设计
    });

})