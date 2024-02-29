function toggleSDGSelection(id) {
    var sdgButton = document.getElementById('sdg' + id);
    sdgButton.classList.toggle('selected-sdg');

    var selectedSDGs = document.getElementById('selectedSDGs');
    var selectedValues = selectedSDGs.value.split(',');

    if (selectedValues.includes(id.toString())) {
        selectedValues = selectedValues.filter(function (value) {
            return value !== id.toString();
        });
    } else {
        selectedValues.push(id.toString());
    }

    selectedSDGs.value = selectedValues.join(',');
}