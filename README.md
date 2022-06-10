# Apprendre les fondamentaux du Javascript

## Variable

Dans le JS moderne on declare une variable de deux maniere

- avec le mot clé `const` suivis du nom de la variable ou
- vec le mot clé `let` suivis du nom de la variable

Une variable déclarée grâce à l'instruction `var` ou `let` sans valeur initiale définie vaudra `undefined`

## Types de donnée

JavaScript est un langage dont le typage est faible et dynamique.
Cela signifie qu'il n'est pas nécessaire de déclarer le type d'une variable avant de l'utiliser.
Le type de la variable sera automatiquement déterminé lorsque le programme sera exécuté.
Cela signifie également que la même variable pourra avoir différents types au cours de son existence

Les des types en JavaScript se compose entre les valeurs primitives et les valeurs d'objets ou type d'object.

## Les valeurs primitives

Le type `boolean`(Peut etre `true` ou `false`), Le type `null`, Le type `undefined`(Une variable à laquelle on n'a pas affecté de valeur vaudra undefined), Le type `number`( `Number` et `BigInt`, ainsi que la valeur spéciale `NaN`.), Le type pour `les grands entiers`(avec ce type, on peut donc manipuler des entiers plus grands que ceux représentables avec `Number`, Pour créer un grand entier, on ajoutera un n après l'entier ou on appellera le constructeur `BigInt`), Le type pour les `string`(Les chaines de caracteres, les chaînes de caractères JavaScript sont immuables càd qu'une fois une chaîne créée, il est impossible de la modifier.), Le type `symbols`

### Les types numériques

C'est sont les types des valeurs numerique
Le ES6 possède deux types numériques natifs : `Number` et `BigInt`, ainsi que la valeur spéciale `NaN`.

#### Le type Number

Le type `Number` est géré pour représenter les nombres : les nombres flottants à précision double
Les valeurs en dehors de l'intervalle compris entre `Number.MIN_VALUE` et `Number.MAX_VALUE` sont automatiquement converties en `+Infinity` ou `-Infinity`
Pour vérifier si un nombre est un nombre entier de façon exacte càd avec une représentation en nombre flottant à double précision on utilise la methode statique Number.isSafeInteger() qui prend en parametre le nombre à verifier.
On peut connaître la valeur la plus grande qui peut être incrémentée et représentée avec le type `Number` en utilisant la constante `Number.MAX_SAFE_INTEGER`.

#### Le type BigInt

Le type `BigInt` est un type numérique qui permet de représenter des entiers avec une précision arbitraire.
Avec les grands entiers, on peut manipuler des nombres qui vont au-delà de `Number.MAX_SAFE_INTEGER`.
Pour créer un grand entier, `on ajoutera un n après l'entier` ou `on appellera le constructeur BigInt.`
Dans l'exemple qui suit, on voit le résultat obtenu lorsqu'on incrémente la valeur de `Number.MAX_SAFE_INTEGER` :

```{JS}
// BigInt
> const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
> x + 1n === x + 2n; // 9007199254740992n === 9007199254740993n Va afficher => false

// Number
> Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // 9007199254740992 === 9007199254740992 Va afficher => true
```

Il n'est pas possible d'utiliser des grands entiers et des nombres de façon interchangeable. Une exception TypeError sera déclenchée en cas d'incompatibilité.

### Le type chaîne de caractères

Ce type JavaScript est utilisé afin de représenter des données de texte.
Chaque élément occupe une position au sein de cette chaîne de caractères. Le premier élément est situé à l'indice 0, le deuxième à l'indice 1 et ainsi de suite. La longueur d'une chaîne de caractères correspond au nombre d'éléments qu'elle contient.
On peut y utiliser plusieurs methodes comme notamment `String.substr()` ou `String.concat()` pour concatener deux chaines de caracteres ou deux tableau
les chaînes doivent être utilisées pour les données de texte

### Le type symbole

Un symbole est une valeur primitive unique et immuable pouvant être utilisée comme clé pour propriété d'un objet

## Les objets

Un objet JavaScript est un ensemble de correspondances entre des clés et des valeurs ou indice valeur
un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un `identifiant`.
On en distingue souvent deux:

- Les objets proprement dite et
- Les tableau (`Array`)

### Les objets proprement dite

En JS les objets peuvent être considérés comme des collections de propriétés.
Les objets preprements dite on puex y faire reference par `indice` ou par clé
Les valeurs des propriétés peuvent être de n'importe quel type, y compris des objets. Cela permet de construire des structures de données complexes.
Les propriétés sont identifiées grâce à une « clé ». Une clé peut être une chaîne de caractères ou un symbole.

On a par exemple l'objet suivant

```{JS}
const student = {
  "firstname":"Arick",
  "lastname":"Bulakali"
}

```

### Les tableaux (Array)

L'objet global Array est utilisé pour créer des tableaux. Les tableaux sont des objets de haut-niveau semblables à des listes.
Les tableaux ne peuvent pas utiliser de chaînes de caractères comme indices pour les éléments (à la façon des `tableaux associatifs`(Objet proprement dite)) mais doivent utiliser des entier
Pour définir une valeur ou tenter d'accéder à une valeur du table on utilise `la notation entre crochet`, pour déterminer la taille d'un tableau on utilise la proprieter `length` sur le tableau dont on souhaite savoir
Exemple:

```{JS}
 let fruits = ['Apple', 'Banana'];
 
console.log(fruits.length);// 2

let first = fruits[0];// Apple

let last = fruits[fruits.length - 1];// Banana
 
 ```

#### Opérations fréquentes

- **Créer un tableau** `let fruits = ['Apple', 'Banana'];`
- Boucler sur un tableau

```{JS}
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
```

## Les operateurs des données

À l'instar des nombres classiques, on peut utiliser les opérateurs `+`, `*`, `-`, `*`, `**` et `%`. Un grand entier ne sera pas strictement égal à un nombre mais on pourra avoir une égalité faible(Voir l'exemple ci-haut).

Pour les operateurs booléen qui s'utilise sur les `conditions` comme `if`, on a, `||(OU)`,`&&(ET)`, `!(NON)` mais aussi pour les conditions ternaires on a `conditionTrue ? : ConditionFalse`.

## Condition

Il existe deux type de condition en JS mais dont certain peuvent comporter plusier variante

- La condition avec le mot clé `if` qui prend en parametre la condition à verifier, cette condition a plusieurs variante qui sont `else`, `else if`, `else if` prend aussi une condition en parametre

```{JS}
if (condition1)
  instruction1
else if (condition2)
  instruction2
else if (condition3)
  instruction3
...
else
  instructionN
```

