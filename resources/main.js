ondragstart = e => !1;
{
  e.oninput = e => {
    let r = 0, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      if (l--)
        while (t.appendChild(n[$orders[l][r]]), ++r < $total);
      else
        while (a.after(n[r]), ++r < $total);
  },
  r.oninput = e => {
    let r = 0, l = e.target.value.replace(/[^-\u0020\w\u30a1-\u30fc]/g, ""), i = 0;
    if (l) {
      l = l[l[0] < ":" ? "toUpperCase" : "toLowerCase"]();
      while (n[r].className = d[r].includes(l) ? (++i, "") : "a", ++r < $total);
      s.textContent = i
    } else {
      while (n[r].className = "", ++r < $total);
      s.textContent = $total
    }
  },
  addEventListener("wheel", e => {
    let r = t.scrollTop % 40;
    e.preventDefault(scrollBy(0, e.deltaY > 0 ? r < 1 ? 40 : 40 - r : r < 1 ? -40 : -r));
  }, { passive: !1 });
  let t = document.body, n = [...t.childNodes], s =  (n.shift(), r.nextSibling), d = n.map(e => e.textContent)
}