let binary = "0001";
let reverseBinaryString = "";

for(let i = 1; i<= binary.length; i++){
    reverseBinaryString = reverseBinaryString + binary[(binary.length -i)];
}
console.log(reverseBinaryString);

