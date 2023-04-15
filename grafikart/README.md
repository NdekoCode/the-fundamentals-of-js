# DOM

Heritage des element dans le DOM : **EventTarget > Mode > Element > ...OthersElements**
Par exemple pour un element de type List `<li>`

![Heritage DOM](../assets/images/DomHeritage.png)

La methode `querySelector` et `querySelectorAll` s'utilisent toute sur l'objet `document`, `querySelector`, routourne un element de type `Element` alors que `querySelectorAll` retourne un element de type `NodeList`, un element de type `NodeList` est comme un tableau qui peut etre parcouris avec des methodes `forEach` mais il n'accepte pas toutes les methodes qui s'utilisent sur les instances de type `Array`, comme la methode filter par `exemple`, pour que les methodes qui s'utilisent sur les instances de type `Array` fonctionnent il faut d'abord transformer l'element de type `NodeList` en tableau avec la methode `Array.from(NodeListELement)` et puis la valeur que va vous retourner cette fonction sera de type `Array` et ainsi on pourra y appliquer des methodes comme `filter`.

Donc sachez que un `NodeList` n'est pas un tableau, ça y ressemble mais ce n'est pas un.
Sur les elements retourner par la methode `querySelector` on peux y appliquer plusieurs methodes et proprieter comme notamment:

- `nodeName` : Permet de retourner le nom du tag HTML de l'element qu'on a selectionner
- `textContent` et innerText : Permet de recuperer le text d'un element
- `innerHMTL` : permet de recuper le text de l'element mais aussi si il a des contenus `HTML` il va les retourner et cela en respectant le formattage que vous avez dans votre document ou editeur, ce qui n'est pas le cas de `textContent` et `innerText` qui vont supprimer les elements HTML et les espaces ou les retours à la ligne unitule et retourner uniquement le contenus textuel.
  Alors vus que `textContent` et innerText retourne du texte sachez que l'intention est similaire mais comporte les différences suivantes : `textContent` récupère le contenu de tous les éléments, y compris `<script>` et `<style>` en gardant meme le formattage de votre editeur donc en garder les espaces, indentations, retour à la ligne,.. , ce qui n'est pas le cas de `innerText` . `innerText` prend en compte le style de l'élément et ne retournera rien pour les **éléments cachés**(hidden, disabled, visibility:hidden,...) et il enlève meme le formattage, donc il ne va retourner que le contenus textuelle trimer (cfr la methode `str.trim()`).

On peut manipuler les attributs sur un HTML qu'on a recuperer la methode querySelector et cela avec les methodes `setAttribute(attributeToSet, newValueOfAttribute)` pour modifier un attribut HTML,`removeAttribute(AttributeToRemove)` pour supprimer un attribut HTML, `getAttribute(AttributeToGet)` pour recuperer la valeur d'un attribut HTML si on essaie de recuperer la valeur d'un attribut sur un element qui n'existe pas, cela nous renvois `null`.

On peut aussi manipuler les classes d'un element qu'on a cibler avec `querySelector` et pour cela on utilise sur notre element l'objet `classList` qui est un objet de type `DOMTokenList` qui est un objet qui nous permet de manipuler une liste d'element, cette objet `classList` contient tout un tas de methode qui permettent de manipuler la gestion de classe de l'element cibler et parmis ces methodes on a :

- `add(classToAdd)`: permet de d'ajouter une class
- `remove(classToRemove)`: permet de supprimer une class
- `toggle(classTotoggle)`: permet de supprimer si elle existe et d'ajouter si elle n'existe.

On peut appliquer le style à un element comme en Javascript pour cela il faut utiliser sur votre element l'objet `style` et appliquer le style comme en css, par exemple `li.style.color ='red';`
On peut recuperer le style appliquer à un element et pour cela on utilise une methode de window qui est `getComputedStyle(elementToGetStyle)`, cette methode ne prend pas en paramètre une chaine de caractère mais un element de type Element et il retourne un Objet de type `CSSStyleDeclaration` contenant l'ensemble du CSS appliquer sur l'element concerner ainsi vous pourriez recuperer les elements css sous forme de proprieter, comme par exemple :

```{JS}
const lists = document.querySelector("ul");

const cssStyle = getComputedStyle(lists);
console.log(cssStyle.color); // rgb(0, 0, 0)
console.log(cssStyle.display); // pour savoir si un element est en display block ou inline ou autre chose
```

## Manipulation générale du DOM

### Créer un element et manipuler les elements dans le DOM

Pour créer un element on part toujours de l'objet `document` et on va utiliser dessus la methode `createElement(HTMLTagName)` qui est une methode qui prend en paramètre une chaine de caractère qui est le nom du tag HTML de l'element à créer et va retourner un element de type `Node`.
par exemple on veut créer un element d'une liste alors on faira :

```{JS}
 const listItem = document.createElement('li');
```

Une fois que l'on a créer un element il faudra l'ajouter dans ma page en l'inserant dans un autre element HTML, et pour cela on utilise les methodes suivantes:

