function selectStep(n) {
  if(n==1) {
    $(".progress-container span").removeClass("cycle-pager-active");
    $(".progress-container span:first-child").addClass("cycle-pager-active");
  } else if (n==2) {
    $(".progress-container span").removeClass("cycle-pager-active");
    $(".progress-container span:nth-child(2)").addClass("cycle-pager-active");
  } else if (n==3) {
    $(".progress-container span").removeClass("cycle-pager-active");
    $(".progress-container span:nth-child(3)").addClass("cycle-pager-active");
  } else if (n==4) {
    $(".progress-container span").removeClass("cycle-pager-active");
    $(".progress-container span:nth-child(4)").addClass("cycle-pager-active");
  } else if (n==5) {
    $(".progress-container span").removeClass("cycle-pager-active");
    $(".progress-container span:nth-child(5)").addClass("cycle-pager-active");
  }
  $(".content-switcher").hide();
  $(".content"+n).show();
  return false;
}

function nextValue() {
  for(var i=0; i<5; i++) {
    var newValue = i+1;
    var isVisible;
    isVisible = $(".content"+i).is(":visible");
    if(isVisible) {
      $(".content-switcher").hide();
      $(".content"+newValue).show();
      $(".progress-container span").removeClass("cycle-pager-active");
      $(".progress-container span:nth-child(" + newValue + ")").addClass("cycle-pager-active");
      break;
    }
    if(i == 4) {
      $(".content-switcher").hide();
      $(".content1").show();
      $(".progress-container span").removeClass("cycle-pager-active");
      $(".progress-container span:nth-child(1)").addClass("cycle-pager-active");
      break;
    }

  }
}

function preValue() {
  for(var i=6; i>1; i--) {
    var newValue = i-1;
    var isVisible = true;
    isVisible = $(".content"+i).is(":visible");
    if(isVisible) {
      $(".content-switcher").hide();
      $(".content"+newValue).show();
      $(".progress-container span").removeClass("cycle-pager-active");
      $(".progress-container span:nth-child(" + newValue + ")").addClass("cycle-pager-active");
      break;
    }
    if(i == 2) {
      $(".content-switcher").hide();
      $(".content5").show();
      $(".progress-container span").removeClass("cycle-pager-active");
      $(".progress-container span:nth-child(5)").addClass("cycle-pager-active");
      break;
    }


  }
}

function do_slide(){
  interval = setInterval(function(){
    nextValue();
  }, 8000);
}

do_slide();

$('.content-switcher').hover(function(){
  clearInterval(interval);
});
$('.content-switcher').mouseleave(function(){
  do_slide();
});
