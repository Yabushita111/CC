// Creates a dictionary of parameters based on the given query string. q should
// look like "?foo=bar&thing=blah".
export function parseQueryString(q) {
  //?game_idでアクセス可能
  console.log("output url : ");
  console.log(q);
  const game_id = q.substr(1);
  const args = [2];
  args[0] = { key: "engine", value: "https://tyr.ics.es.osaka-u.ac.jp/vcli" };
  args[1] = { key: "game", value: game_id };
  console.log("args[0] ouput : ");
  console.log(args[0]);
  console.log("args[1] output : ");
  console.log(args[1]);
  // Convert to object
  return args.reduce((result, arg) => {
    result[arg.key] = arg.value;
    return result;
  }, {});
}
// Converts { a: "aaa", b: "bbb" } to "?a=aaa&b=bbb"
export function makeQueryString(query) {
  if (!query) {
    return "";
  }

  let sep = "?";
  let result = "";

  for (const key in query) {
    const value = query[key];
    result += `${sep}${key}=${value}`;
    sep = "&";
  }
  return result;
}

// Converts http://foo to ws://foo or https://foo to wss://foo
export function httpToWsProtocol(url) {
  const mappings = {
    http: "ws",
    https: "wss"
  };

  for (const from in mappings) {
    const to = mappings[from];
    if (url.substr(0, from.length + 1) === from + ":") {
      return to + url.substr(from.length);
    }
  }

  throw new Error("Invalid URL: " + url);
}

// Joins path components and makes sure there is exactly one '/' separating
// them.
export function join(...parts) {
  function joinPair(a, b) {
    const cleanA = a.replace(/\/+$/, "");
    const cleanB = b.replace(/^\/+/, "");

    if (cleanA === "") {
      return cleanB;
    }

    if (cleanB === "") {
      return cleanA;
    }

    return `${cleanA}/${cleanB}`;
  }

  return parts.reduce((current, next) => joinPair(current, next), "");
}
