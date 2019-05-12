$(function () {
    $.get("data/products.json", function (data) {
        var count = 0;
        for (count = 0; count <= data.length; count++) {
            var number = 0;
            number += count;
        }
        $("#products").append(number);
    });
    $.get("data/customers.json", function (data) {
        var count = 0;
        for (count = 0; count <= data.length; count++) {
            var number = 0;
            number += count;
        }
        $("#customers").append(number);
    });
    $.get("data/suppliers.json", function (data) {
        var count = 0;
        for (count = 0; count <= data.length; count++) {
            var number = 0;
            number += count;
        }
        $("#suppliers").append(number);
    });
    $.get("data/orders.json", function (data) {
        var count = 0;
        for (count = 0; count <= data.length; count++) {
            var number = 0;
            number += count;
        }
        $("#orders").append(number);

    });

});