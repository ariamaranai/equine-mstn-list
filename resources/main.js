addEventListener("wheel", e => e.preventDefault(scrollBy(0, e.deltaY > 0 ? 44 : -44)), { passive: !1 }),
ondragstart = e => !1;
{
  e.oninput = e => {
    let r = 0, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      while (r < n.length) t.appendChild(n[l ? $orders[l - 1][r] : r]), ++r;
  },
  r.oninput = e => {
    let r = 0, l = e.target.value.replace(/[^-\w \u30a1-\u30fc]/g, "");
    if (l) {
      l = l[0] < ":" ?  l.toUpperCase() : l.toLowerCase();
      let i = 0;
      while (r < n.length) n[r].className = d[r].includes(l) ? (++i, "") : "a", ++r;
      s.textContent = i
    } else {
      while (r < n.length) n[r].className = "", ++r;
      s.textContent = "$total"
    }
  };
  let t = document.body, n = [...t.childNodes], d = (n.shift(), n).map(e => e.textContent), s = r.nextSibling
}