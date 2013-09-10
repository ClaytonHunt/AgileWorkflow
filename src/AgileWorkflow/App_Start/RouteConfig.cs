﻿using System.Web.Mvc;
using System.Web.Routing;

namespace AgileWorkflow.App_Start
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default",
                "{controller}/{action}/{id}",
                new { controller = "Jasmine", action = "Run", id = UrlParameter.Optional }
            );
        }
    }
}