- On aussi la condition avec le mot clé `switch` avec `switch case condition js mdn` qui se présente de la manière suivante.
`switch` évalue une expression et selon le résultat obtenu il exécute les instructions correspondantes.

```{JS}
switch (expression) {
  case valeur1:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur1
    instructions1;
  break;
  case valeur2:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
    instructions 2;
  break;
  case valeurN:
    // Instructions à exécuter lorsque le résultat
    // de l'expression à valeurN
    instructionsN;
  break;
  default:
    // Instructions à exécuter lorsqu'aucune des valeurs
    // ne correspond
    instructions_def;
  break;
}
```

Par exemple:

```{JS}
 const x = 2;
    switch (true) {
        case (x === 1 || x === 0): // Ne pas vrais quand x = 2;
            // Fait ça;
            // Fait quelque chose d'autre
            break;
        case (x === 2): // Will be executed
            // Fait quelque chose d'autre
            break;
        default:
        // Sera executer si aucune condition n'est observer
            console.log ('default');
    }

```

## Boucle

Les boucles permettent de répéter plusieurs fois une action dans notre code.
Il y a plusieurs differentes instructions qu'il est possible d'utiliser en JavaScript pour effectuer des itérations ou des repetitions.
Par exemple, en JavaScript, on pourrait traduire « Je ne derangerer plus en classse » plusieurs fois avec une boucle.
En JS on a plusieurs types de boucles qui sont un peu semblables dans les autres languages comme nattament :

### la boucle `for`

Une boucle for répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.

```{JS}
for (let i = 0; Conditions; i++) { 
  Instructions
  }
```

### la boucle `do...while`

permet de répéter un ensemble d'instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.

```{JS}
do{

  Instruction
  // `Instruction` est exécutée au moins une fois avant que la condition soit vérifiée.
}
while (condition);
```

### la boucle `while`

 permet d'exécuter une instruction tant qu'une condition donnée est vérifiée.

```{JS}
while (condition){

  instruction
  // Si la condition n'est pas vérifiée, l'instruction `instruction` n'est pas exécutée 
}
while (true) {
  console.log("Coucou monde !");// Sera executer quoi qu'il arrive
}
```

Le test de la condition s'effectue avant d'exécuter `instruction`. Si la condition renvoie `true (ou une valeur équivalente)`, `instruction` sera exécutée et la condition sera testée à nouveau. Si la condition renvoie `false (ou une valeur équivalente)`, l'exécution s'arrête et le contrôle est passé à l'instruction qui suit `while`.

### label

 Un label (ou étiquette) permet de fournir un identifiant pour une instruction afin d'y faire référence depuis un autre endroit dans le programme.
On utilise un label de la façon suivante :

```{JS}
label:
  instruction // peut être N'importe quel identifiant JavaScript qui n'est pas un mot-clé réservé.
```

### `for...in`

L'instruction `for...in` permet d'itérer sur l'ensemble des propriétés énumérables d'un objet.

```{JS}
for (variable in objet) {
  // Variable correspond à la clé d'un objet ou à l'indice d'un tableau
  instruction 
}
```

### `for...of`

