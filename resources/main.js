ondragstart = e => !1;
{
  e.oninput = e => {
    let r = 0, l = e.target.selectedIndex;
    if (l > 3)
      location.href = "//ariamaranai.github.io";
    else
      while (t.appendChild(n[l ? $orders[l - 1][r] : r]), ++r < $total);
  },
  r.oninput = e => {
    let r = 0, l = e.target.value.replace(/[^-\w \u30a1-\u30fc]/g, ""), i = 0;
    if (l) {
      l = l[l[0] < ":" ? "toUpperCase" : "toLowerCase"]();
      while (n[r].className = d[r].includes(l) ? (++i, "") : "a", ++r < $total);
      s.textContent = i
    } else {
      while (n[r].className = "", ++r < $total);
      s.textContent = "$total"
    }
  },
  addEventListener("wheel", e => {
    let r = t.scrollTop % 44;
    e.preventDefault(scrollBy(0, e.deltaY > 0 ? r < 1 ? 44 : 44 - r : r < 1 ? -44 : -r));
  }, { passive: !1 });
  let t = document.body, n = [...t.childNodes], d = (n.shift(), n).map(e => e.textContent), s = r.nextSibling
}