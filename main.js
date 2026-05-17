const fs = require('fs').promises;

async function contarArquivos(pasta) {
  try {
    const arquivos = await fs.readdir(pasta);
    console.log(`Total de itens (arquivos e pastas): ${arquivos.length}`);
  } catch (err) {
    console.error('Erro ao ler a pasta:', err);
  }
}

contarArquivos('./exercicios');
