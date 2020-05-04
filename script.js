jQuery('document').ready(function() {
    jQuery('body').append('<a href="https://www.google.ru/">Перейти в Google</a>'); // добавляем элемент (ссылку) на страницу
    jQuery('p, hr').remove(); // удаляем элемент со страницы
    // клонируем элементы
    //var p_clon;
    //p_clon = jQuery('p').clone();
    //jQuery('body').append(p_clon);
    //jQuery('button').on('click', function(){ // на случай работы с кнопкой
    jQuery('input').on('keyup', function(){ // на случай работы с ввода
        var value1, value2;
        value1 = jQuery('#val1').val();
        value2 = jQuery('#val2').val();
        value1 = parseInt(value1); // переводим из строки в число
        value2 = parseInt(value2); // переводим из строки в число 
        value3 = value1 + value2;
        //alert('Значение 1: ' + value1 + '\n' + 'Значение 2: ' + value2);
        //alert(value3);
        jQuery('#result').html(value3); // если html заменить на val, то результат можно отобразить в объекте инпут

        // ПРОЧИЕ ВОЗМОЖНОСТИ:

        //var test1;
        //test1 = prompt('Введите имя: '); // выведет диалоговое окно и присвоит переменной то, что туда введете
        //jQuery('#result').html(test1); // отобразит введенное в строку результата
        //test1 = confirm('Удалить все со страницы?'); // окно с запросом подтверждения

        //var a1 = 555;
        //if(a1 > 0) {
        //    alert('Больше ноля!');
        //} else {
        //    alert('Меньше ноля!');
        //}

    });
});