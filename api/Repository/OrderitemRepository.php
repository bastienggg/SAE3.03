<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Orderitem.php");


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
class OrderitemRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function findPopularProduct(){
        $requete = $this->cnx->prepare("select p.product_name, SUM(oi.quantity) as total_quantity
        FROM OrderItems oi
        JOIN Products p ON oi.product_id = p.id
        JOIN Orders o ON oi.order_id = o.id
        WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 2 MONTH)
        GROUP BY p.product_name
        ORDER BY total_quantity DESC
        LIMIT 3");
        
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



   
   

