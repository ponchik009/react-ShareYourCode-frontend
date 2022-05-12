# Фронтенд приложения Share Your Code. Инструкция по развёртыванию

## Что это?

Цель данного приложения - создать платформу, участники которой смогут выклыдывать свой код, исполнять его, а также давать оценки.
В данном репозитории представлена фронтенд часть приложения.

## Требования к системе

Linux (тестировалось на Debian), Windows. В случае Windows компиляция работать не будет (т.к. участвует bash-скрипт).

## Требования к ПО (для фронтенда)

1. NodeJS (разработка была на версии 16) - интерпритатор javascript. Ссылка на установку: https://nodejs.org/en/
2. npm - сборщик пакетов javascript (поставляется вместе с NodeJS)

Вроде бы всё.

## Инструкция по сборке

### Клоинрование репозитория
$ git clone https://github.com/ponchik009/react-ShareYourCode-frontend/

### Переход в папку проекта
$ cd react-ShareYourCode-frontend

### Установка пакетов
$ npm install

### Найтрока конфигурации
<p>В корне проекта создаем файл .env</p>
<p>Содержимое файла:</p>
<ul>
  <li>PORT=<порт, на котором будет запускаться приложение (для разрабтки)></li>
  <li>REACT_APP_URL=< url, по которому будет доступно наше приложение (например, https://syc.tucana.org)></li>
  <li>REACT_APP_API_URL=< url до апи (если фронтенд соединяется с беком, то указываем /api)></li>
</ul>

### Сборка статических файлов
$ npm run build

###  Итого
После сборки, в корне проекта будет находиться папка <b>build</b> с собранным проектом
