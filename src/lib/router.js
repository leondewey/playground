export function Router(views) {
  return RouterRaw.bind(null, views)
}

export function RouterRaw(views, emit) {
  let view

  return {
    state: {
      router: match(`${location.pathname}${location.search}`)
    },
    actions: {
      router: {
        match: function(state, actions, data) {
          return {
            router: match(data)
          }
        },
        go: function(state, actions, data) {
          history.pushState({}, "", data)
          actions.router.match(data)
        }
      }
    },
    events: {
      loaded: function(state, actions) {
        match()
        addEventListener("popstate", match)

        function match() {
          actions.router.match(`${location.pathname}${location.search}`)
        }
      },
      render: function() {
        return view
      }
    }
  }

  function match(data) {
    const pathname = data.split('?')[0]
    const query = data.split('?')[1]

    for (var match, params = {}, i = 0, len = views.length; i < len; i++) {
      var route = views[i][0]
      var keys = []

      if (!match) {
        pathname.replace(
          RegExp(
            route === "*"
              ? "." + route
              : "^" +
                  route
                    .replace(/\//g, "\\/")
                    .replace(/:([\w]+)/g, function(_, key) {
                      keys.push(key)
                      return "([-\\.%\\w]+)"
                    }) +
                  "/?$",
            "g"
          ),
          function() {
            for (var j = 1; j < arguments.length - 2; ) {
              params[keys.shift()] = arguments[j++]
            }
            match = route
            view = views[i][1]
          }
        )
      }
    }

    const output = {
      match: match,
      params: { ...params, ...getParams(query) }
    }
    emit("route", output)
    emit(match, output)
    return output
  }
}

const getParams = query => {
  if (!query) return { }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=')
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''
      return params;
    }, { })
}
