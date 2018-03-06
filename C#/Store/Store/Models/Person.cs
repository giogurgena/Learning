using System;

namespace Store.Models
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PersonalNumber { get; set; }
        public static DateTime Now { get; }
        public double DateOfBirth { get; internal set; }
    }
}
