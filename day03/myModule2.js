(function (){
    //私有数据
    var msg = "HeXin";
    //操作数据的函数
    function doSomething() {
        console.log('doSomething()'+msg.toUpperCase());
    }
    function doOtherthing() {
        console.log('doOtherthing()'+msg.toLowerCase());
    }

    //向外暴露对象（给外部使用的方法）
    window.myModule2 = {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
})()