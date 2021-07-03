const fn = arr => arr.map(el => {
    const item = document.createElement('div');
    item.textContent = el;
  
    return item;
   });
  
  console.log(fn(['html', 'css', 'js', 'react']));
