function myModule(){
    //私有数据
    var msg = "hexin";
    //操作数据的函数
    function doSomething() {
        console.log('doSomething()'+msg.toUpperCase());
    }
    function doOtherThing() {
        console.log('doOtherThing()'+msg.toLowerCase());
    }
    // return doSomething;
    //向外暴露对象（给外部使用的方法）
    return{
        doSomething:doSomething,
        doOtherThing:doOtherThing
    }
}