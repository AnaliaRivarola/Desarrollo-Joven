from user import User

class Customer(User):
    from shopping import _shopping_list, _grocery_list
    total = 0

    def __init__(self, name, address):
        super().__init__(name, address)
        self.basket = []

    def shopping(self, groceries):
        import datetime
        # Empezar a comprar.
        self._grocery_list(groceries)
        shopping_end = None
        while shopping_end != "yes":
            # Selección de productos
            print("Seleccione el número de artículo")
            number = int(input())
            # entrada de recuento (por ejemplo, en infografía)
            print("Entrada de cantidad de producto")
            quantity = int(input())
            self.__entry(groceries[number], quantity)
            print("¿Quieres terminar de comprar?？ yes/no")
            shopping_end = input()

        self._shopping_list(self.basket)
        # El @total se calcula en la shopping_list
        order = [self.name, self.total, datetime.datetime.now().strftime("%Y-%m-%d")]
        return order

    # Los siguientes son métodos privados

    def __entry(self, grocery, quantity):
        self.basket.append([grocery, quantity])