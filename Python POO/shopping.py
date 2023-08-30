def orderling_list(self):
    # Visualizar las listas de pedidos de cada comprador en función de sus compras
    total = 0
    print("=====　Listas de pedidos por cliente({}, {})　=====".format(self.name, self.shop))
    for order in self.orders:
        print(f"Nombre del cliente: {order[0]}, cantidad de dinero: {order[1]}, fecha y hora：{order[2]}")
        total += order[1]

    print(f"--------------importe total：{total}")
    print("====================================")
 
# Los siguientes son métodos privados
def _grocery_list(self, groceries):
    print("------Lista de la compra------")
    for i, grocery in enumerate(groceries):
        print(f"{i}: {grocery.name}, {grocery.price}")
 
def _shopping_list(self, basket):
    print(f"=====　lista de la compra({self.name}/{self.address})　=====")
    for grocery in basket:
        name = grocery[0].name
        price = grocery[0].price
        quantity = grocery[1]
        money = price * quantity
        print(f"nombre comercial (marca): {name}, volumen: {quantity}, cantidad de dinero：{money}")
        self.total += money
    print("----------importe total：{}-------------".format(self.total))
    print("====================================")