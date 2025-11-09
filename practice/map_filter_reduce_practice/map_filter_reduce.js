const QUESTION1 = ["### **1. Festival Ribbon Count**", "A craft booth cuts ribbons of different colors throughout the day:", ["red", "blue", "red", "green", "red", "blue"], "They want to know how many **blue** ribbons were cut."];
const QUESTION2 = ["### **2. Stargazing Log**", "A stargazing club logs visible constellations from each night:", [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]], "Combine everyone’s observations into one list of all constellations spotted."]
const QUESTION3 = ["### **3. Birdwatching Duplicate Removal**", "A birdwatcher notes species seen during a morning walk:", ["sparrow", "crow", "sparrow", "eagle", "crow"], "Create a list of the species without repeats, preserving the order first seen."]
const QUESTION4 = ["### **4. Classroom Attendance Check**", "A class records names of students present for each period:", [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]], "Determine which distinct students attended at least once."]
const QUESTION5 = ["### **5. Candy Jar Stocking**", "A store logs candy refills like this:,", [[5, 3], [2], [4, 1]], "Find the total number of candies added."]
const QUESTION6 = ["### **6. Music Rehearsal Notes**", "Choir groups practice with sequences:", [["mi", "fa", "so"], ["do", "mi"], ["fa"]], "Check whether **any** group sang `do`."]
const QUESTION7 = ["### **7. Weather Sensor Validation**", "Several temperature sheets:", [[22, 23], [25, 24, 22], [29]], "Check if **every** recorded temperature is below 32."]
const QUESTION8 = ["### **8. Fitness Tracker Miles**", "Runner logs:", [[2, 3, 2], [4], [1, 1]], "Find the total miles run."]
const QUESTION9 = ["### **9. Art Workshop Color Variety**", "Paint colors used in sessions:", [["blue", "yellow"], ["yellow", "green"], ["blue"]], "Find unique colors used."]
const QUESTION10 = ["### **10. Library Return Counter**", "Books returned:", [["Dune", "Dune", "Foundation", "Dune"]], "Count how many times 'Dune' was returned."];
const QUESTION11 = ["### **11. Lunchbox Ingredient Inventory**", "Lists of ingredients:", [["rice", "lentils"], ["rice"], ["curd", "lentils"]], "Produce a list of distinct ingredients."];
const QUESTION12 = ["### **12. Choir Harmony Review**", "Singers produce sequences:", [["la", "la"], ["mi"], ["so", "la"]], "Check whether any group sang 'so'."];
const QUESTION13 = ["### **13. Vegetable Crate Totals**", "Crate weights:", [[4, 6], [2, 3, 1], [5]], "Find the sum of all weights."];
const QUESTION14 = ["### **14. Post Office Parcel Record**", "Parcel sizes logged:", [["small", "large", "medium", "small"]], "Find unique parcel sizes."];
const QUESTION15 = ["### **15. Wildlife Sighting Count**", "Animal sightings:", [["deer", "deer", "rabbit", "deer"]], "Count how many times 'deer' was seen."];
const QUESTION16 = ["### **16. Study Group Completion**", "Study groups finish chapters:", [[1, 2], [3], [2, 4, 1]], "Find all chapters completed by any group."];
const QUESTION17 = ["### **17. Dance Class Steps**", "Step sequences:", [["step", "tap"], ["turn", "step"]], "Check if 'turn' appears in any sequence."];
const QUESTION18 = ["### **18. Garden Watering Amount**", "Water used:", [[1, 2, 1], [3], [2]], "Total amount of water used."];
const QUESTION19 = ["### **19. Paper Crane Making**", "Origami students make cranes in sessions:", [[3, 2], [1], [4]], "Compute the total cranes."];
const QUESTION20 = ["### **20. Fruit Basket Inventory**", "Mixed fruits recorded:", [["apple", "banana"], ["apple"], ["apple", "orange"]], "List unique fruits used."];
const QUESTION21 = ["### **21. Classroom Pen Distribution**", "Pens given:", [[2, 3], [1], [3, 2]], "Total pens handed out."];
const QUESTION22 = ["### **22. Movie Marathon Titles**", "Movies watched:", [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]], "List unique titles watched."];
const QUESTION23 = ["### **23. Name Badge Sorting**", "Students sign in repeatedly:", [["A", "B", "A", "C", "B"]], "Create a unique list of attendees."];
const QUESTION24 = ["### **24. Ice Cream Orders**", "Orders recorded:", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], "Find how many orders were 'chocolate'."];
const QUESTION25 = ["### **25. Flowers in Bouquets**", "Bouquets contain:", [["rose", "lily"], ["lily", "tulip"]], "List all unique flowers used."];
const QUESTION26 = ["### **26. Morning Exercise Count**", "Repetitions:", [[10, 20], [5], [15, 10]], "Total repetitions done."];
const QUESTION27 = ["### **27. Train Station Announcements**", "Stations announced:", [["A", "B"], ["B", "C"], ["A"]], "Find the station names without repeats."];
const QUESTION28 = ["### **28. Book Club Pages Read**", "Groups read pages:", [[12, 10], [5], [8, 7]], "Find total pages read."];
const QUESTION29 = ["### **29. Rainfall Data Check**", "Measurements:", [[3, 4], [5, 2], [1]], "Check if all values are positive."];
const QUESTION30 = ["### **30. Fruit Stand Weight Totals**", "Weights:", [[4, 3], [2], [3, 1]], "Compute total weight."];
const QUESTION31 = ["### **31. School Snack List**", "Snacks:", [["idli", "vada"], ["vada", "upma"]], "Unique snacks served."];
const QUESTION32 = ["### **32. Photo Contest Entries**", "Photographers submit sets:", [["sunset", "bird"], ["river"], ["sunset"]], "List unique themes."];
const QUESTION33 = ["### **33. Electricity Reading Validation**", "Readings:", [[110, 115], [118], [109]], "Check if all readings are below 120."];
const QUESTION34 = ["### **34. Jogging Lap Count**", "Laps:", [[2, 3, 2], [1], [4]], "Compute total laps."];
const QUESTION35 = ["### **35. Music Playlist Repeats**", "Songs played:", [["track1", "track2", "track1"]], "Count occurrences of 'track1'."];
const QUESTION36 = ["### **36. Café Order Ingredients**", "Ingredients:", [["cheese", "bread"], ["tomato"], ["bread"]], "Unique ingredients needed."];
const QUESTION37 = ["### **37. Student Poetry Words**", "Word lists:", [["sky", "blue"], ["night"], ["sky", "dark"]], "List all unique words."];
const QUESTION38 = ["### **38. Gift Box Items**", "Items:", [["toy", "sticker"], ["candy", "sticker"]], "List unique items used."];
const QUESTION39 = ["### **39. Gym Routine Count**", "Routine counts:", [[6, 4], [3, 2]], "Total counts."];
const QUESTION40 = ["### **40. Fish Tank Measurements**", "Measurements:", [[5, 6], [7], [6]], "Check if any measurement is above 7."];
const QUESTION41 = ["### **41. Candy Distribution**", "Candy numbers:", [[1, 2, 3], [2]], "Sum all candies."];
const QUESTION42 = ["### **42. Workshop Attendance**", "Participants:", [["Tom", "Jerry"], ["Jerry", "Spike"]], "List unique participants."];
const QUESTION43 = ["### **43. Space Camp Star Names**", "Stars named:", [["Vega", "Sirius"], ["Vega", "Rigel"]], "Unique star names."];
const QUESTION44 = ["### **44. Train Car Passenger Check**", "Counts:", [[10, 12], [15]], "Total passengers."];
const QUESTION45 = ["### **45. Weekly Grocery Tally**", "Quantities:", [[3, 5], [2, 1]], "Find the total."];
const QUESTION46 = ["### **46. Tea Tasting Flavors**", "Flavors:", [["mint", "ginger"], ["lemon"], ["mint"]], "Unique flavors."];
const QUESTION47 = ["### **47. Photography Exposure Values**", "Values:", [[2, 3], [1], [4, 2]], "Check if any value equals 4."];
const QUESTION48 = ["### **48. Drawing Class Tools**", "Tools:", [["pencil", "charcoal"], ["ink"], ["pencil"]], "Unique tools used."];
const QUESTION49 = ["### **49. Coin Collection Tally**", "Coins collected:", [[1, 1, 2], [2, 1]], "Total coins."];
const QUESTION50 = ["### **50. Cooking Class Spices**", "Spices:", [["salt", "pepper"], ["turmeric"], ["salt"]], "Unique spices used."];


