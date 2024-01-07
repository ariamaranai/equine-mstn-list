addEventListener('wheel',devicePixelRatio == 1 ?
  a => a.preventDefault(document.body.scrollTop += (a.deltaY < 0 ? 0 : 41) - document.body.scrollTop % 41 || -41) :
  a => a.preventDefault(document.body.scrollTop += a.deltaY < 0 ? -41 : 41), {passive: !1}),
ondragstart =a=> !1,
oninput =a=> {
  let r = $total, s = 0, e;
  while ((e = document.body.children[r]).className = e.textContent.includes(a.target.value) ? (++s,'p') : 's', --r);
  document.getElementById("p").textContent = s
}