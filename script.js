let A = 0, B = 0;

function toggleInput(input) {
    if (input === "A") {
        A = A ? 0 : 1;
        document.getElementById("inputA").setAttribute("class", A ? "on" : "off");
    } else {
        B = B ? 0 : 1;
        document.getElementById("inputB").setAttribute("class", B ? "on" : "off");
    }
    updateOutputs();
}

function updateOutputs() {
    let outputs = {
        AND: A && B,
        OR: A || B,
        XOR: A !== B,
        NAND: !(A && B),
        NOR: !(A || B),
        XNOR: A === B
    };

    for (let gate in outputs) {
        document.getElementById("output" + gate).setAttribute("class", outputs[gate] ? "on" : "off");
    }

    updateTruthTable();
}

function updateTruthTable() {
    let tableBody = document.getElementById("truthTable");
    tableBody.innerHTML = `
        <tr>
            <td>${A}</td>
            <td>${B}</td>
            <td>${A && B}</td>
            <td>${A || B}</td>
            <td>${A !== B}</td>
            <td>${!(A && B)}</td>
            <td>${!(A || B)}</td>
            <td>${A === B}</td>
        </tr>
    `;
}

updateOutputs(); // Inicializar la tabla de verdad

