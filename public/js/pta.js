/* eslint-disable no-undef */
(function() {
  let questionSet = [];
  $("div[class*='generalProblemBody']").each(function() {
    let question = {
      topic: null,
      options: [],
      answer: ""
    };
    $(this)
      .find(".form-check .form-check-label")
      .each(function() {
        question.options.push(
          $(this)
            .html()
            .replace(/<(?!\/?img.+?)[^<>]*>/gi, "")
            .trim()
        );
        question.answer = $(this)
          .find("input")
          .attr("answer");
      });
    question.topic = $(this)
      .find(".form-check")
      .prev()
      .html()
      .replace(/<(?!\/?img.+?)[^<>]*>/gi, "")
      .replace(/\(.*\)/, "")
      .trim();
    console.log(question);
    questionSet.push(question);
  });
  saveJSON(
    `${window.location.href}.json`,
    JSON.stringify(questionSet, null, "\t")
  );
})();
