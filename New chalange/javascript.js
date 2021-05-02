$(document).ready(function(){
  $("#btn").click(function(){
    let content = $("#content").val()

    if (content.indexOf("<script>") >= 0){
      alert("CTF{l2-xsS-doNe}")
      $('#cardti').text("Cross Site Scripting (XSS)")
      $('#des').text("Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites.CLICK TO KNOW MORE.....")
      $('#link').attr("href", "https://youtu.be/HGaFCcWM57U");
    }else {
      $('#cardti').text(content)
      $('#des').text("Keep try, You will get")
    }
  })
})