- `Node.appendChild(elementToAdd)` : permet d'ajouter un element HTML à la fin de l'aboresce de l'element selectionner, c'est comme ajouter un element à la fin d'un tableau
- `Element.append()` qui est comme appendChild sauf que lui on peut lui passer plusieurs element si on souhaite ajouter plusieurs element ou encore on peut lui passer un element et la valeur qu'il aura, c'est beaucoup plus pratique que `appendChild`.
- `Element.preprend()` qui est comme append sauf que lui il ajoute l'element au tout debut de l'element concerner.
- `insertAdjacentElement()`: C'est un peu une methode à tout faire, en premier paramètre elle prend l'indication pour savoir où est-ce que l'on veut inserer l'element et pour cela on a differente valeur dont:
  - "beforebegin": l'element sera ajouter avant l'element que l'on a selectionner
  - "afterbegin" : l'element va etre ajouter comme un preppend càd il va etre ajouter au debut du noeud de l'element selectionner
  - "beforeend": l'element va etre ajouter comme un `append` càd à la fin du noeud de l'element selectionner et
  - "afterend": l'element va etre ajouter après l'element càd qu'il va sortir du noeud de l'element selectionner et ainsi etre ajouter après cet element

NB: Lorsque un element est ajouter dans le DOM c'est toujours la meme reference qui est utiliser, et si cette reference est présente ailleur dans le DOM, dans ce cas elle est retirer.
Donc avec  du JavaScript un element ne peut pas etre  à plusieurs endroit  à la fois dans une structure HTML.

## Parcourir des enfants dans le DOM

Pour avoir la liste de tous les enfants d'un noeud on utilise la proprieter `children`, cette proprieter nous retourne un tableau de type `HTMLCollection` qui va contenir l'ensemble des enfants sous forme des tableau mais si vous voulez avoir les elements mais aussi leurs textes vous devez plutot utiliser la proprieter `childNodes` , à titre d'exemple.

```{JS}

const lists = document.querySelector("ul");
console.log(lists.children);
console.log(lists.childNodes)
```

Dans l'arborescence d'un element de tableau de type `HTMLCollection` et `childNodes` on peut utiliser differentes methodes ou proprieter pour recuperer un element à une position specifique comme :

- `firstChild`: est  une proprieter pour recuperer le premier element du tableau de ce type, il va retourner uniquement le noeud textuel dans le cas d'un tableau de type `childNodes`.
- `firstElementChild`:  est  une proprieter alternative à la proprieter `firstChild` à la difference est que lui il retourne uniquement le noeud HTML dans le cas d'un tableau de type  `childNodes`.
- `childElementCount`: est une proprieter qui nous renvois un nombre entier qui est le nombres d'element enfant que on a l'interieur de ces tableau sont altenative c'est elementNode.children.length
- `parentNode`: permet de remonter d'un element enfant à un element parent, par exemple si cela s'applique sur un element de type `<li></li>` alors `li.parentNode` peut nous retourner soit un `<ol>` ou un `<ul>`, la methode similaire c'est `parentElement` qui lui retourne uniquement le noeud HTML et non le noeud textuel.
- `nextElementSibling` : nous renvois le noeud HTML qui suit l'element sur lequel on l'applique son alternatif c'est `nextSibling` qui lui retourne le noeud textuel qui suit l'element sur lequel on l'applique et en sens inverse on a
- `previousElementSibling` et `previousSibling`
  
NB: Toutes ces methodes renvois null s'ils ne trouvent rien.

Pour supprimer un element dans le DOM on utilise souvent la methode `Element.remove()` sur l'element à supprimer et `Element.removeChild(childToRemove)` qui supprime un element enfant dans un noeud sur lequel on l'applique.

Pour cloner un element on utilise la methode `ElementToClone.cloneNode(boolean)` qui prend en paramètre un booléen si on veut cloner aussi les enfants de cet element ou non.

On peut verifier si un element contient un autre element, dans ce cas on utilise la methode `ElementParentNode.contains(NodeToVerify)` et va renvoyer `true` si il contient sinon il renvera `false`.

## Les evenements coté navigateur

Pour faire des evenement coté navigateur on utilise la methode addEventListener(), cette methode prend 3 paramètre

- le nom de l'evenement à ecouter `type`:Une chaîne sensible à la casse représentant le type d'évènement à écouter.
- La fonction à executer lorsque cette evenement est detecter (`listener`)
- Un objet `options` spécifie les caractéristiques de l'écouteur d'évènements. Les options disponibles sont :
  - `once`: indiquant que le `listener` ne sera executer qu'une seule fois, càd que l'evenement sera ecouter une seule fois.
  - `passive`: Un booléen (Boolean) qui, si `true`, indique que la fonction spécifiée par `listener` n'appellera jamais `preventDefault()`, ce qui permet de gagner en performance si vous savez que votre evenement ne faira jamais de preventDefault.
  - `capture`: permet d'inverser le systeme de propagation des evenement classique.
  
Pour les formulaires, quand on traite les informations textuelle on peut utiliser l'evenement `input`, si vous avez une balise `<select>` ou un champ input de type checkbox il faut plutot utiliser l'evenement `change` et dans l'objet event s'interesser à l'objet `event.currentTarget` où on pourra utiliser la proprieter `checked` pour la checkbox à fin de verifier si un element est checker ou non et `value` et `selectedOptions` pour le `<select>`
