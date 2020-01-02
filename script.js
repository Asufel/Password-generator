// Generowanie kodu 
document.querySelector(".passGenerator__btn").addEventListener("click", function () {

    const SMALL_LETTERS = "abcdefghijklmnoprstuwxyz";
    const BIG_LETTERS = "ABCDEFGHIJKLMNOPRSTUWXXYZ";
    const NUMBERS = "0123456789";
    const SPECIAL_SIGNS = "@#$^&*()!ΘΓΔΦ∑•ΨΩαβγδεζηθικλμνξο∞";
    const ROW_SPAN = document.createElement("div");
    ROW_SPAN.classList.add("passList__row");
    const SPAN_PASS = document.createElement("span");
    SPAN_PASS.classList.add("row__pass");
    const SPAN_MARK = document.createElement("span");
    SPAN_MARK.classList.add("row__mark");
    const PASS_INPUT = document.querySelector(".parameter__passLength");
    const CodeLength = PASS_INPUT.value;

    let MARKS = "";

    const smallLettersCheckbox = document.getElementById("smallLetters");
    const bigLettersCheckbox = document.getElementById("bigLetters");
    const numbersCheckbox = document.getElementById("numbers");
    const specialSignsCheckbox = document.getElementById("specialSigns");


    if (smallLettersCheckbox.checked) {
        MARKS += SMALL_LETTERS
    }
    if (bigLettersCheckbox.checked) {
        MARKS += BIG_LETTERS
    }
    if (numbersCheckbox.checked) {
        MARKS += NUMBERS
    }
    if (specialSignsCheckbox.checked) {
        MARKS += SPECIAL_SIGNS
    }


    for (let i = 0; i < CodeLength; i++) {
        const index = Math.floor(Math.random() * MARKS.length);
        SPAN_PASS.textContent += MARKS[index];
    }


    if (CodeLength === "" || CodeLength <= 0 || MARKS === "") return

    if (CodeLength <= 5) {
        SPAN_MARK.style.backgroundColor = "darkred";
        SPAN_MARK.textContent = "Słabe"
    } else if (CodeLength >= 6 && CodeLength <= 7) {
        SPAN_MARK.style.backgroundColor = "orange";
        SPAN_MARK.textContent = "Średnie"
    } else if ((CodeLength >= 8 && smallLettersCheckbox.checked && bigLettersCheckbox.checked && numbersCheckbox.checked) || (CodeLength >= 8 && specialSignsCheckbox.checked && bigLettersCheckbox.checked && numbersCheckbox.checked) || (CodeLength >= 8 && smallLettersCheckbox.checked && specialSignsCheckbox.checked && numbersCheckbox.checked) || (CodeLength >= 8 && smallLettersCheckbox.checked && bigLettersCheckbox.checked && specialSignsCheckbox.checked)) {
        SPAN_MARK.style.backgroundColor = "darkgreen";
        SPAN_MARK.textContent = "Mocne"
    } else if ((CodeLength >= 8 && smallLettersCheckbox.checked && bigLettersCheckbox.checked) || (CodeLength >= 8 && bigLettersCheckbox.checked && numbersCheckbox.checked) || (CodeLength >= 8 && smallLettersCheckbox.checked && numbersCheckbox.checked) || (CodeLength >= 8 && bigLettersCheckbox.checked && CodeLength <= 11) || (CodeLength >= 8 && smallLettersCheckbox.checked && CodeLength <= 11) || (CodeLength >= 8 && numbersCheckbox.checked && CodeLength <= 11) || (CodeLength >= 8 && specialSignsCheckbox.checked && CodeLength <= 11)) {
        SPAN_MARK.style.backgroundColor = "orange";
        SPAN_MARK.textContent = "Średnie"
    }

    if ((CodeLength >= 12 && smallLettersCheckbox.checked) || (CodeLength >= 12 && bigLettersCheckbox.checked) || (CodeLength >= 12 && numbersCheckbox.checked) || (CodeLength >= 12 && specialSignsCheckbox.checked)) {
        SPAN_MARK.style.backgroundColor = "orange";
        SPAN_MARK.textContent = "Średnie"
    }
    if ((CodeLength >= 12 && smallLettersCheckbox.checked && bigLettersCheckbox.checked) || (CodeLength >= 12 && bigLettersCheckbox.checked && numbersCheckbox.checked) || (CodeLength >= 12 && numbersCheckbox.checked && smallLettersCheckbox.checked) || (CodeLength >= 12 && specialSignsCheckbox.checked && bigLettersCheckbox.checked) || (CodeLength >= 12 && smallLettersCheckbox.checked && specialSignsCheckbox.checked) || (CodeLength >= 12 && specialSignsCheckbox.checked && numbersCheckbox.checked)) {
        SPAN_MARK.style.backgroundColor = "darkgreen";
        SPAN_MARK.textContent = "Mocne"
    }


    document.querySelector(".passList").appendChild(ROW_SPAN);
    ROW_SPAN.appendChild(SPAN_PASS);
    ROW_SPAN.appendChild(SPAN_MARK);
    PASS_INPUT.value = "";

});

