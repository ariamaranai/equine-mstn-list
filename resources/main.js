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
      while (n[r].setAttribute("style", d[r].includes(l) ? (++i, "") : "display:none"), --r);
      s.textContent = i
    } else if (d) {
      while (n[r].style = "", --r);
      s.textContent = $total
    }
  },
  addEventListener("wheel", Number.isInteger(devicePixelRatio) ?
    e => (e.preventDefault(), scrollBy(0, e.deltaY > 0 ? 40 - t.scrollTop % 40 || 40 : - t.scrollTop % 40 || -40)) :
    e => (e.preventDefault(), scrollBy(0, e.deltaY > 0 ? 40 : -40)), { passive: !1 });
  let t = document.body, n, s = r.nextSibling, d
}