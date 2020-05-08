using Microsoft.AspNetCore.Html;
using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace WebApp.Extensions
{
    public static class HtmlHelperExtensions
    {
        private static JsonSerializerSettings _settings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
        };

        public static HtmlString ToReactState<T>(this IHtmlHelper htmlHelper, T state)
        {
            var result = JsonConvert.SerializeObject(state, _settings);

            return new HtmlString(result);
        }

        /// <summary>
        /// Map the application state to a react representation. This is useful when the redux
        /// state has different mapping to the application state.
        /// </summary>
        /// <typeparam name="TState">The application state</typeparam>
        /// <typeparam name="TReactState">The react state</typeparam>
        /// <param name="htmlHelper">The htmlhelper instance</param>
        /// <param name="state">The application state</param>
        /// <param name="getOptions">Map the application state to the react state</param>
        /// <returns>A string of the react state</returns>
        public static HtmlString ToReactState<TState, TReactState>(this IHtmlHelper htmlHelper, TState state, Func<TState, TReactState> getOptions)
        {
            var reactState = getOptions(state);

            var result = JsonConvert.SerializeObject(reactState, _settings);

            return new HtmlString(result);
        }
    }
}
