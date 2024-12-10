<?php
require_once "Controller.php";
require_once "Repository/OrderitemRepository.php";



// This class inherits the jsonResponse method  and the $cnx propertye from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class OrderitemController extends Controller {

    private OrderitemRepository $orderitems;

    public function __construct(){
        $this->orderitems = new OrderitemRepository();
    }

    protected function processGetRequest(HttpRequest $request) {

        if ($request->getParam("amout") == "mounthly") {
            $p = $this->orderitems->findMonthlyAmount();
            return $p==null ? false :  $p;
        }
        else {
            $p = $this->orderitems->findPopularProduct();
            return $p==null ? false :  $p;

        }

        // // $orderitem_status = $request->getParam("orderitem_status");
        // $p = $this->orderitems->findPopularProduct();
        // return $p==null ? false :  $p;

    }

   
}

?>