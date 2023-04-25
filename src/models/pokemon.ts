export default class Pokemon {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created?: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     hp: number = 99,
     cp: number = 12,
     name: string = 'Entrez le nom de votre pokémon',
     picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/000.png',
     types: Array<string> = ['Normal'],
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.hp = hp;
     this.cp = cp;
     this.name = name;
     this.picture = picture;
     this.types = types;
     this.created = created;
    }
   }