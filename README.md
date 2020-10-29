# The Women's Suffrage Scrapbook: Reimagined

In honor of the 90th anniversary of women’s suffrage (2010), the Iowa Women’s Archives (IWA) received a grant from the State Historical Society, Inc. to digitize documents, photographs, and artifacts highlighting Iowa’s unique heritage.

The Iowa Women's Archives created an online scrapbook exhibit to provide a brief introduction to Iowa’s suffrage history and point to local and state suffrage resources. Through late 2019 and into early 2020, the scrapbook was majorly redesigned in functionality and aesthetics to bolster its image for the 100th anniversary of women's suffrage. This is that project.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---------------------------------------------

## Adding new pages for future developers / customers

#### Main Steps:
+ Add a .vue file within the components folder, specifically looking for your desired year range, then plop it in. 

+ File structure was formatted for easy future page additions. Anyone should be able to follow the same pattern to accomplish this. Open a pre-existing page file, copy, and paste everything into your respective file. From there, replace the old page's content/html with your desired content. Style and redesign as needed.

+ Add the respective vue files path to the router instance, located within components --> router --> router.js. Don't forget to import the vue file, then follow the existing layout.

#### Additional Steps: 
Next, we will add navigation ability for the application...
+ Go into ScrapBookNavigation.vue (ScrapbookPieces folder in components), and add a dropdown section for the desired page.

+ Go into NavBar.vue (components folder), and add a list item section for the desired page (w/ accompanying html)

---------------------------------------------

If you would like to create a whole new year-range, you can do that to; it will just be more time-consuming. Simply follow the same pattern as everything else, and you should have no problem! Additionally, you will have to go into ScrapbookNavigation.vue and NavBar.vue to add new tabs (desktop and mobile).
