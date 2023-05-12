# Rapport d'optimisation du projet ScrollyTelling

[Rapport du 11 mai 2023, 21:53:06](https://pagespeed.web.dev/analysis/https-morelwilliam-github-io-william-morel-scrollytelling/ncf7uk7emg?form_factor=mobile)

## Problème #1
### Dimensionnez correctement les images
Pour économiser des données aux clients et du temps de chargement, les images doivent être amélioré pour être appropriées au site web. Comme les images non pas un style défini, la taille de la ressource est de 1 458,0 Kib,ce qui est très haut. Cela cause un ralentissement, du site web, de 5,70 secondes ce qui est vraiment déconseillé pour l'exérience des utilisateurs
### Action concrète pour résoudre le problème
Pour contrer ceci, je dois ajouter des informations dans le style qui est précis à chacune de mes images. Par exemple, pour le podium, je suis conseillé de mettre un ce code là " style="translate: none; rotate: none; scale: none;"> " pour diminuir la taille de la ressource de l'image au minimum. Voici un tableau avec les images que je dois apporter des changements de style et le code que je dois changer pour améliorer ceux-ci.
	| Image | Code pour le style | Taille de la ressource | Économie après changement
| ----------- | ----------- |  ----------- |  ----------- |
| planche | style="bottom: 13.9397%; | 150,2 kib | 147,2 kib
| podium |  style="translate: none; rotate: none; scale: none;"> | 105,0 kib | 96,9 kib
| personnage-1 | style="bottom: 34.8493%;"> | 104,8 kib | 92,1 kib
| personnage-6 | style="bottom: 34.8493%;"> | 94,0 kib | 82,6 kib
| cabane-arbre | style="bottom: 34.8493%;"> | 138,2 kib | 75,9 kib
| berceau | style="translate: none; rotate: none; scale: none;"> | 88,9 kib | 75,6 kib
| arbre | alt="arbre"> | 136,0 | 74,7 kib
| gateau | style="translate: none; rotate: none; scale: none; transform: translate(0%, 0px);"> | 75,7 kib | 66,6 kib
| personnage-4 | alt="4" | 74,7 kib | 65,7 kib
| personnage-5 | alt="5" | 80,5 kib | 63,6 kib
| camion |  style="translate: none; rotate: none; scale: none;"> | 96,0 kib | 52,7 kib
| piscine | style="translate: none; rotate: none; scale: none;"> | 55,5 kib | 48,8 kib
| personnage-3 |  alt="3"> | 59,6 kib | 40,8 kib
| barbecue | style="translate: none; rotate: none; scale: none; transform: translate(0%, 0px);"> | 36,3 kib | 34,2 kib
| nuage-01 |" style="translate: none; rotate: none; scale: none;"> | 25,3 kib | 25,2 kib
| fleche | alt="fleche"> | 15,8 kib | 13,4 kib
| nuage-02 |  style="translate: none; rotate: none; scale: none;"> | 15,8 kib | 13,4 kib
| nuage-03 | style="translate: none; rotate: none; scale: none;"> | 13,3 kib | 12,7 kib
### Résultat
Après l'optimisation de mes styles et de mes images, les performances sont passées de 92 à 98 donc c'est une grosse amélioration.
## Problème #2
### Aucune balise  *meta name="viewport"* n'est configuré

### Action concrète pour résoudre le problème
Pour résoudre le problème, je vais rajouter dans mon *head* la balise meta, cela va permettre définir la largeur de la page et la hauteur et elle va aussi permettre que le site s'adapte à tout appareil.

### Résultat
Après l'ajout d'une balise *meta description*, le SEO est passé de 80 à 100 donc c'est une très grosse amélioration et aussi ça rajoute une description au site web donc c'est très bénéfique.
## Problème #3
### Évitez d'énormes charges utiles de réseau
### Action concrète pour résoudre le problème
Certaine de mes images, surtout les spritesheet, sont très lourdes donc elles augmentent grandement les charges utiles de réseau. Certaines images qui sont en webp, n'ont pas été assez compressé donc je vais utiliser une compression de taille de *Kio* pour réduire grandement leur poid et donc évitez les charges inutiles de réseau.
### Résultat
Avant l'optimisation de mes images en Webp ou en png compressé, la taille totale des kio était de 24 644 Kio. Toutefois, après l'optimisation de mes images en Webp ou en png compressé, la taille totale des kio est de 14 211 Kio donc c'est une très grosse amélioration.
## Rapport projet ScrollyTelling après l'optimisation

[Rapport du 12 mai 2023, 12:25:38](https://pagespeed.web.dev/analysis/https-morelwilliam-github-io-william-morel-scrollytelling/5iddn1zyd5?form_factor=desktop)
