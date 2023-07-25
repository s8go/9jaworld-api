const cont = [
  {
    name: "",
    continent: "",
    capital: "",
    currency: "",
    population: 0,
    wikipediaLink: "",
    flagImageLink: "",
  },
];

const countries = [
  {
    name: "Australia",
    continent: "Oceania",
    capital: "Canberra",
    currency: "Australian dollar",
    population: 25700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Australia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png",
  },
  {
    name: "Papua New Guinea",
    continent: "Oceania",
    capital: "Port Moresby",
    currency: "Kina",
    population: 8800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Papua_New_Guinea",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Papua_New_Guinea.svg/1200px-Flag_of_Papua_New_Guinea.svg.png",
  },
  {
    name: "New Zealand",
    continent: "Oceania",
    capital: "Wellington",
    currency: "New Zealand dollar",
    population: 500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/New_Zealand",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png",
  },

  {
    name: "Albania",
    continent: "Europe",
    capital: "Tirana",
    currency: "Lek",
    population: 2800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Albania",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png",
  },
  {
    name: "Andorra",
    continent: "Europe",
    capital: "Andorra la Vella",
    currency: "Euro",
    population: 77000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Andorra",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Andorra.svg/1200px-Flag_of_Andorra.svg.png",
  },
  {
    name: "Austria",
    continent: "Europe",
    capital: "Vienna",
    currency: "Euro",
    population: 8900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Austria",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Austria.svg/1200px-Flag_of_Austria.svg.png",
  },
  {
    name: "Belarus",
    continent: "Europe",
    capital: "Minsk",
    currency: "Belarusian ruble",
    population: 9500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Belarus",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Belarus.svg/1200px-Flag_of_Belarus.svg.png",
  },
  {
    name: "Belgium",
    continent: "Europe",
    capital: "Brussels",
    currency: "Euro",
    population: 11500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Belgium",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png",
  },
  {
    name: "Bosnia and Herzegovina",
    continent: "Europe",
    capital: "Sarajevo",
    currency: "Convertible mark",
    population: 3300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png",
  },
  {
    name: "Bulgaria",
    continent: "Europe",
    capital: "Sofia",
    currency: "Bulgarian lev",
    population: 6900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Bulgaria",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Bulgaria.svg/1200px-Flag_of_Bulgaria.svg.png",
  },
  {
    name: "Croatia",
    continent: "Europe",
    capital: "Zagreb",
    currency: "Croatian kuna",
    population: 4100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Croatia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
  },
  {
    name: "Cyprus",
    continent: "Europe",
    capital: "Nicosia",
    currency: "Euro",
    population: 889000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Cyprus",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Cyprus.svg/1200px-Flag_of_Cyprus.svg.png",
  },
  {
    name: "Czech Republic",
    continent: "Europe",
    capital: "Prague",
    currency: "Czech koruna",
    population: 10700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Czech_Republic",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_the_Czech_Republic.svg/1200px-Flag_of_the_Czech_Republic.svg.png",
  },
  {
    name: "Denmark",
    continent: "Europe",
    capital: "Copenhagen",
    currency: "Danish krone",
    population: 5800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Denmark",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
  },
  {
    name: "Estonia",
    continent: "Europe",
    capital: "Tallinn",
    currency: "Euro",
    population: 1300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Estonia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Estonia.svg/1200px-Flag_of_Estonia.svg.png",
  },
  {
    name: "Finland",
    continent: "Europe",
    capital: "Helsinki",
    currency: "Euro",
    population: 5500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Finland",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Finland.svg/1200px-Flag_of_Finland.svg.png",
  },
  {
    name: "France",
    continent: "Europe",
    capital: "Paris",
    currency: "Euro",
    population: 67300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/France",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
  },
  {
    name: "Germany",
    continent: "Europe",
    capital: "Berlin",
    currency: "Euro",
    population: 83200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Germany",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  },
  {
    name: "Greece",
    continent: "Europe",
    capital: "Athens",
    currency: "Euro",
    population: 10700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Greece",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Greece.svg/1200px-Flag_of_Greece.svg.png",
  },
  {
    name: "Hungary",
    continent: "Europe",
    capital: "Budapest",
    currency: "Hungarian forint",
    population: 9700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Hungary",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1200px-Flag_of_Hungary.svg.png",
  },
  {
    name: "Iceland",
    continent: "Europe",
    capital: "Reykjavík",
    currency: "Icelandic króna",
    population: 364000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Iceland",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Iceland.svg/1200px-Flag_of_Iceland.svg.png",
  },
  {
    name: "Ireland",
    continent: "Europe",
    capital: "Dublin",
    currency: "Euro",
    population: 5100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Ireland",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png",
  },
  {
    name: "Italy",
    continent: "Europe",
    capital: "Rome",
    currency: "Euro",
    population: 60400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Italy",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
  },
  {
    name: "Kosovo",
    continent: "Europe",
    capital: "Pristina",
    currency: "Euro (unofficial)",
    population: 2100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Kosovo",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Kosovo.svg/1200px-Flag_of_Kosovo.svg.png",
  },
  {
    name: "Latvia",
    continent: "Europe",
    capital: "Riga",
    currency: "Latvian euro",
    population: 1900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Latvia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Latvia.svg/1200px-Flag_of_Latvia.svg.png",
  },
  {
    name: "Liechtenstein",
    continent: "Europe",
    capital: "Vaduz",
    currency: "Swiss franc",
    population: 38000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Liechtenstein",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Liechtenstein.svg/1200px-Flag_of_Liechtenstein.svg.png",
  },
  {
    name: "Lithuania",
    continent: "Europe",
    capital: "Vilnius",
    currency: "Euro",
    population: 2800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Lithuania",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_Lithuania.svg/1200px-Flag_of_Lithuania.svg.png",
  },
  {
    name: "Luxembourg",
    continent: "Europe",
    capital: "Luxembourg City",
    currency: "Euro",
    population: 632000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Luxembourg",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Luxembourg.svg/1200px-Flag_of_Luxembourg.svg.png",
  },
  {
    name: "Malta",
    continent: "Europe",
    capital: "Valletta",
    currency: "Euro",
    population: 516000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Malta",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Malta.svg/1200px-Flag_of_Malta.svg.png",
  },
  {
    name: "Moldova",
    continent: "Europe",
    capital: "Chișinău",
    currency: "Moldovan leu",
    population: 3500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Moldova",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Moldova.svg/1200px-Flag_of_Moldova.svg.png",
  },
  {
    name: "Monaco",
    continent: "Europe",
    capital: "Monte Carlo",
    currency: "Euro",
    population: 38000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Monaco",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Monaco.svg/1200px-Flag_of_Monaco.svg.png",
  },
  {
    name: "Montenegro",
    continent: "Europe",
    capital: "Podgorica",
    currency: "Euro",
    population: 622000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Montenegro",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Montenegro.svg/1200px-Flag_of_Montenegro.svg.png",
  },
  {
    name: "Netherlands",
    continent: "Europe",
    capital: "Amsterdam",
    currency: "Euro",
    population: 17500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Netherlands",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
  },
  {
    name: "North Macedonia",
    continent: "Europe",
    capital: "Skopje",
    currency: "Macedonian denar",
    population: 2100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/North_Macedonia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_North_Macedonia.svg/1200px-Flag_of_North_Macedonia.svg.png",
  },
  {
    name: "Norway",
    continent: "Europe",
    capital: "Oslo",
    currency: "Norwegian krone",
    population: 5400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Norway",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Norway.svg/1200px-Flag_of_Norway.svg.png",
  },
  {
    name: "Poland",
    continent: "Europe",
    capital: "Warsaw",
    currency: "Polish zloty",
    population: 38500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Poland",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png",
  },
  {
    name: "Portugal",
    continent: "Europe",
    capital: "Lisbon",
    currency: "Euro",
    population: 10300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Portugal",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
  },
  {
    name: "Romania",
    continent: "Europe",
    capital: "Bucharest",
    currency: "Romanian leu",
    population: 19400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Romania",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png",
  },
  {
    name: "Russia",
    continent: "Europe",
    capital: "Moscow",
    currency: "Russian ruble",
    population: 146200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Russia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
  },
  {
    name: "San Marino",
    continent: "Europe",
    capital: "San Marino",
    currency: "Euro",
    population: 33000,
    wikipediaLink: "https://en.wikipedia.org/wiki/San_Marino",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_San_Marino.svg/1200px-Flag_of_San_Marino.svg.png",
  },
  {
    name: "Serbia",
    continent: "Europe",
    capital: "Belgrade",
    currency: "Serbian dinar",
    population: 7000000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Serbia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Serbia.svg/1200px-Flag_of_Serbia.svg.png",
  },
  {
    name: "Slovakia",
    continent: "Europe",
    capital: "Bratislava",
    currency: "Euro",
    population: 5500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Slovakia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png",
  },
  {
    name: "Slovenia",
    continent: "Europe",
    capital: "Ljubljana",
    currency: "Euro",
    population: 2100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Slovenia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Slovenia.svg/1200px-Flag_of_Slovenia.svg.png",
  },
  {
    name: "Spain",
    continent: "Europe",
    capital: "Madrid",
    currency: "Euro",
    population: 47300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Spain",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
  },
  {
    name: "Sweden",
    continent: "Europe",
    capital: "Stockholm",
    currency: "Swedish krona",
    population: 10400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Sweden",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png",
  },
  {
    name: "Switzerland",
    continent: "Europe",
    capital: "Bern",
    currency: "Swiss franc",
    population: 8600000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Switzerland",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Switzerland.svg/1200px-Flag_of_Switzerland.svg.png",
  },
  {
    name: "Ukraine",
    continent: "Europe",
    capital: "Kyiv",
    currency: "Ukrainian hryvnia",
    population: 44100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Ukraine",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png",
  },
  {
    name: "Vatican City",
    continent: "Europe",
    capital: "Vatican City",
    currency: "Euro",
    population: 800,
    wikipediaLink: "https://en.wikipedia.org/wiki/Vatican_City",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flag_of_Vatican_City.svg/1200px-Flag_of_Vatican_City.svg.png",
  },
  {
    name: "England",
    continent: "Europe",
    population: 56400000,
    capital: "London",
    currency: "Pound sterling",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_England.svg/1200px-Flag_of_England.svg.png",
    wikipediaLink: "https://en.wikipedia.org/wiki/England",
  },
  {
    name: "Scotland",
    continent: "Europe",
    currency: "Pound sterling",
    population: 5500000,
    capital: "Edinburgh",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png",
    wikipediaLink: "https://en.wikipedia.org/wiki/Scotland",
  },
  {
    name: "Wales",
    continent: "Europe",
    population: 3100000,
    capital: "Cardiff",
    currency: "Pound sterling",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Wales.svg/1200px-Flag_of_Wales.svg.png",
    wikipediaLink: "https://en.wikipedia.org/wiki/Wales",
  },
  {
    name: "Northern Ireland",
    continent: "Europe",
    currency: "Pound sterling",
    population: 1900000,
    capital: "Belfast",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Northern_Ireland.svg/1200px-Flag_of_Northern_Ireland.svg.png",
    wikipediaLink: "https://en.wikipedia.org/wiki/Northern_Ireland",
  },
  {
    name: "Algeria",
    continent: "Africa",
    capital: "Algiers",
    currency: "Algerian dinar",
    population: 44100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Algeria",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png",
  },
  {
    name: "Angola",
    continent: "Africa",
    capital: "Luanda",
    currency: "Kwanza",
    population: 33200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Angola",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Angola.svg/1200px-Flag_of_Angola.svg.png",
  },
  {
    name: "Benin",
    continent: "Africa",
    capital: "Porto-Novo",
    currency: "CFA franc",
    population: 12200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Benin",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Benin.svg/1200px-Flag_of_Benin.svg.png",
  },
  {
    name: "Botswana",
    continent: "Africa",
    capital: "Gaborone",
    currency: "Pula",
    population: 2300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Botswana",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Botswana.svg/1200px-Flag_of_Botswana.svg.png",
  },
  {
    name: "Burkina Faso",
    continent: "Africa",
    capital: "Ouagadougou",
    currency: "CFA franc",
    population: 21400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Burkina_Faso",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Burkina_Faso.svg/1200px-Flag_of_Burkina_Faso.svg.png",
  },
  {
    name: "Burundi",
    continent: "Africa",
    capital: "Gitega",
    currency: "Burundian franc",
    population: 11800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Burundi",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_Burundi.svg/1200px-Flag_of_Burundi.svg.png",
  },
  {
    name: "Cabo Verde",
    continent: "Africa",
    capital: "Praia",
    currency: "Cape Verdean escudo",
    population: 556000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Cabo_Verde",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Cape_Verde.svg/1200px-Flag_of_Cape_Verde.svg.png",
  },
  {
    name: "Cameroon",
    continent: "Africa",
    capital: "Yaoundé",
    currency: "CFA franc",
    population: 25300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Cameroon",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Cameroon.svg/1200px-Flag_of_Cameroon.svg.png",
  },
  {
    name: "Central African Republic",
    continent: "Africa",
    capital: "Bangui",
    currency: "Central African CFA franc",
    population: 4800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Central_African_Republic",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_the_Central_African_Republic.svg/1200px-Flag_of_the_Central_African_Republic.svg.png",
  },
  {
    name: "Chad",
    continent: "Africa",
    capital: "N'Djamena",
    currency: "Central African CFA franc",
    population: 16300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Chad",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Chad.svg/1200px-Flag_of_Chad.svg.png",
  },
  {
    name: "Comoros",
    continent: "Africa",
    capital: "Moroni",
    currency: "Comorian franc",
    population: 866000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Comoros",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_the_Comoros.svg/1200px-Flag_of_the_Comoros.svg.png",
  },
  {
    name: "Congo, Republic of the",
    continent: "Africa",
    capital: "Brazzaville",
    currency: "Central African CFA franc",
    population: 5500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Republic_of_the_Congo",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Republic_of_the_Congo.svg/1200px-Flag_of_the_Republic_of_the_Congo.svg.png",
  },
  {
    name: "Congo, Democratic Republic of the (Congo-Kinshasa)",
    continent: "Africa",
    capital: "Kinshasa",
    currency: "Congolese franc",
    population: 90300000,
    wikipediaLink:
      "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1200px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
  },
  {
    name: "Djibouti",
    continent: "Africa",
    capital: "Djibouti",
    currency: "Djiboutian franc",
    population: 988000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Djibouti",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_Djibouti.svg/1200px-Flag_of_Djibouti.svg.png",
  },
  {
    name: "Egypt",
    continent: "Africa",
    capital: "Cairo",
    currency: "Egyptian pound",
    population: 102300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Egypt",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png",
  },
  {
    name: "Equatorial Guinea",
    continent: "Africa",
    capital: "Malabo",
    currency: "CFA franc",
    population: 1400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Equatorial_Guinea",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Equatorial_Guinea.svg/1200px-Flag_of_Equatorial_Guinea.svg.png",
  },
  {
    name: "Eritrea",
    continent: "Africa",
    capital: "Asmara",
    currency: "Nakfa",
    population: 3500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Eritrea",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Eritrea.svg/1200px-Flag_of_Eritrea.svg.png",
  },
  {
    name: "Eswatini",
    continent: "Africa",
    capital: "Mbabana",
    currency: "Lilangeni",
    population: 1100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Eswatini",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Eswatini.svg/1200px-Flag_of_Eswatini.svg.png",
  },
  {
    name: "Ethiopia",
    continent: "Africa",
    capital: "Addis Ababa",
    currency: "Birr",
    population: 115400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Ethiopia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Ethiopia.svg/1200px-Flag_of_Ethiopia.svg.png",
  },
  {
    name: "Gabon",
    continent: "Africa",
    capital: "Libreville",
    currency: "CFA franc",
    population: 2200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Gabon",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flag_of_Gabon.svg/1200px-Flag_of_Gabon.svg.png",
  },
  {
    name: "Gambia",
    continent: "Africa",
    capital: "Banjul",
    currency: "Daasim",
    population: 2400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Gambia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_the_Gambia.svg/1200px-Flag_of_the_Gambia.svg.png",
  },
  {
    name: "Ghana",
    continent: "Africa",
    capital: "Accra",
    currency: "Ghana cedi",
    population: 30800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Ghana",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png",
  },
  {
    name: "Guinea",
    continent: "Africa",
    capital: "Conakry",
    currency: "Guinean franc",
    population: 13100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Guinea",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Guinea.svg/1200px-Flag_of_Guinea.svg.png",
  },
  {
    name: "Guinea-Bissau",
    continent: "Africa",
    capital: "Bissau",
    currency: "Guinea-Bissauan peso",
    population: 2000000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Guinea-Bissau",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flag_of_Guinea-Bissau.svg/1200px-Flag_of_Guinea-Bissau.svg.png",
  },
  {
    name: "Ivory Coast (Côte d'Ivoire)",
    continent: "Africa",
    capital: "Yamoussoukro",
    currency: "CFA franc",
    population: 25600000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Ivory_Coast",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Ivory_Coast.svg/1200px-Flag_of_Ivory_Coast.svg.png",
  },
  {
    name: "Kenya",
    continent: "Africa",
    capital: "Nairobi",
    currency: "Kenyan shilling",
    population: 54000000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Kenya",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png",
  },
  {
    name: "Lesotho",
    continent: "Africa",
    capital: "Maseru",
    currency: "Loti",
    population: 2100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Lesotho",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Lesotho.svg/1200px-Flag_of_Lesotho.svg.png",
  },
  {
    name: "Liberia",
    continent: "Africa",
    capital: "Monrovia",
    currency: "Liberian dollar",
    population: 4900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Liberia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_Liberia.svg/1200px-Flag_of_Liberia.svg.png",
  },
  {
    name: "Libya",
    continent: "Africa",
    capital: "Tripoli",
    currency: "Libyan dinar",
    population: 6900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Libya",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Libya.svg/1200px-Flag_of_Libya.svg.png",
  },
  {
    name: "Madagascar",
    continent: "Africa",
    capital: "Antananarivo",
    currency: "Malagasy ariary",
    population: 27900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Madagascar",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Madagascar.svg/1200px-Flag_of_Madagascar.svg.png",
  },
  {
    name: "Malawi",
    continent: "Africa",
    capital: "Lilongwe",
    currency: "Malawi kwacha",
    population: 19500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Malawi",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Malawi.svg/1200px-Flag_of_Malawi.svg.png",
  },
  {
    name: "Mali",
    continent: "Africa",
    capital: "Bamako",
    currency: "CFA franc",
    population: 19700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Mali",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_Mali.svg/1200px-Flag_of_Mali.svg.png",
  },
  {
    name: "Mauritania",
    continent: "Africa",
    capital: "Nouakchott",
    currency: "Ouguiya",
    population: 4500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Mauritania",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_Mauritania.svg/1200px-Flag_of_Mauritania.svg.png",
  },
  {
    name: "Mauritius",
    continent: "Africa",
    capital: "Port Louis",
    currency: "Mauritian rupee",
    population: 1300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Mauritius",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Mauritius.svg/1200px-Flag_of_Mauritius.svg.png",
  },
  {
    name: "Morocco",
    continent: "Africa",
    capital: "Rabat",
    currency: "Moroccan dirham",
    population: 36800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Morocco",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_Morocco.svg/1200px-Flag_of_Morocco.svg.png",
  },
  {
    name: "Mozambique",
    continent: "Africa",
    capital: "Maputo",
    currency: "Mozambique metical",
    population: 31200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Mozambique",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Mozambique.svg/1200px-Flag_of_Mozambique.svg.png",
  },
  {
    name: "Namibia",
    continent: "Africa",
    capital: "Windhoek",
    currency: "Namibian dollar",
    population: 2500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Namibia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Namibia.svg/1200px-Flag_of_Namibia.svg.png",
  },
  {
    name: "Niger",
    continent: "Africa",
    capital: "Niamey",
    currency: "CFA franc",
    population: 22900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Niger",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Niger.svg/1200px-Flag_of_Niger.svg.png",
  },
  {
    name: "Nigeria",
    continent: "Africa",
    capital: "Abuja",
    currency: "Naira",
    population: 216100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Nigeria",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png",
  },
  {
    name: "Rwanda",
    continent: "Africa",
    capital: "Kigali",
    currency: "Rwandan franc",
    population: 13200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Rwanda",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Flag_of_Rwanda.svg/1200px-Flag_of_Rwanda.svg.png",
  },
  {
    name: "Sao Tome and Principe",
    continent: "Africa",
    capital: "Sao Tome",
    currency: "dobra",
    population: 215000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Sao_Tom%C3%A9_and_Principe",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Sao_Tom%C3%A9_and_Principe.svg/1200px-Flag_of_Sao_Tom%C3%A9_and_Principe.svg.png",
  },
  {
    name: "Senegal",
    continent: "Africa",
    capital: "Dakar",
    currency: "West African CFA franc",
    population: 17700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Senegal",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Senegal.svg/1200px-Flag_of_Senegal.svg.png",
  },
  {
    name: "Seychelles",
    continent: "Africa",
    capital: "Victoria",
    currency: "Seychellois rupee",
    population: 97000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Seychelles",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Seychelles.svg/1200px-Flag_of_Seychelles.svg.png",
  },
  {
    name: "Sierra Leone",
    continent: "Africa",
    capital: "Freetown",
    currency: "Leone",
    population: 7700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Sierra_Leone",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Sierra_Leone.svg/1200px-Flag_of_Sierra_Leone.svg.png",
  },
  {
    name: "Somalia",
    continent: "Africa",
    capital: "Mogadishu",
    currency: "Somali shilling",
    population: 15900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Somalia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Somalia.svg/1200px-Flag_of_Somalia.svg.png",
  },
  {
    name: "South Africa",
    continent: "Africa",
    capital: "Pretoria",
    currency: "Rand",
    population: 59300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/South_Africa",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Africa.svg/1200px-Flag_of_South_Africa.svg.png",
  },
  {
    name: "South Sudan",
    continent: "Africa",
    capital: "Juba",
    currency: "South Sudanese pound",
    population: 11200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/South_Sudan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_South_Sudan.svg/1200px-Flag_of_South_Sudan.svg.png",
  },
  {
    name: "Sudan",
    continent: "Africa",
    capital: "Khartoum",
    currency: "Sudanese pound",
    population: 45200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Sudan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Sudan.svg/1200px-Flag_of_Sudan.svg.png",
  },
  {
    name: "Tanzania",
    continent: "Africa",
    capital: "Dar es Salaam",
    currency: "Tanzanian shilling",
    population: 58500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Tanzania",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Tanzania.svg/1200px-Flag_of_Tanzania.svg.png",
  },
  {
    name: "Togo",
    continent: "Africa",
    capital: "Lomé",
    currency: "CFA franc",
    population: 8700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Togo",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Togo.svg/1200px-Flag_of_Togo.svg.png",
  },
  {
    name: "Tunisia",
    continent: "Africa",
    capital: "Tunis",
    currency: "Tunisian dinar",
    population: 11700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Tunisia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",
  },
  {
    name: "Uganda",
    continent: "Africa",
    capital: "Kampala",
    currency: "Ugandan shilling",
    population: 45700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Uganda",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Uganda.svg/1200px-Flag_of_Uganda.svg.png",
  },
  {
    name: "Zambia",
    continent: "Africa",
    capital: "Lusaka",
    currency: "Kwacha",
    population: 18300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Zambia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Zambia.svg/1200px-Flag_of_Zambia.svg.png",
  },
  {
    name: "Zimbabwe",
    continent: "Africa",
    capital: "Harare",
    currency: "Zimbabwean dollar",
    population: 14800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Zimbabwe",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_Zimbabwe.svg/1200px-Flag_of_Zimbabwe.svg.png",
  },
  {
    name: "Afghanistan",
    continent: "Asia",
    capital: "Kabul",
    currency: "Afghani",
    population: 39200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Afghanistan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Afghanistan.svg/1200px-Flag_of_Afghanistan.svg.png",
  },
  {
    name: "Armenia",
    continent: "Asia",
    capital: "Yerevan",
    currency: "Armenian dram",
    population: 2900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Armenia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Armenia.svg/1200px-Flag_of_Armenia.svg.png",
  },
  {
    name: "Azerbaijan",
    continent: "Asia",
    capital: "Baku",
    currency: "Azerbaijani manat",
    population: 10100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Azerbaijan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
  },
  {
    name: "Bahrain",
    continent: "Asia",
    capital: "Manama",
    currency: "Bahraini dinar",
    population: 1700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Bahrain",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Flag_of_Bahrain.svg/1200px-Flag_of_Bahrain.svg.png",
  },
  {
    name: "Bangladesh",
    continent: "Asia",
    capital: "Dhaka",
    currency: "Bangladeshi taka",
    population: 164700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Bangladesh",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png",
  },
  {
    name: "Bhutan",
    continent: "Asia",
    capital: "Thimphu",
    currency: "Bhutanese ngultrum",
    population: 770000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Bhutan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Bhutan.svg/1200px-Flag_of_Bhutan.svg.png",
  },
  {
    name: "Brunei",
    continent: "Asia",
    capital: "Bandar Seri Begawan",
    currency: "Brunei dollar",
    population: 432000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Brunei",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Brunei.svg/1200px-Flag_of_Brunei.svg.png",
  },
  {
    name: "Cambodia",
    continent: "Asia",
    capital: "Phnom Penh",
    currency: "Riel",
    population: 16500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Cambodia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png",
  },
  {
    name: "China",
    continent: "Asia",
    capital: "Beijing",
    currency: "Renminbi",
    population: 14400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/China",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_China.svg/1200px-Flag_of_China.svg.png",
  },
  {
    name: "Cyprus",
    continent: "Asia",
    capital: "Nicosia",
    currency: "Euro",
    population: 884000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Cyprus",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Cyprus.svg/1200px-Flag_of_Cyprus.svg.png",
  },
  {
    name: "Georgia",
    continent: "Asia",
    capital: "Tbilisi",
    currency: "Lari",
    population: 3700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Georgia_(country)",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png",
  },
  {
    name: "India",
    continent: "Asia",
    capital: "New Delhi",
    currency: "Indian rupee",
    population: 14000000,
    wikipediaLink: "https://en.wikipedia.org/wiki/India",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
  },
  {
    name: "Indonesia",
    continent: "Asia",
    capital: "Jakarta",
    currency: "Rupiah",
    population: 273500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Indonesia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Indonesia.svg/1200px-Flag_of_Indonesia.svg.png",
  },
  {
    name: "Iran",
    continent: "Asia",
    capital: "Tehran",
    currency: "Iranian rial",
    population: 83900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Iran",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Iran.svg/1200px-Flag_of_Iran.svg.png",
  },
  {
    name: "Iraq",
    continent: "Asia",
    capital: "Baghdad",
    currency: "Iraqi dinar",
    population: 40200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Iraq",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Iraq.svg/1200px-Flag_of_Iraq.svg.png",
  },
  {
    name: "Israel",
    continent: "Asia",
    capital: "Jerusalem",
    currency: "Israeli new shekel",
    population: 9300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Israel",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png",
  },
  {
    name: "Japan",
    continent: "Asia",
    capital: "Tokyo",
    currency: "Japanese yen",
    population: 125500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Japan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
  },
  {
    name: "Jordan",
    continent: "Asia",
    capital: "Amman",
    currency: "Jordanian dinar",
    population: 10200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Jordan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Jordan.svg/1200px-Flag_of_Jordan.svg.png",
  },
  {
    name: "Kazakhstan",
    continent: "Asia",
    capital: "Nur-Sultan",
    currency: "Kazakhstani tenge",
    population: 18700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Kazakhstan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Kazakhstan.svg/1200px-Flag_of_Kazakhstan.svg.png",
  },
  {
    name: "North Korea",
    continent: "Asia",
    capital: "Pyongyang",
    currency: "North Korean won",
    population: 25700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/North_Korea",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_North_Korea.svg/1200px-Flag_of_North_Korea.svg.png",
  },
  {
    name: "South Korea",
    continent: "Asia",
    capital: "Seoul",
    currency: "South Korean won",
    population: 51800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/South_Korea",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png",
  },
  {
    name: "Kuwait",
    continent: "Asia",
    capital: "Kuwait City",
    currency: "Kuwaiti dinar",
    population: 4400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Kuwait",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Flag_of_Kuwait.svg/1200px-Flag_of_Kuwait.svg.png",
  },
  {
    name: "Kyrgyzstan",
    continent: "Asia",
    capital: "Bishkek",
    currency: "Som",
    population: 6500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Kyrgyzstan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png",
  },
  {
    name: "Laos",
    continent: "Asia",
    capital: "Vientiane",
    currency: "Kip",
    population: 7200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Laos",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_Laos.svg/1200px-Flag_of_Laos.svg.png",
  },
  {
    name: "Lebanon",
    continent: "Asia",
    capital: "Beirut",
    currency: "Lebanese pound",
    population: 6800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Lebanon",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Lebanon.svg/1200px-Flag_of_Lebanon.svg.png",
  },
  {
    name: "Malaysia",
    continent: "Asia",
    capital: "Kuala Lumpur",
    currency: "Malaysian ringgit",
    population: 32400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Malaysia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Malaysia.svg/1200px-Flag_of_Malaysia.svg.png",
  },
  {
    name: "Maldives",
    continent: "Asia",
    capital: "Male",
    currency: "Maldivian rufiyaa",
    population: 554000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Maldives",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_the_Maldives.svg/1200px-Flag_of_the_Maldives.svg.png",
  },
  {
    name: "Mongolia",
    continent: "Asia",
    capital: "Ulaanbaatar",
    currency: "Tugrik",
    population: 3200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Mongolia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Mongolia.svg/1200px-Flag_of_Mongolia.svg.png",
  },
  {
    name: "Myanmar (Burma)",
    continent: "Asia",
    capital: "Nay Pyi Taw",
    currency: "Kyat",
    population: 54400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Myanmar",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Myanmar.svg/1200px-Flag_of_Myanmar.svg.png",
  },
  {
    name: "Nepal",
    continent: "Asia",
    capital: "Kathmandu",
    currency: "Nepalese rupee",
    population: 29100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Nepal",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png",
  },
  {
    name: "Oman",
    continent: "Asia",
    capital: "Muscat",
    currency: "Rial",
    population: 5100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Oman",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Oman.svg/1200px-Flag_of_Oman.svg.png",
  },
  {
    name: "Pakistan",
    continent: "Asia",
    capital: "Islamabad",
    currency: "Pakistani rupee",
    population: 220800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Pakistan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Pakistan.svg/1200px-Flag_of_Pakistan.svg.png",
  },
  {
    name: "Palestine",
    continent: "Asia",
    capital: "Jerusalem",
    currency: "Israeli new shekel",
    population: 5200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/State_of_Palestine",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Palestine.svg/1200px-Flag_of_Palestine.svg.png",
  },
  {
    name: "Philippines",
    continent: "Asia",
    capital: "Manila",
    currency: "Philippine peso",
    population: 110900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Philippines",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Flag_of_the_Philippines.svg/1200px-Flag_of_the_Philippines.svg.png",
  },
  {
    name: "Qatar",
    continent: "Asia",
    capital: "Doha",
    currency: "Qatari riyal",
    population: 2800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Qatar",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png",
  },
  {
    name: "Saudi Arabia",
    continent: "Asia",
    capital: "Riyadh",
    currency: "Saudi riyal",
    population: 34200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Saudi_Arabia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png",
  },
  {
    name: "Singapore",
    continent: "Asia",
    capital: "Singapore",
    currency: "Singapore dollar",
    population: 5700000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Singapore",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
  },
  {
    name: "Sri Lanka",
    continent: "Asia",
    capital: "Colombo",
    currency: "Sri Lankan rupee",
    population: 21900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Sri_Lanka",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png",
  },
  {
    name: "Syria",
    continent: "Asia",
    capital: "Damascus",
    currency: "Syrian pound",
    population: 17400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Syria",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Syria.svg/1200px-Flag_of_Syria.svg.png",
  },
  {
    name: "Tajikistan",
    continent: "Asia",
    capital: "Dushanbe",
    currency: "Somoni",
    population: 9300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Tajikistan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Tajikistan.svg/1200px-Flag_of_Tajikistan.svg.png",
  },
  {
    name: "Thailand",
    continent: "Asia",
    capital: "Bangkok",
    currency: "Thai baht",
    population: 70200000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Thailand",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png",
  },
  {
    name: "Timor-Leste (East Timor)",
    continent: "Asia",
    capital: "Dili",
    currency: "United States dollar",
    population: 1300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Timor-Leste",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_East_Timor.svg/1200px-Flag_of_East_Timor.svg.png",
  },
  {
    name: "Turkey",
    continent: "Asia",
    capital: "Ankara",
    currency: "Turkish lira",
    population: 84300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Turkey",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png",
  },
  {
    name: "Turkmenistan",
    continent: "Asia",
    capital: "Ashgabat",
    currency: "Turkmenistan manat",
    population: 6100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Turkmenistan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Turkmenistan.svg/1200px-Flag_of_Turkmenistan.svg.png",
  },
  {
    name: "United Arab Emirates",
    continent: "Asia",
    capital: "Abu Dhabi",
    currency: "United Arab Emirates dirham",
    population: 9800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/United_Arab_Emirates",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png",
  },
  {
    name: "Uzbekistan",
    continent: "Asia",
    capital: "Tashkent",
    currency: "Uzbekistani som",
    population: 34300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Uzbekistan",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Uzbekistan.svg/1200px-Flag_of_Uzbekistan.svg.png",
  },
  {
    name: "Vietnam",
    continent: "Asia",
    capital: "Hanoi",
    currency: "Vietnamese dong",
    population: 97300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Vietnam",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
  },
  {
    name: "Yemen",
    continent: "Asia",
    capital: "Sana'a",
    currency: "Yemeni rial",
    population: 29300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Yemen",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Yemen.svg/1200px-Flag_of_Yemen.svg.png",
  },
  {
    name: "Canada",
    continent: "North America",
    capital: "Ottawa",
    currency: "Canadian dollar",
    population: 38100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Canada",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1200px-Flag_of_Canada.svg.png",
  },
  {
    name: "United States of America (USA)",
    continent: "North America",
    capital: "Washington, D.C.",
    currency: "United States dollar",
    population: 332400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/United_States",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
  },
  {
    name: "Mexico",
    continent: "North America",
    capital: "Mexico City",
    currency: "Mexican peso",
    population: 128900000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Mexico",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png",
  },
  {
    name: "Argentina",
    continent: "South America",
    capital: "Buenos Aires",
    currency: "Argentine peso",
    population: 45300000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Argentina",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
  },
  {
    name: "Bolivia",
    continent: "South America",
    capital: "La Paz",
    currency: "Boliviano",
    population: 11600000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Bolivia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Bolivia.svg/1200px-Flag_of_Bolivia.svg.png",
  },
  {
    name: "Brazil",
    continent: "South America",
    capital: "Brasilia",
    currency: "Brazilian real",
    population: 212600000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Brazil",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
  },
  {
    name: "Chile",
    continent: "South America",
    capital: "Santiago",
    currency: "Chilean peso",
    population: 19100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Chile",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png",
  },
  {
    name: "Colombia",
    continent: "South America",
    capital: "Bogotá",
    currency: "Colombian peso",
    population: 50800000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Colombia",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png",
  },
  {
    name: "Ecuador",
    continent: "South America",
    capital: "Quito",
    currency: "United States dollar",
    population: 17500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Ecuador",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Ecuador.svg/1200px-Flag_of_Ecuador.svg.png",
  },
  {
    name: "Guyana",
    continent: "South America",
    capital: "Georgetown",
    currency: "Guyanese dollar",
    population: 780000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Guyana",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Guyana.svg/1200px-Flag_of_Guyana.svg.png",
  },
  {
    name: "Paraguay",
    continent: "South America",
    capital: "Asunción",
    currency: "Guarani",
    population: 7100000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Paraguay",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Paraguay.svg/1200px-Flag_of_Paraguay.svg.png",
  },
  {
    name: "Peru",
    continent: "South America",
    capital: "Lima",
    currency: "Sol",
    population: 33000000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Peru",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_Peru.svg/1200px-Flag_of_Peru.svg.png",
  },
  {
    name: "Suriname",
    continent: "South America",
    capital: "Paramaribo",
    currency: "Surinamese dollar",
    population: 587000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Suriname",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Suriname.svg/1200px-Flag_of_Suriname.svg.png",
  },
  {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo",
    currency: "Uruguayan peso",
    population: 3500000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Uruguay",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png",
  },
  {
    name: "Venezuela",
    continent: "South America",
    capital: "Caracas",
    currency: "Bolívar",
    population: 28400000,
    wikipediaLink: "https://en.wikipedia.org/wiki/Venezuela",
    flagImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png",
  },
];
module.exports = countries;