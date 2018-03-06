using Store.Models;
using System;
using System.Globalization;

namespace Store
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.FirstName = "Gio";
            person.LastName = "Gurgenashvili";
            person.PersonalNumber = "45465464";
            person.DateOfBirth = 07-12-1991;
            Console.WriteLine(person.PersonalNumber);

            Person client = new Person();
            client.FirstName = "Nika";
            person.LastName = "Kvijinadze";
            person.PersonalNumber = "49465432";
            person.DateOfBirth = 06-03-1992;
            Console.WriteLine(client.PersonalNumber);
        }

    }
}
