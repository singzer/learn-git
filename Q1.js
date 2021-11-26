// 写一段你最拿手的 JavaScript 代码 

// vhxubo
console.log('Hello World!')

// 昵称
//lixao
// 代码段, 无需注释
(function () { 
    var setFont = function () { 
        var html = document.documentElement;  
        var width = html.clientWidth;
 
        if (width < 1024) width = 1024
        if (width > 1920) width = 1920 
        var fontSize = width / 80 + 'px'; 
        html.style.fontSize = fontSize;
    }
    setFont(); 
    window.onresize = function () {
        setFont();
    }
})();