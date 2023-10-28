const meetups = [];
function Meetup(
  title,
  description,
  date,
  location,
  price,
  isExternalEvent,
  organizers,
  landingPageLink,
  registrationLink,
  programme,
  reviews
) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.location = location;
  this.price = price;
  this.isExternalEvent = isExternalEvent;
  this.organizers = organizers;
  this.landingPageLink = landingPageLink;
  this.registrationLink = registrationLink;
  this.programme = programme;
  this.reviews = reviews;
}

function Location(name, address) {
  this.name = name;
  this.address = address;
}
function Address(street, number, postalCode, city) {
  this.street = street;
  this.number = number;
  this.postalCode = postalCode;
  this.city = city;
}

function Organizer(name, website, socials) {
  this.name = name;
  this.website = website;
  this.socials = socials;
}

function ProgrammeItem(title, from, to, isKeyTalk, speaker, description) {
  this.title = title;
  this.from = from;
  this.to = to;
  this.isKeyTalk = isKeyTalk;
  this.speaker = speaker;
  this.description = description;
}

function Speaker(name, jobDescription, company) {
  this.name = name;
  this.jobDescription = jobDescription;
  this.company = company;
}

function Review(username, rating, comment) {
  this.username = username;
  this.rating = rating;
  this.comment = comment;
}

