const lengthOfLongest = (string) => {
    // Initialize your variables need it 
      let max = 0;
      let windowStart = 0;
    //Initialize what will be your HashTable but as an JS object
      const hashTable = {};
      for(let windowEnd = 0; windowEnd < string.length; windowEnd++){
          let rightChar = string[windowEnd];
        // when working with objects you have to populate them manually
          hashTable[rightChar] = hashTable[rightChar] + 1 || 1;
  
        //checking that the hashtable object doesn't have values greater than one
          while(hashTable[rightChar] > 1){
              let leftChar = string[windowStart];
  
              if(hashTable[leftChar] > 1){
                  hashTable[leftChar]--;
              } else{
                  delete hashTable[leftChar];
              }
  
              windowStart++;
          }
  
        //check what is the max still inside the for loop
          max = Math.max(max, (windowEnd - windowStart) + 1);
      }
  
      return max;
  };
  
  console.log(lengthOfLongest("pwwkew"));