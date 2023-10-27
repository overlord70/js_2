let arr = ['alex' , 'jordan' , 'michail' , 'amira' , 'dilruh', 'alla' , 'tangir']
let question = prompt('кого нам надо удалить ?')
let idx =arr.indexOf(question)
if (idx === -1) {
    alert('pshel von')
}
arr.splice(idx , 1)
console.log(
    arr
)