using System;

namespace Store.Models
{
    public class Person
    {
        public Person(string name, string lastName, string personalNumber, DateTime dateOfBirth)
        {
            FirstName = name;
            LastName = lastName;
            PersonalNumber = personalNumber;
            DateOfBirth = dateOfBirth;
        }

        public string FirstName;
        public string LastName;
        public string PersonalNumber;
        public DateTime DateOfBirth;
    }
}
