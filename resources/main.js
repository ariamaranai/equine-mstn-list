oninput =n=> {
  let e = document.body.children, r = $total, t = 0;
  while (e[r].className = e[r].textContent.includes(n.target.value) ? '' : (++t,'p'), --r);
  p.textContent = t
},
onload =t=> {
  Number.isInteger(t = a.nextSibling.getBoundingClientRect().height) && addEventListener('wheel', n => {
    let e = document.body.scrollTop;
    n.preventDefault(),
    document.body.scrollTop -= n.deltaY < 0 ? e % t || t : e % t - t || -t
  }, { passive: !1 })
},
ondragstart =n=> !1