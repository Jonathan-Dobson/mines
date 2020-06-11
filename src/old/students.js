var students = []
for (let i=0 ; i<document.querySelectorAll('#hyperbaseContainer > div:nth-child(7) > div > div > div.overflow-auto.relative > div > div > div > div').length ; i++){
    students.push(document.querySelectorAll('#hyperbaseContainer > div:nth-child(7) > div > div > div.overflow-auto.relative > div > div > div > div:nth-child('+i+') > div > div.flex-auto.p1 > div.flex-inline.col-12 > div > div')[0].innerText)
}
console.log(students);