onload =t=>
  addEventListener('wheel', Number.isInteger(t = a.nextSibling.getBoundingClientRect().height) ? 
      n => n.preventDefault(document.body.scrollTop += n.deltaY > 0 ? t - document.body.scrollTop % t || t : -document.body.scrollTop % t || -t) :
      n => n.preventDefault(document.body.scrollTop += n.deltaY > 0 ? t : -t),
  { passive: !1 }),
ondragstart =n=> !1,
oninput =n=> {
  let e = document.body.children, r = $total, t = 0;
  while (e[r].className = e[r].textContent.includes(n.target.value) ? '' : (++t,'p'), --r);
  p.textContent = t
}