`for...of` crée une boucle qui fonctionne avec `les objets itérables` (qui incluent `Array`, `Map`, `Set`, l'objet `arguments`, etc.). La boucle parcourt l'objet et les valeurs de ses différentes propriétés.

```{JS}
for (variable of objet) {
  // Variable correspond à la Valeur de la clé d'un objet ou la valeur de l'indice d'un tableau
  instruction
}
```

Avec les boucles on utilise souvent les instructions `break` et `continue`

- `break`:L'instruction break est utilisée pour finir l'exécution d'une boucle, d'une instruction `switch`, ou avec un `label` ou avec un `for`.
Lorsque break est utilisé avec un label, il provoque la fin de l'instruction correspondante.
La syntaxe de cette instruction possède donc deux formes :

- `break;`  permet d'interrompre la boucle la plus imbriquée (ou le switch) dans laquelle on se trouve
- `break label;` Interrompt l'exécution d'une instruction identifiée par un label.

```{JS}
for (i = 0; i < a.length; i++) {
  if (a[i] === valeurTest) {
    break;
  }
}
```

- `continue`:L'instruction continue permet de reprendre une boucle while, do-while, for, ou une instruction label.
L'instruction continue s'utilise donc de la façon suivante :

- `continue;`: Lorsque continue est utilisé sans label, l'itération courante de la boucle (celle la plus imbriquée) est terminée et la boucle passe à l'exécution de la prochaine itération.
- `continue label;` Lorsque continue est utilisé avec un label, il est appliqué à l'instruction de boucle correspondante.

À la différence de l'instruction break, continue ne stoppe pas entièrement l'exécution de la boucle. Si elle est utilisée dans une boucle while, l'itération reprend au niveau de la condition d'arrêt. Dans une boucle for, l'itération reprend au niveau de l'expression d'incrément pour la boucle.

```{JS}
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
```

```{JS}
let i = 0;
let j = 8;

vérifIetJ: while (i < 4) {
  console.log("i : " + i);
  i += 1;

  vérifJ: while (j > 4) {
    console.log("j : "+ j);
    j -= 1;
    if ((j % 2) === 0){
      continue vérifJ;
    }
    console.log(j + " est impaire.");
   }
   console.log("i = " + i);
   console.log("j = " + j);
}
```

## Fonctions

Une fonction est un ensemble d'instructions effectuant une tâche ou calculant une valeur.

De manière générale, une fonction est un « sous-programme » qui peut être appelé par du code extérieur à la fonction (ou du code interne dans le cas d'une récursion). Comme le programme, une fonction est composée d'une suite d'instructions qui forment le corps de la fonction. Il est parfois possible de passer des valeurs à une fonction et une fonction peut éventuellement retourner (ou renvoyer) une valeur.

Pour d'utiliser une fonction, il est nécessaire de l'avoir auparavant définie au sein de la portée dans laquelle on souhaite l'appeler.

### Les déclarations de fonctions

Une définition de fonction dou éclaration de fonction est construite avec le mot-clé `function`, suivi par :

- Le nom de la fonction.
- Une liste d'arguments à passer à la fonction, entre parenthèses et séparés par des virgules.
- Les instructions JavaScript définissant la fonction, entre accolades, { }.

par exemple, définit une fonction intitulée carrer :

```{JS}
function carrer(nombre) {
  return nombre * nombre;
}
```

NB: Les paramètres primitifs (comme les nombres) sont passés à la fonction par valeur. La valeur est passée à la fonction mais si cette dernière change la valeur du paramètre, cela n'aura pas d'impact au niveau global ou au niveau de ce qui a appelé la fonction.
Si l'argument passé à la fonction est un objet (une valeur non-primitive, comme un objet Array ou un objet défini par l'utilisateur), et que la fonction change les propriétés de cet objet, ces changements seront visibles en dehors de la fonction.
Par exemple :

```{JS}
function maFonction(monObjet) {
  monObjet.fabricant = "Toyota";
}

let mavoiture = {fabricant: "Honda", modèle: "Accord", année: 1998};
let x, y;

x = mavoiture.fabricant;     // x aura la valeur "Honda"

maFonction(mavoiture);
y = mavoiture.fabricant; // y aura la valeur "Toyota"
                         // (la propriété fabricant a été modifiée par la fonction)
```

### Appeler des fonctions

La seule définition d'une fonction ne permet pas d'exécuter la fonction.
Appeler la fonction permet d'effectuer les actions des instructions avec les paramètres indiqués. Par exemple, si on définit la fonction carré, on peut l'appeler de la façon suivante :`carré(5);`
La portée d'une fonction est la fonction dans laquelle elle est déclarée ou le programme entier si elle est déclarée au niveau le plus haut.

Les arguments d'une fonction ne sont pas limités aux chaînes de caractères et aux nombres. Il est possible de passer des objets.
Une fonction peut être récursive, c'est-à-dire qu'elle peut s'appeler elle-même.

```{JS}
function factorielle(n){
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorielle(n - 1));
}
```

### Portée d'une fonction

On ne peut pas accéder aux variables définies dans une fonction en dehors de cette fonction : ces variables n'existent que dans la portée de la fonction. En revanche, une fonction peut accéder aux différentes variables et fonctions qui appartiennent à la portée dans laquelle elle est définie. Une fonction définie dans une autre fonction peut également accéder à toutes les variables de la fonction « parente » et à toute autre variable accessible depuis la fonction « parente ».

```{JS}
// Les variables suivantes sont globales
lrt num1 = 20,
    num2 = 3,
    nom = "Licorne";

// Cette fonction est définie dans la portée globale
function multiplier() {
  return num1 * num2;
}

multiplier(); // Renvoie 60

// Un exemple de fonction imbriquée
function getScore () {
  let num1 = 2,
      num2 = 3;

  function ajoute() {
    return nom + " a marqué " + (num1 + num2);
  }

  return ajoute();
}

getScore(); // Renvoie "Licorne a marqué 5"
```

Une fonction qui s'appelle elle-même est appelée une fonction récursive. Sous certains aspects, une récursion est semblable à une boucle : toutes les deux exécutent le même code plusieurs fois et toutes les deux requièrent une condition d'arrêt (pour éviter une boucle ou une récursion infinie).

Par exemple cette fonction factorielle

```{JS}
function factorielle(n){
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorielle(n - 1));
}
factorielle(());
```

### Fonctions imbriquées et fermetures

Il est possible d'imbriquer une fonction dans une autre fonction. La portée de la fonction fille (celle qui est imbriquée) n'est pas contenue dans la portée de la fonction parente. En revanche, la fonction fille bénéficie bien des informations de la fonction parente grâce à sa portée. On a ce qu'on appelle une fermeture (closure en anglais).
Une fonction imbriquée étant une fermeture, cela signifie qu'une fonction imbriquée peut en quelque sorte hériter des arguments et des variables de la fonction parente.
En résumé :

> La fonction imbriquée ne peut être utilisée qu'à partir des instructions de la fonction parente.La fonction imbriquée forme une fermeture : elle peut utiliser les arguments et les variables de la fonction parente. En revanche, la fonction parente ne peut pas utiliser les arguments et les variables de la fonction fille.

```{JS}
function ajouteCarrés(a, b) {
  function carré(x) {
    return x * x;
  }
  return carré(a) + carré(b);
}
a = ajouteCarrés(2,3); // renvoie 13
b = ajouteCarrés(3,4); // renvoie 25
c = ajouteCarrés(4,5); // renvoie 41

// Donc
function parente(x) {
  function fille(y) {
    return x + y;
  }
  return fille;
}
fn_fille = parente(3); // Fournit une fonction qui ajoute 3 à ce qu'on lui donnera
résultat = fn_fille(5); // renvoie 8

résultat1 = parente(3)(5); // renvoie 8

```

### Utiliser l'objet `arguments`

Les arguments d'une fonction sont maintenus dans un objet semblable à un tableau. Dans une fonction, il est possible d'utiliser les arguments passés à la fonction de la façon suivante :

`arguments[i]`
où `i` représente l'index ordinal de l'argument (le premier argument ayant un indice à 0). On accède donc au premier argument avec `arguments[0]`. Le nombre total d'arguments est fourni grâce à `arguments.length`.
La propriété `arguments.length`permet de déterminer le nombre d'arguments réellement passés à la fonction.
`arguments` ce n'est pas un tableau au sens strict.
il possède un index numéroté ainsi qu'une propriété length. En revanche, il ne possède pas les méthodes classiques de manipulation des tableaux (Array).

### Paramètres des fonctions

À partir d'ECMAScript 2015, deux sortes de paramètres sont introduites :

- Les paramètres par défaut et
- Les paramètres du reste.

#### Les paramètres par défaut

En JS, par défaut, les paramètres des fonctions vaudront `undefined`
Il peut toutefois être utile de définir une valeur par défaut

```{JS}
function multiplier(a, b = 1) {
  return a*b;
}

multiplier(5); // 5

```

#### Les paramètres du reste

`Les paramètres du reste` permet de représenter un nombre indéfini d'arguments contenus dans un tableau.
Dans cet exemple, on utilise une fonction fléchée, concept qui est présenté et illustré dans la section qui suit.

```{JS}
function multiplier(facteur, ...lesArgs) {
  return lesArgs.map(x => facteur * x);
}

var arr = multiplier(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

#### Fonctions fléchées

Les fonctions fléchées ont été introduites pour deux raisons principales : une syntaxe plus courte et l'absence de `this` rattaché à la fonction.
`Une expression de fonction fléchée` permet d'utiliser une syntaxe plus concise que les expressions de fonctions classiques. Une telle fonction ne possède alors pas de valeur propre pour `this`, `arguments`, `super` ou `new.target`.
Les fonctions fléchées sont nécessairement anonymes.

Exemple:

```{JS}
let a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];
var a2 = a.map(function(s){ return s.length });
console.log(a2); // affiche [8, 6, 7, 9]
var a3 = a.map( s => s.length );
console.log(a3); // affiche [8, 6, 7, 9]


