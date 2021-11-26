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
