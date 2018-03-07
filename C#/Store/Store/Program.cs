using Store.Models;
using System;

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
            person.DateOfBirth = "07-12-1991";
            Console.WriteLine(person.DateOfBirth);

            Person client = new Person();
            client.FirstName = "Nika";
            client.LastName = "Kvijinadze";
            client.PersonalNumber = "49465432";
            client.DateOfBirth = "06-03-1992";
            Console.WriteLine(client.DateOfBirth);
        }

    }
}
