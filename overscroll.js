document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
$('body').on('touchmove','.scrollable',function(e) {
	e.stopPropagation();
});