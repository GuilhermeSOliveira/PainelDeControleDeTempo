let diario = document.querySelector('.perfilDiario').onclick = function () {
    document.querySelector('#tempoTrabalho').innerHTML = "32hrs"
    document.querySelector('#tempoPlay').innerHTML = "10hrs"
    document.querySelector('#tempoEstudando').innerHTML = "4hrs"
    document.querySelector('#tempoExercicios').innerHTML = "4hrs"
    document.querySelector('#tempoSocial').innerHTML = "5hrs"
    document.querySelector('#tempoCuidadosPessoais').innerHTML = "2hrs"
};
let semanal = document.querySelector('.perfilSemanal').onclick = function () {
    document.querySelector('#tempoTrabalho').innerHTML = "36hrs"
    document.querySelector('#tempoPlay').innerHTML = "9hrs"
    document.querySelector('#tempoEstudando').innerHTML = "5hrs"
    document.querySelector('#tempoExercicios').innerHTML = "3hrs"
    document.querySelector('#tempoSocial').innerHTML = "4hrs"
    document.querySelector('#tempoCuidadosPessoais').innerHTML = "1hrs"
};
let mensal = document.querySelector('.perfilMensal').onclick = function () {
    document.querySelector('#tempoTrabalho').innerHTML = "120hrs"
    document.querySelector('#tempoPlay').innerHTML = "35hrs"
    document.querySelector('#tempoEstudando').innerHTML = "20hrs"
    document.querySelector('#tempoExercicios').innerHTML = "15hrs"
    document.querySelector('#tempoSocial').innerHTML = "14hrs"
    document.querySelector('#tempoCuidadosPessoais').innerHTML = "5hrs"
};