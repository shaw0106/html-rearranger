var $aboveList = $('<ul>');
var $belowList = $('<ul>');

$('body').append('<h1>Below ground veggies</h1>');
$('body').append($belowList);
$('body').append('<h1>Above ground veggies</h1>');
$('body').append($aboveList);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $belowList.append($(this));
  } else {
    $aboveList.append($(this));
  }
});
