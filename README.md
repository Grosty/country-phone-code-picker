# country-phone-code-picker
<h2>Usage</h2>
Minified version
    
    <head>
    ...
       <link rel="stylesheet" href="styles/mincss/country-code-phone-picker.min.css"/>
    </head>
    
    ...
        <script src="/js/country-code-phone-picker.min.js"></script>
    </body>

Not minified

    <head>
    ...
       <link rel="stylesheet" href="styles/mincss/country-code-phone-picker.min.css"/>
    </head>
    
    ...
        <script src="/js/country-code-phone-picker.js"></script>
    </body>

<h2>Script</h2>

    <input id="phoneField">
    ...
    const codePicker = new CodePicker();

or with options

    const codePicker = new CodePicker(options);

default options

    const options = {
      className: "code-country-picker",
      iconFormat: "svg",
      path: "/img/countries",
      placeholder: "+",
      searchPlaceholder: 'Search',
      elementId: null,
    }

<h2>Methods:</h2>

    codePicker.getFullPhone();

returns String phone number with selected code

    codePicker.getCodeValue();

returns String only phone number without prefix code

    codePicker.openPopup();

open list of countries

    codePicker.closePopup();

close list of countries





