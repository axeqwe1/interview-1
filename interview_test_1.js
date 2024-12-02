
const FindNumberMissingInArray = (arr) => {
    const min = Math.min(...arr) // ประกาศตัวแปรหาค่า min หรือ ค่าน้อยที่สุด ใน array 
    const max = Math.max(...arr) // ประกาศตัวแปรหาค่า max หรือ ค่ามากที่สุด ใน array 

    // เป็นสูตรใช้คำนวนหาผลรวมของเลขทั้งหมดในช่วงตั้งแต่ min ถึง max ของArray โดยไม่ต้องวนลูปคำนวนทีละค่า (สูตรนี้ผมหาจาก ChatGPT)
    let expectedSum = (max * (max + 1)) / 2 - (min * (min - 1)) / 2;
    let totalSum = 0;
    // วนลูปเพื่อรวมค่าผลลัพใน Array
    for (let i = 0; i < arr.length; i++){
        totalSum += arr[i]
    }
    // console.log(`expectedSum - totalSum : ${expectedSum} - ${totalSum}`)
    const result = expectedSum - totalSum // นำค่าที่ควรจะเป็นไปลบกับ ผลรวมจริงๆ

    // เขียนตรวจสอบเงื่อนไขว่า ถ้าผลลัพน้อยกว่าหรือเท่ากับ 0 ให้ return คำว่า None ไป ถ้าไม่ตรงเงื่อนไขให้ return ผลลัพออกไป
    if(result <= 0){
        return `None`       
    }else{
        return result
    }
}

const arr1 = [1,2,4,5,6]
const arr2 = [10,11,12,14]
const arr3 = [3,4,5,6,7]
console.log(`Missing Number is : ${FindNumberMissingInArray(arr1)}`)
console.log(`Missing Number is : ${FindNumberMissingInArray(arr2)}`)
console.log(`Missing Number is : ${FindNumberMissingInArray(arr3)}`)