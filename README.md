# Just Easy Zoom (JEZI)

Just Easy Zoom (JEZI) is a lightweight JavaScript utility designed to enable simple and effective image zoom functionality on web pages. By utilizing custom data attributes, JEZI allows for effortless integration of zoom capabilities, making it an ideal choice for enhancing the visual experience of image viewing without the need for extensive configurations.

## Key Features

- **Simplicity**: Easy integration with minimal code setup.
- **Versatility**: Supports activation via click or hover, catering to different user interaction preferences.
- **Customization**: Allows specifying the high-resolution image source via data attributes for tailored zoom experiences.
- **No Dependencies**: Pure JavaScript implementation without the need for additional libraries.

## Installation

Incorporate JEZI into your project by including it in your web page. You can do so by directly linking to the script file in an HTML document or by importing it as a module in a JavaScript project.

### Direct Script Include

```html
<script type="module" src="path/to/jezi.js"></script>
```

## How to Use

Setting up JEZI involves marking up your HTML with specific data attributes and initializing the script.

### Step 1: HTML Markup

Assign data-jezi-src attributes to your image containers, indicating the path to the high-resolution images intended for zooming.

```html
<div data-jezi-src="path/to/high-res-image.jpg">
  <img src="path/to/standard-image.jpg" alt="Descriptive Alt Text">
</div>
```

### Step 2: Activate JEZI

Initialize JEZI by invoking the jezi() function after including the script. This step can be done inline or within a separate script file.

```html
<script type="module">
  import jezi from 'path/to/jezi.js';
  jezi();
</script>
```

## Configuration Options

JEZI's behavior can be customized through the use of data attributes:

`data-jezi-src`: URL of the high-resolution image to be displayed upon zoom.
`data-jezi-trigger` (optional): Trigger mechanism for zoom activation (click or hover). Defaults to click if unspecified.

### Example Usage
```html
<div data-jezi-src="path/to/high-res.jpg" data-jezi-trigger="hover">
  <img src="path/to/normal-res.jpg" alt="Zoomable Image">
</div>

<script type="module">
  import jezi from './path/to/jezi.js';
  jezi();
</script>
```

## Contributing

Contributions to JEZI, whether in the form of bug reports, feature suggestions, or code contributions, are warmly welcomed. Please feel free to open issues or submit pull requests on the project's repository.

## License

JEZI is released under the MIT License, promoting open and unrestricted use, modification, and distribution of the software.
