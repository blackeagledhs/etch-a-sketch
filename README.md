# Etch-A-Sketch

A simple Etch-A-Sketch project built with **HTML**, **CSS**, and **JavaScript**. This project allows users to draw on a customizable grid by hovering over squares with their mouse. It demonstrates the use of **Flexbox** for layout, DOM manipulation with JavaScript, and event listeners.

## Features

- **Interactive Drawing Grid**: A 16x16 grid of square divs that changes color when hovered over.
- **Customizable Grid Size**: A button allows the user to reset the grid with a new size, from 1x1 up to 100x100 squares.
- **Dynamic Coloring**: Randomize square colors or progressively darken them with each interaction (extra credit).
- **Responsive Design**: The grid scales to fit within a fixed container (960px wide).

---

## Instructions

### 1. Setup Your Local Environment

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/etch-a-sketch.git
    ```
2. Navigate to the project folder:
    ```bash
    cd etch-a-sketch
    ```
3. Open the `index.html` file in your browser to view the project.

---

### 2. How to Use

1. Open the webpage.
2. Draw on the default 16x16 grid by hovering over squares.
3. Click the **Reset Grid** button to generate a new grid size:
    - Enter a number between **1** and **100**.
    - A new grid will be generated within the same container.

---

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling and Flexbox for grid layout.
- **JavaScript**: Dynamic grid generation, event handling, and interactive functionality.

---

## Code Highlights

- **Dynamic Grid Creation**: Squares are created dynamically in JavaScript using a loop.
- **Event Listeners**: `mouseover` events detect when the mouse hovers over a square to change its color.
- **Flexbox Layout**: Used to arrange squares into a perfect grid.

---

## Extra Credit Features

- **Random Colors**: Each square changes to a random color when hovered.
- **Progressive Darkening**: Each hover interaction darkens the square by 10% until it turns completely black.

---

## Troubleshooting

If the grid doesn't appear as expected:
1. Ensure the `script.js` and `style.css` files are properly linked in `index.html`.
2. Open your browser's Developer Tools:
    - Check for JavaScript errors in the **Console** tab.
    - Inspect the `#container` div in the **Elements** tab to verify that the grid squares are being created.

---

## Contributions

Contributions are welcome! If you’d like to improve this project:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with a detailed explanation of your changes.

---

## License

This project is licensed under the MIT License. Feel free to use it, modify it, and share it as you like.
