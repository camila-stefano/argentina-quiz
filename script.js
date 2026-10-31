(function () {
  var REGIONS = {
    nw: "Northwest",
    ne: "Northeast",
    cuyo: "Cuyo",
    pampas: "Pampas",
    pat: "Patagonia",
  };
  var SHAPES = {
    Jujuy: {
      d: "M230,4 L227,6 L223,15 L212,19 L211,24 L200,36 L199,40 L204,47 L197,69 L206,80 L218,88 L223,81 L222,60 L227,59 L234,63 L235,79 L241,82 L247,95 L255,98 L259,97 L264,101 L270,98 L276,101 L286,95 L289,91 L290,66 L289,64 L285,64 L281,67 L274,62 L270,64 L263,54 L264,48 L257,43 L254,27 L257,21 L256,15 L241,14Z",
      cx: 241,
      cy: 56,
    },
    Salta: {
      d: "M344,26 L338,22 L328,10 L305,12 L301,10 L296,12 L285,40 L277,19 L262,13 L258,17 L255,31 L258,43 L265,48 L264,54 L269,62 L274,61 L281,66 L285,63 L289,63 L291,66 L291,88 L286,96 L276,102 L273,100 L264,102 L259,98 L254,99 L248,97 L240,82 L234,79 L233,63 L225,60 L223,61 L224,81 L220,88 L215,88 L199,73 L191,84 L166,95 L160,101 L156,109 L164,122 L169,124 L216,126 L219,134 L217,139 L210,143 L210,147 L221,163 L228,156 L240,162 L244,156 L248,154 L255,154 L258,158 L266,160 L270,158 L278,159 L281,156 L286,142 L291,143 L294,141 L312,140 L344,97Z",
      cx: 270,
      cy: 91,
    },
    Formosa: {
      d: "M346,37 L346,85 L363,93 L373,103 L379,104 L391,118 L405,128 L410,137 L418,142 L427,155 L433,157 L436,162 L442,162 L448,165 L463,179 L467,179 L470,172 L469,166 L472,157 L478,153 L482,142 L489,135 L483,122 L470,115 L466,116 L459,110 L452,109 L437,100 L430,92 L416,83 L405,83 L388,76 L382,67 L372,62 L355,46 L354,41 L350,37Z",
      cx: 418,
      cy: 112,
    },
    Chaco: {
      d: "M346,88 L345,97 L316,136 L319,139 L363,139 L365,141 L365,220 L449,220 L452,215 L450,203 L457,198 L458,195 L456,192 L462,185 L462,179 L448,166 L442,163 L438,164 L433,158 L427,156 L419,144 L409,137 L404,128 L391,119 L379,105 L373,104 L363,94 L348,87Z",
      cx: 393,
      cy: 165,
    },
    Catamarca: {
      d: "M157,123 L156,138 L161,157 L156,162 L155,169 L164,182 L164,185 L160,189 L152,189 L148,191 L147,198 L141,208 L142,212 L150,213 L156,211 L161,221 L170,226 L174,225 L179,233 L184,232 L193,235 L202,230 L216,232 L224,251 L230,253 L243,267 L252,294 L256,295 L262,293 L267,287 L266,277 L269,273 L268,265 L270,259 L267,252 L259,244 L261,241 L260,222 L254,217 L247,222 L239,215 L236,209 L235,199 L230,194 L237,186 L238,179 L234,174 L229,172 L231,160 L228,157 L221,165 L209,147 L209,143 L217,137 L218,131 L216,127 L175,126 L160,122Z",
      cx: 204,
      cy: 197,
    },
    Misiones: {
      d: "M599,138 L587,137 L580,139 L578,152 L579,159 L574,173 L565,180 L562,185 L555,186 L545,202 L539,199 L537,200 L536,203 L541,210 L543,220 L548,225 L555,223 L558,218 L569,212 L573,205 L590,200 L593,195 L596,195 L605,186 L605,170 L608,159 L602,149 L603,143Z",
      cx: 577,
      cy: 181,
    },
    "Santiago del Estero": {
      d: "M286,143 L280,159 L280,174 L273,182 L270,195 L264,202 L266,212 L260,221 L262,227 L261,245 L268,252 L271,259 L269,265 L270,272 L273,275 L290,274 L297,277 L301,276 L314,283 L330,284 L339,295 L339,301 L341,303 L349,303 L353,298 L364,221 L364,143 L361,140 L313,140 L310,142Z",
      cx: 317,
      cy: 213,
    },
    Tucumán: {
      d: "M279,160 L271,159 L265,161 L258,159 L253,155 L248,155 L245,157 L242,164 L232,161 L230,170 L239,178 L238,186 L232,194 L236,199 L237,209 L247,220 L252,216 L258,218 L263,216 L265,212 L263,202 L268,197 L272,182 L279,172Z",
      cx: 253,
      cy: 184,
    },
    Corrientes: {
      d: "M532,199 L525,207 L519,203 L513,204 L509,202 L503,204 L472,195 L459,197 L454,200 L451,204 L453,211 L451,223 L445,227 L445,245 L442,256 L429,271 L427,286 L430,292 L429,302 L439,304 L445,299 L449,300 L459,297 L470,301 L478,310 L484,306 L488,301 L487,299 L492,296 L498,285 L506,281 L516,268 L517,263 L523,259 L527,250 L535,243 L547,226 L542,220 L542,215 L538,206Z",
      cx: 482,
      cy: 248,
    },
    "La Rioja": {
      d: "M140,214 L133,226 L126,233 L128,236 L134,238 L146,258 L143,263 L144,276 L163,280 L185,300 L187,305 L194,311 L202,323 L201,341 L203,346 L214,359 L222,361 L240,357 L241,326 L252,297 L242,267 L230,254 L222,251 L223,248 L218,241 L216,233 L202,231 L198,235 L193,236 L184,233 L179,235 L175,228 L160,222 L156,213Z",
      cx: 198,
      cy: 280,
    },
    "Santa Fe": {
      d: "M445,222 L365,222 L356,286 L352,301 L352,308 L360,315 L360,321 L353,345 L349,351 L349,358 L351,361 L350,367 L356,373 L359,382 L358,384 L362,390 L362,397 L332,441 L335,446 L364,445 L390,416 L400,419 L407,408 L406,404 L403,403 L395,393 L395,387 L393,384 L395,371 L394,361 L396,353 L404,350 L406,346 L412,342 L413,337 L426,319 L427,309 L425,306 L429,293 L426,286 L428,271 L431,265 L441,256 L444,245Z",
      cx: 387,
      cy: 316,
    },
    "San Juan": {
      d: "M125,235 L119,246 L119,258 L114,262 L111,269 L115,281 L114,293 L117,299 L112,306 L107,307 L102,321 L103,327 L95,336 L94,346 L97,354 L105,360 L102,369 L106,377 L111,381 L119,380 L124,367 L136,361 L145,367 L145,372 L147,373 L154,372 L160,365 L166,366 L170,364 L174,364 L179,369 L189,369 L192,366 L192,357 L205,358 L208,355 L207,350 L202,346 L200,341 L201,323 L198,317 L186,305 L184,300 L163,281 L153,278 L142,278 L142,262 L145,258 L133,238Z",
      cx: 145,
      cy: 321,
    },
    Córdoba: {
      d: "M267,277 L268,288 L262,294 L253,296 L242,326 L241,349 L242,357 L254,362 L259,371 L263,373 L266,372 L269,381 L265,397 L261,404 L262,464 L265,467 L311,467 L314,464 L314,446 L324,446 L331,442 L361,397 L361,390 L357,386 L357,378 L354,371 L349,367 L350,361 L348,358 L348,351 L352,345 L359,317 L349,304 L341,304 L338,301 L337,294 L328,285 L312,284 L308,280 L303,280 L299,277 L297,278 L290,275Z",
      cx: 300,
      cy: 367,
    },
    "Entre Ríos": {
      d: "M456,298 L449,301 L445,300 L439,305 L432,304 L428,307 L427,319 L413,342 L407,346 L404,351 L397,353 L394,384 L399,398 L415,412 L428,420 L431,419 L435,423 L438,422 L441,425 L447,426 L457,433 L460,433 L463,430 L461,420 L462,411 L465,406 L464,403 L474,397 L470,380 L473,372 L470,357 L474,354 L477,348 L474,343 L479,334 L479,324 L482,318 L475,312 L470,302Z",
      cx: 440,
      cy: 363,
    },
    "San Luis": {
      d: "M196,358 L193,361 L192,368 L198,388 L199,412 L213,432 L210,445 L220,473 L216,501 L258,502 L261,499 L260,404 L264,397 L268,382 L267,376 L264,373 L259,373 L254,363 L243,358 L218,362 L211,358Z",
      cx: 233,
      cy: 423,
    },
    Mendoza: {
      d: "M137,362 L125,367 L121,374 L121,379 L117,382 L111,382 L108,387 L112,393 L110,403 L113,406 L116,405 L119,409 L115,425 L118,440 L112,443 L103,459 L101,472 L98,476 L100,491 L102,494 L100,499 L100,510 L119,533 L119,537 L122,541 L126,543 L137,543 L142,549 L146,551 L150,550 L162,557 L165,554 L164,503 L214,501 L219,473 L209,445 L212,432 L198,412 L197,388 L191,373 L186,370 L179,370 L174,365 L160,367 L152,374 L147,374 L144,372 L143,366Z",
      cx: 155,
      cy: 454,
    },
    "Buenos Aires Province": {
      d: "M409,408 L401,420 L392,417 L364,446 L315,447 L315,666 L326,670 L334,678 L346,673 L350,664 L341,655 L346,647 L346,637 L351,636 L354,625 L346,617 L345,599 L350,600 L358,606 L389,607 L443,597 L465,590 L488,578 L491,567 L503,554 L516,533 L515,515 L506,514 L495,502 L495,494 L502,484 L500,477 L488,466 L467,456 L462,457 L460,455 L461,442 L465,437 L464,434 L457,434 L447,427 L442,427 L436,423 L428,421Z",
      cx: 399,
      cy: 525,
    },
    "La Pampa": {
      d: "M165,504 L166,555 L169,558 L178,559 L182,566 L177,573 L186,581 L197,580 L203,587 L215,591 L220,598 L236,598 L243,601 L248,599 L252,601 L264,600 L282,602 L296,608 L310,617 L313,616 L313,469 L263,468 L261,503Z",
      cx: 251,
      cy: 542,
    },
    Neuquén: {
      d: "M97,508 L94,509 L89,518 L87,517 L81,521 L81,526 L77,530 L78,544 L75,550 L78,556 L75,562 L81,576 L81,586 L86,591 L86,595 L83,599 L77,600 L69,606 L70,619 L67,628 L60,634 L63,640 L61,646 L57,650 L61,656 L56,659 L53,668 L56,677 L72,681 L77,679 L79,675 L77,670 L83,664 L105,659 L109,656 L112,648 L111,644 L116,639 L128,635 L137,626 L147,621 L157,609 L166,607 L170,603 L165,596 L164,558 L149,551 L143,551 L137,544 L126,544 L119,539 L117,532Z",
      cx: 108,
      cy: 594,
    },
    "Río Negro": {
      d: "M54,691 L56,696 L55,699 L58,704 L57,709 L60,712 L259,712 L264,705 L264,696 L261,691 L259,676 L265,668 L271,668 L273,671 L289,678 L292,677 L301,683 L323,683 L331,677 L326,671 L314,667 L314,622 L312,619 L282,603 L264,601 L252,602 L248,600 L243,602 L235,599 L220,599 L216,596 L215,592 L203,588 L197,582 L186,582 L176,573 L181,566 L179,561 L169,559 L166,562 L166,595 L172,606 L170,608 L167,607 L157,610 L147,622 L137,627 L131,634 L116,640 L112,644 L113,649 L106,660 L101,662 L95,661 L91,664 L83,665 L79,670 L80,676 L77,680 L73,682 L65,679 L57,680Z",
      cx: 196,
      cy: 656,
    },
    Chubut: {
      d: "M58,846 L65,854 L185,853 L193,841 L206,827 L211,827 L221,820 L228,818 L243,818 L243,809 L253,802 L257,796 L255,792 L257,784 L254,778 L254,771 L268,755 L278,751 L280,748 L263,739 L267,734 L275,730 L281,730 L285,731 L288,735 L287,739 L291,743 L303,741 L307,736 L307,727 L301,716 L295,718 L293,721 L294,725 L286,728 L281,727 L277,725 L276,722 L267,719 L260,713 L63,713 L58,718 L49,720 L48,724 L50,730 L47,734 L47,746 L51,751 L59,755 L59,758 L55,760 L54,763 L63,771 L59,776 L62,781 L57,789 L57,794 L60,797 L71,797 L78,801 L73,812 L65,810 L58,814 L66,820 L72,829 L68,832 L66,837 L59,839Z",
      cx: 156,
      cy: 776,
    },
    "Santa Cruz": {
      d: "M63,854 L58,859 L62,876 L53,884 L55,894 L43,903 L36,918 L41,925 L43,933 L34,938 L34,950 L28,955 L20,957 L15,965 L9,967 L4,976 L8,984 L6,988 L7,992 L3,1000 L6,1009 L12,1015 L12,1019 L15,1022 L28,1015 L31,1017 L35,1015 L42,1017 L43,1029 L39,1033 L43,1038 L40,1049 L41,1053 L50,1059 L56,1066 L111,1066 L126,1072 L136,1072 L155,1078 L158,1075 L144,1054 L141,1053 L136,1055 L131,1051 L139,1051 L142,1048 L138,1034 L133,1029 L138,1025 L137,1020 L140,1012 L147,1004 L158,1000 L159,998 L154,992 L155,989 L164,997 L172,995 L178,991 L182,979 L182,974 L179,970 L184,961 L203,943 L213,937 L219,936 L234,924 L242,905 L242,897 L238,892 L233,890 L223,891 L211,889 L200,878 L189,871 L184,862 L183,855Z",
      cx: 112,
      cy: 953,
    },
    "Tierra del Fuego": {
      d: "M156,1111 L156,1164 L161,1165 L167,1163 L179,1166 L189,1165 L208,1168 L219,1172 L222,1170 L231,1170 L234,1167 L252,1167 L256,1163 L257,1160 L254,1157 L234,1157 L217,1150 L213,1146 L193,1137 L185,1130 L181,1129 L172,1119 L170,1113 L166,1111ZM268,1160 L284,1161 L296,1161 L294,1164 L281,1166 L268,1164Z",
      cx: 190,
      cy: 1148,
    },
  };
  var NS = "http://www.w3.org/2000/svg";

  // Provinces: name and region. Shapes come from SHAPES (CABA is drawn as a circle).
  var P = [
    { n: "Jujuy", g: "nw" },
    { n: "Salta", g: "nw" },
    { n: "Formosa", g: "ne" },
    { n: "Catamarca", g: "nw" },
    { n: "Tucumán", g: "nw" },
    { n: "Santiago del Estero", g: "nw" },
    { n: "Chaco", g: "ne" },
    { n: "Corrientes", g: "ne" },
    { n: "Misiones", g: "ne" },
    { n: "San Juan", g: "cuyo" },
    { n: "La Rioja", g: "nw" },
    { n: "Córdoba", g: "pampas" },
    { n: "Santa Fe", g: "pampas" },
    { n: "Entre Ríos", g: "pampas" },
    { n: "Mendoza", g: "cuyo" },
    { n: "San Luis", g: "cuyo" },
    { n: "La Pampa", g: "pampas" },
    { n: "Buenos Aires Province", g: "pampas" },
    { n: "Buenos Aires City (CABA)", g: "pampas" },
    { n: "Neuquén", g: "pat" },
    { n: "Río Negro", g: "pat" },
    { n: "Chubut", g: "pat" },
    { n: "Santa Cruz", g: "pat" },
    { n: "Tierra del Fuego", g: "pat" },
  ];

  var TOTAL = 10;
  function pid(n) {
    for (var k = 0; k < P.length; k++) if (P[k].n === n) return k;
    return -1;
  }
  // i = best answer, also = other provinces that count as correct.
  // Buenos Aires City sits on the Río de la Plata coast
  var CABA_AT = [461, 446];
  var Q = [
    {
      t: "Where is Buenos Aires, the capital?",
      // Answer is the province; the CABA circle only shows where the city is, after answering
      i: pid("Buenos Aires Province"),
      city: true,
      f: "The cultural heart of the country, with European-style architecture, tango, and historic neighborhoods like San Telmo and La Boca. Don’t miss Plaza de Mayo, the Teatro Colón and the old cafés and bookstores.",
    },
    {
      t: "Where are the Iguazú Falls?",
      i: pid("Misiones"),
      f: "One of the Seven Natural Wonders of the World, in the subtropical northeast. Don’t miss the Devil’s Throat, the walkways and the boat rides under the falls.",
    },
    {
      t: "Where is the Perito Moreno Glacier (El Calafate)?",
      i: pid("Santa Cruz"),
      f: "The gateway to Southern Patagonia and Los Glaciares National Park. Watch huge blocks of ice break off into Lake Argentino, or walk on the ice.",
    },
    {
      t: "Where is El Chaltén?",
      i: pid("Santa Cruz"),
      f: "The national capital of trekking, with views of Mount Fitz Roy and Cerro Torre. Try the hikes to Laguna de los Tres or Laguna Capri.",
    },
    {
      t: "Where is Bariloche?",
      i: pid("Río Negro"),
      also: [pid("Neuquén")],
      f: "Alpine scenery, forests, handmade chocolate and crystal-clear lakes. Drive the Seven Lakes route to San Martín de los Andes, ski at Cerro Catedral, or sail Lake Nahuel Huapi.",
    },
    {
      t: "Where is Mendoza?",
      i: pid("Mendoza"),
      f: "Argentina’s wine capital, world-famous for Malbec. Go wine tasting in Luján de Cuyo or the Uco Valley, and see Aconcagua, the highest peak in the Americas.",
    },
    {
      t: "Where is the Hill of Seven Colors (Quebrada de Humahuaca)?",
      i: pid("Jujuy"),
      also: [pid("Salta")],
      f: "Colorful desert landscapes, adobe colonial towns and Andean culture across Salta and Jujuy. Don’t miss Purmamarca, Iruya, the Salinas Grandes and the Quebrada de las Conchas near Cafayate.",
    },
    {
      t: "Where does the Train to the Clouds (Tren a las Nubes) run?",
      i: pid("Salta"),
      f: "An engineering marvel: the railway climbs above 4,220 meters to the La Polvorilla viaduct. Nearby, don’t miss Cafayate and the Calchaquí Valleys (high-altitude Torrontés wines and the Quebrada de las Conchas), Cachi and Los Cardones National Park, and the mountain village of Iruya.",
    },
    {
      t: "Where is Ushuaia?",
      i: pid("Tierra del Fuego"),
      f: "The southernmost city in the world, surrounded by mountains, forests and the Beagle Channel. Sail the channel, visit Tierra del Fuego National Park, or start an Antarctica expedition here.",
    },
    {
      t: "Where is Chubut?",
      i: pid("Chubut"),
      f: "Home to Península Valdés, one of South America’s top marine wildlife sanctuaries. See southern right whales from June to December, plus Magellanic penguins and sea lions near Puerto Madryn.",
    },
  ];

  // PHOTOS: same order as Q above. Use null to show the placeholder instead.
  // Photos from the official tourism site, argentina.travel.
  var PHOTO_SRC = [
    "images/buenos-aires.jpg",
    "images/iguazu-falls.jpg",
    "images/perito-moreno.jpg",
    "images/el-chalten.jpg",
    "images/bariloche.jpg",
    "images/mendoza-vineyards.jpg",
    "images/seven-colors-purmamarca.jpg",
    "images/train-to-the-clouds.jpg",
    "images/ushuaia.jpg",
    "images/peninsula-valdes.jpg",
  ];
  // Shown under the photo after the player answers.
  var CAPTIONS = [
    "Caminito, La Boca, Buenos Aires City",
    "Devil’s Throat, Iguazú Falls, Misiones",
    "Perito Moreno Glacier, Santa Cruz",
    "Mount Fitz Roy, El Chaltén, Santa Cruz",
    "Civic Center, Bariloche, Río Negro",
    "Vineyards and the Andes, Mendoza",
    "Hill of Seven Colors, Purmamarca, Jujuy",
    "Train to the Clouds on La Polvorilla viaduct, Salta",
    "Les Eclaireurs Lighthouse, Ushuaia, Tierra del Fuego",
    "Southern right whale, Península Valdés, Chubut",
  ];
  Q.forEach(function (q, k) {
    q.img = PHOTO_SRC[k];
    q.cap = CAPTIONS[k];
  });

  function setPhoto(q) {
    var frame = $("photo-frame");
    frame.innerHTML = "";
    if (q.img) {
      var im = document.createElement("img");
      im.src = q.img;
      im.alt = "Photo of the place in the question";
      frame.appendChild(im);
    } else {
      var ph = document.createElement("div");
      ph.className = "photo-ph";
      ph.innerHTML =
        '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5.5-5.5L7 19"/></svg><span>Photo goes here</span>';
      frame.appendChild(ph);
    }
    $("photo-cap").textContent = "";
  }

  var MARK_AT = {
    Salta: [290, 125],
  };
  function circle(at, r, cls) {
    var el = document.createElementNS(NS, "circle");
    el.setAttribute("cx", at[0]);
    el.setAttribute("cy", at[1]);
    el.setAttribute("r", r);
    el.setAttribute("class", cls);
    return el;
  }

  var $ = function (id) {
    return document.getElementById(id);
  };
  var wrapEl = $("wrap");
  var screens = {
    start: $("screen-start"),
    play: $("screen-play"),
    end: $("screen-end"),
  };
  var nameInput = $("name"),
    startBtn = $("start"),
    svg = $("map");
  var player = "",
    queue = [],
    idx = 0,
    score = 0,
    answered = false;

  function show(which) {
    for (var k in screens)
      screens[k].classList.toggle("hidden", k !== which);
    wrapEl.classList.toggle("wide", which !== "start");
    window.scrollTo(0, 0);
  }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  // Build the map
  var els = [];
  function wire(el, i) {
    el.addEventListener("click", function () {
      answer(i);
    });
  }
  P.forEach(function (p, i) {
    if (p.n.indexOf("CABA") !== -1) {
      els[i] = null;
      return;
    }
    var s = SHAPES[p.n];
    var el = document.createElementNS(NS, "path");
    el.setAttribute("d", s.d);
    el.setAttribute("class", "prov");
    el.setAttribute("data-region", p.g);
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", "Province " + (i + 1));
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        answer(i);
      }
    });
    wire(el, i);
    svg.appendChild(el);
    els[i] = el;
  });
  // Buenos Aires City: small circle with a white ring. Hidden during play (clicking there
  // selects Buenos Aires Province); shown only after answering the Buenos Aires question.
  var cabaHalo = circle(CABA_AT, 12, "city-halo");
  var cabaDot = circle(CABA_AT, 9, "prov caba");
  cabaDot.setAttribute("data-region", "pampas");
  svg.appendChild(cabaHalo);
  svg.appendChild(cabaDot);
  els[pid("Buenos Aires City (CABA)")] = cabaDot;
  function showCaba(visible) {
    [cabaHalo, cabaDot].forEach(function (el) {
      el.setAttribute("visibility", visible ? "visible" : "hidden");
    });
  }
  showCaba(false);
  var markGood = document.createElementNS(NS, "text");
  markGood.setAttribute("class", "mark good");
  var markBad = document.createElementNS(NS, "text");
  markBad.setAttribute("class", "mark bad");
  svg.appendChild(markGood);
  svg.appendChild(markBad);

  function placeMark(m, i, glyph) {
    var p = P[i];
    var at = MARK_AT[p.n] || [SHAPES[p.n].cx, SHAPES[p.n].cy];
    m.setAttribute("x", at[0]);
    m.setAttribute("y", at[1]);
    m.textContent = glyph;
  }

  function resetMap() {
    svg.classList.remove("locked");
    els.forEach(function (el) {
      el.removeAttribute("data-state");
      el.removeAttribute("data-result");
    });
    markGood.textContent = "";
    markBad.textContent = "";
    showCaba(false);
  }

  function ask() {
    answered = false;
    resetMap();
    $("qnum").textContent = idx + 1;
    $("score").textContent = score;
    $("prompt").textContent = queue[idx].t;
    setPhoto(queue[idx]);
    $("feedback").innerHTML = "";
    $("next").classList.add("hidden");
  }

  function answer(i) {
    if (answered) return;
    answered = true;
    var right = queue[idx].i;
    var p = P[right];
    var q = queue[idx];
    var ok = i === right || (q.also && q.also.indexOf(i) !== -1);
    if (ok) score++;
    svg.classList.add("locked");
    if (!ok) {
      els[i].setAttribute("data-state", "wrong");
      svg.appendChild(els[i]);
    } else if (i !== right) {
      els[i].setAttribute("data-state", "correct");
      svg.appendChild(els[i]);
    }
    els[right].setAttribute("data-state", "correct");
    svg.appendChild(els[right]);
    // Buenos Aires question: reveal the city circle above the highlighted province,
    // green if the answer was right, red if not
    if (q.city) {
      cabaDot.setAttribute("data-result", ok ? "ok" : "bad");
      svg.appendChild(cabaHalo);
      svg.appendChild(cabaDot);
      showCaba(true);
    }
    svg.appendChild(markGood);
    svg.appendChild(markBad);
    placeMark(markGood, right, "✓");
    if (!ok) placeMark(markBad, i, "✕");
    $("score").textContent = score;

    var fb = $("feedback");
    fb.innerHTML = "";
    var v = document.createElement("p");
    v.className = "verdict " + (ok ? "ok" : "bad");
    v.textContent = ok ? "Correct!" : "Not quite.";
    var d = document.createElement("p");
    if (ok && i !== right)
      d.textContent =
        "The best answer is " + p.n + ", but " + P[i].n + " counts too.";
    else if (q.city)
      d.textContent =
        "Buenos Aires City (CABA) is the circle on the coast of Buenos Aires Province, in the " +
        REGIONS[p.g] +
        " region." +
        (ok ? "" : " The province is outlined in green.");
    else
      d.textContent =
        "It’s in " +
        p.n +
        ", in the " +
        REGIONS[p.g] +
        " region." +
        (ok ? "" : " It’s outlined in green.");
    var f = document.createElement("p");
    f.className = "fact";
    f.textContent = queue[idx].f;
    fb.appendChild(v);
    fb.appendChild(d);
    fb.appendChild(f);

    $("photo-cap").textContent = queue[idx].cap;
    var nx = $("next");
    nx.textContent = idx === TOTAL - 1 ? "See my score" : "Next question";
    nx.classList.remove("hidden");
    nx.focus({ preventScroll: true });
  }

  function finish() {
    $("end-title").textContent = player + ", you did it";
    $("final").textContent = score;
    var msg;
    if (score >= 9)
      msg =
        "Honorary Argentine. You’ve earned a seat in the mate circle.";
    else if (score >= 7)
      msg = "Impressive. You could plan the trip yourself.";
    else if (score >= 4)
      msg = "Solid start. Argentina has a lot more to show you.";
    else
      msg =
        "Good news: there’s plenty left to explore. Start planning the trip.";
    $("end-msg").textContent = msg;
    $("result").value =
      player + ": " + score + "/10 on the Argentina travel quiz";
    $("copy-note").textContent = "";
    show("end");
  }

  function begin() {
    queue = shuffle(Q);
    idx = 0;
    score = 0;
    show("play");
    ask();
  }

  // Official tourism pages, one per province (argentina.travel is the national tourism site).
  var XBASE = "https://www.argentina.travel/en/destinos/";
  var LINKS = {
    Jujuy: XBASE + "jujuy",
    Salta: XBASE + "salta",
    Formosa: XBASE + "formosa",
    Catamarca: XBASE + "catamarca",
    Tucumán: XBASE + "tucuman",
    "Santiago del Estero": XBASE + "santiago-del-estero",
    Chaco: XBASE + "chaco",
    Corrientes: XBASE + "corrientes",
    Misiones: XBASE + "misiones",
    "San Juan": XBASE + "san-juan",
    "La Rioja": XBASE + "la-rioja",
    Córdoba: XBASE + "cordoba",
    "Santa Fe": XBASE + "santa-fe",
    "Entre Ríos": XBASE + "entre-rios",
    Mendoza: XBASE + "mendoza",
    "San Luis": XBASE + "san-luis",
    "La Pampa": XBASE + "la-pampa",
    "Buenos Aires Province": XBASE + "buenos-aires",
    "Buenos Aires City (CABA)": "https://turismo.buenosaires.gob.ar",
    Neuquén: XBASE + "neuquen",
    "Río Negro": XBASE + "rio-negro",
    Chubut: XBASE + "chubut",
    "Santa Cruz": "https://www.argentina.travel/en/province/santa-cruz",
    "Tierra del Fuego": XBASE + "tierra-del-fuego",
  };

  // Label placement on the map: x, y, font size, text lines.
  var LABELS = {
    Jujuy: [236, 54, 15, ["Jujuy"]],
    Salta: [288, 128, 18, ["Salta"]],
    Formosa: [428, 118, 17, ["Formosa"]],
    Catamarca: [188, 204, 16, ["Catamarca"]],
    Tucumán: [254, 192, 12, ["Tucumán"]],
    "Santiago del Estero": [317, 213, 15, ["Santiago", "del Estero"]],
    Chaco: [393, 165, 18, ["Chaco"]],
    Corrientes: [484, 248, 15, ["Corrientes"]],
    Misiones: [560, 178, 14, ["Misiones"]],
    "San Juan": [147, 321, 16, ["San Juan"]],
    "La Rioja": [198, 280, 16, ["La Rioja"]],
    Córdoba: [300, 366, 18, ["Córdoba"]],
    "Santa Fe": [388, 318, 16, ["Santa", "Fe"]],
    "Entre Ríos": [440, 363, 15, ["Entre", "Ríos"]],
    Mendoza: [155, 453, 17, ["Mendoza"]],
    "San Luis": [234, 423, 15, ["San", "Luis"]],
    "La Pampa": [251, 542, 17, ["La Pampa"]],
    "Buenos Aires Province": [399, 524, 22, ["Buenos", "Aires"]],
    Neuquén: [108, 594, 16, ["Neuquén"]],
    "Río Negro": [196, 656, 18, ["Río Negro"]],
    Chubut: [154, 776, 21, ["Chubut"]],
    "Santa Cruz": [112, 952, 22, ["Santa Cruz"]],
    "Tierra del Fuego": [188, 1146, 15, ["Tierra del", "Fuego"]],
  };

  function buildExploreMap() {
    var xs = $("explore-map");
    var labels = document.createElementNS(NS, "g");
    function label(name, anchorStart) {
      var c = LABELS[name];
      var t = document.createElementNS(NS, "text");
      t.setAttribute("class", "lbl" + (anchorStart ? " start" : ""));
      t.setAttribute("font-size", c[2]);
      var lines = c[3];
      var y0 = c[1] - (lines.length - 1) * c[2] * 0.55;
      lines.forEach(function (ln, k) {
        var s = document.createElementNS(NS, "tspan");
        s.setAttribute("x", c[0]);
        s.setAttribute("y", y0 + k * c[2] * 1.1);
        s.textContent = ln;
        t.appendChild(s);
      });
      return t;
    }
    P.forEach(function (p) {
      var a = document.createElementNS(NS, "a");
      a.setAttribute("href", LINKS[p.n]);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      a.setAttribute("aria-label", p.n + " (opens in a new tab)");
      if (p.n.indexOf("CABA") !== -1) {
        var c = circle(CABA_AT, 9, "prov caba");
        c.setAttribute("data-region", p.g);
        a.appendChild(circle(CABA_AT, 12, "city-halo"));
        a.appendChild(c);
        a.appendChild(circle(CABA_AT, 16, "hit"));
        var t0 = document.createElementNS(NS, "text");
        t0.setAttribute("class", "lbl start");
        t0.setAttribute("font-size", 14);
        ["Buenos Aires", "City (CABA)"].forEach(function (ln, k) {
          var s = document.createElementNS(NS, "tspan");
          s.setAttribute("x", CABA_AT[0] + 18);
          s.setAttribute("y", CABA_AT[1] + 2 + k * 15);
          s.textContent = ln;
          t0.appendChild(s);
        });
        labels.appendChild(t0);
      } else {
        var el = document.createElementNS(NS, "path");
        el.setAttribute("d", SHAPES[p.n].d);
        el.setAttribute("class", "prov");
        el.setAttribute("data-region", p.g);
        a.appendChild(el);
        labels.appendChild(label(p.n, false));
      }
      xs.appendChild(a);
    });
    xs.appendChild(labels);
  }
  buildExploreMap();

  nameInput.addEventListener("input", function () {
    startBtn.disabled = nameInput.value.trim().length === 0;
  });
  nameInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !startBtn.disabled) startBtn.click();
  });
  startBtn.addEventListener("click", function () {
    player = nameInput.value.trim();
    if (!player) return;
    begin();
  });
  $("next").addEventListener("click", function () {
    if (idx === TOTAL - 1) {
      finish();
      return;
    }
    idx++;
    ask();
  });
  $("again").addEventListener("click", begin);
  $("newplayer").addEventListener("click", function () {
    nameInput.value = "";
    startBtn.disabled = true;
    player = "";
    show("start");
    nameInput.focus();
  });
  $("copy").addEventListener("click", function () {
    var input = $("result");
    var note = $("copy-note");
    input.focus();
    input.select();
    var done = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(input.value).then(
          function () {
            note.textContent = "Copied. Paste it in the chat.";
          },
          function () {
            note.textContent =
              "Press Ctrl+C (or Cmd+C) to copy the selected text.";
          },
        );
        done = true;
      }
    } catch (e) {
      /* fall through */
    }
    if (!done)
      note.textContent =
        "Press Ctrl+C (or Cmd+C) to copy the selected text.";
  });
})();
