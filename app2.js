const suma = (nums, requiredSum) => {
  // Creamos un Set, ya que al utilizar el metodo .has es un poco mas eficiente que utilizar el metodo .includes en un array.
  const numSet = new Set();

  for (const numero of nums) {
    // Calculamos el numero que necesitamos para llegar al numero requerido
    const resto = requiredSum - numero;
    // Verificamos si el resto que necesitamos se encuentra dentro del Set
    if (numSet.has(resto)) {
      return true;
    }
    //Agregamos el elemento numero del array al set
    numSet.add(numero);
  }
  return false;
};

console.log(suma([1, 5, 55, 11, 6], 11));
