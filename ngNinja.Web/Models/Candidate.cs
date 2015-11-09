using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngNinja.Web.Models
{
    public class Candidate
    {
        public int candidate_id { get; set; }
        public string first_name { get; set; }
        public string middle_initial { get; set; }
        public string last_name { get; set; }
        public string email { get; set; }
        public int expected_salary { get; set; }
    }
}