// "a3" est equivalent à "a2" sauf que "a3" est une fonction fleché
```

Avec les fonctions fleché il faut comprendre la notion de **`Pas de "this" distinct`** dans les fonctions classique de javascript càd qu'on déclare avec le mot clé `function`, dans ces fonctions `this` a comme valeur la valeur de `l'objet global` dans un environnement web dans ce cas `this` vaudra l'objet `window`.
Les fonctions fléchées n’ont pas leur propre valeur de `this`. La valeur de `this` à l’intérieur d’une fonction fléchée est toujours `héritée depuis la portée englobante`.
Les fonctions fléchées capturent la valeur de `this` dans le contexte englobant.

```{JS}
function Personne(){
  this.âge = 0;

  setInterval(() => {
    this.âge++; // "this" fait référence à l'objet personne
  }, 1000);
}

var p = new Personne();
```

#### Fonctions prédéfinies

JavaScript possède plusieurs fonctions natives, disponibles au plus haut niveau :

- `eval()`: permet d'évaluer du code JavaScript contenu dans une chaîne de caractères.
- `isFinite()`: Détermine si la valeur passée est un nombre fini. Si nécessaire, le paramètre sera converti en un nombre.
- `isNaN()`: Détermine si une valeur est NaN ou non. Note : On pourra également utiliser `Number.isNaN()` défini avec ECMAScript 6 ou utiliser `typeof` afin de déterminer si la valeur est `Not-A-Number`
- `parseFloat()`: Convertit une chaîne de caractères en un nombre flottant.
- `parseInt()`: Convertit une chaîne de caractères et renvoie un entier dans la base donnée.
- `decodeURI()`: Décode un `Uniform Resource Identifier (URI)` créé par `encodeURI()` ou une méthode similaire.
- `decodeURIComponent()`: Décode un composant d'un `Uniform Resource Identifier (URI)` créé par `encodeURIComponent()` ou une méthode similaire.
- `encodeURI()`: Encode un `Uniform Resource Identifier (URI)` en remplaçant chaque exemplaire de certains caractères par un, deux, trois voire quatre séquences d'échappement représentant l'encodage UTF-8 du caractères (quatre séquences seront utilisées uniquement lorsque le caractère est composé d'une paire de deux demi-codets).

`encodeURIComponent()`: Encode un composant d'un `Uniform Resource Identifier (URI)` en remplaçant chaque exemplaire de certains caractères par un, deux, trois voire quatre séquences d'échappement représentant l'encodage UTF-8 du caractères (quatre séquences seront utilisées uniquement lorsque le caractère est composé d'une paire de deux demi-codets).

### Quelques methodes ou fonctions Utiles sur les types d'elements en JS

Avant tout sachez que il y a deux type de methodes courant en JS qui sont:

- Les méthodes des instances et
- Les methodes Statiques

`Les méthodes des instances` s'utilisent sur l'instance d'un classe ie sur un Objet alors que les `methodes statiques` s'utilise sur la classe Elle même càd sans utiliser l'objet de la classe

### Les methodes courants sur les tableau(Array)

#### Méthodes statiques

- `Array.from()`
Cette méthode permet de créer une nouvelle instance d'`Array` à partir d'un objet semblable à un tableau ou d'un itérable.
Elle prend deux parametres qui sont:
  - `arrayLike` qui est Un objet semblable à un tableau ou bien un objet itérable dont on souhaite créer un tableau, instance d'Array et
  - `fonctionMap Facultatif`: Argument optionnel, une fonction à appliquer à chacun des éléments du tableau.
Exemple:

```{JS}
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

- `Array.isArray()` permet de déterminer si l'objet passé en argument `Array.isArray(value)` est un objet Array, elle renvoie true si le paramètre passé à la fonction est de type Array et false dans le cas contraire.
Par exemple:

```{JS}
Array.isArray([1, 2, 3]);   // true
Array.isArray({toto: 123}); // false
Array.isArray("tototruc");  // false
Array.isArray(undefined);
```

- `Array.of()`
La methode `Array.of()` permet de créer une nouvelle instance d'objet Array à partir d'un nombre variable d'arguments, quels que soient leur nombre ou leur type.

La différence entre `Array.of()` et le constructeur Array se situe dans la gestion des arguments entiers : `Array.of(7)` crée un tableau avec un seul élément, 7, tandis que `Array(7)` produit un tableau avec 7 éléments vides (à ne pas confondre avec des éléments qui auraient explicitement la valeur `undefined`).

Par exemple:

```{JS}
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

#### Les Méthodes des instances

Les methodes des instances s'utilise sur les objets de type tableaux, pour les reconnaitre dans la documentation ils ont une syntaxe de type `prototype.NomDelaFonction`
Soit le tableau `let fruits = ['Apple', 'Banana'];`

- **Ajouter à la fin du tableau**

```{JS}
let newLength = fruits.push('Orange'); // ["Apple", "Banana", "Orange"]
```

- **Supprimer le dernier élément du tableau**

```{JS}
let last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
```

- **Supprimer le premier élément du tableau**

```{JS}
let first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];
```

- **Ajouter au début du tableau**

```{JS}
let newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];
```

- **Trouver l'index d'un élément dans le tableau**

```{JS}
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana');
// 1
```

- **Supprimer un élément par son index**

```{JS}
let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]
```

- **Supprimer des éléments à partir d'un index**

```{JS}
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); // ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1, n = 2;

let removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)
```

- **Copier un tableau**

```{JS}
let shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]
```

- `Array.prototype.concat()`
La méthode concat() est utilisée afin de fusionner deux ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.
Syntaxe:

```{JS}
Concat(valeur0)
concat(valeur0, valeur1)
concat(valeur0, valeur1, ... , valeurN)
```

Si `valeur` n'est pas passé, `concat` renverra une copie superficielle du tableau sur lequel elle est appelée.

```{JS}
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

- `Array.prototype.entries()`
La méthode `entries()` renvoie un nouvel objet de type Array Iterator qui contient le couple clef/valeur pour chaque éléments du tableau.

```{JS}
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1);
// expected output: Array [[0, "a"],[1,"b"],[2,"c"]]
```

```{JS}
var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

- `Array.prototype.fill()`
La méthode **`fill()`** remplit tous les éléments d'un tableau entre deux index avec une valeur statique. La valeur de l'index de fin n'est pas incluse. Cette méthode renvoie le tableau modifié.
Syntaxe:

```{JS}
arr.fill(valeur)
arr.fill(valeur, début)
arr.fill(valeur, début, fin)
```

