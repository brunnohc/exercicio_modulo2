$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    $(document).ready(function() {
        $('#task-form').submit(function(event) {
          event.preventDefault();
          var taskName = $('#task-input').val();
          if (taskName !== '') {
            var listItem = $('<li>' + taskName + '</li>');
            listItem.click(function() {
            $(this).toggleClass('completed');
            });
            $('#task-list').append(listItem);
            $('#task-input').val('');
            $(listItem).onclick('completed');
          }
            });
          });
            });

