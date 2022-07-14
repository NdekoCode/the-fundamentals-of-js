
# API et un service web

Un service Web est un programme sur internet  qui repond à des demandes appelé **requetes** et fournissant un service(des informations, des données,...), les requetes doivent respecter un protocole , il existe plusieurs type de protocole à fin de communiquer avec differents type de services.

- **SMTP**: Pour envoyer des emails
- **FTP**: Pour transferer des fichiers
- **HTTP**: POur discuter ou communiquer avec un service Web
- **...**

. N’importe quel site sur lequel vous naviguez est un service web, et  peut fournit une API pour communiquer avec.
Le but d’un service web est donc de fournir un service à celui qui le demande. Et pour ce faire, il met à disposition une API.

 Ici nous allons nous interesser au protocole `HTTP` car elle permet de communiquer avec un site Web, il va charger des pages HTML, des styles CSS et d'autres ressources nécessaire à votre site Web mais ce protocole va surtout envoyer et recuperer des données depuis ou vers un serveur.

## Qu'est-ce que le protocole HTTP ?

**_HTTP_** signifie _HyperText Transfer Protocol._ C'est un protocole qui permet de **communiquer** avec un site Internet. Il va permettre de charger des **pages HTML**, des **styles CSS**, des **polices de caractères**, des **images**, etc. Mais ce n'est pas tout, le protocole HTTP  nous permet aussi d'envoyer des formulaires et de récupérer et d'envoyer toutes sortes de données depuis ou vers un serveur implémentant ce protocole grâce à son API !
Grâce à lui, nous allons pouvoir récupérer et sauvegarder des données sur un service web, ce qui nous permettra de dynamiser le contenu de nos pages web.
 Il faut savoir que plusieurs informations se trouvent dans une requête HTTP :

- **La méthode**. Il s’agit de l’action que l’on souhaite faire : récupérer une ressource, la supprimer, etc… Voici les méthodes HTTP les plus courantes :

  - **GET** : permet de **récupérer** des ressources, comme par exemple le temps actuel sur un service de météo ;

  - **POST** : permet de **créer** ou **modifier** une ressource, comme la création d'un nouvel utilisateur sur votre application ;

  - **PUT** : permet de **modifier** une ressource, comme le nom de l'utilisateur que vous venez de créer avec _POST_ ;

  - **DELETE** : Permet de **supprimer** une ressource, comme un commentaire dans un fil de discussion.
git
- **L’URL**. C’est l’adresse sur le service web que vous souhaitez atteindre. Un peu comme un identifiant unique afin que le web service comprenne ce que vous voulez
- **Les données**. Lorsqu’on fait une requête pour enregistrer des données (par exemple un formulaire) il faut pouvoir envoyer ces données au service web.

Une fois votre requête envoyée et traitée par le service web, celui-ci va vous répondre avec, entre autres, les informations suivantes :

- **Les données**. Les données que vous avez demandées : une page HTML, etc…

- **Le code HTTP**. Il s’agit d’un code numérique qui vous indique comment s’est déroulée la requête. Voici les plus courants :

  - **200** : indique que tout s’est bien passé
  - **400** : indique que votre requête n’est pas conforme à ce qui est attendu
  - **401** : indique que vous devez être authentifié pour faire cette requête
  - **403** : indique que vous êtes bien authentifié mais que vous n’êtes pas autorisé à faire cette requête
  - **404** : indique que la ressource demandée n’existe pas
  - **500** : indique une erreur avec le service Web

Pour faire une syntheres:
 Lors d'une communication avec un service Web celui vous enverra en plus des donnée demander **Un code de status** celui-ci va vous permettre de savoir si tous s'est bien passer ou mal passer ainsi les codes:

- **`200 à 299`**: Indique que la requete s'est bien derouler
- **`300 à 399`**: Inquique que le contenu à été deplacer ou n'est plus accessible directement
- **`400 à 499`**: Sont des code d'erreurs lier à une mauvais utilisation du service web, il peut s'agir d'une ressource innexistante ou de la nécessité de s'authentifier
- **`500 et plus`**: Sont des codes d'erreurs du service Web ils indique generalement qu'il faudra rettenter sa chance plus tard.

