ondragstart =e=> !1;
{
  oninput =e=> {
    if (a ??= [...t.children], r = $total, l = (e = e.target).selectedIndex) {
      if (--l < 3)
        while (t.appendChild(a[$orders[l][r]]), --r);
      else
        (location.href = "//ariamaranai.github.io")
    } else if (l == 0)
      while (t.prepend(a[r]), --r);
    else {
      d ??= a.map(e => e.textContent.toLowerCase()),
      e = e.value.trim(l = 0).replace(/['.]/g, "").toLowerCase();
      while (a[r].setAttribute("style", d[r].includes(e) ? (++l, "") : "display:none"), --r);
      p.textContent = l
    }
  },
  addEventListener("wheel", Number.isInteger(devicePixelRatio) ?
    e => e.preventDefault(scrollBy(0, e.deltaY > 0 ? 40 - t.scrollTop % 40 || 40 : - t.scrollTop % 40 || -40)) :
    e => e.preventDefault(scrollBy(0, e.deltaY > 0 ? 40 : -40)), { passive: !1 });
  let l, t = document.body, a, d
}