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

Un objet JavaScript est un ensemble de correspondances entre des clés et des valeurs.
un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un `identifiant`.
En JS les objets peuvent être considérés comme des collections de propriétés.

Les valeurs des propriétés peuvent être de n'importe quel type, y compris des objets. Cela permet de construire des structures de données complexes.
Les propriétés sont identifiées grâce à une « clé ». Une clé peut être une chaîne de caractères ou un symbole.

On a par exemple l'objet suivant

```{JS}
const student = {
  "firstname":"Arick",
  "lastname":"Bulakali"
}

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
Copy to Clipboard
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
Copy to Clipboard

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
Copy to Clipboard
```

#### Les paramètres du reste
