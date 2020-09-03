/* eslint-disable no-undef */
(function() {
  let questionSet = [];
  $(".m-choiceQuestion").each(function() {
    let question = {
      topic: $(this)
        .find(".j-title .j-richTxt")
        .html()
        .replace(/<(?!\/?img.+?)[^<>]*>/gi, ""),
      options: [],
      answer: $(this)
        .find(".analysisInfo .tt2")
        .text()
        .replace("、", " ")
    };
    let qType = $(this)
      .find(".j-qacate")
      .text();
    if (qType.search("判断") != -1) {
      $(this)
        .find(".j-choicebox .f-thide span")
        .each(function() {
          question.options.push(
            $(this).attr("class") == "u-icon-correct" ? "T" : "F"
          );
        });
    } else {
      $(this)
        .find(".j-choicebox .choices label")
        .each(function() {
          question.options.push(
            $(this)
              .html()
              .replace(/<(?!\/?img.+?)[^<>]*>/gi, "")
          );
        });
    }
    questionSet.push(question);
  });
  saveJSON(
    `${window.location.href}.json`,
    JSON.stringify(questionSet, null, "\t")
  );
})();
