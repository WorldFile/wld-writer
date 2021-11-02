function writeWorldFile(data, { debug = false, sep = "\n" } = { debug: false, sep: "\n" }) {
  if (!data) throw new Error("[wld-writer] can't write a world file without data!");
  const keys = ["xScale", "ySkew", "xSkew", "yScale", "xOrigin", "yOrigin"];

  const lines = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!(key in data)) throw new Error(`[wld-writer] ${key} is missing`);
    const value = data[key];
    if (value === undefined || value === null) throw new Error(`[wld-writer] ${key} is ${value}`);
    const n = Number(value);
    if (Number.isNaN(n)) throw new Error(`[wld-writer] ${key} with value ${value} is not a number`);
    lines.push(value);
  }

  const result = lines.join(sep) + sep;
  if (debug) console.log(`[wld-writer] returning "${result.replace(/\n/g, "\\n")}"`);

  return result;
}

if (typeof module === "object") module.exports = writeWorldFile;
if (typeof self === "object") self.writeWorldFile = writeWorldFile;
if (typeof window === "object") window.writeWorldFile = writeWorldFile;
