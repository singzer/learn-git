// 写一段你最拿手的 JavaScript 代码

// vhxubo
console.log('Hello World!')

// huanghuiya
// 代码段, 无需注释
// 轮播图
var lbArr = ['lb01.webp', 'lb02.jpg', 'lb03.webp', 'lb04.webp'];
var count = 0;
// 图片自动变化
setInterval(function () {
  if (count < lbArr.length - 1) {

    count++;
  } else {
    count = 0;
  }
  $('.lbPicture').css('background-image', 'url(./mi/' + lbArr[count] + ')');
  changeDot();
}, 4000);

// 点击左边切换按钮
$('.leftBtn').click(function () {
  if (count > 0) {
    count--;
  } else {
    count = lbArr.length - 1;
  }
  $('.lbPicture').css('background-image', 'url(./mi/' + lbArr[count] + ')');
  changeDot();
})
//点击右边切换按钮   
$('.rightBtn').click(function () {
  if (count < lbArr.length - 1) {
    count++;
  } else {
    count = 0;
  }

  $('.lbPicture').css('background-image', 'url(./mi/' + lbArr[count] + ')');
  changeDot();
})

// 改变小圆点颜色
$('.point').eq(0).css('background', 'white');

function changeDot() {
  for (var i = 0; i < lbArr.length; i++) {
    if (i == count) {
      $('.point').eq(i).css('background', 'white');

    } else {
      $('.point').eq(i).css('background', 'gray');

    }
  }
}
// 点击小圆点切换图片
$('.point').each(function (index) {
  $(this).click(function () {
    count = index;
    changeDot();
    $('.lbPicture').css('background-image', 'url(./mi/' + lbArr[count] + ')');
  })
})


// 李梦雪添加代码
window.addEventListener('load', function() {
    // 获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    //focus宽度，就是图片宽度
    var w = focus.offsetWidth;

    // index代表图片索引
    var index = 0;
    var timer = this.setInterval(function() {
        //索引加1，图片自动切到下一张
        index++;
        // 每次向左移动距离
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);

    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 3) {
            index = 0;
            //去掉过渡效果
            ul.style.transition = 'none';
            // 用最新的索引去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        //小圆点跟随变化
        //把ol里面li带有current类名的选出来去掉类名 remove
        ol.querySelector('.current').classList.remove('current');
        //让当前索引号的小li 加上 current   add
        ol.children[index].classList.add('current');
    })

    // 手指滑动轮播图
    var startX = 0; //手指初始坐标
    var moveX = 0; //移动距离
    var flage = false; //如果手指没有滑动就不做判断是否换页了
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        //手指触摸时停止计时器
        clearInterval(timer);
    })

    // 手指移动
    ul.addEventListener('touchmove', function(e) {
        // 手指移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：盒子原来的位置+手指移动的距离
        var translatex = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flage = true;
        e.preventDefault(); //阻止默认滚动屏幕
    })

    // 手指离开，根据移动距离判断是回弹还是拨放上一张下一张
    ul.addEventListener('touchend', function(e) {
        if (flage) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--; // 右滑拨放上一张
                } else {
                    index++; // 左滑拨放下一张
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else { //回弹
                var translatex = -index * w;
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        clearInterval(timer); //开启定时器之前先关闭一下
        timer = setInterval(function() {
            //索引加1，图片自动切到下一张
            index++;
            // 每次向左移动距离
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
})
