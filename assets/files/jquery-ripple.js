$('body').ripples({
  resolution: 512,   
  dropRadius: 25,
  perturbance: 0.04,
});

$('body').find('canvas').css({
  'z-index': -1,
});
$('body').find('#canvas').css({
  'z-index': 1,
});