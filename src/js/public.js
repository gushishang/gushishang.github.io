/* 目录
*  百度统计
*  页面适配
*  检查输入内容
* 复制内容
*/

/**
 * 初始化百度统计
 */
var _hmt = _hmt || [];
(function () {
   var hm = document.createElement("script");
   hm.src = "https://hm.baidu.com/hm.js?16da047dd1b99f98fb58d332c05d7c13";
   var s = document.getElementsByTagName("script")[0];
   s.parentNode.insertBefore(hm, s);
})();

/**
 * 动态调整页面高度以适应窗口大小
 */
var originalHeight = window.innerHeight;
window.addEventListener('resize', function () {
   var currentHeight = window.innerHeight;
   if (currentHeight < originalHeight) {
      document.body.style.height = originalHeight + 'px';
   } else {
      document.body.style.height = 'auto';
   }
});


/**
 * 检查输入内容是否为空
 * @param {string} id - 输入框的id属性值
 * @returns {string} - 如果输入内容为空，则返回'empty'，否则返回undefined
 */
function isEmpty(id) {
   var inputData = $(id).val();
   if (inputData.trim() == '') {
      swal("内容不能为空", "", "error");
      return 'empty';
   }
}

/**
 * 复制文本到剪贴板
 */
function copy() {
   var text = document.getElementById("outputDisplay").textContent;
   var clipboard = new ClipboardJS('.copy-button', {
      text: function () {
         return text;
      }
   });
   clipboard.on('success', function (e) {
      swal("复制成功", "", "success");
      e.clearSelection();
   });
   clipboard.on('error', function (e) {
      swal("复制失败！", e.error, "error");
   });
}
