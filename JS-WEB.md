# Le JavaScript coté navigateur

Ici on parle de JavaScript coté Client, il faut savoir que les navigateurs Web comme Chrome ou safari, FireFox,Opera,... possède en eux un moteur JavaScript, donc vous n'avez pas besoin de faire installer quelque chose à l'utilisateur, donc dès que vous ecrivez du JavaScript il va automatiquement etre executer par le navigateur.
Tout en sachant que tout les navigateurs n'utilisent pas le meme moteur Javascript donc on peut avoir des petites differentes entre  Chrom,Firefox,safari,Opera,... et en plus de ça suivant la version qui est utiliser on peut avoir plus ou moins de fonctionnalités qui vont etre supporter.

## Execution du javaScript

On execute le javascript dans une balise `<script></script>` à l'intérieur ou en lient un fichier grace à son attribut src càd `<script src="LeCheminVersLeFichierJSAcharger"></script>`.
Cette balise `<script src="LeCheminVersLeFichierJSAcharger"></script>` il faut le mettre dans l'en-tete de votre page avec un attribut `defer` et cela pour de raison de performance càd `<script src="LeCheminVersLeFichierJSAcharger" defer></script>` et cela pour dire charge le Javascript dès que tu as le temps par contre contre n'execute le code que lorsque l'on est à la fin du chargement de la page.
On peut ajouter d'autres attribut à cette balise `<script src="LeCheminVersLeFichierJSAcharger"></script>` comme:

- async : Qui permet de dire "Charge le Javascript de manière asynchrone par contre dès que le javascript est charger, tu arrete de parser la page et tu commence à l'executer", si on fait ça on a aucune certitude sur le moment où est executer le fichier javascript, cet attribut est souvent utile si vous avez des fichiers de suivies que vous voulez executer le plus tot possible.
- type="module" : cela veut dire que votre javascript va supporter le type de module et vous pourrier utiliser les import à l'interieur, par defaut quelque chose qui est en type "module" va fonctionner comme en defer, càd que ce javascript ne sera executer que lorsque la page sera completement charger et parser.
