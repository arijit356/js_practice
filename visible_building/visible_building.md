# Assignment: Visible Buildings in a Grid

You are given a 2D grid representing a city skyline. Each cell in the grid contains a single digit (0-9) representing the height of a building at that location. Your task is to determine the total number of buildings that are visible when looking at the city from any of its four cardinal directions: top, bottom, left, and right.

A building is considered visible from a particular direction if there are no taller buildings blocking its view in that line of sight. **All buildings located on the outermost edges of the grid are considered visible.**

-----

📝 Assignment Requirements

1.  Write a function
    ``` 
    countVisibleBuildings(grid) 
    ```
    where:
      - ``` 
        grid 
        ```
        is an array of strings, where each string represents a row of building heights. Each character in the string is a digit from '0' to '9'.
2.  The function should return a
    ``` 
    Number 
    ```
    representing the total count of unique buildings visible from at least one of the four sides.
3.  If the grid is empty or invalid, return
    ``` 
    0 
    ```
    .

-----

💡 Example Usage


``` javascript
const grid1 = [
  "1212",
  "1231",
  "3143",
  "1111"
];

console.log(countVisibleBuildings(grid1)); // Expected output: 15
// All buildings other than the one at 3rd row 1st column are visible
```

-----

🧪 Test Cases

1.  **Grid:**
    
    ``` 
    [
      "1212",
      "1231",
      "3143",
      "1111"
    ] 
    ```
    
    **Expected Value:**
    
    ``` 
    15 
    ```

2.  **Grid:**
    
    ``` 
    [
      "000",
      "000",
      "000"
    ] 
    ```
    
    **Expected Value:**
    
    ``` 
    0 
    ```

3.  **Grid:**
    
    ``` 
    [
      "1",
      "2",
      "3"
    ] 
    ```
    
    **Expected Value:**
    
    ``` 
    3 
    ```

4.  **Grid:**
    
    ``` 
    [
      "111",
      "191",
      "111"
    ] 
    ```
    
    **Expected Value:**
    
    ``` 
    9 
    ```
    
    *(Explanation: The '9' in the center blocks views, but all perimeter '1's are visible. The '9' itself is also visible from all sides.)*

5.  **Grid:**
    
    ``` 
    [
      "9000",
      "0000",
      "0000",
      "0009"
    ] 
    ```
    
    **Expected Value:**
    
    ``` 
    2 
    ```

6.  **Grid:**
    
    ``` 
    [
      "123",
      "456",
      "789"
    ] 
    ```
    
    **Expected Value:**
    
    ``` 
    9 
    ```

-----

📏 Constraints & Notes

  - Each character in the grid strings will be a digit from '0' to '9'.
  - The grid can be rectangular (number of columns can differ from the number of rows).
  - Your solution should be efficient enough to handle grids up to 50x50.
