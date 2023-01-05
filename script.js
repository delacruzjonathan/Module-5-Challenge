
$(function () {
 
  var time = [];
  $('.saveBtn').click(function(event){
    event.preventDefault();
    var elId = $(this).parent().attr('id');
    var textarea = $(this).siblings('textarea');
    var textareaValue = textarea.val()
    time.push(elId);
    console.log(time);
    localStorage.setItem(elId,textareaValue)

  });
  
  function setTime() {
    $(".time-block").each(function() {
      var timeSection = parseInt($(this).attr("id").replace("hour-",""));
      var currentSection = parseInt(dayjs().format("H"));
  
      $(this).removeClass("past present future");

      if(timeSection < currentSection) {
        $(this).addClass("past");
      } else if (timeSection > currentSection) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
  }
  
    setTime();
  
    setInterval(function(){
    setTime();
  });
    
      //stores text in local storage
    var textareas = $('textarea');
    for (var x = 0; x< localStorage.length; x++ ) {
      var clave = localStorage.key(x);
    
      if ($(textareas).parent().attr('id') === clave) {
        $(textareas).append(localStorage.getItem(clave));

        //clears written information, in theory
        $('#clearSchedule').click(function() {
          localStorage.clear();
          location.reload();

      })
    } 

  }
  // presents current time
  var presentTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  $('#currentDay').append(presentTime);
});
