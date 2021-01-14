function getQuote() {
  $.ajax({
    type: "GET",
    url: "https://v1.hitokoto.cn?c=a",
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: "hitokoto",
    success(data) {
      let json = JSON.parse(data);
      $("#text").text(json.hitokoto);
      $("#author").text(`—— 「${json.from}」`);
      $("#tweet-quote").attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
          encodeURIComponent('"' + json.hitokoto + '" ' + json.from)
      );
    },
    error(jqXHR, textStatus, errorThrown) {
      console.error(textStatus, errorThrown);
    },
  });
}

$(document).ready(function () {
  getQuote();
});

$("#new-quote").click(function () {
  getQuote();
});
