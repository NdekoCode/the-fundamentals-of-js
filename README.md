# Apprendre les fondamentaux du Javascript

## Variable

Dans le JS moderne on declare une variable de deux maniere

- avec le mot clé `const` suivis du nom de la variable ou
- vec le mot clé `let` suivis du nom de la variable

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

un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un identifiant.
les objets peuvent être considérés comme des collections de propriétés.

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
Les instructions permettant
