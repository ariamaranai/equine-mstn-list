import horses from "./../../equine-lib/mstn-tb.json";

let total = horses.length;
let sort = arr => arr.toSorted((a, b) => a[0] != b[0] && a[0] < b[0] || -1).map(v => v[1] + 1);
let orderSire = sort(horses.map((v, i) => [v[1].name, i]));
let orderDam = sort(horses.map((v, i) => [v[2].name, i]));
let orderDamSire = sort(horses.map((v, i) => [v[3].name, i]));
let orders = `[[0,${orderSire}],[0,${orderDam}],[0,${orderDamSire}]]`;
let css = (await Bun.file("main.css").text())
  .replace(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text())
  .replace(/(?<!let)\s/g, "")
  .replaceAll("elseif", "else if")
  .replaceAll("$total", total)
  .replace("$orders", orders)
  .replace("elsel", "else l")
  .replace("(^|)", "(^| )");
let html = (await Bun.file("main.htm").text())
  .replaceAll("\n", "")
  .replaceAll("$total", total)
  .replace("/*css*/", css);

for (let i = 0; i < total; ++i) {
  html += "<p>";
  for (let j = 0; j < 4; ++j) {
    let { name, year, cnty, sex, href, mstn } = horses[i][j];
    if (href) {
      let host = href.slice(8, href.indexOf("/", 10));
      href = " href=" + (
        host == "www.pedigreequery.com"
        ? href.slice(30).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+")
        : host == "www.allbreedpedigree.com"
          ? "//www.allbreedpedigree.com/" +
            href.slice(33).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+") 
          : href.slice(6)
      );
    }
    let mstnAttr = mstn
      ? mstn == "CC" ? " r"
      : mstn == "CT" ? " a"
      : mstn == "TT" ? " e"
      : mstn[0] == "C" ? " h"
      : mstn[0] == "T" ? " s"
      : ""
      : "";
    html +=
      `<a${href}${mstnAttr}>${name}\u000a${
        year 
          ? cnty
            ? year + "-" + cnty
            : year
          : cnty
            ? cnty
            : ""
        }${
          j
            ? ""
            : sex
              ? "-" + sex
              : ""
        }${
          (mstn = mstn[1]) >= "0" && mstn <= "9"
            ? " [" + mstn + "]"
            : ""
        }`;
  }
  html += "</a>";
}
Bun.write("../s.js", js);
Bun.write("../index.htm", html = html.slice(0, -4));
console.log(`html size: ${Bun.gzipSync(Buffer.from(html)).length}`);
console.log(`js size: ${Bun.gzipSync(Buffer.from(js)).length}`);