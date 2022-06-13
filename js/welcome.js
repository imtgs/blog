function welcome(){
  let welcome_text = '欢迎光顾XShaw的博客~'
  if(document.referrer!==''){
    let referrer=document.referrer.split("/")[2];
    welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
    if(referrer.toUpperCase()==document.domain.toUpperCase())return;
  }
  swal({
    title: " 欢迎！",
    text: welcome_text,
    imageUrl: "https://s2.loli.net/2022/05/08/cQ48WlKO3NuoESs.jpg",
    timer: 3000,
    showConfirmButton: false
  });
}
$(document).ready(()=>{
    welcome()
})

