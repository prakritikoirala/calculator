// एक function लेख जसले एक object return गर्ने (name, age)।

// एक function बनाऊ जसले student object को marks print गरिदियो।

// person object बनाऊ जसमा greet() function राख।

// Car object बनाऊ र start() method call गर।

// Function लेख जसले object भित्रको age increment गरिदियो।

// Function बनाऊ जसले 2 object compare गरेर कुन ठूलो age छ बताओस्।

// एक function बनाऊ जसले product object return गर्नुपर्छ।

// Function बनाऊ जसले user object को name update गरिदियो।

// Object लाई parameter मा pass गरेर city print गर।

// एक function ले book object return गरिदेओ (title, author)।

// function बनाऊ जसले object को keys print गर्

// function printObject(name, age){
// name:"prakriti koirala",
// age:14,
// greet()
// console.log("hello"+this.name);


// arrow function in js


// const square = (x)=>x*x;
// console.log(square(5));

// check oddeven
const oddeven = (num)=>{
    if(num%2===0){
        console.log("it is even",num);

    }
    else{
        console.log("it is odd",num);
        return num;
    }
};
        

console.log(oddeven(5));
// console.log("it is not a odd",num);