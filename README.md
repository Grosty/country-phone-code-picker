# country-phone-code-picker


<h2>Default</h2>

    <input id="phoneField">
    
    const codePicker = new CodePicker();

    or with options

    const codePicker = new CodePicker(options);

    default
    options = {
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





