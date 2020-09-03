/* eslint-disable no-unused-vars */
function saveJSON(filename, data) {
  const blobData = new Blob([data], { type: "text/json" });
  const url = window.URL.createObjectURL(blobData);
  const a = document.createElement("a");
  a.download = filename;
  a.href = url;
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  const event = document.createEvent("MouseEvents");
  event.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(event);
}