meetups[0] = new Meetup(
  "Alumni Meetup 01",
  "Onze alumniwerking schiet uit de startblokken. Een interne meetup is een meetup waar oud-studenten van de opleiding Graduaat Programmeren samenkomen. Docenten en andere collega's kunnen hierbij aansluiten. Ook de programmingBuddies worden hierop uitgenodigd.",
  "17-05-2023",
  new Location(
    "Campus Mariakerke",
    new Address("Industrieweg", "232", "9030", "Mariakerke")
  ),
  "Gratis",
  false,
  [
    new Organizer("Coding Wizards", "https://www.pgm.gent/codingwizards", {
      linkedIn: "https://www.linkedin.com/company/28878545/",
      instagram: "https://www.instagram.com/programmeren.ahs/",
    }),
  ],
  "https://www.iodigital.com/nl/insights/events/tech-she-her",
  "https://www.google.com/url?q=https%3A%2F%2Fwww.iodigital.com%2Fnl%2Finsights%2Fevents%2Ftech-she-her&sa=D&sntz=1&usg=AOvVaw20L2EkTSpkHQq5fJr_naWm",
  [
    new ProgrammeItem("Ontvangst", 1684341000000, 1684342800000, false),
    new ProgrammeItem(
      "Hello Coding Wizards",
      1684342800000,
      1684343400000,
      false,
      new Speaker("Nicky Malfliet & Philippe De Pauw - Waterschoot")
    ),
    new ProgrammeItem(
      "Cloud Development vs Monolithic apps",
      1684343400000,
      1684344900000,
      true,
      new Speaker("Thibaut De Maerteleire", "R&D Engineer", "Corilus"),
      "Cloud development en monolithische applicaties vertegenwoordigen twee verschillende benaderingen van softwareontwikkeling en -architectuur. Monolithische apps zijn traditionele toepassingen waarbij alle functionaliteit in één enkele codebase en uitvoerbare eenheid wordt ondergebracht. In deze aanpak is de applicatie vaak omvangrijk en complex wat kan leiden tot uitdagingen bij schaalbaarheid en onderhoud. Aan de andere kant staat cloud development waarbij applicaties zijn opgebouwd met een microservices- of serverless-architectuur en draaien in de cloud. Dit maakt het mogelijk om de applicatie op te splitsen in kleine onafhankelijke services die afzonderlijk kunnen worden ontwikkeld geschaald en onderhouden. Hoewel monolithische apps eenvoudiger kunnen lijken om te ontwikkelen biedt cloud development voordelen zoals schaalbaarheid flexibiliteit en veerkracht. De keuze tussen deze benaderingen hangt af van de specifieke behoeften en doelstellingen van een project waarbij cloud development vaak de voorkeur geniet voor moderne schaalbare en onderhoudsarme applicaties."
    ),
    new ProgrammeItem(
      "SentEMO: Blitz in production",
      1684344900000,
      1684346400000,
      false,
      new Speaker(
        "Olivier Parent",
        "Lecturer | Researcher",
        "Arteveldehogeschool"
      )
    ),
    new ProgrammeItem("Pauze", 1684346400000, 1684347000000, false),
    new ProgrammeItem(
      "Forms in real-world React Applications",
      1684347000000,
      1684348500000,
      true,
      new Speaker("Lennert De Ryck", "Front-end developer", "Sweet Mustard"),
      "In real-world React-applicaties spelen formulieren een cruciale rol bij het verzamelen van gegevens van gebruikers en het mogelijk maken van interactie met de applicatie. Het beheren van formulieren in React kan echter een uitdaging vormen vanwege de noodzaak om de staat van de formulierelementen te synchroniseren met de componentstaat. Dit omvat het gebruik van gecontroleerde componenten om gebruikersinvoer vast te leggen en te verwerken. Formuliervalidatie is ook een belangrijk aspect waarbij ontwikkelaars moeten zorgen voor de juiste invoervalidatie en het geven van terugkoppeling aan gebruikers bij onjuiste gegevens. Bovendien kunnen React-hooks zoals useState en useEffect worden ingezet om de staat van complexe formulieren efficiënt te beheren. In real-world React-applicaties is het begrijpen en effectief beheren van formulieren essentieel om een vlotte gebruikerservaring te bieden en nauwkeurige gegevens te verzamelen."
    ),
    new ProgrammeItem(
      "Ambassadeursschap / Whats Next",
      1684348500000,
      1684349100000,
      false,
      new Speaker("Nicky Malfliet")
    ),
    new ProgrammeItem("Chit-Chat", 1684349100000, 1684353600000, false),
  ],
  [
    new Review("Alice123", 9, "Geweldige talks zeer informatief!"),
    new Review(
      "Bob456",
      8,
      "Genoten van de verscheidenheid aan besproken onderwerpen."
    ),
    new Review("Charlie789", 7, "Sommige talks waren beter dan andere."),
    new Review("David101", 10, "Absoluut fantastische talks!"),
    new Review("Eve202", 6, "Zou meer interactieve sessies kunnen gebruiken."),
    new Review("Frank303", 9, "Echt informatieve presentaties."),
    new Review(
      "Grace404",
      8,
      "Goed georganiseerd evenement maar een paar technische problemen."
    ),
    new Review(
      "Hannah505",
      7,
      "Degelijke talks maar had meer diepgang verwacht."
    ),
  ]
);
// de tweede meetup
meetups[1] = new Meetup(
  "Tech (she/her)",
  "Tech (she/her) is een moment waar we de diversiteit in de tech scene in de kijker willen zetten. De balans moet in evenwicht zijn om naar de toekomst toe onze technologische vooruitgang inclusief te maken. Door de sterke verhalen tijdens dit event krijg je nieuwe inzichten om mee te nemen naar jouw bedrijf. Dit event is een samenwerking tussen iO en Arteveldehogeschool en voor iedereen toegankelijk uit het bedrijfsleven die ook met uitdagingen rond deze thematiek zit.",
  "19-10-2023",
  new Location(
    "iO Campus Ghent",
    new Address("Raymonde de Larochelaan", "15", "9051", "Gent")
  ),
  "Gratis",
  true,
  [
    new Organizer("iO", "https://www.iodigital.com/nl/home", {
      linkedIn: "https://www.linkedin.com/company/iodigital-com/",
      instagram: "https://www.instagram.com/iodigital_com/",
      youtube: "https://www.youtube.com/iOdigital-com",
      facebook: "https://www.facebook.com/iodigitalcom/",
      twitter: "https://twitter.com/iodigital_com",
    }),
    new Organizer("Coding Wizards", "https://www.pgm.gent/codingwizards", {
      linkedIn: "https://www.linkedin.com/company/28878545/",
      instagram: "https://www.instagram.com/programmeren.ahs/",
    }),
  ],
  "https://www.iodigital.com/nl/insights/events/tech-she-her",
  "https://www.google.com/url?q=https%3A%2F%2Fwww.iodigital.com%2Fnl%2Finsights%2Fevents%2Ftech-she-her&sa=D&sntz=1&usg=AOvVaw20L2EkTSpkHQq5fJr_naWm",
  [
    new ProgrammeItem(
      "Officieel ontvangst & Netwerken",
      1697727600000,
      1697731200000,
      false
    ),
    new ProgrammeItem(
      "Welkomstwoord",
      1697731200000,
      1697731800000,
      false,
      new Speaker("Nicky Malfliet")
    ),
    new ProgrammeItem(
      "Uitdagingen bij Contour Lab",
      1697731800000,
      1697733600000,
      true,
      new Speaker("Christina Hadinoto", "Founder", "Contourlab"),
      "Bij Contour Lab streven we ernaar modebrands te ondersteunen om inclusiever en succesvoller de online consument bij te staan in de shopping ervaring. Onze geavanceerde Digitale Styling Advisor analyseert lichaamstypes en biedt aanbevelingen voor kledingstukken die de natuurlijke schoonheid van elk individu accentueren. Als vrouwelijke oprichter van een softwarebedrijf kom ik vaak in contact met het mannelijke geslacht waaronder ontwikkelaars en investeerders. Echter de mode-industrie heeft haar eigen subtiliteiten en gevoeligheden en het winkelgedrag van vrouwen vertoont significante verschillen ten opzichte van mannen. Dit maakt het proces van development briefings en product management soms zeer uitdagend vooral wanneer het gaat om het uitleggen van aspecten specifiek gerelateerd zijn aan het vrouwelijke perspectief aan een mannelijk ontwikkelingsteam. Tijdens ons evenement delen we graag hoe Contour Lab deze uitdagingen aanpakt."
    ),
    new ProgrammeItem(
      "Strategy & Insights",
      1697733600000,
      1697735400000,
      false,
      new Speaker("Nhu Nguyen")
    ),
    new ProgrammeItem("Pauze", 1697735400000, 1697736600000, false),
    new ProgrammeItem(
      "Verhalen van vrouwelijke pioniers die een pad effenen naar een toekomst die al begonnen is",
      1697736600000,
      1697737800000,
      true,
      new Speaker(
        "Laurence Jacobs",
        "Business Relationship Officer | Women in Tech Ambassador",
        "Agoria"
      ),
      "Ontdek hoe het dynamische landschap van digitale innovaties onze wereld aan het hervormen is. Van het revolutioneren van onze dagelijkse routines tot het aanpakken van de meest urgente mondiale vraagstukken de kracht van technologie kent geen grenzen. Duik in de mogelijkheden die voor je liggen als woman in tech en leer hoe je het volledige potentieel van digitaal kunt benutten om positieve verandering teweeg te brengen. Laat je inspireren door de verhalen van vrouwelijke pioniers die een pad effenen naar een toekomst die al begonnen is."
    ),
    new ProgrammeItem(
      "Inzichten in Customer Relationship Management processen",
      1697737800000,
      1697739000000,
      true,
      new Speaker("Sara Mathijs", "CEO", "UPEO BV"),
      "Sara de oudste van 2 dochters van een papa die graag een zoon had om mee te shotten. Een veelbewogen jeugd letterlijk omdat ze op regelmatige basis verhuisde van Congo naar Mauritius en Kameroen. Daardoor is ze gegroeid naar een extraverte jonge vrouw met een duidelijke mening en wat we vandaag een mannelijke energie zouden noemen hetgeen haar niet altijd windeieren heeft gelegd. Vandaag is Sara een vrouw van 46 met 3 kids nog eens 3 plus-kids en een woman in tech.\nHaar huidige bedrijf UPEO startte ze 2 jaar geleden samen met een ex-collega. Het bedrijf is gespecialiseerd in het implementeren van Customer Relationship Management processen met de technologie Salesforce. Sara deelt graag haar inzichten!"
    ),
    new ProgrammeItem(
      "Hapje en drankje en netwerken",
      1697739000000,
      1697745600000,
      false
    ),
  ],
  [
    new Review("Emma789", 9, "Interessante gesprekken zeer leerzaam!"),
    new Review("Liam456", 7, "Genoten van de verschillende onderwerpen."),
    new Review("Olivia101", 9, "Fantastische presentaties zeer inspirerend!"),
    new Review(
      "Noah303",
      7,
      "Goed georganiseerd evenement een paar kleine haperingen."
    ),
    new Review("Ava202", 6, "Sommige talks konden interactiever zijn."),
    new Review("Mia404", 9, "Briljante talks niets dan lof!"),
    new Review(
      "Ethan505",
      6,
      "Degelijke presentaties maar had meer diepgang verwacht."
    ),
    new Review("Sophia123", 8, "Geweldige ervaring zeer informatief!"),
  ]
);

