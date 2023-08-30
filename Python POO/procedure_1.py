# Configuración de la clase de vendedor
class Seller(User):
    from shopping import orderling_list
 
    def __init__(self, name, shop, address=None):
        super().__init__(name, address)
        self.shop = shop
        self.orders = []
 
  # compendio
 
# Crear una clase de comprador
class Customer(User):
    total = 0
    from shopping import  _grocery_list, _shopping_list
 
    def __init__(self, name, address):
        super().__init__(name, address)
        self.basket = []
 
  # compendio
