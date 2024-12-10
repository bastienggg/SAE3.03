<?php
require_once "Controller.php";
require_once "Repository/OrderRepository.php";



// This class inherits the jsonResponse method  and the $cnx propertye from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class OrderController extends Controller {

    private OrderRepository $orders;

    public function __construct(){
        $this->orders = new OrderRepository();
    }

    protected function processGetRequest(HttpRequest $request) {

        // $order_status = $request->getParam("order_status");
        $p = $this->orders->findStatus();
        return $p==null ? false :  $p;

    }

   
}

?>