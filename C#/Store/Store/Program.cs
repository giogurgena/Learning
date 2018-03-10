using Store.Models;
using System;

namespace Store
{
    class Program
    {
        static void Main(string[] args)
        {
            //Person person = new Person();
            //person.FirstName = "Gio";
            //person.LastName = "Gurgenashvili";
            //person.PersonalNumber = "45465464";
            //person.DateOfBirth = new DateTime(1991, 12, 07);
            //Console.WriteLine(person.DateOfBirth);

            //Person client = new Person();
            //client.FirstName = "Nika";
            //client.LastName = "Kvijinadze";
            //client.PersonalNumber = "49465432";
            //client.DateOfBirth = new DateTime(1992, 03, 06);
            //Console.WriteLine(client.DateOfBirth);

            Person person = new Person("Gio", "Gurgenashvili", "45465464", new DateTime(1991, 12, 07));
            Person client = new Person("Nika", "Kvijinadze", "49465432", new DateTime(1992, 03, 06));

            if(person.LastName == "Gurgenashvili")
            {
                Console.WriteLine(person.FirstName);
            }
        }
    }
}
