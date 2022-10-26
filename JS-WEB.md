# Le JavaScript coté navigateur

Ici on parle de JavaScript coté Client, il faut savoir que les navigateurs Web comme Chrome ou safari, FireFox,Opera,... possède en eux un moteur JavaScript, donc vous n'avez pas besoin de faire installer quelque chose à l'utilisateur, donc dès que vous ecrivez du JavaScript il va automatiquement etre executer par le navigateur.
Tout en sachant que tout les navigateurs n'utilisent pas le meme moteur Javascript donc on peut avoir des petites differentes entre  Chrom,Firefox,safari,Opera,... et en plus de ça suivant la version qui est utiliser on peut avoir plus ou moins de fonctionnalités qui vont etre supporter.

## Execution du javaScript

On execute le javascript dans une balise `<script></script>` à l'intérieur ou en lient un fichier grace à son attribut src càd `<script src="LeCheminVersLeFichierJSAcharger"></script>`.
Cette balise `<script src="LeCheminVersLeFichierJSAcharger"></script>` il faut le mettre dans l'en-tete de votre page avec un attribut `defer` et cela pour de raison de performance càd `<script src="LeCheminVersLeFichierJSAcharger" defer></script>` et cela pour dire charge le Javascript dès que tu as le temps par contre contre n'execute le code que lorsque l'on est à la fin du chargement de la page.
On peut ajouter d'autres attribut à cette balise `<script src="LeCheminVersLeFichierJSAcharger"></script>` comme:

- async : Qui permet de dire "Charge le Javascript de manière asynchrone par contre dès que le javascript est charger, tu arrete de parser la page et tu commence à l'executer", si on fait ça on a aucune certitude sur le moment où est executer le fichier javascript, cet attribut est souvent utile si vous avez des fichiers de suivies que vous voulez executer le plus tot possible.
- type="module" : cela veut dire que votre javascript va supporter le type de module et vous pourrier utiliser les import à l'interieur, par defaut quelque chose qui est en type "module" va fonctionner comme en defer, càd que ce javascript ne sera executer que lorsque la page sera completement charger et parser.

## Interaction avec l'objet Global et La manipulation du DOM

En javascript coté navigateur l'objet `this`, fait référence à l'objet global `window`, sur cet objet on peut optenir des informations comme par exemple l'URL en faisant `window.location` qui est un objet contenant des informations sur L'URL.
Depuis window on peut aussi acceder à des fonction comme:

- `alert`
- `prompt`
- `confirm`
- `setTimeout`
- `setInterval`
- `parseInt`
- `parseFloat`
- `fetch`
- `...`
Donc toutes les variables que vous pouvez executer de manière global, elle sont disponible dans `window` car toutes les variables qui sont globale vont etre mise sur `window`, on peut s'en servir pour faire passer des fonction d'un script à une autre, par exemple si on fait `window.testVar ="On fait juste un test";` et que donc la variable `testVar` sera disponible globalement dans tous les scrips

## Conseil et Astuces

Lorsque vous ecrivez du javascript coté navigateur penser toujours à charger votre fichier sous forme de module, c'est beaucoup plus naturel et ça a un comportement beaucoup plus prévisible.
