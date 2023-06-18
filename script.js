function kirimData() {
    var email = document.getElementById("email").value
    var suggest = document.getElementById("suggest").value
    var birthdayElement = document.getElementById("birthday");
    var birthdayValue = birthdayElement.value;
    var quantityElement = document.getElementById("quantity");
    var quantity = quantityElement.value;
    var Category = document.querySelector("input[name=peminatan]:checked").value

    alert(
        "Nama : " + email +
        "\nDate : " + birthdayValue +
        "\nQuantity : " + quantity +
        "\nCategory : " + Category +
        "\nSuggestion : " + suggest
    )
}

