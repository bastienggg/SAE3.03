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
    public function findMonthlyAmount(){
        $requete = $this->cnx->prepare("select DATE_FORMAT(o.order_date, '%Y-%m') as month, SUM(oi.quantity * p.price) as total_amount
        FROM OrderItems oi
        JOIN Products p ON oi.product_id = p.id
        JOIN Orders o ON oi.order_id = o.id
        GROUP BY month
        ORDER BY month DESC
        LIMIT 6");

        $requete->execute();
        $result = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $result;

    }

    
    public function findMonthlyAmountCat(){
        $requete = $this->cnx->prepare("select DATE_FORMAT(o.order_date, '%Y-%m') as month, p.category as category, SUM(oi.quantity * p.price) as total_amount
        FROM OrderItems oi
        JOIN Products p ON oi.product_id = p.id
        JOIN Orders o ON oi.order_id = o.id
        WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        GROUP BY month, category
        ORDER BY month DESC, category");
        

        $requete->execute();
        $result = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function findOrderByCustomer($id){
        $requete = $this->cnx->prepare("SELECT p.category, p.product_name, SUM(oi.quantity) as total_quantity
            FROM Customers c
            JOIN Orders o ON c.id = o.customer_id
            JOIN OrderItems oi ON o.id = oi.order_id
            JOIN Products p ON oi.product_id = p.id
            WHERE c.id = :id
            GROUP BY p.category, p.product_name
            ORDER BY p.category, p.product_name");
        
        
        $requete->bindParam(":id", $id);
        $requete->execute();
        $result = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function findAllCustomer(){
        $requete = $this->cnx->prepare("select id, email FROM Customers");
        
        
        $requete->execute();
        $result = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function findAllMounth(){
        $requete = $this->cnx->prepare("select DATE_FORMAT(order_date, '%Y-%m') as month FROM Orders GROUP BY month ORDER BY month DESC");
        $requete->execute();
        $result = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function findAllCountry($mouth){
        $requete = $this->cnx->prepare("select c.country, COUNT(o.id) as total_orders
        FROM Orders o
        JOIN Customers c ON o.customer_id = c.id
        WHERE DATE_FORMAT(o.order_date, '%Y-%m') = :month
        GROUP BY c.country
        ORDER BY total_orders DESC
        ");
        $requete->bindParam(":month", $mouth);
        $requete->execute();
        $result = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $result;

    }

    public function heatmap(){
        $requete = $this->cnx->prepare("select DATE_FORMAT(o.order_date, '%Y-%m') as month, c.country, COUNT(o.id) as total_orders
        FROM Orders o
        JOIN Customers c ON o.customer_id = c.id
        GROUP BY month, c.country
        ORDER BY month DESC, c.country");
        
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



   
   

