select.admin-autocomplete {
    width: 20em;
}

.select2-container--admin-autocomplete.select2-container {
    min-height: 30px;
}

.select2-container--admin-autocomplete .select2-selection--single,
.select2-container--admin-autocomplete .select2-selection--multiple {
    min-height: 30px;
    padding: 0;
}

.select2-container--admin-autocomplete.select2-container--focus .select2-selection,
.select2-container--admin-autocomplete.select2-container--open .select2-selection {
    border-color: var(--body-quiet-color);
    min-height: 30px;
}

.select2-container--admin-autocomplete.select2-container--focus .select2-selection.select2-selection--single,
.select2-container--admin-autocomplete.select2-container--open .select2-selection.select2-selection--single {
    padding: 0;
}

.select2-container--admin-autocomplete.select2-container--focus .select2-selection.select2-selection--multiple,
.select2-container--admin-autocomplete.select2-container--open .select2-selection.select2-selection--multiple {
    padding: 0;
}

.select2-container--admin-autocomplete .select2-selection--single {
    background-color: var(--body-bg);
    border: 1px solid var(--border-color);
    border-radius: 4px;
}

.select2-container--admin-autocomplete .select2-selection--single .select2-selection__rendered {
    color: var(--body-fg);
    line-height: 30px;
}

.select2-container--admin-autocomplete .select2-selection--single .select2-selection__clear {
    cursor: pointer;
    float: right;
    font-weight: bold;
}

.select2-container--admin-autocomplete .select2-selection--single .select2-selection__placeholder {
    color: var(--body-quiet-color);
}

.select2-container--admin-autocomplete .select2-selection--single .select2-selection__arrow {
    height: 26px;
    position: absolute;
    top: 1px;
    right: 1px;
    width: 20px;
}

.select2-container--admin-autocomplete .select2-selection--single .select2-selection__arrow b {
    border-color: #888 transparent transparent transparent;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    height: 0;
    left: 50%;
    margin-left: -4px;
    margin-top: -2px;
    position: absolute;
    top: 50%;
    width: 0;
}

.select2-container--admin-autocomplete[dir="rtl"] .select2-selection--single .select2-selection__clear {
    float: left;
}

.select2-container--admin-autocomplete[dir="rtl"] .select2-selection--single .select2-selection__arrow {
    left: 1px;
    right: auto;
}

.select2-container--admin-autocomplete.select2-container--disabled .select2-selection--single {
    background-color: var(--darkened-bg);
    cursor: default;
}

.select2-container--admin-autocomplete.select2-container--disabled .select2-selection--single .select2-selection__clear {
    display: none;
}

.select2-container--admin-autocomplete.select2-container--open .select2-selection--single .select2-selection__arrow b {
    border-color: transparent transparent #888 transparent;
    border-width: 0 4px 5px 4px;
}

.select2-container--admin-autocomplete .select2-selection--multiple {
    background-color: var(--body-bg);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    cursor: text;
}

