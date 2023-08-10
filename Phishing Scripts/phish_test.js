function checkIllegalHttpsURL() {
  var str1 = "//";
  var str2 = "https";
  var url = window.location.href;
  if (url.substring(url.search(str1)).match(str2) == null) {
    console.log("Nothing found");
    return -1;
  } else {
    console.log("Potential Phish");
    return 1;
  }
}

function checkHypenURL() {
  var regex = /[a-zA-Z]\//;
  var str = "-";
  var url = window.location.href;
  if (url.substring(0, url.search(regex) + 1).match(str) == null) {
    console.log("Nothing found");
    return -1;
  } else {
    console.log("Potential Phish");
    return 1;
  }
}

function checkRedirecting() {
  var regex1 = /^http:/;
  var regex2 = /^https:/;
  var str = "//";
  var url = window.location.href;
  if (
    url.search(str) == 5 &&
    regex1.exec(url) != null &&
    url.substring(7).match(str) == null
  ) {
    console.log("Nothing found");
    return -1;
  } else if (
    url.search(str) == 6 &&
    regex2.exec(url) != null &&
    url.substring(8).match(str) == null
  ) {
    console.log("Nothing found");
    return -1;
  } else {
    console.log("Potential Phish");
    return 1;
  }
}

function checkShortURL() {
  var url = window.location.href;
  if (url.length > 25) {
    console.log("Nothing found");
    return -1;
  } else {
    console.log("Potential Phish");
    return 1;
  }
}

function checkLongURL() {
  var url = window.location.href;
  if (url.length < 50) {
    console.log("Nothing found");
    return -1;
  } else if (url.length >= 50 && url.length <= 75) {
    console.log("Maybe");
    return 0;
  } else {
    console.log("Potential Phish");
    return 1;
  }
}

function checkIPURL() {
  var regex = /\d{1,3}[\.]{1}\d{1,3}[\.]{1}\d{1,3}[\.]{1}\d{1,3}/;
  var url = window.location.href;
  if (regex.exec(url) == null) {
    console.log("Nothing found");
    return -1;
  } else {
    console.log("Potential Phish");
    return 1;
  }
}

function checkFramePresent() {
  if (document.querySelectorAll("iframe").length <= 0) {
    console.log("Nothing found");
    return -1;
  } else {
    console.log("Potential Phish");
    return 1;
  }
}
