using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection.Emit;
using System.Web;
using System.Web.Mvc;
using ngNinja.Web.Models;

namespace ngNinja.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetCandidateData()
        {
            List<Candidate> people = new List<Candidate>{
                       new Candidate{candidate_id = 1, first_name = "scott", last_name = "Gurthie", middle_initial = "AA", email = "h@aa.com", expected_salary = 15000},
                       new Candidate{candidate_id = 2, first_name = "billBB", last_name = "GatesBB", middle_initial = "BB", email = "Bb@aa.com", expected_salary = 25000},
                       new Candidate{candidate_id = 3, first_name = "billCC", last_name = "GatesCC", middle_initial = "CC", email = "cc@aa.com", expected_salary = 35000},
                       new Candidate{candidate_id = 4, first_name = "billDD", last_name = "GatesDD", middle_initial = "dd", email = "dd@aa.com", expected_salary = 45000},
                       new Candidate{candidate_id = 5, first_name = "billEE", last_name = "GatesEE", middle_initial = "EE", email = "ee@aa.com", expected_salary = 55000},
                       new Candidate{candidate_id = 6, first_name = "billFF", last_name = "GatesFF", middle_initial = "FF", email = "ff@aa.com", expected_salary = 65000},
                       new Candidate{candidate_id = 7, first_name = "billGG", last_name = "GatesGG", middle_initial = "GG", email = "gg@aa.com", expected_salary = 75000},
                       new Candidate{candidate_id = 8, first_name = "billHH", last_name = "GatesHH", middle_initial = "BHH", email = "hh@aa.com", expected_salary = 85000},
                       new Candidate{candidate_id = 9, first_name = "billII", last_name = "GatesII", middle_initial = "II", email = "ii@aa.com", expected_salary = 95000},
                       new Candidate{candidate_id = 10, first_name = "billKK", last_name = "GatesKK", middle_initial = "KK", email = "kk@aa.com", expected_salary = 105000}
                   };
            return Json(people, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetSecondaryCandidateData()
        {
            List<Candidate> people = new List<Candidate>{
                       new Candidate{candidate_id = 11, first_name = "John", last_name = "Zack", middle_initial = "AA", email = "jj@aa.com", expected_salary = 85000},
                       new Candidate{candidate_id = 22, first_name = "Jack", last_name = "Craig", middle_initial = "BB", email = "cc@aa.com", expected_salary = 95000}
                   };
            return Json(people, JsonRequestBehavior.AllowGet);
        }
    }
}
