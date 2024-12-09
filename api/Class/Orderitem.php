<?php
/**
 *  Class Orderitem
 * 
 *  Représente une commande avec uniquement 3 propriétés (id, name, category)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Orderitem doivent être converti en JSON. Voire la méthode pour plus de détails.
 */
class Orderitem implements JsonSerializable {
    private int $id; // id du 

    public function __construct(int $id){
        $this->id = $id;
    }

    /**
     * Get the value of id
     */ 
    public function getId(): int
    {
        return $this->id;
    }

    /**
     *  Define how to convert/serialize a Orderitem to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a Orderitem
     * 
     *  En français : On sait qu'on aura besoin de convertir des Orderitem en JSON pour les
     *  envoyer au client. La fonction json_encode sait comment convertir en JSON des données
     *  de type élémentaire. A savoir : des chaînes de caractères, des nombres, des booléens
     *  des tableaux ou des objets standards (stdClass). 
     *  Mais json_encode ne saura pas convertir un objet de type Orderitem dont les propriétés sont
     *  privées de surcroit. Sauf si on définit la méthode JsonSerialize qui doit retourner une
     *  représentation d'un Orderitem dans un format que json_encode sait convertir (ici un tableau associatif)
     * 
     *  Le fait que Orderitem "implémente" l'interface JsonSerializable oblige à définir la méthode
     *  JsonSerialize et permet à json_encode de savoir comment convertir un Orderitem en JSON.
     * 
     *  Parenthèse sur les "interfaces" : Une interface est une classe (abstraite en générale) qui
     *  regroupe un ensemble de méthodes. On dit que "une classe implémente une interface" au lieu de dire 
     *  que "une classe hérite d'une autre" uniquement parce qu'il n'y a pas de propriétés dans une "classe interface".
     * 
     *  Voir aussi : https://www.php.net/manual/en/class.jsonserializable.php
     *  
     */
    public function JsonSerialize(): mixed{
        return ["id" => $this->id, "product_id" => $this->product_id, "product_name"=> $this->product_name,];
    }

    /**
     * Get the value of name
     */ 
    public function getProductName()
    {
        return $this->product_name;
    }

}