const countOccurrences = (count, element, elementToFind) => {
  return element === elementToFind ? count + 1 : count;
}
const collectUniqueItems = (uniqueList, element) => {
  if (!uniqueList.includes(element)) {
    uniqueList.push(element);
  }
  return uniqueList;
}
const sumNumbers = (total, element) => {
  return total + element;
}
const matchesTarget = (element, elementToFind) => {
  return element === elementToFind;
}
const isBelowNumber = (element,elementToCheck) => {
  return element < elementToCheck;
}
const isGretterNumber = (element,elementToCheck)=>{
  return element > elementToCheck
}

const getFrequency = (data, reducer, initialValue, elementToFind) => {
  return data.flat().reduce((acc, element) => reducer(acc, element, elementToFind), initialValue);
}
const flattenLists = (data) => {
  return data.flat();
}
const removeDuplicates = (data, reducer, initialValue) => {
  return data.flat().reduce(reducer, initialValue);
}
const checkIfAnyMatch = (data, comparator, initialValue, elementToFind) => {
  return data.flat().some((element) => comparator(element, elementToFind));
}
const checkIfAllMatch = (data, condition,elementToCheck) => {
  return data.flat().every((element) => condition(element,elementToCheck));
}

const QUESTION_WITH_SOLUTION = [
  [QUESTION1, getFrequency, countOccurrences, 0, "blue"],
  [QUESTION2, flattenLists],
  [QUESTION3, removeDuplicates, collectUniqueItems, []],
  [QUESTION4, removeDuplicates, collectUniqueItems, []],
  [QUESTION5, removeDuplicates, sumNumbers, 0],
  [QUESTION6, checkIfAnyMatch, matchesTarget, 0, "do"],
  [QUESTION7, checkIfAllMatch, isBelowNumber,32],
  [QUESTION8, removeDuplicates, sumNumbers, 0],
  [QUESTION9, removeDuplicates, collectUniqueItems, []],
  [QUESTION10, getFrequency, countOccurrences, 0, "Dune"],
  [QUESTION11, removeDuplicates, collectUniqueItems, []],
  [QUESTION12, checkIfAnyMatch, matchesTarget, 0, "so"],
  [QUESTION13, removeDuplicates, sumNumbers, 0],
  [QUESTION14, removeDuplicates, collectUniqueItems, []],
  [QUESTION15, getFrequency, countOccurrences, 0, "deer"],
  [QUESTION16, removeDuplicates, sumNumbers, 0],
  [QUESTION17, checkIfAnyMatch, matchesTarget, 0, "turn"],
  [QUESTION18, removeDuplicates, sumNumbers, 0],
  [QUESTION19, removeDuplicates, sumNumbers, 0],
  [QUESTION20, removeDuplicates, collectUniqueItems, []],
  [QUESTION21, removeDuplicates, sumNumbers, 0],
  [QUESTION22, removeDuplicates, collectUniqueItems, []],
  [QUESTION23, removeDuplicates, collectUniqueItems, []],
  [QUESTION24, getFrequency, countOccurrences, 0, "chocolate"],
  [QUESTION25, removeDuplicates, collectUniqueItems, []],
  [QUESTION26, removeDuplicates, sumNumbers, 0],
  [QUESTION27, removeDuplicates, collectUniqueItems, []],
  [QUESTION28, removeDuplicates, sumNumbers, 0],
  [QUESTION29, checkIfAllMatch, isGretterNumber,0],
  [QUESTION30, removeDuplicates, sumNumbers, 0],
  [QUESTION31, removeDuplicates, collectUniqueItems, []],
  [QUESTION32, removeDuplicates, collectUniqueItems, []],
  [QUESTION33, checkIfAllMatch, isBelowNumber,120],
  [QUESTION34, removeDuplicates, sumNumbers, 0],
  [QUESTION35, getFrequency, countOccurrences, 0, "track1"],
  [QUESTION36, removeDuplicates, collectUniqueItems, []],


]

const showResult = (question, functionToUse, operation, initialValue, elementToFind) => {
  const data = question[2];
  console.log(question.join("\n"));
  const result = functionToUse(data, operation, initialValue, elementToFind);
  console.log("result", result);
  console.log("\n");
}
const solution = () => {
  QUESTION_WITH_SOLUTION.forEach(element =>
    showResult(element[0], element[1], element[2], element[3], element[4])
  )
}

solution();