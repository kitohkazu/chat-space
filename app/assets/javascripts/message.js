$(function(){
  function buildHTML (message){
    if (message.image) {
      var html = 
        `<div class="message-list__title">
          <div class="message-list__title__name">
            ${message.user_name}
          </div>
          <div class="message-list__title__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message-list__text">
          <p class="message-list__text__content">
            ${message.content}
          </p>
          <img class="message-list__text__content" src="${message.image}">
        </div>`
      return html;
    } else {
      var html =
        `<div class="message-list__title">
          <div class="message-list__title__name">
            ${message.user_name}
          </div>
          <div class="message-list__title__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message-list__text">
          <p class="message-list__text__content">
            ${message.content}
          </p>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message-list').append(html);
      $('#message_content').val('');
    })
  })
});