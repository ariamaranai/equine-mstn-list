addEventListener('wheel',Number.isInteger(devicePixelRatio) ?
  a => a.preventDefault(document.body.scrollTop += (a.deltaY < 0 ? 0 : 45) - document.body.scrollTop % 45 || -45) :
  a => a.preventDefault(document.body.scrollTop += a.deltaY < 0 ? -45 : 45), {passive: !1}),
ondragstart =a=> !1,
oninput =a=> {
  let r = $total, s = 0, e;
  while ((e = document.body.children[r]).className = e.textContent.includes(a.target.value) ? (++s,'p') : 's', --r);  
  p[0].textContent = s
}