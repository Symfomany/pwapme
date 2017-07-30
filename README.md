# pme

> Pme Central Project

Un Service Worker est un script chargé parallèlement aux scripts de votre page et qui va s'exécuter en dehors du contexte de votre page web. Bien que le Service Worker n'ait pas accès au DOM ou aux interactions avec l'utilisateur, il va pouvoir communiquer avec vos scripts via *l'API postMessage*.
Il se place en *proxy de votre Web App*, interceptant toutes les requêtes serveur et propose par exemple d'y répondre avec un *cache* ou en récupérant *des données du LocalStorage ou d'IndexedDB*. 
Il rend donc votre *application disponible offline.*

Sans accès au serveur, *nos applications deviennent inutiles et ce n'est pas l'AppCache qui va venir à notre secours.* 
*Les Service Workers* nous permettent de pallier ces problèmes en utilisant des ressources en cache si le réseau n'est pas disponible, permettant ainsi à notre application de fournir *une expérience peu dégradée* avant de retrouver un réseau disponible.


Pour installer un *Service Worker* pour votre site, nous devrons *l'enregistrer (register)* dans le script de notre webapp. 
Une fois installé, notre Service Worker va *s'activer (activate)*, c'est à ce moment que nous allons gérer la mise à jour du cache ou du Service Worker lui-même.

Après l'activation, le Service Worker est prêt à intercepter *les événements fetch et message* émis respectivement 
par une requête serveur ou un appel via *l'API postMessage.*

Mozilla et Google sont à la pointe concernant *les Service Workers.* Ils proposent tous les deux des recettes et autres patterns pour les utiliser au mieux.

Nous couvrirons sûrement les autres cas d'utilisation du Service Worker qui peut servir à autre chose que de fournir des contenus lorsqu'on est hors ligne, comme par exemple :

La synchronisation des données en arrière-plan ;
* Répondre aux requêtes depuis d'autres origines ;
* Recevoir des données lourdes à calculer comme des données de géolocalisation ou de gyroscope, afin que plusieurs pages puissent y accéder sans refaire les calculs ;
* Compilation et gestion de dépendances de CoffeeScript, less, des modules CJS/AMD, etc. pour les besoins de développement ;
* Gestion et utilisation de services en d'arrière-plan ;
* Templates personnalisés en fonction de patterns d'URL ;
* Amélioration des performances, par exemple en pré-chargeant les ressources que l'utilisateur pourrait utiliser plus tard telles que les prochaines photos d'un album.



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