Cette méthode prend trois paramètres `valeur`, `début`,`fin`

- `valeur`: Valeur avec laquelle remplir le tableau.
- `début` : Index de début, la valeur par défaut est 0.
- `fin` :Index de fin, la valeur par défaut est `this.length`.

Cette methode retourne Le tableau modifié par la méthode.
Les éléments pour lesquels on utilisera la `valeur` sont ceux contenus dans l'intervalle de positions \[`début`, `fin`\].
Les arguments `début` et `fin` sont optionnels. Leurs valeurs par défaut sont respectivement `0` et la taille `length` de l'objet `this` ou du tableau courent.
La méthode `fill()` est une méthode de modification, elle changera l'objet `this` lui-même, et renverra l'objet modifié. Elle ne crée pas de copie. Lorsque cette méthode reçoit un objet comme valeur, elle copiera l'objet passé et remplira le tableau avec une référence vers cette copie.

Exemple:

```{JS}
const array1 = [1, 2, 3, 4,5];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

```{JS}
[1, 2, 3].fill(4);            // [4, 4, 4]
[1, 2, 3].fill(4, 1);         // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);      // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);      // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);    // [4, 2, 3]
[1, 2, 3].fill(4, 3, 3);      // [1, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);  // [1, 2, 3]
Array(3).fill(4);             // [4, 4, 4]
[].fill.call({length: 3}, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Les objets sont copiés via une référence
var arr = Array(3).fill({}); // [{}, {}, {}];
arr[0].yop = "yop"; // [{yop: "yop"}, {yop: "yop"}, {yop: "yop"}]
```

- `Array.prototype.filter()`
La méthode **`filter()`** crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction `callback`.
`arr.filter(callback);`
Cette methode retourne Un nouveau tableau contenant les éléments qui respectent la condition du filtre. Si aucun élément ne respecte la condition, c'est un tableau vide qui est renvoyé.
La fonction `callback` est appelée avec trois arguments dont les deux dernier sont optionnel:

1. la valeur de l'élément courant,
2. l'index de l'élément courant,
3. l'objet `Array` parcouru.
`filter()` ne modifie pas le tableau d'origine.
Exemple:

```{JS}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); // expected output: Array ["exuberant", "destruction", "present"]

function suffisammentGrand(element) {
  return element >= 10;
}
var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand); // filtre vaut [12, 130, 44]
```

```{JS}
// Recherche dans un tableau
var fruits = ['pomme', 'banane', 'raisin', 'mangue'];

function filtreTexte(arr, requete) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
  })
}

console.log(filtreTexte(fruits, 'an')); // ['banane', 'mangue'];
console.log(filtreTexte(fruits, 'm')); // ['pomme', 'mangue'];
```

- `Array.prototype.findIndex()`

La méthode **`findIndex()`** exécute une fonction `callback` et renvoie l'**`indice`** du **`premier élément`** du tableau qui satisfait une condition donnée par la fonction `callback`. Si `la fonction` renvoie `false` pour tous les éléments du tableau, le résultat vaut `-1`.
Exemple:

```{JS}
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));// expected output: 3

// Trouver un indice avec une fonction fléchée
const fruits = ["pomme", "banane", "melon", "fraise", "raisin"];

const indice = fruits.findIndex(fruit => fruit === "fraise");
console.log(indice); // 3
console.log(fruits[indice]); // fraise 
```

`findIndex` ne modifie pas le tableau sur laquelle elle est appelée

- `Array.prototype.find()`
La méthode **`find()`** renvoie la **valeur** du **premier élément trouvé** dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur `undefined` est renvoyée.

Syntaxe :`arr.find[callback(element[, index[, tableau]]](, thisArg))`

```{JS}
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

const inventaire = [
                     {nom: 'pommes', quantité: 2},
                     {nom: 'bananes', quantité: 0},
                     {nom: 'cerises', quantité: 5}
                   ];

