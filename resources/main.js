ondragstart = e => !1;
{
  e.oninput = e => {
    let r = $total, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      if (n ??= [...t.childNodes], l--)
        while (t.appendChild(n[$orders[l][r]]), --r);
      else
        while (a.after(n[r]), --r);
  },
  r.oninput = e => {
    let r = $total, l = e.target.value.replace(/[^-\u0020\w\u30a1-\u30fc]/g, ""), i = 0;
    if (l) {
      l = l[l[0] < ":" ? "toUpperCase" : "toLowerCase"](),
      d ??= (n ??= [...t.childNodes]).map(e => e.textContent);
      while (n[r].className = d[r].includes(l) ? (++i, "") : "a", --r);
      s.textContent = i
    } else if (d) {
      while (n[r].className = "", --r);
      s.textContent = $total
    }
  },
  addEventListener("wheel", e => {
    let r = t.scrollTop % 40;
    e.preventDefault(scrollBy(0, e.deltaY > 0 ? r < 1 ? 40 : 40 - r : r < 1 ? -40 : -r));
  }, { passive: !1 });
  let t = document.body, n, s = r.nextSibling, d
}