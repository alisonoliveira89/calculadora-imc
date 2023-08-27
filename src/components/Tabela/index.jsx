import styles from "./Tabela.module.css";

const Tabela = ({ resultado }) => {

  return (
    <div>
      <table>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
        <tr className={resultado < 18.5 ? styles.table_selected_bad : ""}>
          <td>Abaixo do peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr className={resultado >= 18.5 && resultado <= 24.9 ? styles.table_selected_good : "" }>
          <td>Peso normal</td>
          <td>18,5 - 24,9</td>
        </tr>
        <tr className={resultado >= 25 && resultado <= 29.9 ? styles.table_selected_bad : "" }>
          <td>Sobrepeso</td>
          <td>25 - 29,9</td>
        </tr>
        <tr className={resultado >= 30 && resultado <= 34.9 ? styles.table_selected_bad : "" }>             
          <td>Obesidade grau I</td>
          <td>30 - 34,9</td>
        </tr>
        <tr className={resultado >= 35 && resultado <= 39.9 ? styles.table_selected_bad : "" }>
          <td>Obesidade grau II</td>
          <td>35 - 39,9</td>
        </tr>
        <tr className={resultado >= 40 ? styles.table_selected_bad : ""}>
          <td>Obesidade grau III</td>
          <td>Maior ou igual a 40</td>
        </tr>
      </table>
    </div>
  );
};

export default Tabela;
