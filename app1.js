const sumaNumeros = (nums, requiredSum) => {
  /*   Seleccionamos el primer elemento del array NUMS y lo sumamos al resto de elementos, si no nos da igual al numero requerido, 
  pasamos al segundo elemento para volver a sumarlos con el resto de elementos */

  for (let i = 0; i < nums.length; i++) {
    for (let e = i + 1; e < nums.length; e++) {
      // Agregamos la condicion de que el numero requerido no se haya conseguido sumandose a si mismo
      if (nums[i] + nums[e] == requiredSum && e != i) {
        return true;
      }
    }
  }
  return false;
};

console.log(sumaNumeros([1, 5, 55, 11], 60));
