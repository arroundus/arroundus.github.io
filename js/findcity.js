// Замените на свой API-ключ
var token = "59484b46f6373395b074ab71d19934f23b588e9b";
var $city = $("#city");

// удаляет районы города и всё с 65 уровня
function removeNonCity(suggestions) {
  return suggestions.filter(function(suggestion) {
    return suggestion.data.fias_level !== "5" && suggestion.data.fias_level !== "65";
  });
}

function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

function cityToString(address) {
  return join([
      join([address.city_type, address.city], " "),
      join([address.settlement_type, address.settlement], " ")
    ]);
}

// Ограничиваем область поиска от города до населенного пункта
$city.suggestions({
  token: token,
  type: "ADDRESS",
  hint: false,
  geoLocation: false,
  bounds: "city-settlement",
  onSuggestionsFetch: removeNonCity
});
