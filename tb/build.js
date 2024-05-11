import horses from "./mstn.json";

let total = horses.length;
let css = (await Bun.file("main.css").text()).replaceAll(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text()).replaceAll(/\s/g, "").replaceAll("let", "let ").replaceAll("$total", total);
let html = (await Bun.file("main.htm").text()).replaceAll(/\n/g, "").replaceAll("$total", total).replace("/*css*/", css).replace("/*js*/", js);
let mainNameForDebug = [];
let hrefsForDebug = [];
let namesForDebug = [];
let duplName = ["-", "Eclipse"];

for (let i = 0; i < total; ++i) {
  html += "<p>";
  // Debug
  let mainName = horses[i][0].name;
  !duplName.includes(mainName) && mainNameForDebug.includes(mainName) ? console.log(mainName) : mainNameForDebug.push(mainName);

  for (let j = 0; j < 4; ++j) {
    let { name, year, cnty, sex, tb, href, mstn } = horses[i][j];
    if (href) {
      // Debug
      let hrefsIdx = hrefsForDebug.indexOf(href);
      if (hrefsIdx < 0) {
        hrefsForDebug.push(href);
        namesForDebug.push(name);
      } else if (namesForDebug[hrefsIdx] != name) {
        console.log(horses[i]);
      }

      let host = href.slice(8, href.indexOf("/", 10));
      if (host == "www.jbis.or.jp")
        href = " href=" + href.slice(-11);
      else if (host == "www.pedigreequery.com")
        href = " href=//www.pedigreequery.com/" + href.slice(30).split("+").map(v => v.length < 3 ?  v : v[0].toUpperCase() + v.slice(1)).join("+");
      else if (host == "www.allbreedpedigree.com")
        href = " href=//www.allbreedpedigree.com/" + href.slice(33).split("+").map(v => v.length < 3 ? v : v[0].toUpperCase() + v.slice(1)).join("+");
      else
        href = " href=" + href.slice(6);
    }
    mstn = mstn ? mstn == "CC" ? " s" : mstn == "CT" ? " a" : " e" : "";
    html += `<a${href}${mstn}>${name}\u000a${year ? year : ""}${cnty ? "-" + cnty : cnty}${j ? "" : year || cnty ? "-" + sex : sex} ${tb ? "" : year || cnty ? " *" : "*"}`;
  }
  html += "</a>"
}

html += "</p>by <a href=//ariamaranai.github.io/ Class=p>@ariamaranai";
Bun.write("../../index.htm", html);
console.log(`size: ${Bun.gzipSync(Buffer.from(html)).length}`);
