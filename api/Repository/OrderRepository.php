<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Order.php");


/**
 *  Classe OrderRepository
 * 
 *  Cette classe représente le "stock" de Order.
 *  Toutes les opérations sur les Order doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class OrderRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function findStatus(){
        $requete = $this->cnx->prepare("select order_status, COUNT(*) as count FROM Orders GROUP BY order_status");
        $requete->execute();

        $result = $requete->fetchAll(PDO::FETCH_ASSOC);

        
        return $result;

    }
    public function find($empty){

    }
    public function findAll(){

    }
    public function save($empty){

    }
    public function delete($empty){

    }
    public function update($empty){

    }
}



   
   

