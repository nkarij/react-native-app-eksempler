# Modul 1
### Indhold
Vi skal kende til React-Native Apps og oprette de første Apps

Efter en præsentation af teknologi og værktøjer laver vi den første opgave.

Men først en gennemgang med eksempeler.

### Native App vs Web App
- Performance
- Ressourcer med fetch
- React og React-Native
- Udvikling til IOS og Android (og simulering web)

#### Expo
En rundtur i http://www.expo.io

#### Snack
http://www.snack.expo.io

#### Gennemgang af koden
- Import
- Export class – lidt om class og extends	
- Render()
- View
- Text
- Custom Controllers
- Styles, syntax og Flexbox
- Run (on device) kræver login og download af Expo på mobilen. Do-it!
- Export – Hmmmm…. Opret hellere et nyt projekt i VS Code

### React Native Express
http://www.reactnativeexpress.com
- Quickstart
- Opret en mappe kaldet eksempler
- Ny App med `expo init MyApp`
- `cd MyApp`
- `npm start`

#### Class i React
http://www.reactnativeexpress.com/classes
- Class
- constructor
- new
- properties
- methods
- static


#### React UI component
http://www.reactnativeexpress.com/components


#### Component API
http://www.reactnativeexpress.com/component_api
- Props
- State
- SetState()
- this
- componentDidMount() *senere under lifecycle*

#### VS Code Extension
ES7 React/Redux/React-Native/JS Snippets
- Rnc (react-native) 
- rncs (react-native og style)
- rconst (constructor, super, props og state)

### React Native Elements
- Quickstart/installation:
https://react-native-training.github.io/react-native-elements/docs/getting_started.html

## Opgave 1 - Stopwatch
- Opret en App kaldet ”Stopwatch”, som tæller minutter og sekunder.
- Tag evt. udgangspunkt i http://www.reactnativeexpress.com/component_api
- Eksporter koden til et Component
- Den må gerne se lidt godt ud. 

---

## Lidt flere React-Native Elements

### React-Native Elements
https://react-native-training.github.io/react-native-elements/

### Image
https://facebook.github.io/react-native/docs/image


### Button og events

https://facebook.github.io/react-native/docs/button.html

### Handling touches

https://facebook.github.io/react-native/docs/handling-touches


### Buttons med style og ikoner
*Ikoner - se bilag*

`Husk dependencies`

  https://react-native-training.github.io/react-native-elements/docs/button.html

### Input på egen hånd
Undersøg og afprøv input både med `react-native` og `react-native-elements`


## Opgave 1 fortsat - Stopwatch med knapper
  Vi fortsætter med opgaven ”Stopwatch” hvor vi nu sætter knapper på, så vi kan starte, pause, stoppe og nulstille tiden 