Lorsque vous effectuer une requete HTTP vous pouvez avoir besoin de **`demander`** ou **`d'envoyer`** une ressource, d'en **`supprimer`** ou d'en **`créer`**
Par exemple: Envoyer un formulaire
Pour cela il existe differente methode HTTP

- **`GET`** : Va récupérer des ressources
- **`POST`**: Va permettre de créer ou de modifier des ressources
- **`PUT`** : Va modifier une ressource
- **`DELETE`**: va supprimer une ressource

## Qu’est-ce qu’une API ?

Une API, ou _Application Programming Interface_, est une interface de communication. Il en existe différents types, mais celle qui nous intéresse est celle qui permet de communiquer avec les services web.
Une `API` est une interface mettant à disposition des points d'accès vers les ressources de l'application
L’API correspond à l’ensemble des demandes que l’on peut faire à un service web. Ces demandes sont appelées des **requêtes**.
Les **requêtes** sont des données qui respectent le protocole de communication et qui sont envoyées au serveur.
Nous avons donc un protocole pour l'envoi de mail (_SMTP_), la réception de mail (_IMAP_), les requêtes liées à des ressources web (_HTTP),_ aux transferts de fichiers (_FTP_), etc.

Par exemple, demander la météo actuelle est une requête. Faire une demande d’ami sur un réseau social est une requête. Ou encore, envoyer un message via une application de messagerie est une requête.
En bref ce qu'il faut retenir est Qu’une API est une interface de communication entre un service web et le navigateur;

## Qu'est-ce que Fetch

`Fetch` est un ensemble d'objets et de fonctions mis à disposition par le langage JavaScript, afin d'exécuter des requêtes HTTP de manière asynchrone. `Fetch` va nous renvoyer une Promise. L’API Fetch va nous permettre d'exécuter des requêtes HTTP sans avoir besoin de recharger la page du navigateur. Cela permet d':

- **Avoir un site plus réactif** car on n'a pas besoin de recharger toute la page dès qu'on a besoin de mettre à jour une partie du contenu ;

