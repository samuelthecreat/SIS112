namespace Mi_primer_consola_en_C_;

class Program
{
    static void Main(string[] args)
    {
        //primer metodo, mostrar un hola mundo
        //HelloWorld()

        //segundo metodo, mostrar la edad ingresada por el usuario
        Obtainage();

        //tercer metodo, calcular año de nacimiento
        AgeCalculation();
}

public static void Obtainage()
    {
        Console.WriteLine("Introduce your age");
        string? ageInput = Console.ReadLine();
        if(string.IsNullOrEmpty(ageInput))
        {
            Console.WriteLine("introduce a value");
        }
        else
        {
            int ageinteger = Int32.Parse(ageInput);
            Console.WriteLine("Your age is: " + ageinteger);
        }

    }
    
    public static void AgeCalculation()
    {
        Console.WriteLine ("introduce the year you were born");
        string? boryearInput = Console.ReadLine();
        if (string.IsNullOrEmpty(boryearInput))
        {
            Console.WriteLine("Introduce a correct value");
        }
            else
        {
            int Bornyear = Int32.Parse(boryearInput);
            Console.WriteLine("Your age is: " + (2024 - Bornyear));
        }
        
    }
}