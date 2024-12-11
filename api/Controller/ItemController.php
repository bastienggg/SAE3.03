<?php
require_once "Controller.php";
require_once "Repository/ItemRepository.php";



// This class inherits the jsonResponse method  and the $cnx propertye from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class ItemController extends Controller {

    private ItemRepository $items;

    public function __construct(){
        $this->items = new ItemRepository();
    }

    protected function processGetRequest(HttpRequest $request) {

        if ($request->getParam("popular") == "all") {
            $p = $this->items->findPopularProduct();
            return $p==null ? false :  $p;
        }
        elseif ($request->getParam("stock") == "weak") {
            $p = $this->items->findWeakStockProduct();
            return $p==null ? false :  $p;
        }
        elseif ($request->getParam("id") != null) {
            $p = $this->items->findItemById($request->getParam("id"));
            return $p==null ? false :  $p;
        }
        else {
            $p = $this->items->findPopularProduct();
            return $p==null ? false :  $p;
        }

        // // $orderitem_status = $request->getParam("orderitem_status");
        // $p = $this->orderitems->findPopularProduct();
        // return $p==null ? false :  $p;

    }

   
}

?>