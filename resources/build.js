import horses from "./mstn.json";

let total = horses.length;
let css = (await Bun.file("main.css").text()).replaceAll(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text()).replaceAll(/\s/g, "").replaceAll("let", "let ").replaceAll("$total", total);
let html = (await Bun.file("main.htm").text()).replaceAll(/\n/g, "").replaceAll("$total", total).replace("/*css*/", css).replace("/*js*/", js);

for (let horse of horses) {
  html += "<p>";
  for (let i = 0; i < 4; ++i) {
    let h = horse[i];
    let href = h.href;
    let mstn = h.mstn;
    if (href)
      if (href[12] == "j")
        href = " href=" + href.slice(-11);
      else
        href = " href=//www.pedigreequery.com/" + href.slice(30).split("+").map(v => v[0].toUpperCase() + v.slice(1)).join("+");
    else
      href = "";
    mstn = mstn ? mstn == "CC" ? " s" : mstn == "CT" ? " a" : " e" : "";
    html += `<a${href}${mstn}>${h.name}\u000a${h.year}-${h.cnty}${i ? "" : "-" + h.sex}`;
  }
  html += "</a>";
}

html += "</p>by <a href=//ariamaranai.github.io/ Class=p>@ariamaranai";
Bun.write("../index.htm", html);
console.log(`size: ${Bun.gzipSync(Buffer.from(html)).length}`);