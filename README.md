# loumi-slider

INTEGRATION SLIDER REACT SLIDE SHOW-----


FICHIER CODE SOURCE SUR LA BRANCHE "SOURCE"

APPLI DEPLOYE   https://raffortville.github.io/loumi-slider/

UNE SLIDE COMPOSE DE 3 ELEMENTS ( CARDS ) SE REPETE 2 FOIS.

* ARCHITECTURE :

APP crée à partir du "boiler" CREATE REACT APP.
Le CSS est organisé selon la logique du scope " local" et "global".

Les feuilles de styles se trouvent dans le dossier "styles.

Ainsi, les règles globales se trouvent dans une feuille de style "theme.scss" se trouvant à la racine.

Les variables et mixins sont regroupées dans le fichier "variables.scss".

Les class locales sont séparées des unes des autres selon leur appartenance aux composants. Ces feuilles de styes sont regroupées dans le dossier "style".

Une fonction supplémentaire a été ajouté selon la présence de colocataire ou non grâce à un "Rendu conditionnel" sur un composant et sur une class css.

* FRACTIONNEMENT DES COMPOSANTS :

La logique de "réutilisation" des composants prime avec l'utilisation de "functions pures".

* EXCEPTION a été faite pour le composant "CARD" qui peut être d'avatantage fractionné en composants ( card-tite, card-list, card-footer ).
Cette logique pourra être poussé selon l'usage d'autres card avec un design autres.

* IMPORT DES DONNEES :

Un compromis a été choisi entre une codage " en dure " et dynamique. Les données ( objets,arrays ) propres aux locataires et slides sont regroupé dans un fichier sépararé js.
(data/locataires). Ils sont importés à partir des modules import dans les composants pour les peupler. 

La même logique a été choisie pour les fields et titres du template.


* HELPERS :

Des fonctions pures dans le fichier ( helpers/utils.js ) pour s'assurer des rendus corrects ( format money, premiere lettre en capital ).
Pour l'exercice, des fonctions retournant des dates et horaires aléatoires ont également été implantés.