- **Améliorer l'expérience utilisateur** avec du nouveau contenu qui se charge au fur et à mesure qu'on le découvre, par exemple. `fetch` s'utilise comme suit: `fetch("http://url-service-web.com/api/users");` Ce code nous permet d'envoyer une requête HTTP de type _GET_ au service web se trouvant à l'adresse  `http://url-service-web.com/api/users` Un service web peut choisir le format qu'il veut pour nous renvoyer des données, mais le plus courant et le plus simple est le **format _JSON_**. JSON signifie JavaScript Object Notation. Il s'agit d'un format textuel (contrairement à un format binaire plus léger mais impossible à lire à l'œil humain), se rapprochant en termes de syntaxe de celui des objets dans le langage JavaScript.

Exemple d'un objet Javascript:

```{JS}
const obj = {
    name: "Mon contenu",
    id: 1234,
    message: "Voici mon contenu",
    author: {
        name: "John"
    },
    comments: [
        {
            id: 45,
            message: "Commentaire 1"
        },
        {
            id: 46,
            message: "Commentaire 2"
        }
    ]
};
```

sera retranscrit ainsi en JSON :

```{JS}
{
    "name": "Mon contenu",
    "id": 1234,
    "message": "Voici mon contenu",
    "author": {
        "name": "John"
    },
    "comments": [
        {
            "id": 45,
            "message": "Commentaire 1"
        },
        {
            id: 46,
            "message": "Commentaire 2"
        }
    ]
}
```

En JavaScript, votre objet est assigné à une variable, alors qu'en JSON on ne fait que décrire une structure.

Avantage du format JSON:

- Le gros avantage de ce format lorsqu'il est utilisé avec le langage JavaScript est qu'il n'y a pas besoin de le parser comme on le ferait avec du XML
- Le deuxième avantage de ce format est sa légèreté par rapport à un format comme le XML

L'utilisation de `fetch` pour envoyer ou recuperer des données via un service Web nous renvoie une `Promise`. la `Promise` est un objet qui fournit une fonction then qui sera exécutée quand le résultat aura été obtenu, et une fonction catch qui sera appelée s’il y a une erreur qui est survenue lors de la requête

Exemple d'utilisation de `fetch`:

```{JS}
fetch(“https://mockbin.com/request”)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
```

Vous pouvez voir dans l'exemple ci-dessus que l'URL passée à la fonction`fetch()` a changé et correspond à l’URL de notre service web. Le type de requête est GET (ce qui est le cas par défaut avec _Fetch_) car nous voulons récupérer les données.

Ensuite nous appelons la fonction`_then()_`pour récupérer le résultat de la requête au format _json_ en ayant vérifié au préalable que la requête s’était bien passée avec _res.ok._ Ce résultat _json_ étant lui aussi une _Promise_, nous le retournons et récupérons sa vraie valeur dans la fonction _then()_ suivante.

### Validez les données saisies par vos utilisateurs

vant d'envoyer nos données à un service web, il est nécessaire de les valider.
Géneralement les données que l'on souhaite envoyer à un service web viennent généralement de ce que l'utilisateur saisit dans un formulaire
**Never trust user input!** Ne faites jamais confiance aux données saisies par vos utilisateurs !
Certains de vos utilisateurs peuvent être malveillants ou ils peuvent ne pas bien comprendre ce que vous souhaitez qu'ils fassent

#### Validez les données suite à des événements

Afin de valider les données utilisateurs, vous pouvez vous aider des événements du _DOM_. Ainsi, vous pouvez écouter l'événement  `onChange`  pour vérifier la donnée, dès que l'utilisateur a fini de l'éditer. Ou bien vous pouvez écouter l'événement  `onInput`  pour vérifier la donnée à chaque nouveau caractère.
Par exemple, vous pouvez vérifier que ce qui est saisi commence par `Hello` avec le code suivant :

```{JS}
myInput.addEventListener('input', function(e) {
    var value = e.target.value;
    if (value.startsWith('Hello ')) {
        isValid = true;
    } else {
        isValid = false;
    }
});
```

### Sauvegardez des données sur le service web

C'est possible d'envoyer des données au service web en les ajoutant à notre requête !

Cependant, cela ne se fait pas avec toutes les méthodes (qu'on appelle aussi des _verbs_) HTTP_._  En effet, la méthode **GET** est  seulement faite pour récupérer des données, alors que des méthodes comme **POST** et **PUT** sont faites pour en envoyer et en recevoir.
Le fonctionnement d'un verb à l'autre est très similaire. Avec les verbs **POST** et **PUT**, nous allons simplement ajouter des données dans le corps de notre requête.

#### Envoyez des données avec une requête POST

Pour envoyer des données à un service web avec la méthode **POST** via AJAX, nous allons devoir passer par la méthode   `send()`   en lui passant en paramètres les données à envoyer.

```{JS}
fetch("http://url-service-web.com/api/users", {

method: “POST”,

headers: {

'Accept': 'application/json',

'Content-Type': 'application/json'

},

body: JSON.stringify(jsonBody)

});
```

Étant donné que l'on souhaite **envoyer du JSON** à notre service web, nous avons d'abord besoin de transformer notre objet JavaScript en JSON
Pour faire cette transformation, nous utilisons la fonction   `JSON.stringify(json)`

il faut alors le prévenir qu'il va **recevoir du JSON**. Cela se fait grâce à des **headers**, qui sont des en-têtes envoyés en même temps que la requête pour donner plus d'informations sur celle-ci. Les headers en question sont  :

- `Content-Type`, avec la valeur  application/json,

- `Accept`, avec la valeur application/json .

Ces options sont envoyées avec la requête grâce au second paramètre de la fonction _fetch()_. Ce paramètre est un objet qui permet de définir :

- la **méthode HTTP**, le **body**, c’est à dire les données qu’on souhaite envoyer,

- les **headers** sont les en-tete de la requete et qui donnent un peu plus d’information sur notre requête.

 _PUT_ fonctionne exactement de la même manière que _POST_.

### Comprenez comment fonctionne l'asynchrone en JS

Javascript est `Synchrone` mais il gère l'`Asynchrone`.
Javascript est `Synchrone` car il n'a qu'un seul thread tout simplement qu'il n'y a qu'**un seul fil d'exécution** du code source. on dit qu'il est `Mono-thread` càd qu'il ne peut executer qu'une seule chose à la fois, Cela signifie que lorsque vous executer du code Javascript chacune sera executer l'une après l'autre en attendant la fin de l'execution de la ligne precedente, il n'y a pas d'autres ligne de code qui pourrait etre executer en parallèle car Il ne peut faire qu'une seule chose à la fois.
Il est possible et même très facile de faire de l'`asynchrone` en JavaScript, mais l'`exécution restera synchrone.`
L'`Event Loop` permet de contourner cette partie asynchrone de Javascript, il peut etre vus comme une grosse liste d'attente qui va executer toutes les fonctions qui lui sont envoyer les unes après les autres, avec l'`Event Loop` chaque fonction est toujours executer de façon synchrone mais il est possible de demander à executer le code de maniere synchrone ainsi lorsque l'on demande à executer une fonction de maniere asynchrone celle-ci est mise dans une fil d'attente et va attendre son tour pour etre executer, le code n'est donc pas executer en parallèle mais il est programmer pour etre executer à un autre moment,
 Certaines fonctions sont faite pour demander que l'on execute du code de façon asynchrone.

Pour essayer de clarifier tout ça disons que:
Si du code **synchrone** est du code qui s'exécute ligne après ligne en attendant la **fin de l'exécution** de la ligne précédente, alors on peut facilement en déduire que du code **asynchrone** va s'exécuter ligne après ligne, mais la ligne suivante **n'attendra pas** que la ligne asynchrone ait fini son exécution.

#### L'event loop

En JavaScript, chaque ligne de code est exécutée de façon synchrone, mais il est possible de demander à exécuter du code de manière asynchrone. Et lorsque l'on demande à exécuter une fonction de façon asynchrone, la fonction en question est placée dans une sorte de **file d'attente** qui va exécuter toutes les fonctions qu'elle contient les unes après les autres. C'est ce qu'on appelle l'_**event loop**._ Tout le cœur du langage fonctionne autour de ça.
Ainsi, le code n'est pas réellement exécuté en parallèle car il est mis en file d'attente, mais il ne bloque pas l'exécution du code depuis lequel il a été appelé.

##### La fonction setTimeout

`setTimeout`  est la fonction **la plus répandue** lorsque l'on veut exécuter du code asynchrone sans bloquer le fil d'exécution en cours. Cette fonction prend 2 paramètres :

- La **fonction à exécuter** de manière asynchrone (qui sera donc ajoutée à la file d'attente de l'event loop)
- Le **délai**, en millisecondes, avant d'exécuter cette fonction.

```{JS}
setTimeout(function() {
    console.log("I'm here!")
}, 5000);

console.log("Where are you?");
```

La fonction  `setTimeout`  nous retourne une valeur permettant d'identifier le code asynchrone que l'on veut exécuter. Il est possible de passer cet identifiant en paramètre à la fonction  `clearTimeout` , si vous souhaitez annuler l'exécution asynchrone de la fonction avant qu'elle ne soit exécutée

##### Les autres méthodes

Il existe d'autres méthodes un peu moins répandues, voire très peu utilisées :

- `setInterval`: elle fonctionne exactement comme  `setTimeout` , à peu près, elle exécute la fonction passée en paramètre **en boucle** à une **fréquence déterminée** par le temps en millisecondes passé en second paramètre. Il suffira de passer la valeur de retour de  `setInterval`  à  `clearInterval`  pour **stopper** l'exécution en boucle de la fonction
- `setImmediate` : Cette fonction prend en seul paramètre _la fonction à exécuter de façon synchrone_.  La fonction en question sera placée dans la **file d'attente** de l'event loop, mais va **passer devant** toutes les autres fonctions, sauf certaines spécifiques au Javascript :
  - `les événements` ( qui sont donc exécutés eux-aussi de façon asynchrone  😉),
  - `le rendu HTML` aussi  et l'`I/O(Input/Output)`.
  - Il existe aussi  `nextTick` , qui permet, là, de court-circuiter tout le monde. À utiliser avec précaution

##### Le cas de l'I/O

L'I/O correspond aux événements liés à l'_**input**_(les flux d'entrée) et l'_**output**_(les flux de sortie). Cela correspond notamment à la lecture/écriture des fichiers, aux requêtes HTTP
Lorsque l'on exécutait la fonction   `fetch()`   lors d'une requête HTTP, celle-ci ne bloquait pas l'exécution du code. On n'attend pas que la requête soit envoyée et une réponse reçue avant d'exécuter le reste du code. C'est donc une **fonction asynchrone**.

`_fetch()_`retourne une _Promise_ qui est une autre façon de faire de l’asynchrone car les fonctions`_then()_`et`_catch()_`sont appelées plus tard lorsque le travail est terminé.
Et de la même manière, tout ce qui touche à l'I/O peut être exécuté de manière asynchrone. Et c'est tant mieux, car leur exécution peut prendre du temps. 😎
La fonction asynchrone nous `Promet`(Promise) de nous renvoyer un resultat, ce resultat peut etre positif ou négatif, ainsi on va pouvoir coder comme si on avait déjà ce resultat mais ce code ne sera executer qu'une fois le resultat connus.
Le deux mot  clé `Async` et `Await` nous permettent de gerer l'asynchrone plus facilement

#### Gérez du code asynchrone

Comment on peut exécuter du code asynchrone et renvoyer le résultat que l'on souhaite à celui qui a lancé le code.

##### Callback

Une _**callback**_ est une fonction qui va etre appelée “plus tard” ;
C'est simplement une fonction que vous définissez. Le principe de la callback  est de la **passer en paramètre** d'_une fonction asynchrone_. Une fois que la fonction asynchrone a _fini sa tâche_, elle va appeler notre fonction _callback_ en lui passant un **résultat**.
Ainsi, le code que nous mettons dans notre fonction callback sera exécuté de manière asynchrone.
Les **événements**  sont un exemple typique de fonction asynchrone à laquelle on passe une fonction _callback_.

```{JS}
element.addEventListener('click', function(e) {
    // Do something here ... 
});
```

Dans l'exemple ci-dessus, la fonction qui est envoyée à  `addEventListener`  est une callback. Elle n'est pas appelée tout de suite, elle est appelée plus tard, dès que l'utilisateur clique sur l'élément. Ça ne bloque donc pas l'exécution du code et c'est donc asynchrone.
Les callbacks sont la **base de l'asynchrone** en JavaScript et sont très utilisées.
Les callbacks sont faciles à comprendre et à utiliser, mais elles souffrent d'un gros problème de lisibilité du code, via ce qu'on appelle le _callback hell_.
On se retrouve régulièrement dans des situations où on va imbriquer plusieurs couches de callbacks , rendant le code difficile à lire et pouvant générer des erreurs.

```{JS}
elt.addEventListener('click', function(e) {
    mysql.connect(function(err) {
        mysql.query(sql, function(err, result) {
            fs.readFile(filePath, function(err, data) {
                mysql.query(sql, function(err, result) {
                    // etc ...
                });
            });
        });
    }); 
});
```

##### Gérez des erreurs callbacks

Pour gérer les erreurs avec les callbacks, la méthode la plus utilisée est de prendre **2 paramètres** dans notre callback.

- Le 2e paramètre est notre donnée et
- le 1er est l'erreur. Si elle n'est pas _**null**_ ou _**undefined**_,  elle contiendra _un message d'erreur indiquant qu'une erreur est intervenue_.

Si on reprend un exemple comme la lecture d'un fichier avec le module  `fs`  peut nous retourner une erreur :

```{JS}
fs.readFile(filePath, function(err, data) {
    if (err) {
        throw err;
    }
    // Do something with "data"
});
```

##### Promise

Les _**promise**_, sont un peu plus complexes mais bien plus puissantes et faciles à lire que les callbacks.
Lorsque l'on exécute du code asynchrone, celui-ci va immédiatement nous retourner une "_**promise**_" pour nous promettre qu'un résultat nous sera envoyé prochainement.
Cette promesse est en fait un objet `Promise` qui peut être  `resolve`  avec un résultat, ou  `reject`  avec une erreur.
Lorsque l'on récupère une  `Promise` , on peut utiliser sa fonction  `then()`  pour exécuter du code dès que la promesse **est résolue**, et sa fonction  `catch()`  pour exécuter du code dès qu'**une erreur est survenue.**

Voyons avec un exemple concret pour mieux comprendre :

```{JS}
functionThatReturnsAPromise()
    .then(function(data) {
        // Do somthing with data 
    })
    .catch(function(err) {
        // Do something with error
    });
```

`functionThatReturnsAPromise`  nous renvoie une  `Promise` . On peut donc utiliser sa fonction  `then()`  en lui passant une fonction qui sera exécutée dès qu'un résultat sera reçu (avec le résultat en question passé à notre fonction). On peut aussi utiliser sa fonction  `catch()`  en lui passant une fonction qui sera exécutée si une erreur est survenue (avec l'erreur en question passée à notre fonction).

Le gros avantage est que l'on peut aussi **chaîner** les  `Promise`. Ainsi, la valeur que l'on retourne dans la fonction que l'on passe à   `then()`  est transformée en une nouvelle  `Promise`  résolue, que l'on peut utiliser avec une nouvelle fonction  `then()` . Si notre fonction retourne par contre une exception, alors une nouvelle  `Promise`  rejetée est créée et on peut l'intercepter avec la fonction  `catch()` . Mais si la fonction que l'on a passée à  `catch()`  retourne une nouvelle valeur, alors on a à nouveau une  `Promise`  résolue que l'on peut utiliser avec une fonction  `then()` , etc.

Voici un exemple qui vous montre comment on peut profiter des  `Promise`  pour chaîner notre code asynchrone :

```{JS}
returnAPromiseWithNumber2()
    .then(function(data) { // Data is 2
        return data + 1;
    })
    .then(function(data) { // Data is 3
        throw new Error('error');
    })
    .then(function(data) {
        // Not executed  
    })
    .catch(function(err) {
        return 5;
    })
    .then(function(data) { // Data is 5
        // Do something
    });
```

Dans l'exemple ci-dessus, la fonction  `returnAPromiseWithNumber2`  nous renvoie une  `Promise`qui va être résolue avec le nombre  `2`.

- La première fonction  `then()`  va récupérer cette valeur.

- Puis, dans cette fonction on retourne  `2 + 1` , ce qui crée une nouvelle  `Promise`  qui est immédiatement résolue avec  `3` .

- Puis, dans le  `then()`  suivant, nous retournons une erreur.

De ce fait, le   `then()`   qui suit ne sera pas appelé et c'est le   `catch()`   suivant qui va être appelé avec l'erreur en question. Lui-même retourne une nouvelle valeur qui est transformée en Promise  qui est immédiatement résolue avec la valeur `5`  . Le dernier  `then()`  va être exécuté avec cette valeur.

#### Async/await

`async`  et  `await`  sont 2 nouveaux mots clés qui permettent de gérer le code asynchrone de manière beaucoup plus intuitive, en bloquant l'exécution d'un code asynchrone jusqu'à ce qu'il retourne un résultat

```{JS}
async function fonctionAsynchrone1() {/*code asynchrone*/}
async function fonctionAsynchrone2() {/*code asynchrone*/}

async function fonctionAsynchrone3() {
 const value1 = await fonctionAsynchrone1();
 const value2 = await fonctionAsynchrone2();
 return value1 + value2;
}
```

Dans cet exemple, nous avons un total de 3 fonction asynchrones :  `fonctionAsynchrone1` ,  `fonctionAsynchrone2` ,  `fonctionAsynchrone3` . Quand on utilise  `async`  et  `await` , une fonction asynchrone doit avoir le mot clé  `async`  avant la fonction. Ensuite, dans le code, nous pouvons faire appel à des fonctions asynchrones et attendre leur résultat grâce au mot clé  `await`  que l'on met devant l'appel de la fonction.
Attention: `async`  /  `await`  utilisent les Promise en arrière-plan, il est donc possible d'utiliser les 2 en même temps.
async / await utilisant les Promise, la levée d'une erreur se fait aussi par une **exception**.
Pour intercepter cette erreur, par contre, il suffit d'exécuter notre code asynchrone dans un bloc  `try {} catch (e) {}` , l'erreur étant envoyée dans le `catch`.
 En resumer on a:

- Qu'une callback est une fonction appelée “plus tard” ;
- Que les `Promise`  sont des objets qui nous fournissent les fonctions`_then()_`et`_catch()_`pour gérer le code asynchrone ;
- Que`async`  et   `await`  permettent de faire de l’asynchrone avec une syntaxes plus naturelle, et qu’ils utilisent en arrière plan les _Promise._

_Nous connaissons maintenant 3 techniques pour faire du code asynchrone et pouvoir utiliser sa valeur ; voyons maintenant comment ça peut nous servir dans le cas de plusieurs requêtes HTTP !_

### Parallélisez plusieurs requêtes HTTP

Gerer de l'asynchrone va nous permettre de réaliser plusieurs requetes HTTP en parallèle càd en meme temps, pour cela on va utiliser 3 methodes:

- Les callbacks
- Les Promise et
- Async Await

Ces methodes vont nous permettre de faire deux requetes en parallèle suivis d'une requete en sequence càd lorsque les precedentes sont terminer, on vera que certaines de ces methodes sont plus adapter que d'autres et plus facile à relire
Un code asynchrone est plus imbriquer avec les **callback** alors qu'il est plus intuitif et plus lisible avec **async et await**

#### Enchaînez des requêtes avec les callbacks

Voyons ensemble comment faire nos 2 requêtes **en parallèle**, suivies d'une requête **en séquence** avec les callbacks. Et vous verrez, ça peut vite devenir complexe !

Pour cet exemple, nous partons du principe que nous avons accès à 2 fonctions (`get`  et  `post`). Elles font respectivement une requête  `GET`  et une requête  `POST` et elles prennent en paramètre :

- l'URL de la requête,
- une callback à exécuter quand on a le résultat (avec une variable d'erreur en premier paramètre).

```{JS}
var GETRequestCount = 0;
var GETRequestResults = [];

function onGETRequestDone(err, result) {
    if (err) throw err;
    
    GETRequestCount++;
    GETRequestResults.push(result);
    
    if (GETRequestCount == 2) {
        post(url3, function(err, result) {
            if (err) throw err;
            
            // We are done here !
        });
    }
}

get(url1, onGETRequestDone);
get(url2, onGETRequestDone);
```

Comme vous pouvez le voir, le code est assez particulier à lire. Il y a d'autres façons d'écrire ce code, mais ça reste une des façons les plus simples et rapides à écrire.

Afin d'exécuter 2 requêtes  `GET`  en même temps, nous pouvons appeler 2 fois la fonction  `get()`. Étant donné que cette fonction est **asynchrone**, elle ne bloquera pas l'exécution du code.
Ainsi l'autre fonction  `get()`  sera aussi appelée alors que la première ne sera pas encore terminée. C'est comme ça qu'on peut avoir 2 requêtes en parallèle.

Par contre, nous voulons exécuter une requête  `POST`  une fois que les **2 requêtes  `GET`  sont terminées**, et pas avant ! Pour ce faire, nous devons savoir si les requêtes  `GET`  sont terminées. C'est pour ça que la variable  `GETRequestCount`  est créée. On va l'**incrémenter** dans la fonction _callback_ que l'on a envoyée aux appels à  `get()` , et si on atteint 2 (le nombre de requêtes  `GET` qu'on a faites), alors on va exécuter la requête  `POST` .

`GETRequestResults`  sert à conserver les réponses des requêtes  `GET` , car on ne les a pas toutes les 2 en même temps.

#### Enchaînez des requêtes avec les Promise

Grâce à la fonction   `Promise.all`  , voyons comment exécuter nos requêtes en parallèle et en séquence avec les  `Promise` .

> Pour cet exemple, nous partons du principe que nous avons accès à 2 fonctions (  `get`  et  `post`  ) qui font respectivement une requête  `GET`  et une requête  `POST`  quand on leur passe en paramètre l'URL de la requête. Ces fonctions retourneront une  `Promise`  avec le résultat de la requête.

```{JS}
Promise.all([get(url1), get(url2)])
    .then(function(results) {
        return Promise.all([results, post(url3)]];
    })
    .then(function(allResults) {
        // We are done here !
    });
```

Ici, nous utilisons la fonction  `Promise.all`  qui prend en paramètre une liste de  `Promise`  (cela peut aussi être de simples valeurs qui sont alors transformées en  `Promise`  résolues), et qui permet de toutes les exécuter en parallèle et de retourner une nouvelle  `Promise`  qui sera résolue quand toutes les  `Promise`  seront résolues.

Ainsi, la fonction  `then()`  recevra les résultats de toutes les  `Promise`  sous forme d'un tableau.
Afin d'exécuter notre requête  `POST`  une fois que les requêtes  `GET`  sont terminées, nous l'exécutons donc dans la fonction  `then()`
Notez que dans la fonction  `then()`, nous faisons encore une fois appel à la fonction  `Promise.all`  en lui passant les résultats des requêtes  `GET`  et notre requête  `POST` . Étant donné que  `Promise.all`  considère les simples valeurs comme des  `Promise`  résolues, cela nous permet, dans le prochain  `then()` , de récupérer une liste qui contient les résultats des requêtes  `GET`  et le résultat de la requête  `POST`  : `allResults = [ [ getResult1, getResult2 ], postResult ]` .

#### Enchaînez des requêtes avec async/await

Finalement, voyons comment exécuter le même code mais avec  `async`  /  `await` .

> Pour cet exemple, nous partons du principe que nous avons accès à 2 fonctions (  `get`  et  `post`  ) qui font respectivement une requête  `GET`  et une requête  `POST`  quand on leur passe en paramètre l'URL de la requête. Ces fonctions sont asynchrones (avec le mot clé  `async` ).

```{JS}
async function requests() {
    var getResults = await Promise.all([get(url1), get(url2)]);
    var postResult = await post(url3);
    return [getResults, postResult];
}

requests().then(function(allResults) {
    // We are done here !
});
```

Nous utilisons aussi la fonction  `Promise.all`  dans ce code, car c'est comme ça que l'on peut exécuter des fonctions asynchrones en parallèle (rappelez-vous que  `async`  correspond en arrière-plan à une  `Promise` ).

Par contre, ici, nous utilisons  `await`  devant  `Promise.all`  afin d'attendre la fin de l'exécution des 2 requêtes  `GET` , puis nous utilisons  `await`  devant la requête  `POST`  afin d'attendre son résultat. Puis nous renvoyons un tableau avec tous les résultats.

Lorsque nous appelons la fonction  `requests()` , ici, nous utilisons  `then()`  pour récupérer tous les résultats (mais vous auriez aussi pu utiliser  `await`  au sein d'une autre fonction avec le mot clé  `async` ).
