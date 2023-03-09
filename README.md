# Vueticol
Beautiful color picker for Vue 🌈

<img src="screenshots.png" width="100%">

## Demo

https://demos.pieterhielkema.nl/vueticol

## Installation

You can install the package via npm:

```bash
npm i vueticol
```

## Usage

```
<vueticol v-model="color" />
```

### Options

| Name       | Type          | Default        | Description                      |
|------------|---------------|----------------|----------------------------------|
| colors     | array<string> | See screenshot | Array of colors                  |
| style      | string        | "square"       | If you want a square or a circle |
| removeText | string        | "Remove color" | Text for remove button           |
