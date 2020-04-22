$(function(){
    const sidebar = $('.main__sidebar')
    const footer = $('footer')
    let isShown = true;
    console.log(sidebar.scrollTop())
    $(window).scroll(function(e){
        const scrollTop = $(window).scrollTop()
        const threshold = footer.offset().top - 800
        if(!isShown && scrollTop < threshold){
            // 表示する
            console.log('表示', scrollTop, threshold)
            isShown = !isShown
            sidebar.fadeIn()
        } else if(isShown && scrollTop > threshold) {
            // 非表示にする
            console.log('非表示', scrollTop, threshold)
            isShown = !isShown
            sidebar.fadeOut();
        }
    })
})
