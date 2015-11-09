using System.Web;
using System.Web.Optimization;

namespace ngNinja.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Angular")
                .Include("~/Scripts/lib/angular/angular.js")
                .Include("~/Scripts/lib/angular-ui-router/angular-ui-router.js")
                .Include("~/Scripts/lib/angular-resource/angular-resource.js")
                .Include("~/Scripts/lib/angular-ui/ui-bootstrap-tpls.js")
                .Include("~/Scripts/lib/oc-lazy-load/ocLazyLoad.js")
                .Include("~/Scripts/lib/jasmine/jasmine.js"));

            bundles.Add(new ScriptBundle("~/AngularApp")
                .IncludeDirectory("~/Scripts/app/modules", "*.js", true)               
                .Include("~/Scripts/app/appModule.js")
                .Include("~/Scripts/app/appConfig.js")
                .IncludeDirectory("~/Scripts/app/shared", "*.js", true)
               );

            bundles.IgnoreList.Ignore("~/Scripts/app/modules/candidate/js/test/candidate-spec.js", OptimizationMode.WhenDisabled);
            bundles.IgnoreList.Ignore("~/Scripts/app/modules/candidate/js/test/onBoardingApp.candidate.controller-spec.js", OptimizationMode.WhenDisabled);
            bundles.IgnoreList.Ignore("~/Scripts/app/modules/candidate/js/test/onBoardingApp.candidate.services-spec.js", OptimizationMode.WhenDisabled);
            bundles.IgnoreList.Ignore("~/Scripts/app/shared/test/shared-factory-spec.js", OptimizationMode.WhenDisabled);

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}