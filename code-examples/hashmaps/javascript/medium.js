//code example ussing Slides Window approach!

const lengthOfLongestSubstring = (string) => {
    // Store counters for the the start of the window and the longest string's length
    let startOfWindow = 0;
    let longestStringLength = 0;

    // Initialise a Map to store the characters of the current string
    let characterMap = new Map();

    // Loop through the provided string
    for (let i = 0; i < string.length; i++) {
        // Store the current character, and its position in the Map (saves repeatedly looking it up)
        let currentCharacter = string[i];
        let currentCharacterPositionInMap = characterMap.get(currentCharacter);

        // Check if current character exists in the Map, and was found within the current window
        if (currentCharacterPositionInMap >= startOfWindow) {
            // Move the current window to start after the first instance of the current character
            startOfWindow = currentCharacterPositionInMap + 1;
        }

        // Add the current character to the Map with its position in the string
        characterMap.set(currentCharacter, i);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            i - startOfWindow + 1
        );
    }

    return longestStringLength;
};

console.log(lengthOfLongest("abcabcbb"));