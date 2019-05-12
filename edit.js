$(function () {
    $.get("data/customer.json", function (data) {

        var Search = data;
        var customers = Search[document.cookie];
        var id = customers.customerID

        $("#id").val(id);

        var name = customers.companyName
        $("#name").val(name);

        var contactname = customers.contactName
        $("#Cname").val(contactname);

        var contacttitle = customers.contactTitle
        $("#title").val(contacttitle);

        var address = customers.address.street + customers.address.city + customers.address.region
            + customers.address.postalCode + customers.address.country + customers.address.phone;
        $("#address").val(address);


    });

});