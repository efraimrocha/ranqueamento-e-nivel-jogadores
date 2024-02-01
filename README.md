# Desafio de Lógica de Programação - Calculadora de Rank

## Objetivo:
O objetivo deste desafio é criar uma função em JavaScript que receba a quantidade de vitórias e derrotas de um jogador e calcule seu saldo de ranqueadas com base na fórmula (vitórias - derrotas). Além disso, a função deve determinar o nível do jogador com base em faixas predefinidas de vitórias e exibir uma mensagem de saída informando o saldo e o nível alcançado.

## Estrutura do Código:
O código consiste em três funções principais:

### 1. Função rank(vitorias, derrotas):
Esta função calcula o saldo de ranqueadas do jogador, chamando a função calculaNivel(saldo) para determinar o nível do jogador com base no saldo calculado. Em seguida, ela chama a função mensagem(vitorias, nivel) para exibir a mensagem de saída.

### 2. Função calculaNivel(saldo):
Esta função recebe o saldo de ranqueadas como parâmetro e retorna o nível do jogador com base em faixas predefinidas de vitórias. As faixas e os níveis associados são os seguintes:

### 3. Função mensagem(vitorias, nivel):
Esta função recebe a quantidade de vitórias e o nível do jogador como parâmetros e exibe uma mensagem formatada no console indicando o saldo de vitórias e o nível alcançado.

## Exemplo de Uso:
javascript
```
rank(450, 200);
```

## Saída Esperada:
Ao executar o exemplo acima, a função deverá exibir a seguinte mensagem no console:
```
O Herói tem um saldo de vitórias de 450 está no nível de Ouro
```

Sinta-se à vontade para utilizar e adaptar este código conforme necessário para cumprir os requisitos do desafio de lógica de programação proposto pela DIO.
