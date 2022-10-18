# PREZENTACJA PROJEKTU W PLIKU PrezentacjaANGULAR.pdf

### `TEMAT APLIKACJI:`

Aplikacja do zarządzania seansami w kinie

### `WYMAGANIA:`

- dodawanie/usuwanie/edycja seansów
- dodawanie/usuwanie/edycja filmów
- dodawanie/usuwanie/edycja sal kinowych
- rezerwacja biletów na seanse
- wyświetlanie aktualnie trwających seansów
- wyświetlanie tabeli/wykresu popularności filmów na podstawie liczby sprzedanych biletów

# Uruchamianie aplikacji:

1. Po pobraniu repozytorium i otwarciu w VS Code, otwieramy dodatkowy terminal.
2. W jednym (nr 1) przechodzimy do folderu projekt_angular (cd projekt_angular), natomiast w drugim (nr 2) do projekt_react\Server(cd projekt_angular\Server).

3. W terminalu nr 1 wywołujemy najpierw polecenie:

### `npm install` w celu utworzenia folderu node_modules potrzebnego do uruchomienia aplikacji.

4. Najpierw w terminalu nr 2 (najpierw włączamy serwer JSON) wywołujemy polecenie:

### `npm start`

5. Następnie w terminalu nr 1 wywołujemy polecenie (należy pamiętać o parametrze -o, ponieważ wtedy polecenie od razu otworzy projekt w przeglądarce):

### `ng serve -o`

Po włączeniu:

- [http://localhost:4200](http://localhost:4200) <- aplikacja włączy się na tym porcie
- [http://localhost:3007](http://localhost:3007) <- serwer włączy się na tym porcie