# Bilag: Ikoner til Buttons
```javascript
["glass","music","search","envelope-o","heart","star","star-o","user","film","th-large","th","th-list","check","remove","close","times","search-plus","search-minus","power-off","signal","gear","cog","trash-o","home","file-o","clock-o","road","download","arrow-circle-o-down","arrow-circle-o-up","inbox","play-circle-o","rotate-right","repeat","refresh","list-alt","lock","flag","headphones","volume-off","volume-down","volume-up","qrcode","barcode","tag","tags","book","bookmark","print","camera","font","bold","italic","text-height","text-width","align-left","align-center","align-right","align-justify","list","dedent","outdent","indent","video-camera","photo","image","picture-o","pencil","map-marker","adjust","tint","edit","pencil-square-o","share-square-o","check-square-o","arrows","step-backward","fast-backward","backward","play","pause","stop","forward","fast-forward","step-forward","eject","chevron-left","chevron-right","plus-circle","minus-circle","times-circle","check-circle","question-circle","info-circle","crosshairs","times-circle-o","check-circle-o","ban","arrow-left","arrow-right","arrow-up","arrow-down","mail-forward","share","expand","compress","plus","minus","asterisk","exclamation-circle","gift","leaf","fire","eye","eye-slash","warning","exclamation-triangle","plane","calendar","random","comment","magnet","chevron-up","chevron-down","retweet","shopping-cart","folder","folder-open","arrows-v","arrows-h","bar-chart-o","bar-chart","twitter-square","facebook-square","camera-retro","key","gears","cogs","comments","thumbs-o-up","thumbs-o-down","star-half","heart-o","sign-out","linkedin-square","thumb-tack","external-link","sign-in","trophy","github-square","upload","lemon-o","phone","square-o","bookmark-o","phone-square","twitter","facebook-f","facebook","github","unlock","credit-card","feed","rss","hdd-o","bullhorn","bell","certificate","hand-o-right","hand-o-left","hand-o-up","hand-o-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-circle-down","globe","wrench","tasks","filter","briefcase","arrows-alt","group","users","chain","link","cloud","flask","cut","scissors","copy","files-o","paperclip","save","floppy-o","square","navicon","reorder","bars","list-ul","list-ol","strikethrough","underline","table","magic","truck","pinterest","pinterest-square","google-plus-square","google-plus","money","caret-down","caret-up","caret-left","caret-right","columns","unsorted","sort","sort-down","sort-desc","sort-up","sort-asc","envelope","linkedin","rotate-left","undo","legal","gavel","dashboard","tachometer","comment-o","comments-o","flash","bolt","sitemap","umbrella","paste","clipboard","lightbulb-o","exchange","cloud-download","cloud-upload","user-md","stethoscope","suitcase","bell-o","coffee","cutlery","file-text-o","building-o","hospital-o","ambulance","medkit","fighter-jet","beer","h-square","plus-square","angle-double-left","angle-double-right","angle-double-up","angle-double-down","angle-left","angle-right","angle-up","angle-down","desktop","laptop","tablet","mobile-phone","mobile","circle-o","quote-left","quote-right","spinner","circle","mail-reply","reply","github-alt","folder-o","folder-open-o","smile-o","frown-o","meh-o","gamepad","keyboard-o","flag-o","flag-checkered","terminal","code","mail-reply-all","reply-all","star-half-empty","star-half-full","star-half-o","location-arrow","crop","code-fork","unlink","chain-broken","question","info","exclamation","superscript","subscript","eraser","puzzle-piece","microphone","microphone-slash","shield","calendar-o","fire-extinguisher","rocket","maxcdn","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-circle-down","html5","css3","anchor","unlock-alt","bullseye","ellipsis-h","ellipsis-v","rss-square","play-circle","ticket","minus-square","minus-square-o","level-up","level-down","check-square","pencil-square","external-link-square","share-square","compass","toggle-down","caret-square-o-down","toggle-up","caret-square-o-up","toggle-right","caret-square-o-right","euro","eur","gbp","dollar","usd","rupee","inr","cny","rmb","yen","jpy","ruble","rouble","rub","won","krw","bitcoin","btc","file","file-text","sort-alpha-asc","sort-alpha-desc","sort-amount-asc","sort-amount-desc","sort-numeric-asc","sort-numeric-desc","thumbs-up","thumbs-down","youtube-square","youtube","xing","xing-square","youtube-play","dropbox","stack-overflow","instagram","flickr","adn","bitbucket","bitbucket-square","tumblr","tumblr-square","long-arrow-down","long-arrow-up","long-arrow-left","long-arrow-right","apple","windows","android","linux","dribbble","skype","foursquare","trello","female","male","gittip","gratipay","sun-o","moon-o","archive","bug","vk","weibo","renren","pagelines","stack-exchange","arrow-circle-o-right","arrow-circle-o-left","toggle-left","caret-square-o-left","dot-circle-o","wheelchair","vimeo-square","turkish-lira","try","plus-square-o","space-shuttle","slack","envelope-square","wordpress","openid","institution","bank","university","mortar-board","graduation-cap","yahoo","google","reddit","reddit-square","stumbleupon-circle","stumbleupon","delicious","digg","pied-piper-pp","pied-piper-alt","drupal","joomla","language","fax","building","child","paw","spoon","cube","cubes","behance","behance-square","steam","steam-square","recycle","automobile","car","cab","taxi","tree","spotify","deviantart","soundcloud","database","file-pdf-o","file-word-o","file-excel-o","file-powerpoint-o","file-photo-o","file-picture-o","file-image-o","file-zip-o","file-archive-o","file-sound-o","file-audio-o","file-movie-o","file-video-o","file-code-o","vine","codepen","jsfiddle","life-bouy","life-buoy","life-saver","support","life-ring","circle-o-notch","ra","resistance","rebel","ge","empire","git-square","git","y-combinator-square","yc-square","hacker-news","tencent-weibo","qq","wechat","weixin","send","paper-plane","send-o","paper-plane-o","history","circle-thin","header","paragraph","sliders","share-alt","share-alt-square","bomb","soccer-ball-o","futbol-o","tty","binoculars","plug","slideshare","twitch","yelp","newspaper-o","wifi","calculator","paypal","google-wallet","cc-visa","cc-mastercard","cc-discover","cc-amex","cc-paypal","cc-stripe","bell-slash","bell-slash-o","trash","copyright","at","eyedropper","paint-brush","birthday-cake","area-chart","pie-chart","line-chart","lastfm","lastfm-square","toggle-off","toggle-on","bicycle","bus","ioxhost","angellist","cc","shekel","sheqel","ils","meanpath","buysellads","connectdevelop","dashcube","forumbee","leanpub","sellsy","shirtsinbulk","simplybuilt","skyatlas","cart-plus","cart-arrow-down","diamond","ship","user-secret","motorcycle","street-view","heartbeat","venus","mars","mercury","intersex","transgender","transgender-alt","venus-double","mars-double","venus-mars","mars-stroke","mars-stroke-v","mars-stroke-h","neuter","genderless","facebook-official","pinterest-p","whatsapp","server","user-plus","user-times","hotel","bed","viacoin","train","subway","medium","yc","y-combinator","optin-monster","opencart","expeditedssl","battery-4","battery","battery-full","battery-3","battery-three-quarters","battery-2","battery-half","battery-1","battery-quarter","battery-0","battery-empty","mouse-pointer","i-cursor","object-group","object-ungroup","sticky-note","sticky-note-o","cc-jcb","cc-diners-club","clone","balance-scale","hourglass-o","hourglass-1","hourglass-start","hourglass-2","hourglass-half","hourglass-3","hourglass-end","hourglass","hand-grab-o","hand-rock-o","hand-stop-o","hand-paper-o","hand-scissors-o","hand-lizard-o","hand-spock-o","hand-pointer-o","hand-peace-o","trademark","registered","creative-commons","gg","gg-circle","tripadvisor","odnoklassniki","odnoklassniki-square","get-pocket","wikipedia-w","safari","chrome","firefox","opera","internet-explorer","tv","television","contao","500px","amazon","calendar-plus-o","calendar-minus-o","calendar-times-o","calendar-check-o","industry","map-pin","map-signs","map-o","map","commenting","commenting-o","houzz","vimeo","black-tie","fonticons","reddit-alien","edge","credit-card-alt","codiepie","modx","fort-awesome","usb","product-hunt","mixcloud","scribd","pause-circle","pause-circle-o","stop-circle","stop-circle-o","shopping-bag","shopping-basket","hashtag","bluetooth","bluetooth-b","percent","gitlab","wpbeginner","wpforms","envira","universal-access","wheelchair-alt","question-circle-o","blind","audio-description","volume-control-phone","braille","assistive-listening-systems","asl-interpreting","american-sign-language-interpreting","deafness","hard-of-hearing","deaf","glide","glide-g","signing","sign-language","low-vision","viadeo","viadeo-square","snapchat","snapchat-ghost","snapchat-square","pied-piper","first-order","yoast","themeisle","google-plus-circle","google-plus-official","fa","font-awesome","handshake-o","envelope-open","envelope-open-o","linode","address-book","address-book-o","vcard","address-card","vcard-o","address-card-o","user-circle","user-circle-o","user-o","id-badge","drivers-license","id-card","drivers-license-o","id-card-o","quora","free-code-camp","telegram","thermometer-4","thermometer","thermometer-full","thermometer-3","thermometer-three-quarters","thermometer-2","thermometer-half","thermometer-1","thermometer-quarter","thermometer-0","thermometer-empty","shower","bathtub","s15","bath","podcast","window-maximize","window-minimize","window-restore","times-rectangle","window-close","times-rectangle-o","window-close-o","bandcamp","grav","etsy","imdb","ravelry","eercast","microchip","snowflake-o","superpowers","wpexplorer","meetup"].
```