const resultat = inventaire.find( fruit => fruit.nom === 'cerises');
console.log(resultat); // { nom: 'cerises', quantité: 5}
```

- `Array.prototype.map()`
La méthode **`map()`** crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
Syntaxe: `var nouveauTableau = arr.map(callback [, thisArg])`
La fonction `callback` prend 3 paramètres :
- `valeurCourante` La valeur de l'élément du tableau à traiter.
- `index` : L'index de l'élément qui est traité par la fonction.
- `tableau`: Le tableau sur lequel on a appelé la méthode `map`.

La methode `map` retourne un nouveau tableau composé des images de la fonction de rappel.
`callback` est appelée avec trois arguments : la valeur de l'élément du tableau, l'index de cet élément et l'objet `Array` qui est parcouru.

**Attention :** `map()` construit un nouveau tableau. Si on utilise cette méthode sans utiliser le résultat, mieux vaudra utiliser `forEach` ou `for...of`. Pour mieux décider si `map()`est adéquat, regardez si vous utilisez la valeur de `return` et/ou si vous renvoyez une valeur avec la fonction `callback` : si ce n'est pas le cas, il ne faut pas utiliser `map()`.

Exemple:

```{JS}
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1); // expected output: Array [2, 8, 18, 32]
// Créer un tableau des racines carrées d'un tableau de nombre
var nombres = [1, 4, 9];
var racines = nombres.map(Math.sqrt);
// racines vaut désormais [1, 2, 3]
// nombres vaut toujours [1, 4, 9]
```

- `Array.prototype.flat()`

La méthode **`flat()`** permet de créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre une profondeur donnée.
Càd que la **`flat()`** permet de transformer un tableau qui contient des sous tableau en un tableau  avec une faible imbrication par rapport au précedent.

Syntaxe: `var nouveauTableau = monTableau.flat([profondeur]);`
Elle prend un seul parametre qui est `profondeur` qui est Le niveau de profondeur en termes d'imbrication de tableau. Autrement dit, jusqu'à quel niveau d'imbrication un tableau imbriqué doit il être `aplati`. La valeur par défaut est `1`.
Cette methode retourne Un nouveau tableau qui contient la concaténation des éléments des sous-tableaux du tableau passé en argument.

```{JS}
var arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);// [1, 2, 3, 4, 5, 6]
```

La méthode flat() permet également de retirer les « trous » d'un tableau :

```{JS}
var arr4 = [1, 2, , 4, 5];
arr4.flat(); // [1, 2, 4, 5]
```

- `Array.prototype.flatMap()`
La méthode **`flatMap()`** permet d'appliquer une fonction à chaque élément du tableau puis d'aplatir le résultat en un tableau. Cela correspond à l'enchaînement de `Array.prototype.map()` suivi de `Array.prototype.flat()` de profondeur 1. `flatMap` est plus efficace que la combinaison de ces deux opérations, souvent réalisées conjointement.

Syntaxe: `var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) { // return element for new_array }[, thisArg])`
`callback`

La fonction `callback` qui produit un élément du nouveau tableau et qui prend trois arguments :

- `currentValue`: La valeur du tableau qui est traitée.
- `index`: L'indice de l'élément du tableau qui est traitée.
- `array` Le tableau sur lequel `flatMap` a été appelée.

Elle retourne Un nouveau tableau composé d'éléments résultants de la fonction de rappel (`callback`) et aplati d'un niveau de profondeur.

```{JS}
// map() et flatMap()
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); // [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]); // [2, 4, 6, 8]

// seul un niveau est aplati
arr1.flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]]

// on génère une liste de mots à partir d'une liste de phrases
let tableau1 = ["Coucou comment", "", "ça va ?"];

tableau1.map(x => x.split(" ")); // [["Coucou", "comment"], [""], ["ça", "va", "?"]]

tableau1.flatMap(x => x.split(" ")); // ["Coucou", "comment", "", "ça", "va", "?"]
// On notera que la longueur de la liste obtenue avec `flatMap` est différente de la longueur de la liste originale.
```

- `Array.prototype.forEach()`
La méthode **`forEach()`** permet d'exécuter une fonction donnée sur chaque élément du tableau.
Syntaxe: `arr.forEach(callback);`
La fonction `callback` prend en compte trois arguments :
- `valeurCourante`: La valeur de l'élément du tableau en cours de traitement.
- `index`: L'indice de l'élément du tableau en cours de traitement.
- `array`: Le tableau sur lequel la méthode `forEach` est appliquée.

```{JS}
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

var items = ["item1", "item2", "item3"]
var copie = [];

items.forEach(function(item){
  copie.push(item);
});
```

`forEach()` exécute la fonction `callback` une fois pour chaque élément. À la différence de `map()` ou de `reduce()` il renvoie toujours la valeur `undefined` et ne peut donc pas être « enchaîné ».
`forEach()` ne modifie pas le tableau sur lequel elle est appelée, en revanche, la fonction de retour (_callback_) utilisée peut modifier le tableau.

- `Array.prototype.includes()`
La méthode **`includes()`** permet de déterminer si un tableau contient une valeur et renvoie `true` si c'est le cas, `false` sinon.
Syntaxe:

```{JS}
array.includes(élémentRecherché)
array.includes(élémentRecherché, indiceDépart)
```

La methode `includes` utilise  `l'égalité stricte` en son sein

```{JS}
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // expected output: true

console.log(pets.includes('at')); // expected output: false

[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

['a', 'b', 'c'].includes('c', 5);    // false
['a', 'b', 'c'].includes('c', -100); //
```

`includes()` est une méhtode générique : l'objet sur lequel elle est appelée ne doit pas nécessairement être un tableau. On peut l'utiliser sur des objets semblables à des tableaux (ex. `arguments` ou des chaînes de caractères ou des tableaux d'objets)

- `Array.prototype.join()`
La méthode **`join()`** crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'`un objet semblable à un tableau`. La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
Syntaxe: `arr.join() OU arr.join(séparateur)`

Exemple:

```{JS}
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // expected output: "Fire,Air,Water"

console.log(elements.join('')); // expected output: "FireAirWater"

console.log(elements.join('-')); // expected output: "Fire-Air-Water"

var a = new Array("Vent","Pluie","Feu");
a.join();      // "Vent,Pluie,Feu"
a.join(", ");  // "Vent, Pluie, Feu"
a.join(" + "); // "Vent + Pluie + Feu"
a.join(""); 
```

- `Array.prototype.keys()`
La méthode **`keys()`** renvoie un nouvel objet **`Array Iterator`** qui contient les clefs pour chaque indice du tableau.
Syntaxe: `array.keys();`
Exemple:

```{JS}
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
```

- `Array.prototype.values()`
La méthode **`values()`** renvoie un nouvel objet **`Array Iterator`** qui contient les valeurs pour chaque indice du tableau. Cette méthode est l'implémentation par défaut de `Array.prototype[Symbol.Iterator]`.
Syntaxe: `array.values()`

```{JS}
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

- `Array.prototype.lastIndexOf()`
La méthode **`lastIndexOf()`** permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau. Si la valeur recherchée n'est pas présente, le résultat sera -1.
Syntaxe:

```{JS}
arr.lastIndexOf(élémentRecherché)
arr.lastIndexOf(élémentRecherché, indexDébut)
```

Cette méthode prend deux paramètres:

- `élémentRecherché`: L'élément à qu'on cherche dans le tableau.
- `indexDébut`: L'index à partir duquel commencer la recherche dans le tableau (la recherche s'effectuant à l'envers). Si le paramètre est absent, sa valeur par défaut sera la longueur du tableau moins 1 (c'est-à-dire arr.length - 1), le tableau sera alors parcouru dans sa totalité. Si l'index est plus grand ou égal à la longueur du tableau, le tableau sera parcouru en entier. Si l'index est négatif, la recherche commencera d'autant d'éléments à partir de la fin du tableau. À noter que, même si l'index est négatif, la recherche s'effectuera toujours de la fin jusqu'au début du tableau. Si l'index calculé est inférieur à 0, la méthode renverra -1 et le tableau ne sera pas parcouru.

```{JS}
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo')); // expected output: 3

console.log(animals.lastIndexOf('Tiger')); // expected output: 

// on utilise lastIndexOf afin de situer une valeur dans un tableau.
var tableau = [2, 5, 9, 2];
tableau.lastIndexOf(2);     // 3
tableau.lastIndexOf(7);     // -1
tableau.lastIndexOf(2, 3);  // 3
tableau.lastIndexOf(2, 2);  // 0
tableau.lastIndexOf(2, -2); // 0
tableau.lastIndexOf(2, -1); // 

// Trouver toutes les occurrences d'un élément, on utilise push pour les ajouter dans un autre tableau quand ils sont trouvés.


var indices = [];
var tableau = ['a', 'b', 'a', 'c', 'a', 'd'];
var élément = 'a';
var idx = tableau.lastIndexOf(élément);
while (idx !== -1) {
  indices.push(idx);
  idx = (idx > 0 ? tableau.lastIndexOf(élément, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]
```

- `Array.prototype.reduce()`
La méthode **`reduce()`** applique une fonction qui est un « `accumulateur` » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
Syntaxe:

```{JS}
arr.reduce(callback)
arr.reduce(callback, valeurInitiale)
```

`reduce()` prend  deux parametres:

- `callback`:La fonction à exécuter sur chaque valeur de la liste (sauf le premier si aucune `valeurInitiale` n'est pas fournie),
- `valeurInitiale`: Une valeur utilisée comme premier argument lors du premier appel de la fonction callback. Si aucune valeur initiale n'est fournie, le premier élément du tableau est utilisé (et la boucle de traitement ne le parcourera pas). Si on appelle reduce() sur un tableau vide sans fournir de valeur initiale, on aura une erreur.

La methode `callback` prend 4 arguments en entrée :

- `accumulateur`: L'accumulateur (la valeur retournée par le précédent appel de la fonction callback), ou la valeur initiale s'il sagit du premier appel
- `valeurCourante`: La valeur de l'élément courant actuellement manipulé dans le tableau.
- `index`: L'index de l'élément courant actuellement manipulé dans le tableau.
-`array`: Le tableau sur lequel on a appelé la méthode `reduce()`.`callback`

Si `valeurInitiale` est fournie dans l'appel de `reduce()`, alors `accumulateur` sera égale à `valeurInitiale` et `valeurCourante` sera égale à la première valeur de la liste. Si `valeurInitiale` n'est pas fournie, alors `accumulateur` sera égale à la première valeur de la liste, et `valeurCourante` sera alors égale à la seconde.

```{JS}
// On fait la somme de tous les elements d'un tableau

// 01.On ne fournit pas de valeur initial
[0, 1, 2, 3, 4].reduce(
  (accumulateur, valeurCourante) => accumulateur + valeurCourante;
);
console.log(sumWithInitial); // expected output: 10

// on fournit une valeur initiale comme second argument à l'appel de `reduce()`
[0, 1, 2, 3, 4].reduce(function(accumulateur, valeurCourante, index, array){
  return accumulateur + valeurCourante;
}, 10);// la valeur renvoyée par reduce() serait 20.
```

- `Array.prototype.reverse()`
La méthode **`reverse()`** inverse l'ordre des éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.
Syntaxe: `arr.reverse()` et retourne Le tableau inversé.

Cette méthode modifie le tableau courant et renvoie une référence à ce tableau.
Cette méthode est intentionnellement générique et peut être appelée ie il peut également etre utilisé sur les objets ou les chaines de caracteres
Exemple:

```{JS}
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
```

- `Array.prototype.every()`
La méthode `every()` permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie `un booléen` pour le résultat du test.

NB: Cette méthode renvoie `true` pour n'importe quelle condition utilisée sur un tableau vide.
La méthode `every` exécute la fonction `callback` fournie sur chacun des éléments contenus dans le tableau jusqu'à ce qu'un élément pour lequel la fonction `callback` renvoie une valeur `false` soit trouvé.Si un tel élément est trouvé, la méthode `every` renvoie directement `false`.
si la fonction `callback` a renvoyé une valeur vraie pour tous les éléments, la méthode `every` renverra `true`.
`every` ne modifie pas le tableau sur lequel elle a été appelée.
`every` agit de la même façon que le quantificateur mathématiques « pour tous »,
Exemple:

```{JS}
// Va verifier si tous les elements du tableau sont inferieurs à 40
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));// expected output: true
```

- `Array.prototype.some()`
La méthode **`some()`** teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
**Note :** Cette méthode renverra `false`, quelle que soit la condition, si elle est utilisée sur un tableau vide.
Syntaxe: `arr.some(callback[, objetThis])`

Cette methode fonctionne comme la méthode `Array.prototype.every()` à la seule différence est que pour `Array.prototype.some()` il  suffit que une seule valeur du tableau verifie la condition du `callback` pour qu'elle renvois `true`.
La méthode `some()` ne modifie pas le tableau sur lequel elle est appelée.
Exemple:

```{JS}
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even)); // expected output: true


