class Cart:
    from item_manager import show_items
    from ownable import set_owner

    def __init__(self, owner):
        self.set_owner(owner)
        self.items = []

    def items_list(self):
        return self.items

    def add(self, item):
        self.items.append(item)

    def total_amount(self):
        price_list = []
        for item in self.items:
            price_list.append(item.price)
        return sum(price_list)

    def check_out(self):
        total_amount = self.total_amount()
        if self.owner.wallet.balance < total_amount:
            print("Saldo insuficiente para realizar el pago.")
            return

        for item in self.items:
            item_owner = item.get_owner()  # Obtener el propietario actual del artículo
            item.set_owner(self.owner)      # Transferir la propiedad al propietario del carrito

            item_price = item.get_price()   # Obtener el precio del artículo
            self.owner.wallet.withdraw(item_price)  # Retirar el precio del monedero del propietario del carrito
            item_owner.wallet.deposit(item_price)   # Depositar el precio en el monedero del propietario anterior

        print("Compra realizada exitosamente.")
        self.items = []  # Limpiar el carrito después de la compra




        