const forbiddenWords = stopword_list;
    $(document).ready(function() {
      $("#display").click(function() {
          var inputText = g($("#textInput").val());
          if (inputText == '') {
                    swal("内容不能为空", "", "error");
                }
        for (var i = 0; i < forbiddenWords.length; i++) {
          var forbiddenWord = forbiddenWords[i];
          var regex = new RegExp(forbiddenWord, 'gi');
          inputText = inputText.replace(regex, '<span class="forbidden-word">' + forbiddenWord + '</span>');
        }
        $("#outputDisplay").html(inputText);
      });
    
      $("#avoid").click(function() {
        var inputText = g($("#textInput").val());
        if (inputText === '') {
           swal("内容不能为空", "", "error");
        }
        for (var i = 0; i < forbiddenWords.length; i++) {
          var forbiddenWord = forbiddenWords[i];
          var regex = new RegExp(forbiddenWord,"gi");
          inputText = inputText.replace(regex, forbiddenWord.split('').join('.'));
        }
        $("#outputDisplay").html(inputText);
      });
    
      $("#copyButton").click(function() {
        var outputText = $("#outputDisplay").text().trim();
        var tempTextarea = $('<textarea>').val(outputText);
        $('body').append(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        swal("复制成功", "", "success");
        tempTextarea.remove();
      });
    $('#jump').click(function() {
    swal({
      title: "确认跳转?",
    content: {
      element: "div",
      attributes: {
        innerHTML: "将使用第三方网站进行验证<br>更多内容查看<a href='https://support.qq.com/embed/phone/438362/faqs/142760' target=_blank >详细说明</a> <br><p style='color: gray; font-size: small;'>为了避免被拦截，请不要输入含有代码的内容</p>"
      }
    },
    icon: "warning",
    buttons: true,
    })
    .then((willRedirect) => {
      if (willRedirect) {
        // 跳转到指定URL
                    var inputText = $("#textInput").val();
          if (inputText == '') {
                    swal("内容不能为空", "", "error");
        }else{
        
        
        window.location.href = "https://physics-api-cn.turtlesim.com/Users?" + inputText ;
      } }
    });
  });
    });
    
   
    
    // 动态调整页面高度以适应窗口大小
    var originalHeight = window.innerHeight;
    window.addEventListener('resize', function() {
      var currentHeight = window.innerHeight;
      if (currentHeight < originalHeight) {
        document.body.style.height = originalHeight + 'px';
      } else {
        document.body.style.height = 'auto';
      }
    });
  
  function g(value){
  const specialChars = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  value = value.replace(/[&<>"']/g, char => specialChars[char]);
  return value;
  }