namespace Mi_primer_consola_en_C_;

class Program
{
    static void Main(string[] args)
    {
        //primer metodo, mostrar un hola mundo
        //HelloWorld()

        //segundo metodo, mostrar la edad ingresada por el usuario
}

public static void ObtenerEdad()
    {
        Console.WriteLine("Introduzca su edad");
        string? edadInput = Console.ReadLine();
        if(string.IsNullOrEmpty(edadInput))
        {
            Console.WriteLine("introduzca un valor");
        }
        else
        {
            int edadinteger = Int32.Parse(edadInput);
            Console.WriteLine("Tu edad es: " + edadinteger);
        }

    }
}