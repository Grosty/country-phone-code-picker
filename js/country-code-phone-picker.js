const countries = [
    {
      countryName: "Afghanistan",
      code: "AF",
      phoneCode: "93",
    },
    {
      countryName: "Aland Islands",
      code: "AX",
      phoneCode: "358",
    },
    {
      countryName: "Albania",
      code: "AL",
      phoneCode: "355",
    },
    {
      countryName: "Algeria",
      code: "DZ",
      phoneCode: "213",
    },
    {
      countryName: "American Samoa",
      code: "AS",
      phoneCode: "1684",
    },
    {
      countryName: "Andorra",
      code: "AD",
      phoneCode: "376",
    },
    {
      countryName: "Angola",
      code: "AO",
      phoneCode: "244",
    },
    {
      countryName: "Anguilla",
      code: "AI",
      phoneCode: "1264",
    },
    {
      countryName: "Antigua and Barbuda",
      code: "AG",
      phoneCode: "1268",
    },
    {
      countryName: "Argentina",
      code: "AR",
      phoneCode: "54",
    },
    {
      countryName: "Armenia",
      code: "AM",
      phoneCode: "374",
    },
    {
      countryName: "Aruba",
      code: "AW",
      phoneCode: "297",
    },
    {
      countryName: "Australia",
      code: "AU",
      phoneCode: "61",
    },
    {
      countryName: "Austria",
      code: "AT",
      phoneCode: "43",
    },
    {
      countryName: "Azerbaijan",
      code: "AZ",
      phoneCode: "994",
    },
    {
      countryName: "Bahamas",
      code: "BS",
      phoneCode: "1242",
    },
    {
      countryName: "Bahrain",
      code: "BH",
      phoneCode: "973",
    },
    {
      countryName: "Bangladesh",
      code: "BD",
      phoneCode: "880",
    },
    {
      countryName: "Barbados",
      code: "BB",
      phoneCode: "1246",
    },
    {
      countryName: "Belarus",
      code: "BY",
      phoneCode: "375",
    },
    {
      countryName: "Belgium",
      code: "BE",
      phoneCode: "32",
    },
    {
      countryName: "Belize",
      code: "BZ",
      phoneCode: "501",
    },
    {
      countryName: "Benin",
      code: "BJ",
      phoneCode: "229",
    },
    {
      countryName: "Bermuda",
      code: "BM",
      phoneCode: "1441",
    },
    {
      countryName: "Bhutan",
      code: "BT",
      phoneCode: "975",
    },
    {
      countryName: "Bolivia",
      code: "BO",
      phoneCode: "591",
    },
    {
      countryName: "Bosnia and Herzegovina",
      code: "BA",
      phoneCode: "387",
    },
    {
      countryName: "Botswana",
      code: "BW",
      phoneCode: "267",
    },
    {
      countryName: "Brazil",
      code: "BR",
      phoneCode: "55",
    },
    {
      countryName: "British Indian Ocean Territory",
      code: "IO",
      phoneCode: "246",
    },
    {
      countryName: "British Virgin Islands",
      code: "VG",
      phoneCode: "1284",
    },
    {
      countryName: "Brunei",
      code: "BN",
      phoneCode: "673",
    },
    {
      countryName: "Bulgaria",
      code: "BG",
      phoneCode: "359",
    },
    {
      countryName: "Burkina Faso",
      code: "BF",
      phoneCode: "226",
    },
    {
      countryName: "Burundi",
      code: "BI",
      phoneCode: "257",
    },
    {
      countryName: "Cambodia",
      code: "KH",
      phoneCode: "855",
    },
    {
      countryName: "Cameroon",
      code: "CM",
      phoneCode: "237",
    },
    {
      countryName: "Canada",
      code: "CA",
      phoneCode: "1",
    },
    {
      countryName: "Cape Verde",
      code: "CV",
      phoneCode: "238",
    },
    {
      countryName: "Cayman Islands",
      code: "KY",
      phoneCode: "1345",
    },
    {
      countryName: "Central African Republic",
      code: "CF",
      phoneCode: "236",
    },
    {
      countryName: "Chad",
      code: "TD",
      phoneCode: "235",
    },
    {
      countryName: "Chile",
      code: "CL",
      phoneCode: "56",
    },
    {
      countryName: "China",
      code: "CN",
      phoneCode: "86",
    },
    {
      countryName: "Christmas Island",
      code: "CX",
      phoneCode: "61",
    },
    {
      countryName: "Cocos (Keeling) Islands",
      code: "CC",
      phoneCode: "61",
    },
    {
      countryName: "Colombia",
      code: "CO",
      phoneCode: "57",
    },
    {
      countryName: "Comoros",
      code: "KM",
      phoneCode: "269",
    },
    {
      countryName: "Cook Islands",
      code: "CK",
      phoneCode: "682",
    },
    {
      countryName: "Costa Rica",
      code: "CR",
      phoneCode: "506",
    },
    {
      countryName: "Croatia",
      code: "HR",
      phoneCode: "385",
    },
    {
      countryName: "Cuba",
      code: "CU",
      phoneCode: "53",
    },
    {
      countryName: "Curaçao",
      code: "CW",
      phoneCode: "5999",
    },
    {
      countryName: "Cyprus",
      code: "CY",
      phoneCode: "357",
    },
    {
      countryName: "Czechia",
      code: "CZ",
      phoneCode: "420",
    },
    {
      countryName: "DR Congo",
      code: "CD",
      phoneCode: "243",
    },
    {
      countryName: "Denmark",
      code: "DK",
      phoneCode: "45",
    },
    {
      countryName: "Djibouti",
      code: "DJ",
      phoneCode: "253",
    },
    {
      countryName: "Dominica",
      code: "DM",
      phoneCode: "1767",
    },
    {
      countryName: "Dominican Republic",
      code: "DO",
      phoneCode: "1809",
    },
    {
      countryName: "Dominican Republic",
      code: "DO",
      phoneCode: "1829",
    },
    {
      countryName: "Dominican Republic",
      code: "DO",
      phoneCode: "1849",
    },
    {
      countryName: "Ecuador",
      code: "EC",
      phoneCode: "593",
    },
    {
      countryName: "Egypt",
      code: "EG",
      phoneCode: "20",
    },
    {
      countryName: "El Salvador",
      code: "SV",
      phoneCode: "503",
    },
    {
      countryName: "Equatorial Guinea",
      code: "GQ",
      phoneCode: "240",
    },
    {
      countryName: "Eritrea",
      code: "ER",
      phoneCode: "291",
    },
    {
      countryName: "Estonia",
      code: "EE",
      phoneCode: "372",
    },
    {
      countryName: "Ethiopia",
      code: "ET",
      phoneCode: "251",
    },
    {
      countryName: "Falkland Islands",
      code: "FK",
      phoneCode: "500",
    },
    {
      countryName: "Faroe Islands",
      code: "FO",
      phoneCode: "298",
    },
    {
      countryName: "Fiji",
      code: "FJ",
      phoneCode: "679",
    },
    {
      countryName: "Finland",
      code: "FI",
      phoneCode: "358",
    },
    {
      countryName: "France",
      code: "FR",
      phoneCode: "33",
    },
    {
      countryName: "French Guiana",
      code: "GF",
      phoneCode: "594",
    },
    {
      countryName: "French Polynesia",
      code: "PF",
      phoneCode: "689",
    },
    {
      countryName: "Gabon",
      code: "GA",
      phoneCode: "241",
    },
    {
      countryName: "Gambia",
      code: "GM",
      phoneCode: "220",
    },
    {
      countryName: "Georgia",
      code: "GE",
      phoneCode: "995",
    },
    {
      countryName: "Germany",
      code: "DE",
      phoneCode: "49",
    },
    {
      countryName: "Ghana",
      code: "GH",
      phoneCode: "233",
    },
    {
      countryName: "Gibraltar",
      code: "GI",
      phoneCode: "350",
    },
    {
      countryName: "Greece",
      code: "GR",
      phoneCode: "30",
    },
    {
      countryName: "Greenland",
      code: "GL",
      phoneCode: "299",
    },
    {
      countryName: "Grenada",
      code: "GD",
      phoneCode: "1473",
    },
    {
      countryName: "Guadeloupe",
      code: "GP",
      phoneCode: "590",
    },
    {
      countryName: "Guam",
      code: "GU",
      phoneCode: "1671",
    },
    {
      countryName: "Guatemala",
      code: "GT",
      phoneCode: "502",
    },
    {
      countryName: "Guernsey",
      code: "GG",
      phoneCode: "44",
    },
    {
      countryName: "Guinea",
      code: "GN",
      phoneCode: "224",
    },
    {
      countryName: "Guinea-Bissau",
      code: "GW",
      phoneCode: "245",
    },
    {
      countryName: "Guyana",
      code: "GY",
      phoneCode: "592",
    },
    {
      countryName: "Haiti",
      code: "HT",
      phoneCode: "509",
    },
    {
      countryName: "Honduras",
      code: "HN",
      phoneCode: "504",
    },
    {
      countryName: "Hong Kong",
      code: "HK",
      phoneCode: "852",
    },
    {
      countryName: "Hungary",
      code: "HU",
      phoneCode: "36",
    },
    {
      countryName: "Iceland",
      code: "IS",
      phoneCode: "354",
    },
    {
      countryName: "India",
      code: "IN",
      phoneCode: "91",
    },
    {
      countryName: "Indonesia",
      code: "ID",
      phoneCode: "62",
    },
    {
      countryName: "Iran",
      code: "IR",
      phoneCode: "98",
    },
    {
      countryName: "Iraq",
      code: "IQ",
      phoneCode: "964",
    },
    {
      countryName: "Ireland",
      code: "IE",
      phoneCode: "353",
    },
    {
      countryName: "Isle of Man",
      code: "IM",
      phoneCode: "44",
    },
    {
      countryName: "Israel",
      code: "IL",
      phoneCode: "972",
    },
    {
      countryName: "Italy",
      code: "IT",
      phoneCode: "39",
    },
    {
      countryName: "Ivory Coast",
      code: "CI",
      phoneCode: "225",
    },
    {
      countryName: "Jamaica",
      code: "JM",
      phoneCode: "1876",
    },
    {
      countryName: "Japan",
      code: "JP",
      phoneCode: "81",
    },
    {
      countryName: "Jersey",
      code: "JE",
      phoneCode: "44",
    },
    {
      countryName: "Jordan",
      code: "JO",
      phoneCode: "962",
    },
    {
      countryName: "Kazakhstan",
      code: "KZ",
      phoneCode: "77",
    },
    {
      countryName: "Kazakhstan",
      code: "KZ",
      phoneCode: "76",
    },
    {
      countryName: "Kenya",
      code: "KE",
      phoneCode: "254",
    },
    {
      countryName: "Kiribati",
      code: "KI",
      phoneCode: "686",
    },
    {
      countryName: "Kosovo",
      code: "XK",
      phoneCode: "383",
    },
    {
      countryName: "Kuwait",
      code: "KW",
      phoneCode: "965",
    },
    {
      countryName: "Kyrgyzstan",
      code: "KG",
      phoneCode: "996",
    },
    {
      countryName: "Laos",
      code: "LA",
      phoneCode: "856",
    },
    {
      countryName: "Latvia",
      code: "LV",
      phoneCode: "371",
    },
    {
      countryName: "Lebanon",
      code: "LB",
      phoneCode: "961",
    },
    {
      countryName: "Lesotho",
      code: "LS",
      phoneCode: "266",
    },
    {
      countryName: "Liberia",
      code: "LR",
      phoneCode: "231",
    },
    {
      countryName: "Libya",
      code: "LY",
      phoneCode: "218",
    },
    {
      countryName: "Liechtenstein",
      code: "LI",
      phoneCode: "423",
    },
    {
      countryName: "Lithuania",
      code: "LT",
      phoneCode: "370",
    },
    {
      countryName: "Luxembourg",
      code: "LU",
      phoneCode: "352",
    },
    {
      countryName: "Macau",
      code: "MO",
      phoneCode: "853",
    },
    {
      countryName: "Macedonia",
      code: "MK",
      phoneCode: "389",
    },
    {
      countryName: "Madagascar",
      code: "MG",
      phoneCode: "261",
    },
    {
      countryName: "Malawi",
      code: "MW",
      phoneCode: "265",
    },
    {
      countryName: "Malaysia",
      code: "MY",
      phoneCode: "60",
    },
    {
      countryName: "Maldives",
      code: "MV",
      phoneCode: "960",
    },
    {
      countryName: "Mali",
      code: "ML",
      phoneCode: "223",
    },
    {
      countryName: "Malta",
      code: "MT",
      phoneCode: "356",
    },
    {
      countryName: "Marshall Islands",
      code: "MH",
      phoneCode: "692",
    },
    {
      countryName: "Martinique",
      code: "MQ",
      phoneCode: "596",
    },
    {
      countryName: "Mauritania",
      code: "MR",
      phoneCode: "222",
    },
    {
      countryName: "Mauritius",
      code: "MU",
      phoneCode: "230",
    },
    {
      countryName: "Mayotte",
      code: "YT",
      phoneCode: "262",
    },
    {
      countryName: "Mexico",
      code: "MX",
      phoneCode: "52",
    },
    {
      countryName: "Micronesia",
      code: "FM",
      phoneCode: "691",
    },
    {
      countryName: "Moldova",
      code: "MD",
      phoneCode: "373",
    },
    {
      countryName: "Monaco",
      code: "MC",
      phoneCode: "377",
    },
    {
      countryName: "Mongolia",
      code: "MN",
      phoneCode: "976",
    },
    {
      countryName: "Montenegro",
      code: "ME",
      phoneCode: "382",
    },
    {
      countryName: "Montserrat",
      code: "MS",
      phoneCode: "1664",
    },
    {
      countryName: "Morocco",
      code: "MA",
      phoneCode: "212",
    },
    {
      countryName: "Mozambique",
      code: "MZ",
      phoneCode: "258",
    },
    {
      countryName: "Myanmar",
      code: "MM",
      phoneCode: "95",
    },
    {
      countryName: "Namibia",
      code: "NA",
      phoneCode: "264",
    },
    {
      countryName: "Nauru",
      code: "NR",
      phoneCode: "674",
    },
    {
      countryName: "Nepal",
      code: "NP",
      phoneCode: "977",
    },
    {
      countryName: "Netherlands",
      code: "NL",
      phoneCode: "31",
    },
    {
      countryName: "New Caledonia",
      code: "NC",
      phoneCode: "687",
    },
    {
      countryName: "New Zealand",
      code: "NZ",
      phoneCode: "64",
    },
    {
      countryName: "Nicaragua",
      code: "NI",
      phoneCode: "505",
    },
    {
      countryName: "Niger",
      code: "NE",
      phoneCode: "227",
    },
    {
      countryName: "Nigeria",
      code: "NG",
      phoneCode: "234",
    },
    {
      countryName: "Niue",
      code: "NU",
      phoneCode: "683",
    },
    {
      countryName: "Norfolk Island",
      code: "NF",
      phoneCode: "672",
    },
    {
      countryName: "North Korea",
      code: "KP",
      phoneCode: "850",
    },
    {
      countryName: "Northern Mariana Islands",
      code: "MP",
      phoneCode: "1670",
    },
    {
      countryName: "Norway",
      code: "NO",
      phoneCode: "47",
    },
    {
      countryName: "Oman",
      code: "OM",
      phoneCode: "968",
    },
    {
      countryName: "Pakistan",
      code: "PK",
      phoneCode: "92",
    },
    {
      countryName: "Palau",
      code: "PW",
      phoneCode: "680",
    },
    {
      countryName: "Palestine",
      code: "PS",
      phoneCode: "970",
    },
    {
      countryName: "Panama",
      code: "PA",
      phoneCode: "507",
    },
    {
      countryName: "Papua New Guinea",
      code: "PG",
      phoneCode: "675",
    },
    {
      countryName: "Paraguay",
      code: "PY",
      phoneCode: "595",
    },
    {
      countryName: "Peru",
      code: "PE",
      phoneCode: "51",
    },
    {
      countryName: "Philippines",
      code: "PH",
      phoneCode: "63",
    },
    {
      countryName: "Pitcairn Islands",
      code: "PN",
      phoneCode: "64",
    },
    {
      countryName: "Poland",
      code: "PL",
      phoneCode: "48",
    },
    {
      countryName: "Portugal",
      code: "PT",
      phoneCode: "351",
    },
    {
      countryName: "Puerto Rico",
      code: "PR",
      phoneCode: "1787",
    },
    {
      countryName: "Puerto Rico",
      code: "PR",
      phoneCode: "1939",
    },
    {
      countryName: "Qatar",
      code: "QA",
      phoneCode: "974",
    },
    {
      countryName: "Republic of the Congo",
      code: "CG",
      phoneCode: "242",
    },
    {
      countryName: "Romania",
      code: "RO",
      phoneCode: "40",
    },
    {
      countryName: "Russia",
      code: "RU",
      phoneCode: "7",
    },
    {
      countryName: "Rwanda",
      code: "RW",
      phoneCode: "250",
    },
    {
      countryName: "Réunion",
      code: "RE",
      phoneCode: "262",
    },
    {
      countryName: "Saint Barthélemy",
      code: "BL",
      phoneCode: "590",
    },
    {
      countryName: "Saint Kitts and Nevis",
      code: "KN",
      phoneCode: "1869",
    },
    {
      countryName: "Saint Lucia",
      code: "LC",
      phoneCode: "1758",
    },
    {
      countryName: "Saint Martin",
      code: "MF",
      phoneCode: "590",
    },
    {
      countryName: "Saint Pierre and Miquelon",
      code: "PM",
      phoneCode: "508",
    },
    {
      countryName: "Saint Vincent and the Grenadines",
      code: "VC",
      phoneCode: "1784",
    },
    {
      countryName: "Samoa",
      code: "WS",
      phoneCode: "685",
    },
    {
      countryName: "San Marino",
      code: "SM",
      phoneCode: "378",
    },
    {
      countryName: "Saudi Arabia",
      code: "SA",
      phoneCode: "966",
    },
    {
      countryName: "Senegal",
      code: "SN",
      phoneCode: "221",
    },
    {
      countryName: "Serbia",
      code: "RS",
      phoneCode: "381",
    },
    {
      countryName: "Seychelles",
      code: "SC",
      phoneCode: "248",
    },
    {
      countryName: "Sierra Leone",
      code: "SL",
      phoneCode: "232",
    },
    {
      countryName: "Singapore",
      code: "SG",
      phoneCode: "65",
    },
    {
      countryName: "Sint Maarten",
      code: "SX",
      phoneCode: "1721",
    },
    {
      countryName: "Slovakia",
      code: "SK",
      phoneCode: "421",
    },
    {
      countryName: "Slovenia",
      code: "SI",
      phoneCode: "386",
    },
    {
      countryName: "Solomon Islands",
      code: "SB",
      phoneCode: "677",
    },
    {
      countryName: "Somalia",
      code: "SO",
      phoneCode: "252",
    },
    {
      countryName: "South Africa",
      code: "ZA",
      phoneCode: "27",
    },
    {
      countryName: "South Georgia",
      code: "GS",
      phoneCode: "500",
    },
    {
      countryName: "South Korea",
      code: "KR",
      phoneCode: "82",
    },
    {
      countryName: "South Sudan",
      code: "SS",
      phoneCode: "211",
    },
    {
      countryName: "Spain",
      code: "ES",
      phoneCode: "34",
    },
    {
      countryName: "Sri Lanka",
      code: "LK",
      phoneCode: "94",
    },
    {
      countryName: "Sudan",
      code: "SD",
      phoneCode: "249",
    },
    {
      countryName: "Suriname",
      code: "SR",
      phoneCode: "597",
    },
    {
      countryName: "Svalbard and Jan Mayen",
      code: "SJ",
      phoneCode: "4779",
    },
    {
      countryName: "Swaziland",
      code: "SZ",
      phoneCode: "268",
    },
    {
      countryName: "Sweden",
      code: "SE",
      phoneCode: "46",
    },
    {
      countryName: "Switzerland",
      code: "CH",
      phoneCode: "41",
    },
    {
      countryName: "Syria",
      code: "SY",
      phoneCode: "963",
    },
    {
      countryName: "São Tomé and Príncipe",
      code: "ST",
      phoneCode: "239",
    },
    {
      countryName: "Taiwan",
      code: "TW",
      phoneCode: "886",
    },
    {
      countryName: "Tajikistan",
      code: "TJ",
      phoneCode: "992",
    },
    {
      countryName: "Tanzania",
      code: "TZ",
      phoneCode: "255",
    },
    {
      countryName: "Thailand",
      code: "TH",
      phoneCode: "66",
    },
    {
      countryName: "Timor-Leste",
      code: "TL",
      phoneCode: "670",
    },
    {
      countryName: "Togo",
      code: "TG",
      phoneCode: "228",
    },
    {
      countryName: "Tokelau",
      code: "TK",
      phoneCode: "690",
    },
    {
      countryName: "Tonga",
      code: "TO",
      phoneCode: "676",
    },
    {
      countryName: "Trinidad and Tobago",
      code: "TT",
      phoneCode: "1868",
    },
    {
      countryName: "Tunisia",
      code: "TN",
      phoneCode: "216",
    },
    {
      countryName: "Turkey",
      code: "TR",
      phoneCode: "90",
    },
    {
      countryName: "Turkmenistan",
      code: "TM",
      phoneCode: "993",
    },
    {
      countryName: "Turks and Caicos Islands",
      code: "TC",
      phoneCode: "1649",
    },
    {
      countryName: "Tuvalu",
      code: "TV",
      phoneCode: "688",
    },
    {
      countryName: "Uganda",
      code: "UG",
      phoneCode: "256",
    },
    {
      countryName: "Ukraine",
      code: "UA",
      phoneCode: "380",
    },
    {
      countryName: "United Arab Emirates",
      code: "AE",
      phoneCode: "971",
    },
    {
      countryName: "United Kingdom",
      code: "GB",
      phoneCode: "44",
    },
    {
      countryName: "United States",
      code: "US",
      phoneCode: "1",
    },
    {
      countryName: "United States Virgin Islands",
      code: "VI",
      phoneCode: "1340",
    },
    {
      countryName: "Uruguay",
      code: "UY",
      phoneCode: "598",
    },
    {
      countryName: "Uzbekistan",
      code: "UZ",
      phoneCode: "998",
    },
    {
      countryName: "Vanuatu",
      code: "VU",
      phoneCode: "678",
    },
    {
      countryName: "Vatican City",
      code: "VA",
      phoneCode: "379",
    },
    {
      countryName: "Venezuela",
      code: "VE",
      phoneCode: "58",
    },
    {
      countryName: "Vietnam",
      code: "VN",
      phoneCode: "84",
    },
    {
      countryName: "Wallis and Futuna",
      code: "WF",
      phoneCode: "681",
    },
    {
      countryName: "Western Sahara",
      code: "EH",
      phoneCode: "212",
    },
    {
      countryName: "Yemen",
      code: "YE",
      phoneCode: "967",
    },
    {
      countryName: "Zambia",
      code: "ZM",
      phoneCode: "260",
    },
    {
      countryName: "Zimbabwe",
      code: "ZW",
      phoneCode: "263",
    },
  ];
  
  class CodePicker {
    $body;
    $prefixDiv;
    $selectedImg;
    $selectedCode;
    $phoneInput;
    $inputSearch;
    $dropdownList;
  
    $dropdown;
    countriesList;
    filteredList;
    isActive = false;
    selectedItem = {
      countryName: "",
      code: "",
      phoneCode: "",
    };
    options = {
      className: "code-country-picker",
      iconFormat: "svg",
      path: "/img/countries",
      placeholder: "+",
      searchPlaceholder: 'Search',
      elementId: null,
    };
  
    constructor(selector, ops = {}) {
      this.$phoneInput = document.querySelector(selector);
      if (!this.$phoneInput) {
        throw Error(`${selector} - doesn't exist in the DOM`);
      }
      Object.assign(this.options, ops);
      this.$body = document.querySelector("body");
      this.countriesList = countries;
      this.filteredList = countries;
      this.$prefixDiv = document.createElement("div");
      if (this.options.elementId) {
        this.$prefixDiv.id = this.options.elementId;
      }
      this.$prefixDiv.tabIndex = 0;
      this.$prefixDiv.dataset.placeholder = this.options.placeholder;
      this.$prefixDiv.classList = this.options.className;
  
      this.$selectedCode = document.createElement("span");
      this.$selectedCode.classList = `${this.options.className}-code`;
      this.$prefixDiv.append(this.$selectedCode);
  
      // --- openPopup()-----
      this.$dropdown = document.createElement("div");
      this.$dropdown.classList.add(`${this.options.className}-dropdown`);
      this.$inputSearch = document.createElement("input");
      this.$inputSearch.tabIndex = -1;
      this.$inputSearch.type = "text";
      this.$inputSearch.placeholder = this.options.searchPlaceholder;
      this.$inputSearch.classList.add(
        `${this.options.className}-dropdown__search`
      );
      this.$dropdownList = document.createElement("div");
      this.$dropdownList.classList.add(
        `${this.options.className}-dropdown__list`
      );
      this.addCountriesMarkup(0);
      this.$dropdown.appendChild(this.$inputSearch);
      this.$dropdown.appendChild(this.$dropdownList);
      this.$prefixDiv.appendChild(this.$dropdown);
  
      this.$prefixDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        if (this.isActive) {
          this.closePopup();
        } else {
          this.openPopup();
        }
      });
      this.$prefixDiv.addEventListener("keydown", (e) => {
        if (e.code === "Enter" && !this.isActive) {
          this.openPopup();
        }
      });
      this.$dropdown.addEventListener("click", this.dropdownClickListener);
  
  
      const $parent = this.$phoneInput.parentElement; // .input-wrap
      $parent.insertBefore(this.$prefixDiv, this.$phoneInput);
    }
  
    getCodeValue() {
      return this.$selectedCode ? this.$selectedCode.innerText.trim() : "";
    }
  
    getCodeValueWithoutPlus() {
      return this.getCodeValue().replace(/\+/g, "");
    }
  
    getAfterCodeValue() {
      return this.$phoneInput.value.trim();
    }
  
    getFullPhone() {
      return `${this.getCodeValue()}${this.getAfterCodeValue()}`;
    }
  
    getFullNumberWithoutPlus() {
      return this.getFullPhone().replace(/\+/g, "");
    }
  
    addCountriesMarkup(count = this.filteredList.length) {
      this.$dropdownList.innerHTML = "";
      for (let i = 0; i < count; i++) {
        const selectedItem = this.filteredList[i];
        const { countryName, code, phoneCode } = selectedItem;
        const $row = document.createElement("div");
        $row.tabIndex = 0;
        $row.classList = `${this.options.className}-dropdown__list-row`;
        $row.dataset.code = code;
        $row.dataset.countryName = countryName;
        $row.dataset.phoneCode = phoneCode;
        const $img = document.createElement("img");
        $img.classList = `${this.options.className}-dropdown__list-row__img`;
        $img.alt = code;
        $img.src = `${
          this.options.path
        }/${code.toLowerCase()}.${this.options.iconFormat.toLowerCase()}`;
        const $phoneCode = document.createElement("span");
        $phoneCode.classList = `${this.options.className}-dropdown__list-row__code`;
        $phoneCode.innerText = `+${phoneCode}`;
        const $countryName = document.createElement("span");
        $countryName.classList = `${this.options.className}-dropdown__list-row__country`;
        $countryName.innerText = countryName;
        $row.appendChild($img);
        $row.appendChild($phoneCode);
        $row.appendChild($countryName);
        // --add selected class--
        if (
          this.selectedItem.countryName === countryName &&
          this.selectedItem.code === code &&
          this.selectedItem.phoneCode === phoneCode
        ) {
          $row.classList.add("selected");
        }
        // -----
        $row.addEventListener(
          "click",
          this.selectCountryListener.bind(this, selectedItem)
        );
        // ENTER KEY
        $row.addEventListener("keydown", (e) => {
          if (e.code === "Enter" && this.isActive) {
            e.stopPropagation();
            this.selectCountryListener(selectedItem, e);
          }
        });
        this.$dropdownList.appendChild($row);
      }
    }
  
    selectCountryListener(item, e) {
      this.selectedItem = item;
      const { countryName, code, phoneCode } = item;
  
      this.$selectedCode.innerText = phoneCode;
      if (this.$selectedImg) {
        this.$selectedImg.src = `${
          this.options.path
        }/${code.toLowerCase()}.${this.options.iconFormat.toLowerCase()}`;
      } else {
        this.$prefixDiv.dataset.placeholder = "";
        this.$selectedImg = document.createElement("img");
        this.$selectedImg.src = `${
          this.options.path
        }/${code.toLowerCase()}.${this.options.iconFormat.toLowerCase()}`;
        this.$selectedImg.alt = code;
        this.$selectedImg.classList = `${this.options.className}-img`;
        this.$prefixDiv.prepend(this.$selectedImg);
      }
      this.closePopup();
    }
  
    inputSearchListener = (e) => {
      this.filterList(e.currentTarget.value);
      this.addCountriesMarkup();
    };
  
    bodyEscListener = (e) => {
      if (e.code === "Escape") {
        this.closePopup();
      }
    };
  
    bodyClickListener = (e) => {
      this.closePopup();
    };
  
    dropdownClickListener = (e) => {
      e.stopPropagation();
    };
  
    openPopup() {
      this.$prefixDiv.classList.add("active");
      this.isActive = true;
      this.addCountriesMarkup();
      this.$inputSearch.addEventListener("input", this.inputSearchListener);
      this.$body.addEventListener("click", this.bodyClickListener);
      this.$body.addEventListener("keydown", this.bodyEscListener);
  
      this.$inputSearch.tabIndex = 0;
      for (let i = 0; i < this.$dropdownList.children.length; i++) {
        const $row = this.$dropdownList.children[i];
        $row.tabIndex = 0;
      }
  
      if (this.selectedItem.phoneCode !== "") {
        const $selectedRow = this.$dropdownList.querySelector(
          `[data-phone-code='${this.selectedItem.phoneCode}']`
        );
        this.$dropdownList.scrollTop = $selectedRow ? $selectedRow.offsetTop : 0;
      }
    }
  
    closePopup() {
      this.$prefixDiv.classList.remove("active");
      this.isActive = false;
      this.$inputSearch.removeEventListener("input", this.inputSearchListener);
      this.$body.removeEventListener("click", this.bodyClickListener);
      this.$body.removeEventListener("keydown", this.bodyEscListener);
  
      this.$inputSearch.tabIndex = -1;
      for (let i = 0; i < this.$dropdownList.children.length; i++) {
        const $row = this.$dropdownList.children[i];
        $row.tabIndex = -1;
      }
    }
  
    filterList(country = "") {
      const trimedCountry = country.trim().toLowerCase();
      this.filteredList =
        trimedCountry === ""
          ? this.countriesList
          : this.countriesList.filter(({ countryName, code, phoneCode }) => {
              return (
                countryName.toLowerCase().includes(trimedCountry) ||
                code.toLowerCase().includes(trimedCountry) ||
                phoneCode.toLowerCase().includes(trimedCountry)
              );
            });
    }
  }
  