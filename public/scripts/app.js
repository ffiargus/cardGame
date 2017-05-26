$(() => {
  $.ajax({
    method: "GET",
    url: "/"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.username).appendTo($("body"));
    }
  });

  $("#play-btn").on("click", () => {
    $.ajax({
      method: "POST",
      url: "/battle"
    }).done(() => {
      console.log("going to match");
      })
  });
});