// On teste si certains éléments d'un tableau sont plus grands que 10.

function estAssezGrand(element, indice, array) {
  return (element >= 10);
}
var resultat = [2, 5, 8, 1, 4].some(estAssezGrand); // resultat vaut false
passed = [12, 5, 8, 1, 4].some(estAssezGrand); // passed vaut true

[2, 5, 8, 1, 4].some(elem => elem > 10); // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true
```

- `Array.prototype.sort()`
La méthode **`sort()`** trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
Syntaxe:

```{JS}
arr.sort()
arr.sort(fonctionComparaison)
```

`sort()` prend un paramètre optionnel qui est `fonctionComparaison`, Ce paramètre optionnel permet de spécifier une fonction définissant l'ordre de tri.
Cette fonction prendra deux arguments : le premier élément à comparer et le deuxième élément à comparer.
`sort()` retourne Le tableau trié (le tri est effectué sur le tableau courant qui est modifié, aucune copie n'est réalisée).
Dans le trie Les éléments valant `undefined` sont placés à la fin du tableau.

- Si `fonctionComparaison(a, b)` est inférieur à 0, on trie `a` avec un indice inférieur à `b` (`a` sera classé avant `b`) Donc trie par ordre `croissant`.
- Si `fonctionComparaison(a, b)` est supérieur à 0, on trie `b` avec un indice inférieur à `a`.(Donc trie par ordre `decroissant`)
- Si `fonctionComparaison(a, b)` renvoie 0, on laisse `a` et `b` inchangés l'un par rapport à l'autre, mais triés par rapport à tous les autres éléments(Pas de trie)

```{JS}
function compare(a, b) {
  if (a est inférieur à b selon les critères de tri)
     return -1;
  if (a est supérieur à b selon les critères de tri)
     return 1;
  // a doit être égal à b
  return 0;
}

// OU

function compareNombres(a, b) {
  return a - b;
}
```

Exemple:

```{JS}
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]

var nombres = [4, 2, 5, 1, 3];
nombres.sort(function(a, b) {
  return a - b;
});
console.log(nombres);// [1, 2, 3, 4, 5]

// Avec les fonctions flechés
let nombres = [4, 2, 5, 1, 3];
nombres.sort((a, b) => a - b);
console.log(nombres);
```

```{JS}
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];
items.sort(function (a, b) {
  return a.value - b.value;
});

```

- `Array.prototype.splice()`:
La méthode **`splice()`** modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments au meme tableaux.On peut ainsi vider ou remplacer une partie d'un tableau.
Syntaxe:

```{JS}
var tabElementsSupprimes = array.splice(début, nbASupprimer[, élem1[, élem2[, ...]]])

