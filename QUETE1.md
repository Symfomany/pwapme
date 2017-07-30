Guide de construction d'une quête : https://github.com/WildCodeSchool/quetes

# *Vue Instance*


#### Pré-requis

* ES6 Orienté Objet: Classe, Objet, Propriétés, Méthodes
* Installation de Vue-devtools (Chrome) 

## Objectifs

* Apprendre à créer une instance VueJS
* Comprendre le concept de MVVM (Virtual DOM)
* Apprendre les propriétés d'une instance VueJS


## Lecture

Introduction: https://vuejs.org/v2/guide/index.html
Introduction (FR): https://fr.vuejs.org/v2/guide/
Documentation (FR) : https://fr.vuejs.org/v2/guide/instance.html
Cookbook: https://vuejs.org/v2/cookbook/adding-instance-properties.html
API: https://vuejs.org/v2/api/
Cours Vidéos: https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5942238?start=0
Le constructeur d'une instance: https://fr.vuejs.org/v2/guide/instance.html#Constructeur
Propriétés et méthodes: https://fr.vuejs.org/v2/guide/instance.html#Proprietes-et-methodes
Le cycle de vie d'une instance: https://fr.vuejs.org/v2/guide/instance.html#Les-hooks-de-cycle-de-vie-d’une-instance

### Compte
id: julien.boyer@wildcodeschool.fr
mdp:  jecode4lyon

## Vidéos à visualiser

Let's Create our First VueJS Application: https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940922?start=0
Extending the VueJS Application: https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940924?start=0
Understanding VueJS Templates: https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940952?start=0
Accessing Data in the Vue Instance: https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940962?start=0
Binding to Attributes; https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940966?start=0


## Parcours


###  *Instance et Attribut*

Créer un fichier index.html

```
  <div id="app">
    <input type="text" v-on:input="changeTitle">
    <p>{{ title }}</p>
  </div>
```

Ajouter le CDN  pour la librairie VueJS 2 suivant:
https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js


* Créer un fichier index.js et le lier au fichier HTML
* Créer une instance VueJS lier à l'id app
* Créer un attribut title avec 'Hello Wilders!'
* Créer une méthode qui permet de changer le titre selon la saisie dans l'input


###  *Concept MVVM*


* Créer un objet personnage avec comme attribut le nom et le prénom
* Lier votre instance VueJS à cet objet personnage
* Comparer en console l'objet personnage à celui de l'instance VueJS
* Modifier le nom de l'objet personnage
* Afficher en console la propriété personnages de l'instance VueJS


###  *Correction de la Quete*

Correction: https://jsbin.com/gewatiyuqu/3/edit?js,console,output

