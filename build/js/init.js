var bindToClick = function(theme, points) {
  let selection = '#tm' + theme + '-' + points;
  $(selection).leanModal();
};

var removeClick = function(theme, points) {
  let selection = '#tm' + theme + '-' + points;
  $(selection).off('click');
}
