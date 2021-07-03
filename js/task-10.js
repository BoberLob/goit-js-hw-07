// Что будет выведено в консоль?
//console.log('#####:smthg');
                
const fn = arr => arr.map(el => {
    const item = document.createElement('div');
    item.textContent = el;
  
    return item;
   });
  
  //console.log(fn(['html', 'css', 'js', 'react']));

console.log('##### fn([/'html/', /'css/', /'js/', /'react/'])', fn(['html', 'css', 'js', 'react']));
                
// Что будет выведено в консоль?
  const person = {
    age: 10,
    setAge(newAge) {
      this.age = newAge;
    },
    refreshAge(userId) {
      fetchAgeFromDb(function(newAge) {
        this.setAge(newAge);
      });
    },
  };
  
  function fetchAgeFromDb(cb) {
   cb(20);
  }
  
  person.refreshAge();
  //console.log(person.age);
console.log('#####:person.age', person.age);
