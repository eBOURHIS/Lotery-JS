var stuff = {
	"commun": [
	//Épées
		{ "number": 0, "nom": "Épée en fer émoussé", "desc": "Une épée dont la lame est émoussée", "effet": "Émoussé : L'arme n'inflige que la moitié de ses dégâts normaux", "classe": "P - P/F" },
		{ "number": 0, "nom": "Épée en argent", "desc": "Une épée en argent de faible qualité", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "P - P/F" },
		{ "number": 0, "nom": "Épée en fer", "desc": "Une épée en acier basique", "effet": "Aucun", "classe": "P - P/F" },
	//Espadons 
		{ "number": 0, "nom": "Espadon en fer brisé", "desc": "Un espadon brisé en deux", "effet": "Brisé : L'arme n'inflige que la moitié de ses dégâts normaux", "classe": "P" },
		{ "number": 0, "nom": "Espadon en argent", "desc": "Un espadon en argent", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "P" },
		{ "number": 0, "nom": "Espadon en acier", "desc": "Un espadon en fer ordinaire", "effet": "Aucun", "classe": "P" },
	//Dagues
		{ "number": 0, "nom": "Dague fêlée", "desc": "Un dague très abîmée", "effet": "Usée : L'arme n'inflige que la moitié de ses dégâts normaux", "classe": "F - F/S" },
		{ "number": 0, "nom": "Dague en argent", "desc": "Une dague en argent de piêtre qualitée", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "F - F/S" },
		{ "number": 0, "nom": "Dague en fer", "desc": "Une dague en fer", "effet": "Aucun", "classe": "F - F/S" },
	//Arcs
		{ "number": 0, "nom": "Arc moisie", "desc": "Un arc dont le bois est moisie", "effet": "Moisie : L'arme a 1 chance sur 3 de se briser en attaquant avec", "classe": "F" },
		{ "number": 0, "nom": "Arc en argent", "desc": "Un arc fait pour tirer des flèches d'argents", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "F" },
		{ "number": 0, "nom": "Arc en bois", "desc": "Un arc simple en bois", "effet": "Aucun", "classe": "F" },
	//Arbalètes
		{ "number": 0, "nom": "Arbalète craquelée moisie", "desc": "Une arbalète dont le bois est fendu", "effet": "Mauvais état : L'arme a 1 chance sur 3 de se briser en attaquant avec", "classe": "P/F" },
		{ "number": 0, "nom": "Arbalète en argent", "desc": "Une arbalète faite pour tirer des carreaux d'argents", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "P/F" },
		{ "number": 0, "nom": "Arc en bois", "desc": "Une arbalète simple en bois", "effet": "Aucun", "classe": "P/F" },
	//Grimoires
		{ "number": 0, "nom": "Grimoire moisie", "desc": "Un grimoire dont les pages ont moisies", "effet": "Mauvais état : 1 chance sur 3 de mal lire les incantations de rater votre prochain sort", "classe": "S" },
		{ "number": 0, "nom": "Grimoire de monstres", "desc": "Un grimoire contenant des incantations contre les monstres", "effet": "Anti-monstres : Dégâts normaux contre les monstres", "classe": "S" },
		{ "number": 0, "nom": "Grimoire basique", "desc": "Un grimoire basique", "effet": "Aucun", "classe": "S" },
	//Bâtons
		{ "number": 0, "nom": "Bâton brisé en bois", "desc": "Un bâton magique au manche cassé", "effet": "Mauvais état : L'arme a 1 chance sur 3 de se briser en attaquant avec", "classe": "P/S" },
		{ "number": 0, "nom": "Bâton en argent", "desc": "Un bâton feuilleté d'argent", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "P/S" },
		{ "number": 0, "nom": "Bâton en bois", "desc": "Un bâton simple en bois", "effet": "Aucun", "classe": "P/S" },
	//Chakrams
		{ "number": 0, "nom": "Chakram en fer rouillé", "desc": "Un Chakram rouillé de très faible qualité", "effet": "Rouillé : L'arme a 1 chance sur 3 de vous blesser de 2pv quand vous attaquer avec", "classe": "P/S" },
		{ "number": 0, "nom": "Chakram en argent", "desc": "Un Chakram feuilleté d'argent", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "P/S" },
		{ "number": 0, "nom": "Chakram en fer", "desc": "Un Chakram simple en fer", "effet": "Aucun", "classe": "P/S" },
	//Lames d'éther
		{ "number": 0, "nom": "Lame d'éther affaiblie", "desc": "L'éther de cette lame semble s'être affaiblie", "effet": "Rouillé : L'arme a 1 chance sur 3 de vous blesser de 2pv quand vous attaquer avec", "classe": "F/S" },
		{ "number": 0, "nom": "Lame d'éther argentée", "desc": "L'éther de cette lame est efficace contre les monstres", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "F/S" },
		{ "number": 0, "nom": "Lame d'éther", "desc": "Une lame d'éther commune", "effet": "Aucun", "classe": "F/S" },
	//Chaines
		{ "number": 0, "nom": "Chaine en fer rouillée", "desc": "Une chaine en fer rouillé capable d'immobilisé une cible", "effet": "Rouillé : L'arme a 1 chance sur 3 de vous blesser de 2pv quand vous attaquer avec", "classe": "P/F/S" },
		{ "number": 0, "nom": "Chaîne d'argent", "desc": "Une chaine en argent capable d'immobilisé un monstre", "effet": "Argent : Peut immobiliser les monstres", "classe": "P/F/S" },
		{ "number": 0, "nom": "Chaine en fer", "desc": "Une chaine en fer commune", "effet": "Aucun", "classe": "P/F/S" },
	//Lames Elfiques
		{ "number": 0, "nom": "Lame Elfique en fer", "desc": "Bien qu'ayant la forme d'une épée elfique, cette lame est sans doute une contrefaçon", "effet": "Contrefaçon : L'arme n'inflige que 1/3 des dégâts normaux", "classe": "F - P/F" },
		{ "number": 0, "nom": "Lame Eflique argentée", "desc": "Une belle lame Elfique en argent", "effet": "Argent elfique : Bonus de dégâts de 1d5 contre les monstres", "classe": "F/S" },
		{ "number": 0, "nom": "Lame Elfique en acier", "desc": "Une lame elfique en acier", "effet": "Aucun", "classe": "F/S" },
	//Faux
		{ "number": 0, "nom": "Faux abîmée en fer", "desc": "Une faux très endomagée et presque inutilisable", "effet": "Mauvais état : L'arme n'inflige que 1/3 des dégâts normaux", "classe": "F - F/S" },
		{ "number": 0, "nom": "Faux en argent", "desc": "Une grande faux en argent", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "F - F/S" },
		{ "number": 0, "nom": "Faux en fer", "desc": "Une faux en fer banale", "effet": "Aucun", "classe": "F - F/S" },
	//Armes de Pugilat
		{ "number": 0, "nom": "Griffes en fer cassé", "desc": "Des griffes faites d'un acier fort rouillé", "effet": "Mauvais état : L'arme a 1 chance sur 3 de se briser en attaquant avec", "classe": "F - F/P" },
		{ "number": 0, "nom": "Griffes en argent", "desc": "Des griffes en argent", "effet": "Argent : Dégâts normaux contre les monstres", "classe": "F - F/P" },
		{ "number": 0, "nom": "Griffes en fer", "desc": "Des griffes en fer classique", "effet": "Aucun", "classe": "F - F/P" },
	//Armures tissu
		{ "number": 0, "nom": "Capuche en haillon", "desc": "Une capuche en tissu miteux", "effet": "Miteux : Armure diminuée de 1", "classe": "S - S/F" },
		{ "number": 0, "nom": "Tunique en haillon", "desc": "Une Tunique en tissu miteux", "effet": "Miteux : Armure diminuée de 1", "classe": "S - S/F" },
		{ "number": 0, "nom": "Pantalon en haillon", "desc": "Un Pantalon en tissu miteux", "effet": "Miteux : Armure diminuée de 1", "classe": "S - S/F" },
		{ "number": 0, "nom": "Chausses en haillon", "desc": "Des Chausses en tissu miteux", "effet": "Miteux : Armure diminuée de 1", "classe": "S - S/F" },

		{ "number": 0, "nom": "Capuche en lin", "desc": "Une capuche en lin", "effet": "Aucun", "classe": "S - S/F" },
		{ "number": 0, "nom": "Tunique en lin", "desc": "Une tunique en lin", "effet": "Aucun", "classe": "S - S/F" },
		{ "number": 0, "nom": "Pantalon en lin", "desc": "Un pantalon en lin", "effet": "Aucun", "classe": "S - S/F" },
		{ "number": 0, "nom": "Chausses en lin", "desc": "Des chausses en lin", "effet": "Aucun", "classe": "S - S/F" },

		{ "number": 0, "nom": "Capuche en lin de qualité", "desc": "Une capuche en lin de qualité", "effet": "Qualité supérieure : Bonus à l'armure de 1", "classe": "S - S/F" },
		{ "number": 0, "nom": "Tunique en lin de qualité", "desc": "Une tunique en lin de qualité", "effet": "Qualité supérieure : Bonus à l'armure de 1", "classe": "S - S/F" },
		{ "number": 0, "nom": "Pantalon en lin de qualité", "desc": "Un pantalon en lin de qualité", "effet": "Qualité supérieure : Bonus à l'armure de 1", "classe": "S - S/F" },
		{ "number": 0, "nom": "Chausses en lin de qualité", "desc": "Des chausses en lin de qualité", "effet": "Qualité supérieure : Bonus à l'armure de 1", "classe": "S - S/F" },
	//Armures cuir
		{ "number": 0, "nom": "Chapeau en cuir percé", "desc": "Une Chapeau en cuir percé", "effet": "Mauvais état : Armure diminuée de 1", "classe": "F - F/S" },
		{ "number": 0, "nom": "Pourpoint en cuir percé", "desc": "Un Pourpoint en cuir percé", "effet": "Mauvais état : Armure diminuée de 1", "classe": "F - F/S" },
		{ "number": 0, "nom": "Guenille en cuir percé", "desc": "Des Guenilles en cuir percé", "effet": "Mauvais état : Armure diminuée de 1", "classe": "F - F/S" },
		{ "number": 0, "nom": "Chaussures en cuir percé", "desc": "Des Chaussures en cuir percé", "effet": "Mauvais état : Armure diminuée de 1", "classe": "F - F/S" },

		{ "number": 0, "nom": "Chapeau en cuir", "desc": "Une Chapeau en cuir", "effet": "Aucun", "classe": "F - F/S" },
		{ "number": 0, "nom": "Pourpoint en cuir", "desc": "Un Pourpoint en cuir", "effet": "Aucun", "classe": "F - F/S" },
		{ "number": 0, "nom": "Guenille en cuir", "desc": "Des Guenilles en cuir", "effet": "Aucun", "classe": "F - F/S" },
		{ "number": 0, "nom": "Chaussures en cuir", "desc": "Des Chaussures en cuir", "effet": "Aucun", "classe": "F - F/S" },

		{ "number": 0, "nom": "Chapeau en cuir de qualité", "desc": "Une Chapeau en cuir de qualité", "effet": "Qualité supérieure : Bonus à l'armure de 1", "classe": "F - F/S" },
		{ "number": 0, "nom": "Pourpoint en cuir de qualité", "desc": "Un Pourpoint en cuir de qualité", "effet": "Qualité supérieure : Bonus à l'armure de 1", "classe": "F - F/S" },
		{ "number": 0, "nom": "Guenille en cuir de qualité", "desc": "Des Guenilles en cuir de qualité", "effet": "Qualité supérieure : Bonus à l'armure de 1", "classe": "F - F/S" },
		{ "number": 0, "nom": "Chaussures en cuir de qualité", "desc": "Des Chaussures en cuir de qualité", "effet": "Qualité supérieure : Bonus à l'armure de 1", "classe": "F - F/S" },],
	//Armures maille






	"peuCommun": [
		{ "number": 0, "nom": "Arc solide", "desc": "Un arc puissant", "effet": "Aucun" },
		{ "number": 0, "nom": "Épée bâtarde", "desc": "Épée bâtarde à double tranchant", "effet": "Double coup : Une fois par attaque, vous avez 15% de chance d'infliger une deuxième fois la moitié des dégâts infligés par le premier coup" },],

	"rare": [
		{ "number": 0, "nom": "Arc à double courbure", "desc": "Un arc de guerre très puissant", "effet": "", "classe": "Aucun" }],

	"epique": [
		{ "number": 0, "nom": "Arc long en os de dragon", "desc": "Un arc ancien taillé dans l'os d'un dragon", "effet": "", "classe": "Aucun" }],

	"legendaire": [
		{ "number": 0, "nom": "Heaume à plumes de la Flamme Blanche", "desc": "Un splendide heaume des Chevaliers de la Flamme Blanche", "effet": "Ensemble-Honneur : Si vous portez 2 pièces d'armure de la Flamme Blanche, vous gagnez un bonus à l'armure de 20%. Ce bonus est doublé si vous avez l'ensemble complet", "classe": "Aucun" },
		{ "number": 0, "nom": "Plastron de la Flamme Blanche", "desc": "Un solide plastron des Chevaliers de la Flamme Blanche", "effet": "Ensemble-Honneur : Si vous portez 2 pièces d'armure de la Flamme Blanche, vous gagnez un bonus à l'armure de 20%. Ce bonus est doublé si vous avez l'ensemble complet", "classe": "Aucun" },
		{ "number": 0, "nom": "Cnémide de la Flamme Blanche", "desc": "Une paire de jambière des Chevaliers de la Flamme Blanche", "effet": "Ensemble-Honneur : Si vous portez 2 pièces d'armure de la Flamme Blanche, vous gagnez un bonus à l'armure de 20%. Ce bonus est doublé si vous avez l'ensemble complet", "classe": "Aucun" },
		{ "number": 0, "nom": "Bottillons de la Flamme Blanche", "desc": "Une paire de bottes en plate des Chevaliers de la Flamme Blanche", "effet": "Ensemble-Honneur : Si vous portez 2 pièces d'armure de la Flamme Blanche, vous gagnez un bonus à l'armure de 20%. Ce bonus est doublé si vous avez l'ensemble complet", "classe": "Aucun" },
		{ "number": 0, "nom": "Barzûl le Fendoir à Gobelins", "desc": "La hache en Onyx du premier des Khazân Nain. Les gobelins la redoute plus que tout autre chose", "effet": "Fléau des profondeurs : Si vous combattez des gobelins avec cette armes, vos dégâts sont multipliés par 2. De plus, vous avez 45% de chance d'effrayer tous les gobelins présents pour 1 tour", "classe": "Aucun" }],

	"mythique": [
		{ "number": 0, "nom": "", "effet": "", "classe": "" }],

};
