$(document).ready(function(){
  $("#btn").click(function(){
    let content = $("#content").val()

    if (content.indexOf("<script>") >= 0){
      alert("CTF{l2-xsS-doNe}")
    }else {
      $('#hedding').text(content)
    }
  })
})
