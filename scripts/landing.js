
// jquery function that enables the buttons to collapse on hover
// should refactor for cleaner dryer code.

$(".service-times").hover(
     function() {
        $('#connect').collapse('show');
      }, function() {
        $('#connect').collapse('hide');
      }
    );
$(".growing").hover(
     function() {
        $('#grow').collapse('show');
      }, function() {
        $('#grow').collapse('hide');
      }
    );

$(".ministries").hover(
     function() {
        $('#serve').collapse('show');
      }, function() {
        $('#serve').collapse('hide');
      }
    );
