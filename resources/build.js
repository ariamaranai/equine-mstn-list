import horses from "./mstn.json";

let total = horses.length;
let css = (await Bun.file("main.css").text()).replaceAll(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text()).replaceAll(/\s/g, "").replaceAll("let", "let ").replaceAll("$total", total);
let html = (await Bun.file("main.htm").text()).replaceAll(/\n/g, "").replaceAll("$total", total).replace("/*css*/", css).replace("/*js*/", js);

for (let i = 0; i < total; ++i) {
  html += "<p>";
  for (let j = 0; j < 4; ++j) {
    let h = horses[i][j];
    let href = h.href;
    let mstn = h.mstn;
    if (href) {
      let host = href.slice(8, href.indexOf("/", 10));
      if (host == "www.jbis.or.jp")
        href = " href=" + href.slice(-11);
      else if (host == "www.pedigreequery.com")
        href = " href=//www.pedigreequery.com/" + href.slice(30).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+");
      else if (host == "www.allbreedpedigree.com")
        href = " href=//www.allbreedpedigree.com/" + href.slice(33).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+");
      else
        console.log(href = "href=" + href);
    } else
      href = "";
    mstn = mstn ? mstn == "CC" ? " s" : mstn == "CT" ? " a" : " e" : "";
    html += `<a${href}${mstn}>${h.name}\u000a${h.year}-${h.cnty}${j ? "" : "-" + h.sex}`;
  }
  html += "</a>"
}

html += "</p>by <a href=//ariamaranai.github.io/ Class=p>@ariamaranai";
Bun.write("../index.htm", html);
console.log(`size: ${Bun.gzipSync(Buffer.from(html)).length}`);