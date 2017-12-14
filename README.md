### Маленький dribbble ;)

*Disclaimer*
*Данное приложение было выполнено в качестве тестового задания, для одной из классных отечественных компаний*

[Demo-here](http://ld.allgoll.me/)

## Usage
Данное приложение использует create-react-app для скаффолдинга, и продакшен билда. Наверно вы знаете как сним работать... но если нет то...

1. Клоним репозиторий
```
git clone https://github.com/BetelgeuZzZe/little-dribbble.git
```
2. Переходим в папку с приложением
```
cd little-dribbble
```
3. Устанавливаем зависимости
```
yarn  # <- if you are yarn user (fill better with yarn ofc)
npm i # <- if you are npm user  (fill you... like an npm user)
```
4. Запускаем Билд (используем create-react-app build без изменений)
```
yarn run build # <- yarn user...
npm run build # <- ordinary npm user...
```
5. Следуем инструкциям на экране. Вам предложат поставить serve и выполнить:
```
serve -s build
```

6. Для работы в Dev режиме после пункта 3 просто пишем
```
yarn start
```
*P.S*
* В ветке мастер:
*Стили написанны на less но в репозиторий, я поместил их уже странспиленными, никаких действий для их транспиляции не требуется.
less не был добавлен в Webpack в качестве лоадера, так как не хотелось эджектить скаффолд*

* В ветке css-modules: 
*Стили сделаны в виде css-modules вебак настроен на production\development билд с поддержкой less + css-modules + typescript*

* В ветке redux:
*Добавлена версия с использованием redux react-redux redux-thunk*

## Используемые технологии
1. Typescript
2. React
3. flux (master branch) | redux, react-redux, redux-thunk (redux branch)
4. less
