let a = [[1,2,3],[4,5,6],[7,8,9]];
let b = [[10,11,12],13,14];
let d = [15,16,17,18];
let c = [];
c.push(a);
c.push(b);
c.push(d);
console.log('a.length: ', a.length);
//console.log('a.sort: ', a.reverse());
document.write(c);
c.pop();
document.write('<br />')
document.write(c);
a.shift();
document.write('<br />')
document.write(a);
c.unshift([0]);
document.write('<br />')
document.write(c);

/* for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a.length; k++) {
         
         console.log('['+i+']['+k+']: ', a[i][k]);
        
    }
    
} */