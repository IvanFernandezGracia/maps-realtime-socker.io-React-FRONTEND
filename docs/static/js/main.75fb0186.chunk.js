(this["webpackJsonpmapas-app"] = this["webpackJsonpmapas-app"] || []).push([
  [0],
  {
    37: function (e, t, n) {},
    64: function (e, t) {},
    70: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        o = n(0),
        r = n(29),
        a = n.n(r),
        u = (n(37), n(9)),
        i = n(30),
        s = n.n(i),
        f = Object(o.createContext)(),
        l = function (e) {
          var t = e.children,
            n = (function (e) {
              var t = Object(o.useMemo)(
                  function () {
                    return s.a.connect(e);
                  },
                  [e]
                ),
                n = Object(o.useState)(!1),
                c = Object(u.a)(n, 2),
                r = c[0],
                a = c[1];
              return (
                Object(o.useEffect)(
                  function () {
                    a(t.connected);
                  },
                  [t]
                ),
                Object(o.useEffect)(
                  function () {
                    t.on("connect", function () {
                      return a(!0);
                    });
                  },
                  [t]
                ),
                Object(o.useEffect)(
                  function () {
                    t.on("disconnect", function () {
                      return a(!1);
                    });
                  },
                  [t]
                ),
                { socket: t, online: r }
              );
            })("https://nameless-caverns-53583.herokuapp.com/"),
            r = n.socket,
            a = n.online;
          return Object(c.jsx)(f.Provider, {
            value: { socket: r, online: a },
            children: t,
          });
        },
        b = n(10),
        d = n.n(b),
        j = n(74),
        m = n(73);
      d.a.accessToken =
        "pk.eyJ1IjoiaXZhbmZlcm5hbmRlIiwiYSI6ImNremZ2ZnFvZTNsenEydW5rcm45cjN5eHgifQ.CtM2d0iipXoYXWNJcVD1lg";
      var O = { lng: -122.4725, lat: 37.801, zoom: 13.5 },
        v = function () {
          var e = (function (e) {
              var t = Object(o.useRef)(),
                n = Object(o.useCallback)(function (e) {
                  t.current = e;
                }, []),
                c = Object(o.useRef)({}),
                r = Object(o.useRef)(new m.a()),
                a = Object(o.useRef)(new m.a()),
                i = Object(o.useRef)(),
                s = Object(o.useState)(e),
                f = Object(u.a)(s, 2),
                l = f[0],
                b = f[1],
                O = Object(o.useCallback)(function (e, t) {
                  var n = e.lngLat || e,
                    o = n.lng,
                    u = n.lat,
                    s = new d.a.Marker();
                  (s.id = null !== t && void 0 !== t ? t : Object(j.a)()),
                    s.setLngLat([o, u]).addTo(i.current).setDraggable(!0),
                    (c.current[s.id] = s),
                    t || a.current.next({ id: s.id, lng: o, lat: u }),
                    s.on("drag", function (e) {
                      var t = e.target,
                        n = t.id,
                        c = t.getLngLat(),
                        o = c.lng,
                        a = c.lat;
                      r.current.next({ id: n, lng: o, lat: a });
                    });
                }, []),
                v = Object(o.useCallback)(function (e) {
                  var t = e.id,
                    n = e.lng,
                    o = e.lat;
                  c.current[t].setLngLat([n, o]);
                }, []);
              return (
                Object(o.useEffect)(
                  function () {
                    var n = new d.a.Map({
                      container: t.current,
                      style: "mapbox://styles/mapbox/streets-v11",
                      center: [e.lng, e.lat],
                      zoom: e.zoom,
                    });
                    i.current = n;
                  },
                  [e]
                ),
                Object(o.useEffect)(function () {
                  var e;
                  null === (e = i.current) ||
                    void 0 === e ||
                    e.on("move", function () {
                      var e = i.current.getCenter(),
                        t = e.lng,
                        n = e.lat;
                      b({
                        lng: t.toFixed(4),
                        lat: n.toFixed(4),
                        zoom: i.current.getZoom().toFixed(2),
                      });
                    });
                }, []),
                Object(o.useEffect)(
                  function () {
                    var e;
                    null === (e = i.current) ||
                      void 0 === e ||
                      e.on("click", O);
                  },
                  [O]
                ),
                {
                  agregarMarcador: O,
                  actualizarPosicion: v,
                  coords: l,
                  marcadores: c,
                  nuevoMarcador$: a.current,
                  movimientoMarcador$: r.current,
                  setRef: n,
                }
              );
            })(O),
            t = e.setRef,
            n = e.coords,
            r = e.nuevoMarcador$,
            a = e.movimientoMarcador$,
            i = e.agregarMarcador,
            s = e.actualizarPosicion,
            l = Object(o.useContext)(f).socket;
          return (
            Object(o.useEffect)(
              function () {
                l.on("marcadores-activos", function (e) {
                  for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                    var c = n[t];
                    i(e[c], c);
                  }
                });
              },
              [l, i]
            ),
            Object(o.useEffect)(
              function () {
                r.subscribe(function (e) {
                  l.emit("marcador-nuevo", e);
                });
              },
              [r, l]
            ),
            Object(o.useEffect)(
              function () {
                a.subscribe(function (e) {
                  l.emit("marcador-actualizado", e);
                });
              },
              [l, a]
            ),
            Object(o.useEffect)(
              function () {
                l.on("marcador-actualizado", function (e) {
                  s(e);
                });
              },
              [l, s]
            ),
            Object(o.useEffect)(
              function () {
                l.on("marcador-nuevo", function (e) {
                  i(e, e.id);
                });
              },
              [l, i]
            ),
            Object(c.jsxs)(c.Fragment, {
              children: [
                Object(c.jsxs)("div", {
                  className: "info",
                  children: [
                    "Lng: ",
                    n.lng,
                    " | lat: ",
                    n.lat,
                    " | zoom: ",
                    n.zoom,
                  ],
                }),
                Object(c.jsx)("div", { ref: t, className: "mapContainer" }),
              ],
            })
          );
        },
        g = function () {
          return Object(c.jsx)(l, { children: Object(c.jsx)(v, {}) });
        },
        p = n(31);
      n.n(p).a.config(),
        a.a.render(Object(c.jsx)(g, {}), document.getElementById("root"));
    },
  },
  [[70, 1, 2]],
]);
//# sourceMappingURL=main.75fb0186.chunk.js.map
