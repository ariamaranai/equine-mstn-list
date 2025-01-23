ondragstart = e => !1;
{
  e.oninput = e => {
    let r = $total, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      if (n ??= [...t.children], l--)
        while (t.appendChild(n[$orders[l][r]]), --r);
      else
        while (a.after(n[r]), --r);
  },
  r.oninput = e => {
    let r = $total, l = e.target.value.toLowerCase().replace(/[^\u0020a-z\u30a1-\u30fc]/g, ""), i = 0;
    if (l) {
      d ??= (n ??= [...t.children]).map(e => e.textContent.toLowerCase());
      while (n[r].setAttribute("style", d[r].includes(l) ? (++i, "") : "display:none"), --r);
      s.textContent = i
    }
  },
  addEventListener("wheel", Number.isInteger(devicePixelRatio) ?
    e => (e.preventDefault(), scrollBy(0, e.deltaY > 0 ? 40 - t.scrollTop % 40 || 40 : - t.scrollTop % 40 || -40)) :
    e => (e.preventDefault(), scrollBy(0, e.deltaY > 0 ? 40 : -40)), { passive: !1 });
  let t = document.body, n, s = a.children[1], d
}