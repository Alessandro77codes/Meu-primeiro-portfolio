const data = [
    {name : 'ale1',salario : 2000,age :33, time : 'mobile' , ativo : 'true',bonus : 0},
    {name : 'darlin1',salario : 3800,age :31, time : 'fullstake' , ativo : 'true',bonus : 0},
    {name : 'ale2',salario : 6000,age :40, time : 'devjogos' , ativo : 'true',bonus : 0},
    {name : 'darlin2',salario : 8000,age :24, time : 'liderdeprojetos' , ativo : 'true',bonus : 0},
    {name : 'darlin3',salario : 10000,age :18, time : 'P.MAGEGER' , ativo : 'true',bonus : 0},
    {name : 'alessandro',salario : 9000,age :54, time : 'liderdeprojetosna gringa' , ativo : 'true',bonus : 0},
    
    ]  
    // find= o primeiro que encontrar
const user =data.find((item) =>{
    return item.salario > 5000

})
console.log(user)
const palm =data.find((item) =>{
    return item.salario < 9000

})
console.log(palm)

const lista =data.find((item) =>{
    return item.sal

})
console.log(lista)
