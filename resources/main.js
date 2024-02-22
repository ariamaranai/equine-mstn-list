addEventListener('wheel', Number.isInteger(devicePixelRatio) ? 
  n => n.preventDefault(document.body.scrollTop += n.deltaY > 0 ? 32 - document.body.scrollTop % 32 || 32 : -document.body.scrollTop % 32 || -32) :
  n => n.preventDefault(document.body.scrollTop += n.deltaY > 0 ? 32 : -32),
{ passive: !1 }),
ondragstart =n=> !1,
oninput =n=> {
  let e = document.body.children, r = $total, t = 0;
  while (e[r].className = e[r].textContent.includes(n.target.value) ? '' : (++t,'a'), --r);
  p.textContent = t
}