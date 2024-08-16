let ser = prompt('введит число бананов')


let i = 2
      do {
            console.log(1 + ' banana');
            
            
      }while (i>ser);
      do {
            console.log(i + ' bananas');
            i++
            
      }while (i<ser);

            
let sj = prompt('введите число чтобы найти сумму четных чисел')
let sum = 0
for (let i = 0; i<=sj;i++) 
    if (i%2==0) 
      sum+=i;
console.log(sum);
alert('Посмотрите ответ в консоли')





let a = prompt('введите число');
let b = prompt('введите степень')
alert('число- '+ a +
      ' степень- ' + b +
      ' ответ- ' + a**b
)