.select2-container--admin-autocomplete .select2-selection--multiple .select2-selection__rendered {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0 10px 5px 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.select2-container--admin-autocomplete .select2-selection--multiple .select2-selection__rendered li {
    list-style: none;
}

.select2-container--admin-autocomplete .select2-selection--multiple .select2-selection__placeholder {
    color: var(--body-quiet-color);
    margin-top: 5px;
    float: left;
}

.select2-container--admin-autocomplete .select2-selection--multiple .select2-selection__clear {
    cursor: pointer;
    float: right;
    font-weight: bold;
    margin: 5px;
    position: absolute;
    right: 0;
}

.select2-container--admin-autocomplete .select2-selection--multiple .select2-selection__choice {
    background-color: var(--darkened-bg);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    cursor: default;
    float: left;
    margin-right: 5px;
    margin-top: 5px;
    padding: 0 5px;
}

.select2-container--admin-autocomplete .select2-selection--multiple .select2-selection__choice__remove {
    color: var(--body-quiet-color);
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    margin-right: 2px;
}

.select2-container--admin-autocomplete .select2-selection--multiple .select2-selection__choice__remove:hover {
    color: var(--body-fg);
}

.select2-container--admin-autocomplete[dir="rtl"] .select2-selection--multiple .select2-selection__choice, .select2-container--admin-autocomplete[dir="rtl"] .select2-selection--multiple .select2-selection__placeholder, .select2-container--admin-autocomplete[dir="rtl"] .select2-selection--multiple .select2-search--inline {
    float: right;
}

.select2-container--admin-autocomplete[dir="rtl"] .select2-selection--multiple .select2-selection__choice {
    margin-left: 5px;
    margin-right: auto;
}

.select2-container--admin-autocomplete[dir="rtl"] .select2-selection--multiple .select2-selection__choice__remove {
    margin-left: 2px;
    margin-right: auto;
}

.select2-container--admin-autocomplete.select2-container--focus .select2-selection--multiple {
    border: solid var(--body-quiet-color) 1px;
    outline: 0;
}

.select2-container--admin-autocomplete.select2-container--disabled .select2-selection--multiple {
    background-color: var(--darkened-bg);
    cursor: default;
}

.select2-container--admin-autocomplete.select2-container--disabled .select2-selection__choice__remove {
    display: none;
}

.select2-container--admin-autocomplete.select2-container--open.select2-container--above .select2-selection--single, .select2-container--admin-autocomplete.select2-container--open.select2-container--above .select2-selection--multiple {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.select2-container--admin-autocomplete.select2-container--open.select2-container--below .select2-selection--single, .select2-container--admin-autocomplete.select2-container--open.select2-container--below .select2-selection--multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.select2-container--admin-autocomplete .select2-search--dropdown {
    background: var(--darkened-bg);
}

.select2-container--admin-autocomplete .select2-search--dropdown .select2-search__field {
    background: var(--body-bg);
    color: var(--body-fg);
    border: 1px solid var(--border-color);
    border-radius: 4px;
}

.select2-container--admin-autocomplete .select2-search--inline .select2-search__field {
    background: transparent;
    color: var(--body-fg);
    border: none;
    outline: 0;
    box-shadow: none;
    -webkit-appearance: textfield;
}

.select2-container--admin-autocomplete .select2-results > .select2-results__options {
    max-height: 200px;
    overflow-y: auto;
    color: var(--body-fg);
    background: var(--body-bg);
}

.select2-container--admin-autocomplete .select2-results__option[role=group] {
    padding: 0;
}

.select2-container--admin-autocomplete .select2-results__option[aria-disabled=true] {
    color: var(--body-quiet-color);
}

.select2-container--admin-autocomplete .select2-results__option[aria-selected=true] {
    background-color: var(--selected-bg);
    color: var(--body-fg);
}

.select2-container--admin-autocomplete .select2-results__option .select2-results__option {
    padding-left: 1em;
}

.select2-container--admin-autocomplete .select2-results__option .select2-results__option .select2-results__group {
    padding-left: 0;
}

.select2-container--admin-autocomplete .select2-results__option .select2-results__option .select2-results__option {
    margin-left: -1em;
    padding-left: 2em;
}

.select2-container--admin-autocomplete .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
    margin-left: -2em;
    padding-left: 3em;
}

.select2-container--admin-autocomplete .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
    margin-left: -3em;
    padding-left: 4em;
}

.select2-container--admin-autocomplete .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
    margin-left: -4em;
    padding-left: 5em;
}

.select2-container--admin-autocomplete .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
    margin-left: -5em;
    padding-left: 6em;
}

.select2-container--admin-autocomplete .select2-results__option--highlighted[aria-selected] {
    background-color: var(--primary);
    color: var(--primary-fg);
}

.select2-container--admin-autocomplete .select2-results__group {
    cursor: default;
    display: block;
    padding: 6px;
}