import horses from "./mstn.json";

let total = horses.length;
let css = (await Bun.file("main.css").text()).replaceAll(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text()).replaceAll(/\s/g, "").replaceAll("let", "let ").replace("$total", total);
let html = (await Bun.file("main.htm").text()).replaceAll(/\n/g, "").replaceAll("$total", total).replace("/*css*/", css).replace("/*js*/", js);

for (let y = 0;;) {
  html += "<p>";
  for (let row = horses[y], x = 0; x < 4; ++x) {
    let cell = row[x];
    let href = cell.href;
    let mstn = cell.mstn;
    html += `<a${href && " href=" + href.slice(href[12] == "j" ? -11 : 6)}` +
            `${mstn ? mstn == "CC" ? " s" : mstn == "CT" ? " a" : " e" : ""}>` +
            `${cell.name}\u000a${cell.year}.${cell.cnty} ${cell.sex}`;
  }
  html += "</a>";
  if (++y == total) {
    html += "</p>by <a href=//ariamaranai.github.io/ style=color:#cb0>@ariamaranai";
    break;
  }
}

Bun.write("../index.htm", html);
let size = Bun.gzipSync(Buffer.from(html));
console.log("size: " + size.length);