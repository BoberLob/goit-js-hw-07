**Read in other languages: [English](README.en.md), [Ru](README.md), [Ua](README.ua.md).**

# Admission criteria

- Repository created `goit-js-hw-07`.
- When submitting homework, there are two links to the source files and a working page on GitHub pages.
- The task was completed srtictly according to the General requirements(GR).
- Each task is completed in a separate file named `task-номер_завдання.js`.
- When visiting the work page (GitHub pages) of the job, there are no errors or warnings in the console.
- Variable and function names are clear, descriptive.
- Code formatted with Prettier.

## Start files

In the folder [src](./src) you will find the project start files with basic markup and included script files for each task.

## Assigment 1

There is a list of categories in HTML `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Тварини</h2>

    <ul>
      <li>Кіт</li>
      <li>Хом'як</li>
      <li>Кінь</li>
      <li>Папуга</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукти</h2>

    <ul>
      <li>Хліб</li>
      <li>Петрушка</li>
      <li>Сир</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технології</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul>
```

Write a script that will perform the following operations.

It will count and display the number of categories in the console `ul#categories`, that is elements `li.item`. It will work out `'У списку 3 категорії.'`.

For each item `li.item` in the list `ul#categories`, it will find and output to the console the text of the item title (tag h2) and the number of item in the category (all nested items li).

For example, for the first category you get:

- Category: Animals
- Number of elements: 4

## Assigment 2

There is an empty list in HTML `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

JS has an array of strings.

```js
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
```

Write a script that  `ingredients` creates a separate one for each element of the array
`li`, and then inserts everything `li` into the list in one operation `ul.ingredients`.
To create DOM nodes use `document.createElement()`.

## Assigment 3

Write a script to create a gallery of images from an array of data.

There is a list in HTML `ul#gallery`.

```html
<ul id="gallery"></ul>
```

Use an array of objects `images` to create tags `img` nested in `li`.
Use template strings and to create `insertAdjacentHTML()`.

- All opera gallery elements should be added to the DOM in one insert operacion.
- Add minimal design of the gallery with flexboxes or grids via css classes.

```js
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

## Assigment 4

The counter consists of a span and buttons that must increase and decrease the counter value by `1`.

- Create variable `counterValue` that will store the current value of the counter.

- Create function `increment` and `decrement` for increasing and decreasing the counter value.
- Add listeners for button clicks, function calls, and interface updates.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

## Assigment 5

Write a script that, when typing in `input#name-input` (input event),
value into `span#name-output`. If the input is empty, the line should be displayed in the span `'незнайомець'`.

```html
<input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
```

## Assigment 6

Write a script that, if you lose focus on an input, check its contents for the correct number of characters.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символів"
/>
```

- How many characters should be in the input is indicated in its attribute `data-length`.
- If a suitable amount is entered, then the `border` input turns green, if an incorrect one - red.

To add styles, use CSS classes `valid` and `invalid`.

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Assigment 7

Write a script that reacts to a value change `input#font-size-control` (input event) and changes the inline style by `span#text` updating the property `font-size`. As a result, dagging the slider will change the size of the text.

```html
<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
```

## Assigment 8

Write a script to create and clean up a collection of items. The user enters the number of items into  `input` and clicks a button `Створити`, after which the collection is rendered. When the button is pressed `Очистити`, the collection of items is cleared.

Create a function `createBoxes(amount)`, that takes 1 parameter `amount` - a number.
The function creates as  `div`, many as specified in `amount` and adds then to
`div#boxes`.

Each div created:

- Has a random rgb background color
- The dimensions of the very first div - 30px by 30px
- Each next div after the first must be 10px wider and higher than the previous one
    10px

Create a function `destroyBoxes()` that cleans up `div#boxes`.

```html
<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Створити</button>
  <button type="button" data-action="destroy">Очистити</button>
</div>

<div id="boxes"></div>
```
