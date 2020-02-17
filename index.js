$(document).ready(() => {
  slideAnim()
})

slideAnim = () => {
  //working slide animation with DELAYS controlled
  const scrollTop = $(window).height()*0.9
  const slideThis = (object, func) => {
      let pos = object.offset().top, winTop = $(window).scrollTop()
      if (pos <= winTop + scrollTop) {
          if(object.attr('class').includes('delay1')) 
              $(function() {setInterval(func, 400)})
          else if(object.attr('class').includes('delay2')) 
              $(function() {setInterval(func, 800)})
          else
              func()
      }
  }

  $(".slideanim").each(function() {
      const slide = () => $(this).addClass("slideUp")
      slideThis($(this), slide)
  })
  $(".slideanim2").each(function() {
      const slide = () => $(this).addClass("slideLeft")
      slideThis($(this), slide)
  })
  $(".slideanim4").each(function() {
      const slide = () => $(this).addClass("opaque")
      slideThis($(this), slide)
  })
}

$(window).scroll(() => {
  slideAnim()
})