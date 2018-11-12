import {$ifelse} from "../src";

it("$ifelse", () => {

  const query = JSON.parse(`{"params":{"name":"foo"}}`);

  const foo = $ifelse(query.params && query.params.name, name => name.toUpperCase(), _ => "_");
  const bar = $ifelse(query.params && query.params.age, name => name.toUpperCase(), _ => "_");

  expect(foo).toBe("FOO");
  expect(bar).toBe("_");
});