```

Cette méthode prend 3 paramètres dont le 3è est facultatif

- `début`: L'indice à partir duquel commencer à changer le tableau (l'indice du premier élement étant `0`). Si sa valeur est supérieure à la longueur du tableau `array.length`, `début` est ramené à la longueur du tableau `array.length`. S'il est négatif, le changement commencera d'autant d'éléments à partir de la fin du tableau, c'est à dire à partir de l'index `array.length + début`. Si `array.length + début` est inférieur à `0`, le changement commencera à l'index `0`.
- `nbASupprimer`: Un entier indiquant le nombre d'anciens éléments à remplacer. Si ce paramètre est absent ou si sa valeur est supérieure ou égale à `array.length - début`, alors les éléments entre `début` et la fin du tableau seront supprimés. Si `nbASupprimer` vaut 0, aucun élément ne sera supprimé. Dans ce cas, il est nécessaire de spécifier au moins un nouvel élément.
- `élemN`: Les éléments à ajouter au tableau à partir de `début`. Si vous ne spécifiez pas de nouvel élément, les anciens éléments seront simplement supprimés du tableau.

`elemN` si il ou ils sont fournits va correspondre aux elements qui vont remplacer les elements supprimer
Par exemple:

```{JS}
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

```{JS}
var mesPoissons  = ["scalaire", "clown", "mandarin", "chirurgien"];

// supprime 0 élément à partir de l'index 2, et insère "tambour"
var enleves = mesPoissons.splice(2, 0, "tambour");
// mesPoissons est ["scalaire", "clown", "tambour", "mandarin", "chirurgien"]
// enleves est [], aucun élément supprimé

// supprime 1 élément à partir de l'index 3
enleves = mesPoissons.splice(3, 1);
// mesPoissons est ["scalaire", "clown", "tambour", "chirurgien"]
// enleves est ["mandarin"]

// supprime 1 élément à partir de l'index 2, et insère "trompette"
enleves = mesPoissons.splice(2, 1, "trompette");
// mesPoissons est ["scalaire", "clown", "trompette", "chirurgien"]
// enleves est ["tambour"]

// supprime 2 éléments à partir de l'index 0, et insère "perroquet", "anémone" et"bleu"
enleves = mesPoissons.splice(0, 2, "perroquet", "anémone", "bleu");
// mesPoissons est ["perroquet", "anémone", "bleu", "trompette", "chirurgien"]
// enleves est ["scalaire", "clown"]

// supprime 2 éléments à partir de l'indice 2
enleves = mesPoissons.splice(mesPoissons.length - 3, 2);
// mesPoissons est ["perroquet", "anémone", "chirurgien"]
// enleves est ["bleu", "trompette"]

var mesPoissons = ["perroquet", "anémone", "bleu", "trompette", "chirurgien"];
// on retire trois éléments à partir de l'indice 2
enleves = mesPoissons.splice(2);
// mesPoissons vaut ["perroquet", "anémone"]
// enleves vaut ["bleu", "trompette", "chirurgien"]

var mesAnimaux = ["cheval", "chien", "chat", "dauphin"];
enleves = mesAnimaux.splice(-2, 1);

// mesAnimaux vaut ["cheval", "chien", "dauphin"]
// enleves vaut ["chat"]
```

- `Array.prototype.slice()`:

La méthode **`slice()`** renvoie un objet tableau, contenant une copie superficielle (_shallow copy_) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
Syntaxe:

```{JS}
arr.slice()
arr.slice(début)
arr.slice(début, fin)
```

Cette methode retourne Un nouveau tableau contenant les éléments extraits.
`slice()` ne modifie pas le tableau original, mais renvoie une nouvelle copie du tableau
Il prend deux parametre optionnel

- `début`: Indice (à partir de zéro) depuis lequel commencer l'extraction. S'il s'agit d'un indice négatif, `début` indique un décalage depuis la fin de la séquence.Par exemple, `slice(-2)` extrait les avant-dernier et dernier éléments dans la séquence.
Si `début` est absent, `slice()` commencera depuis 0. Si `début` est supérieur à la taille du tableau, c'est un tableau vide qui sera renvoyé.
- `fin`: ndice (à partir de zéro) auquel arrêter l'extraction. `slice()` extrait jusqu'à cet indice, mais pas l'élément situé en `fin` lui-même. `slice(1,4)` extrait du deuxième au quatrième élément(càd il va extraire de l'indice 1 à l'indice 3 donc il va ignorer l'indice 4)

S'il s'agit d'un indice négatif, `fin` indique un décalage depuis la fin de la séquence. `slice(2,-1)` extrait du troisième à l'avant-dernier élément dans la séquence. Si `fin` n'est pas fourni, `slice()` extraira jusqu'à la fin de la séquence (`arr.length`). Si `fin` est supérieur à la longueur de la séquence, `slice()` fera une extraction jusqu'à la fin de la séquence.
Exemple:

```{JS}
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)); // expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));// expected output: Array ["camel", "duck"]

console.log(animals.slice());// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


var fruits = ["Banane", "Orange", "Citron", "Pomme", "Mangue"];
var agrumes = fruits.slice(1, 3);

// fruits vaut --> ["Banane", "Orange", "Citron", "Pomme", "Mangue"]
// agrumes vaut --> ["Orange", "Citron"]
```

- `Array.prototype.toString()`

- La méthode toString() renvoie une chaine de caractères représentant le tableau spécifié et ses éléments.
Exemple:

```{JS}
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString()); // expected output: "1,2,a,1a"

```

### Les methodes courants sur les chaines de caractères

Imaginons les opérations utiles que nous pourrions faire sur les chaînes de caractères avec les méthodes intégrées

#### Méthodes statiques pour les String

- `String.fromCharCode()`
La méthode statique **`String.fromCharCode()`** renvoie une chaîne de caractères créée à partir de `points de code UTF-16.`
Syntaxe: `String.fromCharCode(num1, ..., numN)`
Le paramètre `num1, ..., numN` est Une séquence de nombres représentant des points de code UTF-16 entre 0 et 65535 (`0xFFFF`). Les nombres supérieurs à `0xFFFF` sont tronqués.

Cette méthode renvoie une chaîne de caractère et non un objet String.
Exemple:

```{JS}
console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="

String.fromCharCode(65,66,67); // ABC
String.fromCharCode(0x2014);   // "—"
String.fromCharCode(0x12014);  // "—" également, le 1 a été tronqué
String.fromCharCode(8212);     // renvoie également "—" car 8212
                               // est la forme décimale
´´´

- `String.fromCodePoint()`
