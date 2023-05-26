'use strict';
(globalThis['webpackChunksilk_strapi'] = globalThis['webpackChunksilk_strapi'] || []).push([
  [3948],
  {
    /***/ 7611: /***/ (module) => {
      module.exports = JSON.parse(
        '{"attribute.boolean":"Typ logiczny","attribute.boolean.description":"Tak lub nie, 1 lub 0, true lub false","attribute.component":"Komponent","attribute.component.description":"Grupa pól do powtarzania lub ponownego używania","attribute.date":"Data","attribute.date.description":"Wybór daty z godzinami, minutami i sekundami","attribute.datetime":"Data i godzina","attribute.dynamiczone":"Strefa dynamiczna","attribute.dynamiczone.description":"Dynamicznie wybierz komponent podczas edycji treści","attribute.email":"Email","attribute.email.description":"Pole email ze sprawdzaniem poprawności","attribute.enumeration":"Wyliczenie","attribute.enumeration.description":"Lista wartości do jednokrotnego wyboru","attribute.json":"JSON","attribute.json.description":"Dane w formacie JSON","attribute.media":"Media","attribute.media.description":"Pliki takie jak obrazki, filmy, itp.","attribute.null":" ","attribute.number":"Liczba","attribute.number.description":"Liczby (całkowita, zmiennoprzecinkowa, dziesiętna)","attribute.password":"Hasło","attribute.password.description":"Pole hasła z szyfrowaniem","attribute.relation":"Relacja","attribute.relation.description":"Odnośnik do innego modelu","attribute.richtext":"Tekst sformatowany","attribute.richtext.description":"Edytor tekstu z możliwością formatowania","attribute.text":"Tekst","attribute.text.description":"Krótki lub długi tekst jak tytuł lub opis","attribute.time":"Czas","attribute.timestamp":"Znacznik czasu","attribute.uid":"UID","attribute.uid.description":"Unikalny identyfikator","button.attributes.add.another":"Dodaj kolejne pole","button.component.add":"Dodaj komponent","button.component.create":"Nowy komponent","button.model.create":"Nowa kolekcja","button.single-types.create":"Nowy pojedynczy typ","component.repeatable":"(powtarzalne)","components.SelectComponents.displayed-value":"{number, plural, =0 {# } one {# } other {# }} wybrano","components.componentSelect.no-component-available":"Dodałeś już wszystkie swoje komponenty","components.componentSelect.no-component-available.with-search":"Brak elementów pasujących do twojego wyszukiwania","components.componentSelect.value-component":"{number} wybrany komponent (wpisz, aby wyszukać komponent)","components.componentSelect.value-components":"{number} wybranych komponentów","configurations":"Ustawienia","contentType.apiId-plural.description":"API ID w liczbie mnogiej","contentType.apiId-plural.label":"API ID (liczba mnoga)","contentType.apiId-singular.description":"UID jest używane do generowania ścieżek API i tabel/kolekcji w bazie danych","contentType.apiId-singular.label":"API ID (liczba pojedyncza)","contentType.collectionName.description":"Przydatne, gdy nazwa typu zawartości i nazwa tabeli różnią się","contentType.collectionName.label":"Nazwa kolekcji","contentType.displayName.label":"Nazwa","contentType.draftAndPublish.description":"Napisz szkic każdego wpisu przed publikacją","contentType.draftAndPublish.label":"System szkicu/publikacji","contentType.kind.change.warning":"Właśnie zmieniłeś rodzaj typu treści: API zostanie zresetowane (ścieżki, kontrolery i usługi zostaną nadpisane).","error.attributeName.reserved-name":"Ta nazwa nie może być używana w tym typie treści, ponieważ może uszkodzić inne funkcje","error.contentType.pluralName-used":"Ta wartość nie może być taka sama jak pojedyncza","error.contentType.singularName-used":"Ta wartość nie może być taka sama jak mnoga","error.contentTypeName.reserved-name":"Ta nazwa nie może być używana w tym typie treści, ponieważ może uszkodzić inne funkcje","error.validation.enum-duplicate":"Zduplikowane wartości nie są dozwolone","error.validation.enum-empty-string":"Puste pola nie są dozwolone","error.validation.enum-number":"Wartość nie może zaczynać się liczbą","error.validation.minSupMax":"Nie może być wyższy","error.validation.positive":"Musi być liczbą dodatnią","error.validation.regex":"Regex jest niepoprawny","error.validation.relation.targetAttribute-taken":"Ta nazwa już istnieje","form.attribute.component.option.add":"Dodaj komponent","form.attribute.component.option.create":"Utwórz nowy komponent","form.attribute.component.option.create.description":"Komponent jest współużytkowany przez typy i komponenty, będzie dostępny wszędzie.","form.attribute.component.option.repeatable":"Powtarzalny komponent","form.attribute.component.option.repeatable.description":"Najlepsze dla wielu wystąpień (tablicy) np. składników, metatagów itp.","form.attribute.component.option.reuse-existing":"Użyj istniejącego komponentu","form.attribute.component.option.reuse-existing.description":"Ponownie użyj utworzonego już komponentu, aby zachować spójność danych między typami treści.","form.attribute.component.option.single":"Pojedynczy komponent","form.attribute.component.option.single.description":"Najlepsze do grupowania pól takich jak adres, główne informacje itp.","form.attribute.item.customColumnName":"Własne nazwy tabel","form.attribute.item.customColumnName.description":"Jest to przydatne do zmiany nazwy tabel bazy danych w bardziej wszechstronnym formacie odpowiedzi API","form.attribute.item.date.type.date":"data (np: 01/01/{currentYear})","form.attribute.item.date.type.datetime":"data i czas (np: 01/01/{currentYear} 00:00 AM)","form.attribute.item.date.type.time":"czas (np: 00:00 AM)","form.attribute.item.defineRelation.fieldName":"Nazwa pola","form.attribute.item.enumeration.graphql":"Nadpisanie nazwy dla GraphQL","form.attribute.item.enumeration.graphql.description":"Pozwalaj na nadpisanie domyślnie wygenerowanej nazwy dla GraphQL.","form.attribute.item.enumeration.placeholder":"Przykład:\\nrano\\npołudnie\\nwieczór","form.attribute.item.enumeration.rules":"Wartości (każda w osobnej linii)","form.attribute.item.maximum":"Maksymalna wartość","form.attribute.item.maximumLength":"Maksymalna długość","form.attribute.item.minimum":"Minimalna wartość","form.attribute.item.minimumLength":"Minimalna długość","form.attribute.item.number.type":"Format liczby","form.attribute.item.number.type.biginteger":"duża liczba całkowita (np. 123456789)","form.attribute.item.number.type.decimal":"dziesiętna (np: 2.22)","form.attribute.item.number.type.float":"zmiennoprzecinkowa (np: 3.33333333)","form.attribute.item.number.type.integer":"całkowita (np: 10)","form.attribute.item.privateField":"Pole prywatne","form.attribute.item.privateField.description":"To pole nie pojawi się w odpowiedzi API","form.attribute.item.requiredField":"Wymagany","form.attribute.item.requiredField.description":"Nie będziesz w stanie stworzyć wpisu jeżeli atrybut będzie pusty","form.attribute.item.text.regex":"RegExp","form.attribute.item.text.regex.description":"Wyrażenie regularne","form.attribute.item.uniqueField":"Pole unikalne","form.attribute.item.uniqueField.description":"Nie będziesz w stanie stworzyć wpisu jeżeli będzie istniał element z taką samą zawartością","form.attribute.media.allowed-types":"Wybierz dozwolone media","form.attribute.media.allowed-types.option-files":"Pliki","form.attribute.media.allowed-types.option-images":"Obrazki","form.attribute.media.allowed-types.option-videos":"Filmy","form.attribute.media.option.multiple":"Wiele mediów","form.attribute.media.option.multiple.description":"Najlepsze dla slajderów, karuzeli lub pobierania wielu plików","form.attribute.media.option.single":"Pojedyncze media","form.attribute.media.option.single.description":"Najlepsze dla awatara, zdjęcia profilowego lub okładki","form.attribute.settings.default":"Domyślna wartość","form.attribute.text.option.long-text":"Długi tekst","form.attribute.text.option.long-text.description":"Najlepszy dla opisów, biografii. Dokładne wyszukiwanie jest wyłączone.","form.attribute.text.option.short-text":"Krótki tekst","form.attribute.text.option.short-text.description":"Najlepszy dla tytułów, nazw, linków (URL). Umożliwia także dokładne wyszukiwanie dla pola.","form.button.add-components-to-dynamiczone":"Dodaj komponenty do strefy","form.button.add-field":"Dodaj kolejne pole","form.button.add-first-field-to-created-component":"Dodaj pierwsze pole do komponentu","form.button.add.field.to.collectionType":"Dodaj kolejne pole","form.button.add.field.to.component":"Dodaj kolejne pole","form.button.add.field.to.contentType":"Dodaj kolejne pole","form.button.add.field.to.singleType":"Dodaj kolejne pole","form.button.cancel":"Anuluj","form.button.collection-type.description":"Najlepsze rozwiązanie dla wielu wystąpień typu artykuły, produkty, komentarze itd.","form.button.collection-type.name":"Kolekcja","form.button.configure-component":"Skonfiguruj komponent","form.button.configure-view":"Skonfiguruj widok","form.button.select-component":"Wybierz komponent","form.button.single-type.description":"Najlepsze rozwiązanie dla pojedynczych wystąpień typu strona główna, strona o nas itd","form.button.single-type.name":"Pojedynczy typ","from":"z","listView.headerLayout.description":"Stwórz strukturę danych dla twoich treści","menu.section.components.name":"Komponenty","menu.section.models.name":"Kolekcje","menu.section.single-types.name":"Pojedyncze typy","modalForm.attribute.form.base.name.description":"Spacja nie jest dozwolona dla nazwy","modalForm.attribute.form.base.name.placeholder":"np. slug, seoUrl, canonicalUrl","modalForm.attribute.target-field":"Dołączone pole","modalForm.attributes.select-component":"Wybierz komponent","modalForm.attributes.select-components":"Wybierz komponenty","modalForm.collectionType.header-create":"Nowa kolekcja","modalForm.component.header-create":"Nowy komponent","modalForm.components.create-component.category.label":"Wybierz kategorię lub wprowadź nazwę, aby utworzyć nową","modalForm.components.icon.label":"Ikona","modalForm.editCategory.base.name.description":"Spacja nie jest dozwolona dla nazwy kategorii","modalForm.header-edit":"Edytuj {name}","modalForm.header.categories":"Kategorie","modalForm.singleType.header-create":"Nowy pojedynczy typ","modalForm.sub-header.addComponentToDynamicZone":"Dodaj nowy komponent do strefy dynamicznej","modalForm.sub-header.attribute.create":"Dodaj nowe pole {type}","modalForm.sub-header.attribute.create.step":"Dodaj nowy komponent ({step}/2)","modalForm.sub-header.attribute.edit":"Edytuj {name}","modalForm.sub-header.chooseAttribute.collectionType":"Wybierz pole dla kolekcji","modalForm.sub-header.chooseAttribute.component":"Wybierz pole dla komponentu","modalForm.sub-header.chooseAttribute.singleType":"Wybierz pole dla pojedynczego typu","modelPage.attribute.relation-polymorphic":"Relacja","modelPage.attribute.relationWith":"Relacja z","notification.error.dynamiczone-min.validation":"Co najmniej jeden komponent jest wymagany","notification.info.autoreaload-disable":"Funkcja autoReload jest wymagana by użyć tego pluginu. Uruchom serwer używając `strapi develop`","notification.info.creating.notSaved":"Zapisz swoją pracę przed utworzeniem nowego typu treści lub komponentu","plugin.description.long":"Modeluj strukturę danych swojego API. Twórz atrybuty i relacje w minutę. Pliki są automatycznie tworzone i aktualizowane w twoim projekcie.","plugin.description.short":"Modeluj strukturę danych swojego API.","plugin.name":"Kreator typu treści","popUpForm.navContainer.advanced":"Zaawansowane","popUpForm.navContainer.base":"Podstawowe","popUpWarning.bodyMessage.cancel-modifications":"Czy na pewno chcesz anulować swoje zmiany?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Czy na pewno chcesz anulować swoje zmiany? Niektóre komponenty zostały utworzone lub zmodyfikowane ...","popUpWarning.bodyMessage.category.delete":"Czy na pewno chcesz usunąć tę kategorię? Wszystkie komponenty również zostaną usunięte.","popUpWarning.bodyMessage.component.delete":"Czy na pewno chcesz usunąć ten komponent?","popUpWarning.bodyMessage.contentType.delete":"Czy na pewno chcesz usunąć tę kolekcję?","popUpWarning.draft-publish.button.confirm":"Tak, wyłącz","popUpWarning.draft-publish.message":"Jeśli wyłączysz system szkicu/publikacji, wszystkie twoje szkice zostaną usunięte.","popUpWarning.draft-publish.second-message":"Czy na pewno chcesz to wyłączyć?","prompt.unsaved":"Jesteś pewny, że chcesz wyjść? Wszystkie twoje zmiany zostaną utracone.","relation.attributeName.placeholder":"Np: autor, kategoria, tag","relation.manyToMany":"zawiera i należy do wielu","relation.manyToOne":"zawiera wiele","relation.manyWay":"ma wiele","relation.oneToMany":"należy do wielu","relation.oneToOne":"zawiera i należy do","relation.oneWay":"zawiera","table.button.no-fields":"Dodaj nowe pole","table.content.create-first-content-type":"Stwórz pierwszy typ treści","table.content.no-fields.collection-type":"Dodaj pierwsze pole do tego typu treści","table.content.no-fields.component":"Dodaj pierwsze pole do tego komponentu"}'
      );

      /***/
    },
  },
]);
