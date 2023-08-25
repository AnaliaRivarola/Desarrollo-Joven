def input_score_and_comment():
    while True:
        print('Por favor, introduzca una puntuación en una escala de 1 a 5')
        point = input()

        if point.isdecimal():
            point = int(point)
            if 1 <= point <= 5:
                print('Introduzca sus comentarios.')
                comment = input()
                post = f'punto: {point} comentario: {comment}'
                with open("data.txt", 'a') as file_pc:
                    file_pc.write(f'{post}\n')
                break
            else:
                print('Indíquelo en una escala de 1 a 5')
        else:
            print('Introduzca los puntos de valoración como números')

def show_results():
    print('Resultados hasta la fecha.')
    with open("data.txt", "r") as read_file:
        print(read_file.read())

def main():
    while True:
        print('Seleccione el proceso que desea aplicar')
        print('1:Introducir puntos de evaluación y comentarios')
        print('2:Comprueba los resultados hasta ahora.')
        print('3:Terminar.')
        num = input()

        if num.isdecimal():
            num = int(num)

            if num == 1:
                input_score_and_comment()
            elif num == 2:
                show_results()
            elif num == 3:
                print('Terminación.')
                break
            else:
                print('Introduzca un numero del 1 a 3')
        else:
            print('Introduzca un numero del 1 a 3')

if __name__ == "__main__":
    main()

        