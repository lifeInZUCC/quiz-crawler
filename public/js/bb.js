/* eslint-disable no-undef */
//TODO 使用jquery重写这个文件
(function() {
  if (!/bb/.test(window.location.href)) {
    window.alert("检测到不符合目标网站");
    return;
  }
  var topic = [];
  var options = ["A", "B", "C", "D", "E", "F"];

  for (let takeQuestionDiv of document.querySelectorAll("fieldset")) {
    let temp = { title: "", choice: [], answer: "" };
    temp.title = takeQuestionDiv
      .querySelector(".vtbegenerated")
      .innerText.replace(/\s+/g, "");
    for (let i = 0; i < takeQuestionDiv.querySelectorAll("label").length; i++) {
      temp.choice.push({
        option: options[i],
        content: takeQuestionDiv
          .querySelectorAll("label")
          [i].innerText.replace(/\s+/g, "")
      });
    }
    topic.push(temp);
  }
  saveJSON(
    `${window.location.href}.json`,
    JSON.stringify(questionSet, null, "\t")
  );
})();
