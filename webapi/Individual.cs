namespace webapi
{
    public class Individual
    {
        public int ID { get; set; }
        public string? FirstName { get; set; }
        public string? Surname { get; set; }
        public DateOnly? DateOfBirth { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