for (let i = 0; i < meetups.length; i++) {
  output = `Meetup 0${i + 1} | ${meetups[i].title}\nDatum: ${
    meetups[i].date
  }\nLocatie: ${meetups[i].location.name}\nPrijs: ${meetups[i].price}\n${
    meetups[i].description
  }\nPROGRAMMA\n`;

  for (let j = 0; j < meetups[i].programme.length; j++) {
    let to = new Date(meetups[i].programme[j].to);
    let from = new Date(meetups[i].programme[j].from);
    let fromHoursMinutes =
      from.getHours() +
      ":" +
      (from.getMinutes() == 0 ? "00" : from.getMinutes());
    let toHoursMinutes =
      to.getHours() + ":" + (to.getMinutes() == 0 ? "00" : to.getMinutes());
    let times = `${fromHoursMinutes}-${toHoursMinutes}`;
    output +=
      times +
      ` ${meetups[i].programme[j].title}` +
      (meetups[i].programme[j].speaker != undefined
        ? ` - ${meetups[i].programme[j].speaker.name}`
        : "") +
      `\n`;
  }
  output += `LOCATIE\n${meetups[i].location.name}\n${meetups[i].location.address.street} ${meetups[i].location.address.number}\n${meetups[i].location.address.postalCode} ${meetups[i].location.address.city}\nORGANIZERS\n`;

  for (let k = 0; k < meetups[i].organizers.length; k++) {
    output += `${meetups[i].organizers[k].name}\nWebsite:\t${meetups[i].organizers[k].website}\n`;
    for (let prop in meetups[i].organizers[k].socials) {
      let social =
        meetups[i].organizers[k].socials[prop] != undefined
          ? prop.charAt(0).toUpperCase() +
            prop.slice(1) +
            `:\t${meetups[i].organizers[k].socials[prop]}\n`
          : "";
      output += social;
    }
  }
  output += `Lees alvast meer over onze sprekers \n`;
  for (let l = 0; l < meetups[i].programme.length; l++) {
    output +=
      meetups[i].programme[l].isKeyTalk &&
      typeof meetups[i].programme[l].speaker === `object`
        ? `${meetups[i].programme[l].speaker.name}, ${meetups[i].programme[l].speaker.jobDescription} | ${meetups[i].programme[l].speaker.company}\n${meetups[i].programme[l].description}\n\n`
        : "";
  }
  output += `RECENSIES ✰\n`;
  for (let m = 0; m < meetups[i].reviews.length; m++) {
    for (let p = 0; p < meetups[i].reviews[m].rating; p++) {
      output += "✰";
    }
    output += ` ${meetups[i].reviews[m].username} - ${meetups[i].reviews[m].comment}\n`;
  }
}
console.log(output);
