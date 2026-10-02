# Ejemplo de Paradigma Orientado a Objetos en Python
class Vehiculo:
      def __init__(self, marca, modelo):
                self.marca = marca
                self.modelo = modelo

      def describir(self):
                return f"Este vehiculo es un {self.marca} modelo {self.modelo}."

  # Creación de un objeto (instancia de la clase)
  mi_auto = Vehiculo("Toyota", "Corolla")
print(mi_auto.describir())
